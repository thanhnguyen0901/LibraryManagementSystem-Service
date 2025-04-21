// services/loan.service.js
const db = require('../database');

const getAll = async () => {
  return await db.getTable('Loan').findAll();
};

const getById = async (id) => {
  return await db.getTable('Loan').findByPk(id);
};

const create = async (data) => {
  return await db.getTable('Loan').create(data);
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
