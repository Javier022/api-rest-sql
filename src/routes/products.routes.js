const router = require("express").Router();

const {
  getProducts,
  createProduct,
  getProductById,
  deleteProduct,
  coutProducts,
  updateProduct,
} = require("../controllers/products.controller");

// los parametros req & res van embebidos en la funcion que se manda a
// llamar para su ejecucion con la ruta
router.get("/products", getProducts);

router.post("/create-product", createProduct);

router.get("/products/count", coutProducts);

router.get("/product-by-id/:id", getProductById);

router.delete("/delete-product/:id", deleteProduct);

router.put("/update-product/:id", updateProduct);

module.exports = router;
