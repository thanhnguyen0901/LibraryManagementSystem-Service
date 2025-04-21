const { Sequelize } = require("sequelize");
const config = require("../configs/config");

const { createAccount } = require("./models/account.model");
const { createReader } = require("./models/reader.model");
const { createLibrarian } = require("./models/librarian.model");
const { createBook } = require("./models/book.model");
const { createLoan } = require("./models/loan.model");
const { createLoanDetail } = require("./models/loanDetail.model");
const { createConfig } = require("./models/config.model");

let sequelize = null;
let tables = {};

const connectDB = async () => {
  sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
      host: config.database.host,
      port: config.database.port || 3306,
      dialect: "mariadb",
      logging: false,
      retry: {
        match: [/Deadlock/i, Sequelize.ConnectionError],
        max: 3,
        backoffBase: 3000,
        backoffExponent: 1.5,
      },
    }
  );

  try {
    console.log(`Connecting to database ${config.database.name}...`);
    await sequelize.authenticate();
    setupModel();
    setupAssociations();
    console.log(`Connection to ${config.database.name} has been established successfully.`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

const setupModel = () => {
  tables["Account"] = createAccount(sequelize);
  tables["Reader"] = createReader(sequelize);
  tables["Librarian"] = createLibrarian(sequelize);
  tables["Book"] = createBook(sequelize);
  tables["Loan"] = createLoan(sequelize);
  tables["LoanDetail"] = createLoanDetail(sequelize);
  tables["Config"] = createConfig(sequelize);
};

const setupAssociations = () => {
  const { Account, Reader, Librarian, Book, Loan, LoanDetail } = tables;

  // Account - Reader
  Account.hasOne(Reader, { foreignKey: "MaTaiKhoan" });
  Reader.belongsTo(Account, { foreignKey: "MaTaiKhoan" });

  // Account - Librarian
  Account.hasOne(Librarian, { foreignKey: "MaTaiKhoan" });
  Librarian.belongsTo(Account, { foreignKey: "MaTaiKhoan" });

  // Reader - Loan
  Reader.hasMany(Loan, { foreignKey: "MaDG" });
  Loan.belongsTo(Reader, { foreignKey: "MaDG" });

  // Book - Loan
  Book.hasMany(Loan, { foreignKey: "MaSach" });
  Loan.belongsTo(Book, { foreignKey: "MaSach" });

  // Book - LoanDetail
  Book.hasMany(LoanDetail, { foreignKey: "MaSach" });
  LoanDetail.belongsTo(Book, { foreignKey: "MaSach" });
};

const getInstance = () => sequelize;
const getTable = (name) => tables[name];

connectDB();

module.exports = {
  connectDB,
  getInstance,
  getTable,
};