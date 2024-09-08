// eventRoutes.js
const express = require('express');
const router = express.Router();
const Event = require('../models/eventModel');

// Endpoint to add an event
router.post('/add-event', async (req, res) => {
  const { Event_ID, Event_Name, Event_Date, Event_Venue, Event_Summary } = req.body;
  try {
    const newEvent = new Event({ Event_ID, Event_Name, Event_Date, Event_Venue, Event_Summary });
    await newEvent.save();
    res.status(201).json({ message: 'Event added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding event', error });
  }
});

// New endpoint to get all events
router.get('/all', async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching all events', error });
  }
});

module.exports = router;
