// services/reader.service.js
const db = require('../database');

const getAll = async () => {
  return await db.getTable('Reader').findAll();
};

const getById = async (id) => {
  return await db.getTable('Reader').findByPk(id);
};

const create = async (data) => {
  const config = await db.getTable('Config').findOne();
  const maxAge = config?.SoTuoiDG || 55;
  const minAge = 18;

  const dob = new Date(data.NgaySinhDG);
  const today = new Date();
  const age = today.getFullYear() - dob.getFullYear();

  if (age < minAge || age > maxAge) {
    throw new Error(`Tuổi độc giả phải nằm trong khoảng ${minAge}–${maxAge}`);
  }

  data.NgLapThe = today.toISOString().split('T')[0];

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
