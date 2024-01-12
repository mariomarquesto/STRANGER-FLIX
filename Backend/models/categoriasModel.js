const mongoose = require("mongoose");

const categoria = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  id : Number
});

module.exports = mongoose.model("categoria", categoria);
