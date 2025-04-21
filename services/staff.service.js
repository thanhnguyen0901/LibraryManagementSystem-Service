// services/staff.service.js
const db = require('../database');
const Librarian = db.getTable('Librarian');

const getAll = () => Librarian.findAll();

const getById = (id) => Librarian.findByPk(id);

const create = (data) => Librarian.create(data);

const update = async (id, data) => {
  const librarian = await Librarian.findByPk(id);
  if (!librarian) throw new Error('Librarian not found');
  return librarian.update(data);
};

const remove = async (id) => {
  const librarian = await Librarian.findByPk(id);
  if (!librarian) throw new Error('Librarian not found');
  return librarian.destroy();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
