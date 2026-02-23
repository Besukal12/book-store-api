const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("mongodb is connected succesfully");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDb;
