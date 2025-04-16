// controllers/config.controller.js
const configService = require('../services/config.service');

exports.get = async (req, res) => {
  try {
    const config = await configService.getConfig();
    res.json(config);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await configService.updateConfig(req.body);
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
