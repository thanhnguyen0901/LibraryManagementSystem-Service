// services/config.service.js
const db = require('../database');
const Config = db.getTable('Config');

const getConfig = () => Config.findOne();

const updateConfig = async (data) => {
  const config = await Config.findOne();
  if (!config) throw new Error('Cấu hình hệ thống chưa được khởi tạo');
  return config.update(data);
};

module.exports = {
  getConfig,
  updateConfig,
};
