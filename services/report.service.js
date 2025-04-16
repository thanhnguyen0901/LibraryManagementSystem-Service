// services/report.service.js
const db = require('../models');
const { Sequelize } = db;
const Loan = db.Loan;
const Book = db.Book;
const LoanDetail = db.LoanDetail;

exports.getMonthlySummary = async () => {
  return Loan.findAll({
    attributes: [
      [Sequelize.fn('MONTH', Sequelize.col('NgayMuon')), 'Thang'],
      [Sequelize.fn('COUNT', Sequelize.col('MaPhieu')), 'TongSoPhieu']
    ],
    group: [Sequelize.fn('MONTH', Sequelize.col('NgayMuon'))]
  });
};

exports.getOverdueBooks = async () => {
  return Loan.findAll({
    where: {
      NgayTra: {
        [Sequelize.Op.gt]: Sequelize.col('NgayMuon')
      }
    },
    include: [Book]
  });
};

exports.getDebtReaders = async () => {
  return Loan.findAll({
    where: {
      NgayTra: {
        [Sequelize.Op.gt]: Sequelize.col('NgayMuon')
      }
    },
    include: ['Reader']
  });
};