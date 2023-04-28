import sql from "mssql";


const dbSettings = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    trustSeverCertificate: true,
  },
};

export const getConnection = async () => {
  try {
    console.log("[] Trying to connect to the server ... ");
    const pool = await sql.connect(dbSettings);
    console.log("[] Managed to connect to server")
    return pool;
  } catch (error) {
    console.error(error);
  }
};

//export default getConnection;
export {sql};
