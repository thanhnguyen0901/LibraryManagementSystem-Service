// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import all models
db.Account = require('./account.model')(sequelize, Sequelize.DataTypes);
db.Reader = require('./reader.model')(sequelize, Sequelize.DataTypes);
db.Librarian = require('./librarian.model')(sequelize, Sequelize.DataTypes);
db.Book = require('./book.model')(sequelize, Sequelize.DataTypes);
db.Loan = require('./loan.model')(sequelize, Sequelize.DataTypes);
db.LoanDetail = require('./loanDetail.model')(sequelize, Sequelize.DataTypes);
db.Config = require('./config.model')(sequelize, Sequelize.DataTypes);

// Associations
// Account - Reader / Librarian
db.Account.hasOne(db.Reader, { foreignKey: 'MaTaiKhoan' });
db.Reader.belongsTo(db.Account, { foreignKey: 'MaTaiKhoan' });

db.Account.hasOne(db.Librarian, { foreignKey: 'MaTaiKhoan' });
db.Librarian.belongsTo(db.Account, { foreignKey: 'MaTaiKhoan' });

// Reader - Loan
db.Reader.hasMany(db.Loan, { foreignKey: 'MaDG' });
db.Loan.belongsTo(db.Reader, { foreignKey: 'MaDG' });

// Book - Loan
db.Book.hasMany(db.Loan, { foreignKey: 'MaSach' });
db.Loan.belongsTo(db.Book, { foreignKey: 'MaSach' });

// Book - LoanDetail
db.Book.hasMany(db.LoanDetail, { foreignKey: 'MaSach' });
db.LoanDetail.belongsTo(db.Book, { foreignKey: 'MaSach' });

module.exports = db;