// services/loanDetail.service.js
const db = require('../models');
const LoanDetail = db.LoanDetail;

exports.getAll = () => LoanDetail.findAll();

exports.getByBookId = (bookId) => {
  return LoanDetail.findAll({ where: { MaSach: bookId } });
};
