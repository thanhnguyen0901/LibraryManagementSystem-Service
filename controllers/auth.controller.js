// controllers/auth.controller.js
const authService = require('../services/auth.service');

exports.register = async (req, res) => {
  try {
    const account = await authService.register(req.body);
    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const account = await authService.login(req.body);
    res.status(200).json(account);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const result = await authService.changePassword(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};