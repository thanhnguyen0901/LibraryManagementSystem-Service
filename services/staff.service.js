// services/staff.service.js
const db = require('../models');
const Librarian = db.Librarian;

exports.getAll = () => Librarian.findAll();

exports.getById = (id) => Librarian.findByPk(id);

exports.create = (data) => Librarian.create(data);

exports.update = async (id, data) => {
  const librarian = await Librarian.findByPk(id);
  if (!librarian) throw new Error('Librarian not found');
  return librarian.update(data);
};

exports.remove = async (id) => {
  const librarian = await Librarian.findByPk(id);
  if (!librarian) throw new Error('Librarian not found');
  return librarian.destroy();
};