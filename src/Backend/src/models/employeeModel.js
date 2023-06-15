import { getConnection } from "../config/db.js";

const checkUsername = async (req, res) => {
  try {
    const { Username } = req.params;
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT * FROM Employee WHERE Username = '${Username}'`);
    res.json(result.recordset.length === 0 ? true : false);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { checkUsername }
