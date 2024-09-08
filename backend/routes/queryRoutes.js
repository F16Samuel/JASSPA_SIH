const express = require('express');
const router = express.Router();
const Query = require('../models/queryModel');

// Endpoint to submit a query
router.post('/submit-query', async (req, res) => {
  const { Query_ID, Query_senderName, Query_senderMail, Query_Subj, Query_Msg } = req.body;
  try {
    const newQuery = new Query({ Query_ID, Query_senderName, Query_senderMail, Query_Subj, Query_Msg });
    await newQuery.save();
    res.status(201).json({ message: 'Query submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting query', error });
  }
});

// Endpoint to get all queries (for admin view)
router.get('/get-queries', async (req, res) => {
  try {
    const queries = await Query.find();
    res.status(200).json(queries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching queries', error });
  }
});

module.exports = router;
