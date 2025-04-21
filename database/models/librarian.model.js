const { DataTypes } = require('sequelize');

const createLibrarian = (sequelize) => {
  return sequelize.define('Librarian', {
    MaTT: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    TenTT: DataTypes.STRING,
    GioiTinhTT: DataTypes.STRING(10),
    NgaySinhTT: DataTypes.DATEONLY,
    EmailTT: DataTypes.STRING,
    DiaChiTT: DataTypes.STRING,
    GhiChu: DataTypes.TEXT,
    MaTaiKhoan: {
      type: DataTypes.INTEGER,
      references: {
        model: 'TaiKhoan',
        key: 'MaTaiKhoan'
      }
    }
  }, {
    tableName: 'ThuThu',
    timestamps: false
  });
};

module.exports = { createLibrarian };
