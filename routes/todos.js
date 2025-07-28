const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a todo
router.post('/', async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({ title });
  await todo.save();
  res.status(201).json(todo);
});

// Update a todo
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const updated = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
  res.json(updated);
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Deleted' });
});

module.exports = router;
