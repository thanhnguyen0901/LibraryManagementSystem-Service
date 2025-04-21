// controllers/fine.controller.js
const fineService = require('../services/fine.service');

exports.getAll = async (req, res) => {
  try {
    const fines = await fineService.getAllFines();
    res.json(fines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.pay = async (req, res) => {
  try {
    const { loanId, soTienThu } = req.body;
    const result = await fineService.payFine(loanId, soTienThu);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};