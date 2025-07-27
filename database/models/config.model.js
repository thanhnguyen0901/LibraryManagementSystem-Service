const { DataTypes } = require('sequelize');

const createConfig = (sequelize) => {
  return sequelize.define('Config', {
    GiaTriThe: DataTypes.DECIMAL(10, 2),
    SoTuoiDG: DataTypes.INTEGER,
    ThoiGianXB: DataTypes.INTEGER,
    TienPhat: DataTypes.DECIMAL(10, 2)
  }, {
    tableName: 'ThamSo',
    timestamps: false,
    freezeTableName: true,
    defaultScope: {
      attributes: { exclude: ['id'] }
    }
  });
};

module.exports = { createConfig };
