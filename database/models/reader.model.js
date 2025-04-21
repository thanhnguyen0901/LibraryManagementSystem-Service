const { DataTypes } = require('sequelize');

const createReader = (sequelize) => {
  return sequelize.define('Reader', {
    MaDG: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TenDG: DataTypes.STRING,
    LoaiDG: DataTypes.STRING(10),
    NgaySinhDG: DataTypes.DATEONLY,
    EmailDG: DataTypes.STRING,
    NgLapThe: DataTypes.STRING,
    MaTaiKhoan: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TaiKhoan',
        key: 'MaTaiKhoan'
      }
    }
  }, {
    tableName: 'DocGia',
    timestamps: false
  });
};

module.exports = { createReader };
