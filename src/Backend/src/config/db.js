import sql from "mssql";

const dbSettings = {
  user: "LosOsitos_Admin",
  password: "LosOsitos_Admin",
  server: "172.16.202.212",
  database: "LosOsitos",
  options: {
    encrypt: false,
    trustSeverCertificate: true,
  },
};

const getConnection = async () => {
  try {
    console.log("[] Trying to connect to the server... ");
    const pool = await sql.connect(dbSettings);
    console.log("[] Managed to connect to server...")
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export {sql, getConnection};
