// services/reader.service.js
const db = require('../database');

const getAll = async () => {
  return await db.getTable('Reader').findAll();
};

const getById = async (id) => {
  return await db.getTable('Reader').findByPk(id);
};

const create = async (data) => {
  return await db.getTable('Reader').create(data);
};

const update = async (id, data) => {
  const reader = await db.getTable('Reader').findByPk(id);
  if (!reader) throw new Error('Reader not found');
  return await reader.update(data);
};

const remove = async (id) => {
  const reader = await db.getTable('Reader').findByPk(id);
  if (!reader) throw new Error('Reader not found');
  return await reader.destroy();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
