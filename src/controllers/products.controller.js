const getConnection = require("../database/conection");

const getProducts = async (req, res) => {
  const sql = await getConnection();
  const products = await sql.query`SELECT * FROM products`;

  if (products) {
    res.json({
      status: 200,
      products: products.recordset,
    });
  } else {
    res.json({
      status: 400,
      products: [],
    });
  }
};

module.exports = {
  getProducts,
};
