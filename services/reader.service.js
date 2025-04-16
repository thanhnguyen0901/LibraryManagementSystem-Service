// services/reader.service.js
const db = require('../models');
const Reader = db.Reader;

exports.getAll = () => Reader.findAll();

exports.getById = (id) => Reader.findByPk(id);

exports.create = (data) => Reader.create(data);

exports.update = async (id, data) => {
  const reader = await Reader.findByPk(id);
  if (!reader) throw new Error('Reader not found');
  return reader.update(data);
};

exports.remove = async (id) => {
  const reader = await Reader.findByPk(id);
  if (!reader) throw new Error('Reader not found');
  return reader.destroy();
};