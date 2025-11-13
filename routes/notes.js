// Routes for Notes CRUD operations
const express = require('express');
const router = express.Router();
const Note = require('../models/note');

// CREATE - POST /notes
router.post('/', async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const note = new Note({ title, content, tags });
    await note.save();
    res.status(201).json({ success: true, data: note });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// READ - GET /notes (Get all notes)
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.json({ success: true, count: notes.length, data: notes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// READ - GET /notes/:id (Get single note)
router.get('/:id', async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ success: false, error: 'Note not found' });
    }
    res.json({ success: true, data: note });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// UPDATE - PUT /notes/:id
router.put('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!note) {
      return res.status(404).json({ success: false, error: 'Note not found' });
    }
    res.json({ success: true, data: note });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// DELETE - DELETE /notes/:id
router.delete('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    if (!note) {
      return res.status(404).json({ success: false, error: 'Note not found' });
    }
    res.json({ success: true, message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
