// loan.model.js
module.exports = (sequelize, DataTypes) => {
    const Loan = sequelize.define('Loan', {
      MaPhieu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      MaDG: {
        type: DataTypes.INTEGER,
        references: {
          model: 'DocGia',
          key: 'MaDG'
        }
      },
      MaSach: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Sach',
          key: 'MaSach'
        }
      },
      NgayMuon: DataTypes.DATEONLY,
      NgayTra: DataTypes.DATEONLY,
      SLMuon: DataTypes.INTEGER
    }, {
      tableName: 'PhieuMuon',
      timestamps: false
    });
  
    return Loan;
  };