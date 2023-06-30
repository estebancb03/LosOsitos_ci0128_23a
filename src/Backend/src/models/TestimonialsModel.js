import { getConnection, sql } from "../config/db.js";

const getAllReviews = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(
    `SELECT ID, Name, LastName1, Description, Testimony.State, Date
    FROM Testimony JOIN Client ON ID_Client = ID_Person JOIN Person ON ID_Person = ID `
    );
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateReviewState = async (req, res) => {
  try {
    const {ID, State} = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Testimony SET State = ${State} WHERE ID_Client = '${ID}'`
    );
    res.status(200);
    res.send("The update to the review was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getRandomReviews = async (req, res) => {
  try {
  const pool = await getConnection();
  const result = await pool
  .request()
  .query(
  `SELECT TOP 3 Name, LastName1, Description 
  FROM Testimony JOIN Client ON ID_Client = ID_Person JOIN Person ON ID_Person = ID 
  WHERE Testimony.State = 1 ORDER BY newid()`
  );
  res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getCheckReview = async (req, res) => {
  try {
    const { ID } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(
    `SELECT COUNT(*) AS 'COUNT' FROM Testimony WHERE ID_Client = '${ID}'`
    );
    res.send(result.recordset[0].COUNT > 0);
    res.status(200);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateReview = async (req, res) => {
  try {
    const {ID, Description} = req.body;
    const pool = await getConnection();
    await pool.query(
      `UPDATE Testimony SET Description = '${Description}', State = 0 WHERE ID_Client = '${ID}'`
    );
    res.status(200);
    res.send("The update to the review was successfull");
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const insertReview = async (req, res) => {
  try {
    const {
      ID,
      Description,
    } = req.body;
    const pool = await getConnection();
    await pool.query(
      `INSERT INTO Testimony VALUES (${ID}, '${Description}', 0, '${new Date().toLocaleDateString()}')`);
    res.status(200);
    console.log("The insert of review was successful");
    res.send('The insert of review was successful');
  } catch (error) {
    console.log(error)
    res.status(500);
    res.send(error.message);
  }
};


export {getAllReviews, updateReviewState, getRandomReviews, getCheckReview, updateReview, insertReview};