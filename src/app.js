const express = require("express");
const config = require("./config");
const app = express();
// settings
app.set("port", config.port);

// routes
const productsRoutes = require("./routes/products.routes");

app.use(productsRoutes);

module.exports = app;
