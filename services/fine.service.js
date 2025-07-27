// services/fine.service.js
const db = require('../database');
const { Op, col } = require('sequelize');

const getAllFines = async () => {
  const config = await db.getTable("Config").findOne();
  const freeDays = 4;
  const penaltyPerDay = config?.TienPhat || 1000;

  const loans = await db.getTable('Loan').findAll({
    where: {
      NgayTra: {
        [Op.gt]: col('NgayMuon')
      }
    }
  });

  return loans.map(loan => {
    const borrowed = new Date(loan.NgayMuon);
    const returned = new Date(loan.NgayTra);
    const diffDays = Math.max(0, Math.floor((returned - borrowed) / (1000 * 60 * 60 * 24)) - freeDays);
    return {
      ...loan.toJSON(),
      SoNgayTre: diffDays,
      TienPhat: diffDays * penaltyPerDay
    };
  });
};

const payFine = async (loanId, soTienThu) => {
  const loan = await db.getTable('Loan').findByPk(loanId);
  if (!loan) throw new Error('Phiếu mượn không tồn tại');

  loan.TienPhatDaThu = soTienThu;
  return loan.save();
};

module.exports = {
  getAllFines,
  payFine
};
