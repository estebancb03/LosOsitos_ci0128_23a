import {getConnection} from "../config/db.js"

const getActualCapacities = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query('SELECT * FROM Setting_Capacity');
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
        res.send("The update to the Setting_Capacity was successful");
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }

}

const getExchangeRate = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(`SELECT Type, Value FROM Setting_Capacity WHERE Type LIKE 'USD%'`)
        res.status(200)
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getTermsAndConditionLink = async (req, res) => {
    try {
        const pool = await getConnection()
        const result = await pool.request().query(`SELECT Link FROM Setting_Capacity WHERE Type = 'TermsAndConditions'`)
        console.log(result)
        res.status(200)
        res.json(result)
    } catch (error) {
        console.log(error.message)
        res.status(500)
        res.send(error.message)
    }
}

const updateTermsAndConditionsLink = async (req, res) => {
    try {
        const {link} = req.body
        const pool = await getConnection();
        await pool.query(`Update Setting_Capacity SET Link = '${link}' WHERE TYPE = 'TermsAndConditions'`);
        res.status(200);
        res.send("The update to the Setting_Capacity was successful");
    } catch (error) {
        console.log(error.message)
        res.status(500)
        res.send(error.message)
    }
}

export {
    getActualCapacities,
    updateCapacity,
    getExchangeRate,
    getTermsAndConditionLink,
    updateTermsAndConditionsLink
}