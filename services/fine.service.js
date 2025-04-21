// services/fine.service.js
const db = require('../database');
const Loan = db.getTable('Loan');
const sequelize = db.getInstance();
const { Op, col } = require('sequelize');

const getAllFines = async () => {
  return Loan.findAll({
    where: {
      NgayTra: {
        [Op.gt]: col('NgayMuon') // Ngày trả > ngày mượn => bị phạt
      }
    }
  });
};

const payFine = async (loanId, soTienThu) => {
  const loan = await Loan.findByPk(loanId);
  if (!loan) throw new Error('Phiếu mượn không tồn tại');

  // Giả lập ghi nhận đã thu tiền phạt (nếu có field TienPhatDaThu trong model/table)
  loan.TienPhatDaThu = soTienThu;

  return loan.save();
};

module.exports = {
  getAllFines,
  payFine
};
