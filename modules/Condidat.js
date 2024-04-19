const mongoose = require("mongoose");
const Admin = require("./Admin");
const { type } = require("os");
const condidatSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  lieuDeEntretien: {
    type: string,
    required: true,
  },
  dateDeEntretien: {
    type: Date,
    required: true,
  },
  recruteur: {
    type: Admin,
    required: true,
  },
  duree: {
    type: String,
    default: "1H",
  },
  commentaire: {
    type: String,
    default: "Pas de commentaire",
  },
  poleschoisi: {
    type: String,
    required: true,
    enum: ["PMD", "PDM", "DMP", "DPM", "MDP", "MPD"],
  },
  note: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Condidat", condidatSchemaSchema);