// services/staff.service.js
const db = require('../database');

const getAll = async () => {
  return await db.getTable('Librarian').findAll();
};

const getById = async (id) => {
  return await db.getTable('Librarian').findByPk(id);
};

const create = async (data) => {
  return await db.getTable('Librarian').create(data);
};

const update = async (id, data) => {
  const librarian = await db.getTable('Librarian').findByPk(id);
  if (!librarian) throw new Error('Librarian not found');
  return await librarian.update(data);
};

const remove = async (id) => {
  const librarian = await db.getTable('Librarian').findByPk(id);
  if (!librarian) throw new Error('Librarian not found');
  return await librarian.destroy();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
