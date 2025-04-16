// controllers/reader.controller.js
const readerService = require('../services/reader.service');

exports.getAll = async (req, res) => {
  try {
    const readers = await readerService.getAll();
    res.json(readers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const reader = await readerService.getById(req.params.id);
    if (!reader) return res.status(404).json({ message: 'Reader not found' });
    res.json(reader);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newReader = await readerService.create(req.body);
    res.status(201).json(newReader);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updatedReader = await readerService.update(req.params.id, req.body);
    res.json(updatedReader);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    await readerService.remove(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};