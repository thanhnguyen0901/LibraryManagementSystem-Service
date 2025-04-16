// loanDetail.model.js
module.exports = (sequelize, DataTypes) => {
    const LoanDetail = sequelize.define('LoanDetail', {
      MaCTPM: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      MaSach: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sach',
          key: 'MaSach'
        }
      },
      NgayThang: DataTypes.DATEONLY,
      SoLanMuon: DataTypes.INTEGER
    }, {
      tableName: 'ChiTietPM',
      timestamps: false
    });
  
    return LoanDetail;
  };