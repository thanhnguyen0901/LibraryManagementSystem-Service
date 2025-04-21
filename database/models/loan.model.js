const { DataTypes } = require('sequelize');

const createLoan = (sequelize) => {
  return sequelize.define('Loan', {
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
    TienPhatDaThu: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0
    },
    NgayMuon: DataTypes.DATEONLY,
    NgayTra: DataTypes.DATEONLY,
    SLMuon: DataTypes.INTEGER
  }, {
    tableName: 'PhieuMuon',
    timestamps: false
  });
};

module.exports = { createLoan };
