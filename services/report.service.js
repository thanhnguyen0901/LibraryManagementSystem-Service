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

const getMonthlyReport = async (month, year) => {
  const start = new Date(year, month - 1, 1);
  const end = new Date(year, month, 0);

  const results = await db.getTable('Loan').findAll({
    where: {
      NgayMuon: {
        [Op.between]: [start, end]
      }
    },
    include: [{
      model: db.getTable('Book'),
      attributes: ['ChuDe']
    }]
  });

  const summary = {};
  for (const loan of results) {
    const topic = loan.Book?.ChuDe || "Không xác định";
    summary[topic] = (summary[topic] || 0) + 1;
  }

  const total = Object.values(summary).reduce((sum, val) => sum + val, 0);
  const report = Object.entries(summary).map(([ChuDe, SoLuotMuon]) => ({
    ChuDe,
    SoLuotMuon,
    TyLe: ((SoLuotMuon / total) * 100).toFixed(2) + "%"
  }));

  return {
    TongSoLuotMuon: total,
    ChiTiet: report
  };
};


module.exports = {
  getMonthlySummary,
  getOverdueBooks,
  getDebtReaders,
  getMonthlyReport
};
