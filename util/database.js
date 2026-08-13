const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/todos";

const mongoConnect = async (callback) => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB!");

    if (callback) {
      callback();
    }
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);

    process.exit(1);
  }
};
module.exports = mongoConnect;
