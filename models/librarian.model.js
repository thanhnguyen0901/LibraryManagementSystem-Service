// librarian.model.js
module.exports = (sequelize, DataTypes) => {
    const Librarian = sequelize.define('Librarian', {
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
  
    return Librarian;
  };