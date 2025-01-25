const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Create a new team
router.post('/', async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.status(201).send(team);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find().populate('members');
    res.status(200).send(teams);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a team by ID
router.get('/:id', async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate('members');
    if (!team) {
      return res.status(404).send();
    }
    res.status(200).send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a team by ID
router.patch('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!team) {
      return res.status(404).send();
    }
    res.status(200).send(team);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a team by ID
router.delete('/:id', async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) {
      return res.status(404).send();
    }
    res.status(200).send(team);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
