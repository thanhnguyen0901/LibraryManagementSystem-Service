// services/config.service.js
const db = require('../models');
const Config = db.Config;

exports.getConfig = () => Config.findOne();

exports.updateConfig = async (data) => {
  const config = await Config.findOne();
  if (!config) throw new Error('Cấu hình hệ thống chưa được khởi tạo');
  return config.update(data);
};
