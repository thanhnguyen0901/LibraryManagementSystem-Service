// reader.model.js
module.exports = (sequelize, DataTypes) => {
    const Reader = sequelize.define('Reader', {
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
  
    return Reader;
  };
  