// services/report.service.js
const db = require('../database');
const sequelize = db.getInstance();
const Loan = db.getTable('Loan');
const Book = db.getTable('Book');
const Reader = db.getTable('Reader');

const getMonthlySummary = async () => {
  return Loan.findAll({
    attributes: [
      [sequelize.fn('MONTH', sequelize.col('NgayMuon')), 'Thang'],
      [sequelize.fn('COUNT', sequelize.col('MaPhieu')), 'TongSoPhieu']
    ],
    group: [sequelize.fn('MONTH', sequelize.col('NgayMuon'))]
  });
};

const getOverdueBooks = async () => {
  return Loan.findAll({
    where: {
      NgayTra: {
        [sequelize.Op.gt]: sequelize.col('NgayMuon')
      }
    },
    include: [Book]
  });
};

const getDebtReaders = async () => {
  return Loan.findAll({
    where: {
      NgayTra: {
        [sequelize.Op.gt]: sequelize.col('NgayMuon')
      }
    },
    include: [Reader]
  });
};

module.exports = {
  getMonthlySummary,
  getOverdueBooks,
  getDebtReaders
};
