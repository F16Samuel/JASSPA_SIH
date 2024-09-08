// alumniRoutes.js
const express = require('express');
const router = express.Router();
const Alumni = require('../models/alumniModel');

// Endpoint to add an alumni
router.post('/add-alumni', async (req, res) => {
  const { Alum_ID, Alum_Name, Alum_Batch, Alum_Dep, Current_Position } = req.body; // Added Current_Position
  try {
    const newAlumni = new Alumni({ Alum_ID, Alum_Name, Alum_Batch, Alum_Dep, Current_Position });
    await newAlumni.save();
    res.status(201).json({ message: 'Alumni added successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding alumni', error });
  }
});

// Endpoint to search for alumni
router.get('/search-alumni', async (req, res) => {
  const { name, batch, department, position } = req.query; // Added position
  try {
    const alumni = await Alumni.find({ 
      Alum_Name: new RegExp(name, 'i'),
      Alum_Batch: batch,
      Alum_Dep: department,
      Current_Position: new RegExp(position, 'i') // New line for filtering by position
    });
    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error searching for alumni', error });
  }
});

// Endpoint to get all alumni
router.get('/all-alumni', async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).json(alumni);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching alumni', error });
  }
});

module.exports = router;
