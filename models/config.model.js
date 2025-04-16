// config.model.js
module.exports = (sequelize, DataTypes) => {
    const Config = sequelize.define('Config', {
      GiaTriThe: DataTypes.DECIMAL(10, 2),
      SoTuoiDG: DataTypes.INTEGER,
      ThoiGianXB: DataTypes.INTEGER,
      TienPhat: DataTypes.DECIMAL(10, 2)
    }, {
      tableName: 'ThamSo',
      timestamps: false
    });
  
    return Config;
  };