const mongoose = require("mongoose");
const config = require("config");
const debug = require("debug")("development:mongoose");

mongoose
  .connect(`${config.get("MONGODB_URI")}/premiumBagShop`)
  .then(() => debug("Connected to MongoDB successfully"))
  .catch((err) => debug("Failed to connect to MongoDB", err));

module.exports = mongoose.connection;
