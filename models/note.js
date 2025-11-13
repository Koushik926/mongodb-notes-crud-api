// Mongoose model for Note
const mongoose = require('mongoose');

// Define the Note schema
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Content is required']
  },
  tags: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Note model
const Note = mongoose.model('Note', noteSchema);
module.exports = Note;
