const mongoose = require("mongoose");
const Membres = require("./Membres");
const Admin = require("./Admin");
const formationSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
    },
    formateur: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ["En cours", "Achevée", "Programmée"],
        required: true,
    },
    participants: {
            type: Membres,
            required: true,
    },
    lieu: {
        type: String,
        required: true,
    },
    superviseur: {
        type: Admin,
    },
    images: {
        type: [String],
      },
});

module.exports = mongoose.model("formation", formationSchema);