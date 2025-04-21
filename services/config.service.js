// services/config.service.js
const db = require('../database');

const getConfig = async () => {
 return await db.getTable('Config').findOne();
};

const updateConfig = async (data) => {
  const config = await db.getTable('Config').findOne();
  if (!config) throw new Error('Cấu hình hệ thống chưa được khởi tạo');
  return config.update(data);
};

module.exports = {
  getConfig,
  updateConfig,
};
