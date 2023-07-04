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
    const result = await pool.request().query(`SELECT serv.Name, serv.Quantity, serv_price_usd.Price 
    AS USD, serv_price_crc.Price AS CRC FROM Service AS serv JOIN Service_Price AS serv_price_usd 
    ON serv.Name = serv_price_usd.Name_Service AND serv_price_usd.Currency = 'USD' JOIN Service_Price 
    AS serv_price_crc ON serv.Name = serv_price_crc.Name_Service AND serv_price_crc.Currency = 'CRC' WHERE serv.Disabled != 1`);
    res.status(200);
    res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message)
  }
}

const updateServicesWithQuantityAndPrices = async (req, res) => {
  try {
    const {
      originalName,
      modifiedName,
      quantity,
      USD,
      CRC
    } = req.body;
    const pool = await getConnection();
    await pool.request().query(`UPDATE Service SET NAME = '${modifiedName}' WHERE NAME LIKE '%${originalName}'`)
    await pool.request().query(`UPDATE Service SET Quantity = ${quantity} WHERE Name LIKE '%${modifiedName}'`);
    await pool.request().query(`UPDATE Service_Price SET PRICE = ${USD} WHERE Name_Service LIKE '%${modifiedName}' 
    AND Currency LIKE '%USD'`);
    await pool.request().query(`UPDATE Service_Price SET PRICE = ${CRC} WHERE Name_Service LIKE '%${modifiedName}' 
    AND Currency LIKE '%CRC'`);
    res.status(200);
    res.send();
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const insertNewService = async (req, res) => {
  try {
    const {
      serviceName,
      quantity,
      USD,
      CRC
    } = req.body
    const disabled = 0
    const pool = await getConnection();
    await pool.query(`INSERT INTO Service VALUES ('${serviceName}', ${quantity}, ${disabled})`)
    await pool.query(`INSERT INTO Service_Price VALUES ('USD', ${USD}, '${serviceName}')`)
    await pool.query(`INSERT INTO Service_Price VALUES ('CRC', ${CRC}, '${serviceName}')`)
    res.status(200);
  } catch (error) {
    res.status(500)
    res.send(error.message)
  }
}

const disableService = async (req, res) => {
  try {
    const {serviceName} = req.body
    const pool = await getConnection();
    await pool.request().query(`UPDATE Service SET Disabled = 1 WHERE Service.Name LIKE '%${serviceName}%'`)
    res.status(200);
    res.send();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

}
export {getServicesOptions, getServicesWithQuantityAndPrices, updateServicesWithQuantityAndPrices, insertNewService, disableService}