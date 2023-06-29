import { getConnection } from "../config/db.js";

const getAllReviews = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool
          .request()
          .query(
            `SELECT ID, Name, LastName1, Description, Testimony.State, Date
            FROM Testimony JOIN Client ON ID_Client = ID_Person JOIN Person ON ID_Person = ID `
          );
          console.log(result);
        res.json(result.recordset);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}

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
}

export {getAllReviews, updateReviewState} ;