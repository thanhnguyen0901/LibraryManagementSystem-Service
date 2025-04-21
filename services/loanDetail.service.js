// services/loanDetail.service.js
const db = require('../database');
const LoanDetail = db.getTable('LoanDetail');

const getAll = () => LoanDetail.findAll();

const getByBookId = (bookId) => {
  return LoanDetail.findAll({
    where: { MaSach: bookId }
  });
};

module.exports = {
  getAll,
  getByBookId
};
