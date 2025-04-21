const config = {};

config.database = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  name: process.env.DB_NAME || 'quanlythuvien',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
};

module.exports = config;
