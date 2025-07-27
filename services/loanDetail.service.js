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

const recordLoan = async (MaSach) => {
  const today = new Date().toISOString().split('T')[0];
  const loanDetailTable = db.getTable('LoanDetail');

  const existing = await loanDetailTable.findOne({
    where: { MaSach, NgayThang: today }
  });

  if (existing) {
    existing.SoLanMuon += 1;
    return await existing.save();
  }

  return await loanDetailTable.create({
    MaSach,
    NgayThang: today,
    SoLanMuon: 1
  });
};


module.exports = {
  getAll,
  getByBookId,
  recordLoan
};
