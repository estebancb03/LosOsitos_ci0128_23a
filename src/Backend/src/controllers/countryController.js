import {getConnection} from "../config/db.js"

export const getCountry = async (req, res) => {
    try {
        console.log("**** Something in the way ******")
        const pool = await getConnection();
        const result = await pool.request().query("SELECT * FROM Country");
        console.log(result)
        res.json(result.recordset)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
 }