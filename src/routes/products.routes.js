const router = require("express").Router();

const { getProducts } = require("../controllers/products.controller");

// los parametros req & res van embebidos en la funcion que se manda a
// llamar para su ejecucion con la ruta
router.get("/products", getProducts);

// router.get('products', getProductById)

// router.post('createProduct', createProduct)

// router.delete('deleteProduct', deleteProduct)

// router.put('updateProduct', updateProduct)

module.exports = router;
