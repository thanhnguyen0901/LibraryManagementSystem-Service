// services/reader.service.js
const db = require('../database');
const Reader = db.getTable('Reader');

const getAll = () => Reader.findAll();

const getById = (id) => Reader.findByPk(id);

const create = (data) => Reader.create(data);

const update = async (id, data) => {
  const reader = await Reader.findByPk(id);
  if (!reader) throw new Error('Reader not found');
  return reader.update(data);
};

const remove = async (id) => {
  const reader = await Reader.findByPk(id);
  if (!reader) throw new Error('Reader not found');
  return reader.destroy();
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
