const sql = require("mssql");

const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  server: process.env.SERVER,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

const getConnection = async () => {
  try {
    // pool = conexion
    const pool = await sql.connect(sqlConfig);
    // const sql = await pool.query`SELECT 1`
    return pool;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getConnection,
  sql,
};
