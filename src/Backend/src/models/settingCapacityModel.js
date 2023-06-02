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
    console.log("*** LLegue al backend 1*****");
    try {
        console.log("*** LLegue al backend 2*****");
        const {
            type,
            value
        } = req.body;
        console.log("Estoy dentro del modelo y yo recibí lo siguiente.\nType: " + type + "\nValue: " + value)
        const pool = await getConnection();
        await pool.query(
            `UPDATE Setting_Capacity SET Value = ${value} WHERE Type LIKE '%${type}%'`
        );
        // await pool.query(
        //     'UPDATE Setting_Capacity SET Value = :value WHERE Type LIKE :type',
        //     [value, `%${type}%`]
        // );
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