const mongoose = require("mongoose");
const membreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  pole: {
    type: string,
    required: true,
  },
  poste: {
    type: string,
    required: true,
  },
  niveau: {
    type: string,
    required: true,
  },
  images: {
    type: [String],
  },
});

module.exports = mongoose.model("Membre", membreSchema);