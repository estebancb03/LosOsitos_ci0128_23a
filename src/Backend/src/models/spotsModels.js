import mssql from "mssql";
import { getConnection } from "../config/db.js";

const getAvailableSpotsByDates = async (req, res) => {
    try{
        const {Reservation_Start_Date, Reservation_End_Date} = req.params;
        // console.log("Value received as reservation start date: " + Reservation_Start_Date)
        // console.log("Value received as reservation end date:" + Reservation_End_Date)
        // console.log("Hola!")
        const startDateObj = new Date(Reservation_Start_Date)
        const endDateObj = new Date(Reservation_End_Date)
        // console.log("Value of startDateObj: " + startDateObj)
        // console.log("Value of endDateObj: " + endDateObj)
        const pool = await getConnection()
        const result = await pool
        .request()
        .input('startDateObj', startDateObj)
        .input('endDateObj', endDateObj)
        .query(
            "SELECT * FROM Spot AS S WHERE NOT EXISTS(SELECT * FROM Spot_Camping WHERE (Reservation_Date BETWEEN @startDateObj AND @endDateObj) AND S.Location = Spot_Camping.Location_Spot)"
        );
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export {
    getAvailableSpotsByDates
}