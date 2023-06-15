import { getConnection } from "../config/db.js";
import { encrypt } from "../helpers/encryption.js";

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

const insertEmployee = async (req, res) => {
  try {
    const {
      ID,
      Username,
      Password,
      Type
    } = req.body;
    const hashedUsername = await encrypt(Username);
    const hashedPassword = await encrypt(Password);
    console.log({hashedUsername, hashedPassword});
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Employee VALUES (${ID}, '${hashedUsername}', '${hashedPassword}', ${Type})`
      );
    res.status(200);
    res.send('The insert to the Employee was successful');
    console.log("The insert to the Employee was successful");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { checkUsername, insertEmployee };
