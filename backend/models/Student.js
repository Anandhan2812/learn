const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  city: String,
  degree: String,
});

module.exports = mongoose.model("Student", StudentSchema);