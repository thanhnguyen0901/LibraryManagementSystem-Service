// database/models/account.model.js
const { DataTypes } = require('sequelize');

const createAccount = (sequelize) => {
  return sequelize.define('Account', {
    MaTaiKhoan: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TenDangNhap: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    MatKhau: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'taikhoan',
    timestamps: false
  });
};

module.exports = { createAccount };
