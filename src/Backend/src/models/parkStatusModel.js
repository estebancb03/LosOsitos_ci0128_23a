import { getConnection, sql } from "../config/db.js";

const postOcupation = async (req, res) => {
  try {
    const {dateReq} = req.body;
    const pool = await getConnection();

    const resultReservationInADate = await pool.request().input('DateParam', dateReq).execute('ReservationInADate');
    const reservationsInDate = resultReservationInADate.recordset;

    let peopleInDate = 0;
    const promisesPeople = reservationsInDate.map(element => pool.request().input('Date', element.Reservation_Date).input('Client', element.ID_Client).execute('PeopleInReservation'));
    const responsesPeople = await Promise.all(promisesPeople);
    responsesPeople.forEach(response => peopleInDate += response.recordset[0].Amount);

    let peopleInDateCamping = 0;
    const responseCamping = await pool.request().query(`SELECT SUM(Amount) AS 'peopleInDateCamping' FROM Camping JOIN Ticket_Reservation ON Camping.Reservation_Date = Ticket_Reservation.Reservation_Date AND Camping.ID_Client = Ticket_Reservation.ID_Client WHERE '${dateReq.toString()}' BETWEEN Start_Date AND End_Date`);
    peopleInDateCamping += responseCamping.recordset[0].peopleInDateCamping;

    let peopleInDatePicnic = 0;
    const responsePicnic = await pool.request().query(`SELECT SUM(Amount) AS 'peopleInDatePicnic'FROM Picnic JOIN Ticket_Reservation ON Picnic.Reservation_Date = Ticket_Reservation.Reservation_Date AND Picnic.ID_Client = Ticket_Reservation.ID_Client WHERE '${dateReq.toString()}' = Picnic_Date`);
    peopleInDatePicnic += responsePicnic.recordset[0].peopleInDatePicnic;

    let vehiclesInDate = 0;
    const promisesVehicles = reservationsInDate.map(
      element => (
        pool.request().input('IDClientParam', sql.NVarChar, element.ID_Client).input('ReservationDateParam', sql.DateTime, element.Reservation_Date).query(`SELECT COUNT(*) AS 'Amount' FROM Vehicle WHERE ID_Client = @IDClientParam AND Reservation_Date = @ReservationDateParam`)));
    const responsesVehicles = await Promise.all(promisesVehicles);
    responsesVehicles.forEach(element => {
      vehiclesInDate += element.recordset[0].Amount;
    });    
    let PeopleInPark = 0;
    const promisesPeopleInPark = reservationsInDate.map(
      element => (
        pool.request().input('IDClientParam', sql.NVarChar, element.ID_Client).input('ReservationDateParam', sql.DateTime, element.Reservation_Date).query(`SELECT COUNT(*) AS 'Amount'FROM Ticket_Reservation JOIN Reservation ON Ticket_Reservation.ID_Client = Reservation.ID_Client 
        AND Ticket_Reservation.Reservation_Date = Reservation.Reservation_Date  WHERE Ticket_Reservation.ID_Client = @IDClientParam AND Ticket_Reservation.Reservation_Date = @ReservationDateParam AND Reservation.Status =  2`)));
    const responsesPeopleInPark = await Promise.all(promisesPeopleInPark);
    responsesPeopleInPark.forEach(element => {
      PeopleInPark += element.recordset[0].Amount;
    });

    const totalPeople = {
        peopleInDate,
        peopleInDateCamping,
        peopleInDatePicnic,
        vehiclesInDate,
        PeopleInPark,
    };
    res.json(totalPeople);
    res.status(200);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { postOcupation };