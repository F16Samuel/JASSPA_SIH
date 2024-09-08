//eventModel.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  Event_ID: { type: String, required: true, unique: true },
  Event_Name: { type: String, required: true },
  Event_Date: { type: Date, required: true },
  Event_Venue: { type: String, required: true },
  Event_Summary: { type: String, required: true }
});

module.exports = mongoose.model('Event', eventSchema);
