// book.model.js
module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
      MaSach: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      ChuDe: DataTypes.STRING,
      TenTG: DataTypes.STRING,
      TenSach: DataTypes.STRING,
      NamXB: DataTypes.INTEGER,
      NhaXB: DataTypes.STRING,
      TriGia: DataTypes.DECIMAL(10, 2),
      TinhTrang: DataTypes.STRING,
      NgayNhap: DataTypes.DATEONLY
    }, {
      tableName: 'Sach',
      timestamps: false
    });
  
    return Book;
  };