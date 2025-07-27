// controllers/report.controller.js
const reportService = require('../services/report.service');

exports.getMonthlySummary = async (req, res) => {
  try {
    const result = await reportService.getMonthlySummary();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getOverdueBooks = async (req, res) => {
  try {
    const result = await reportService.getOverdueBooks();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDebtReaders = async (req, res) => {
  try {
    const result = await reportService.getDebtReaders();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMonthlyReport = async (req, res) => {
  try {
    const { month, year } = req.query;
    const result = await reportService.getMonthlyReport(Number(month), Number(year));
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
