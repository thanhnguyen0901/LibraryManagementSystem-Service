// services/loanDetail.service.js
const db = require('../database');

const getAll = async () => {
  return await db.getTable('LoanDetail').findAll();
};

const getByBookId = async (bookId) => {
  return await db.getTable('LoanDetail').findAll({
    where: { MaSach: bookId }
  });
};

module.exports = {
  getAll,
  getByBookId
};
