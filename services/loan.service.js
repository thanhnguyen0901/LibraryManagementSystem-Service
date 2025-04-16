// services/loan.service.js
const db = require('../models');
const Loan = db.Loan;

exports.getAll = () => Loan.findAll();

exports.getById = (id) => Loan.findByPk(id);

exports.create = (data) => Loan.create(data);

exports.update = async (id, data) => {
  const loan = await Loan.findByPk(id);
  if (!loan) throw new Error('Loan not found');
  return loan.update(data);
};

exports.remove = async (id) => {
  const loan = await Loan.findByPk(id);
  if (!loan) throw new Error('Loan not found');
  return loan.destroy();
};