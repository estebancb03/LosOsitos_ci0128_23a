import { getConnection } from "../config/db.js";

// Metho that return reservation data
const getReservations = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(
        "SELECT Person.ID, Person.Name, Person.LastName1, Person.LastName2, Reservation_Method, Reservation.Reservation_Date, Ticket_Reservation.Reservation_Type, Camping.Start_Date, Camping.End_Date FROM Reservation FULL OUTER JOIN Client ON Reservation.ID_Client = Client.ID_Person FULL OUTER JOIN Person ON Person.ID = Client.ID_Person FULL OUTER JOIN Ticket_Reservation ON Ticket_Reservation.ID_Client = Reservation.ID_Client FULL OUTER JOIN Camping ON Reservation.ID_Client = Camping.ID_Client WHERE Reservation.Reservation_Date IS NOT NULL"
      );
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { getReservations };
