// controllers/loanDetail.controller.js
const loanDetailService = require('../services/loanDetail.service');

exports.getAll = async (req, res) => {
  try {
    const details = await loanDetailService.getAll();
    res.json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getByBookId = async (req, res) => {
  try {
    const data = await loanDetailService.getByBookId(req.params.bookId);
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
