import { getConnection } from "../config/db.js";

const postOcupation = async (req, res) => {
  try {
    const {dateReq} = req.body;
    const pool = await getConnection();

    const resultReservationInADate = await pool.request().input('DateParam', dateReq).execute('ReservationInADate');
    const reservationsInDate = resultReservationInADate.recordset;

    let peopleInDate = 0;

    const promises = reservationsInDate.map(element => pool.request().input('Date', element.Reservation_Date).input('Client', element.ID_Client).execute('PeopleInReservation'));
    const responses = await Promise.all(promises);
    console.log(responses);
    responses.forEach(response => peopleInDate += response.recordset[0].Amount);

    const totalPeople = {
        peopleInDate,
    };
    console.log(totalPeople)
    res.json(totalPeople);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { postOcupation };