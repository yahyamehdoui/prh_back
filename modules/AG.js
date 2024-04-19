const mongoose = require("mongoose");
const Membres = require("./Membres");
const Admin = require("./Admin");
const agSchema = new mongoose.Schema({
    titre: {
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
    type: {
        type: String,
        enum: ["AGE", "AG", "AGEE", "AGO", "AGC"],
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
});

module.exports = mongoose.model("AssembleGeneral", agSchema);