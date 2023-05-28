import {getConnection} from "../config/db.js"

const getActualCapacities = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Setting_Capacity');
        console.log(result);
        res.status(200);
        res.json(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export {
    getActualCapacities
}