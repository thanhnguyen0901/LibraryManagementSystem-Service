// services/report.service.js
const db = require('../database');
const { Op } = require('sequelize');

const getMonthlySummary = async () => {
  return await db.getTable('Loan').findAll({
    attributes: [
      [db.getInstance().fn('MONTH', db.getInstance().col('NgayMuon')), 'Thang'],
      [db.getInstance().fn('COUNT', db.getInstance().col('MaPhieu')), 'TongSoPhieu']
    ],
    group: [db.getInstance().fn('MONTH', db.getInstance().col('NgayMuon'))]
  });
};

const getOverdueBooks = async () => {
  return await db.getTable('Loan').findAll({
    where: {
      NgayTra: {
        [Op.gt]: db.getInstance().col('NgayMuon')
      }
    },
    include: [db.getTable('Book')]
  });
};

const getDebtReaders = async () => {
  return await db.getTable('Loan').findAll({
    where: {
      NgayTra: {
        [Op.gt]: db.getInstance().col('NgayMuon')
      }
    },
    include: [db.getTable('Reader')]
  });
};

module.exports = {
  getMonthlySummary,
  getOverdueBooks,
  getDebtReaders
};
