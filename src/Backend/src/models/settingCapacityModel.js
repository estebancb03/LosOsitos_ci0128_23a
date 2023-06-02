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

const updateCapacity = async (req, res) => {
    try {
        const {
            type,
            value
        } = req.body;
        const pool = await getConnection();
        await pool.query(
            `UPDATE Setting_Capacity SET Value = ${value} WHERE Type LIKE '%${type}%'`
        );
        res.status(200);
        console.log("The update to the Setting_Capacity was successful");
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }

}

export {
    getActualCapacities,
    updateCapacity
}