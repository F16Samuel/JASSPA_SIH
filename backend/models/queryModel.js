//queryModel.js
const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  Query_ID: { type: String, required: true, unique: true },
  Query_senderName: { type: String, required: true },
  Query_senderMail: { type: String, required: true },
  Query_Subj: { type: String, required: true },
  Query_Msg: { type: String, required: true }
});

module.exports = mongoose.model('Query', querySchema);
