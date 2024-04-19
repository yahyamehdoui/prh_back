const mongoose = require("mongoose");
const Admin = require("./Admin");
const dispoSchema = new mongoose.Schema({
  
  recruteur: {
    type: Admin,
    required: true,
  },
  dateDispo: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("DisponibiliteRecruteur", dispoSchema);