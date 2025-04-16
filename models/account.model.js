// account.model.js
module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
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
      tableName: 'TaiKhoan',
      timestamps: false
    });
  
    return Account;
  };
  