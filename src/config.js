const { config } = require("dotenv");
// config dotenv

config();

const port = process.env.PORT || 3000;

module.exports = {
  port,
};
