import { getConnection } from "../config/db.js";

// Method that inserts a ticket
const insertTicket = async (req, res) => {
  try {
    const {
      Age_Range,
      Demographic_Group,
      Reservation_Type
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Ticket VALUES (${Age_Range}, ${Demographic_Group}, ${Reservation_Type})`
    );
    res.status(200);
    res.send('The insert to the ticket was successful');
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPrices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Ticket");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getCRCPrices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Ticket WHERE Currency = 'CRC'");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getUSDPrices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Ticket WHERE Currency = 'USD'");
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getPriceByARDGCurrency = async (req, res) => {
  try {
    const {
      Age_Range,
      Demographic_Group,
      Reservation_Type,
      Currency
    } = req.params;
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(`SELECT Price FROM Ticket WHERE Age_Range = ${Age_Range} AND Demographic_Group = ${Demographic_Group} AND Reservation_Type = ${Reservation_Type} AND Currency = '${Currency}'`);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateTicketPrice = async (req, res) => {
  try {
    const {
      Age_Range,
      Demographic_Group,
      Reservation_Type,
      Price,
    } = req.body;
    const Special = 0;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Ticket SET Price = ${Price} WHERE Age_Range = ${Age_Range} AND Demographic_Group = ${Demographic_Group} AND Reservation_Type = ${Reservation_Type} AND Special = ${Special}`
    )
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export { insertTicket, getPrices, updateTicketPrice, getCRCPrices, getUSDPrices, getPriceByARDGCurrency };

