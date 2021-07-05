const { getConnection, sql, querys } = require("../database/index");
const { deleteProductById } = require("../database/querys");

const getProducts = async (req, res) => {
  try {
    const sql = await getConnection();
    const products = await sql.request().query(querys.getAllProducts);

    res.status(200);
    res.json({
      success: true,
      products: products.recordset,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const createProduct = async (req, res) => {
  const { name, description } = req.body;

  let { quantity } = req.body;

  if (!(name && description)) {
    res.status(400);
    res.json({
      success: false,
      message: "bad request, please fill all fields",
    });

    return;
  }

  if (!quantity) quantity = 0;

  try {
    const pool = await getConnection();
    // const result =
    await pool
      .request()
      .input("name", sql.VarChar(50), name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(querys.addNewProduct);

    res.status(200);
    res.json({
      success: true,
      product: {
        name,
        description,
        quantity,
      },
      message: "product created",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.send(error.message);
  }
};

const getProductById = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .query(querys.productById);

    const product = result.recordset[0];

    res.status(200);
    res.json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const pool = await getConnection();
    await pool.request().input("id", id).query(deleteProductById);

    res.status(200);
    res.json({
      success: true,
      message: "product delete",
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const coutProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.countAllProducts);

    const cant = result.recordset[0][""];

    res.status(200);
    res.json({
      success: true,
      products: cant,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  const { name, description, quantity } = req.body;

  if (!(name.trim() && description.trim() && quantity)) {
    res.status(400),
      res.json({
        success: false,
        message: "bad request, please fill all fields",
      });
    return;
  }

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("name", sql.VarChar(50), name)
      .input("description", sql.Text, description)
      .input("quantity", sql.Int, quantity)
      .query(querys.updatedProduct);

    console.log(result);

    res.status(200);
    res.json({
      success: true,
      message: "product updated",
      product: {
        name,
        description,
        quantity,
      },
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  coutProducts,
  updateProduct,
};
