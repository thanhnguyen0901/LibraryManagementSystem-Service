// services/fine.service.js
const db = require('../models');
const Loan = db.Loan;

exports.getAllFines = async () => {
  return Loan.findAll({
    where: {
      NgayTra: {
        [db.Sequelize.Op.gt]: db.Sequelize.col('NgayMuon')
      }
    }
  });
};

exports.payFine = async (loanId, soTienThu) => {
  const loan = await Loan.findByPk(loanId);
  if (!loan) throw new Error('Phiếu mượn không tồn tại');
  // Giả lập ghi nhận đã thu tiền phạt - có thể thêm trường `DaThuPhat` sau này
  loan.TienPhatDaThu = soTienThu;
  return loan.save();
};