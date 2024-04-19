const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://Melkartje:Melkartje@prh.cq3dtw2.mongodb.net/"
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = connectToDatabase;