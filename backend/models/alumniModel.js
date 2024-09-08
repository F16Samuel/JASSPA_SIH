// alumniModel.js
const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  Alum_ID: { type: String, required: true, unique: true },
  Alum_Name: { type: String, required: true },
  Alum_Batch: { type: String, required: true },
  Alum_Dep: { type: String, required: true },
  Current_Position: { type: String, required: true } // New field
});

module.exports = mongoose.model('Alumni', alumniSchema);
