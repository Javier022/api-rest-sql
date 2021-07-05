const express = require("express");
const config = require("./config");
const app = express();
// settings
app.set("port", config.port);

// routes
const productsRoutes = require("./routes/products.routes");

// antes de llegar a las rutas tenmos que capturar el body
// para eso utilizamos estos middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(productsRoutes);

module.exports = app;
