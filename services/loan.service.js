// services/loan.service.js
const db = require('../database');

const getAll = async () => {
  return await db.getTable('Loan').findAll();
};

const getById = async (id) => {
  return await db.getTable('Loan').findByPk(id);
};

const create = async (data) => {
  const { MaDG, MaSach } = data;
  const reader = await db.getTable('Reader').findByPk(MaDG);
  if (!reader) throw new Error('Độc giả không tồn tại');

  const config = await db.getTable('Config').findOne();
  const maxBooks = config?.SoSachMuonToiDa || 3;

  const currentLoans = await db.getTable('Loan').count({
    where: {
      MaDG,
      NgayTra: null
    }
  });

  if (currentLoans >= maxBooks) {
    throw new Error(`Độc giả đã mượn tối đa ${maxBooks} sách`);
  }

  const newLoan = await db.getTable('Loan').create(data);

  // Update LoanDetail
  const today = new Date().toISOString().split('T')[0];
  const loanDetailTable = db.getTable('LoanDetail');
  const existing = await loanDetailTable.findOne({
    where: { MaSach, NgayThang: today }
  });

  if (existing) {
    existing.SoLanMuon += 1;
    await existing.save();
  } else {
    await loanDetailTable.create({
      MaSach,
      NgayThang: today,
      SoLanMuon: 1
    });
  }

  return newLoan;
};

const update = async (id, data) => {
  const loan = await db.getTable('Loan').findByPk(id);
  if (!loan) throw new Error('Loan not found');
  return await loan.update(data);
};

const remove = async (id) => {
  const loan = await db.getTable('Loan').findByPk(id);
  if (!loan) throw new Error('Loan not found');
  return await loan.destroy();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
