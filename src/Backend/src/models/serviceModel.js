import {getConnection} from "../config/db.js"

// Method that gets the names of all services in the park
const getServicesOptions = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query("SELECT Name FROM Service");
      res.status(200);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

const getServicesWithQuantityAndPrices = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT serv.Name, serv.Quantity, serv_price_usd.Price AS USD, serv_price_crc.Price AS CRC FROM Service AS serv JOIN Service_Price AS serv_price_usd ON serv.Name = serv_price_usd.Name_Service AND serv_price_usd.Currency = 'USD' JOIN Service_Price AS serv_price_crc ON serv.Name = serv_price_crc.Name_Service AND serv_price_crc.Currency = 'CRC'`);
    res.status(200);
    res.json(result.recordset)
    console.log(result);
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}
export {getServicesOptions, getServicesWithQuantityAndPrices}