// services/fine.service.js
const db = require('../database');
const { Op, col } = require('sequelize');

const getAllFines = async () => {
  return await db.getTable('Loan').findAll({
    where: {
      NgayTra: {
        [Op.gt]: col('NgayMuon') // Ngày trả > ngày mượn => bị phạt
      }
    }
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
