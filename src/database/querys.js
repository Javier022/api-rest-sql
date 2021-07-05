const getAllProducts = "SELECT * FROM products",
  addNewProduct =
    "INSERT INTO products(name, description, quantity) VALUES (@name, @description, @quantity)",
  productById = "SELECT * FROM products WHERE id=@id",
  deleteProductById = "DELETE FROM products WHERE id=@id",
  countAllProducts = "SELECT COUNT(id) FROM products",
  updatedProduct =
    "UPDATE products SET name=@name, description=@description, quantity=@quantity WHERE id=@id";

module.exports = {
  getAllProducts,
  addNewProduct,
  productById,
  deleteProductById,
  countAllProducts,
  updatedProduct,
};
