// services/loan.service.js
const db = require('../database');
const Loan = db.getTable('Loan');

const getAll = () => Loan.findAll();

const getById = (id) => Loan.findByPk(id);

const create = (data) => Loan.create(data);

const update = async (id, data) => {
  const loan = await Loan.findByPk(id);
  if (!loan) throw new Error('Loan not found');
  return loan.update(data);
};

const remove = async (id) => {
  const loan = await Loan.findByPk(id);
  if (!loan) throw new Error('Loan not found');
  return loan.destroy();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
