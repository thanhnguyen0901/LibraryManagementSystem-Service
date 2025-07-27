// services/auth.service.js
const db = require("../database");
const bcrypt = require("bcrypt");

// Helper: validate tuổi hợp lệ
const isValidAge = (birthDate, minAge, maxAge) => {
  const today = new Date();
  const dob = new Date(birthDate);
  const age = today.getFullYear() - dob.getFullYear();
  return age >= minAge && age <= maxAge;
};

const register = async ({ TenDangNhap, MatKhau, ReaderInfo }) => {
  const existing = await db.getTable("Account").findOne({ where: { TenDangNhap } });
  if (existing) throw new Error("Tên đăng nhập đã tồn tại");

  const { NgaySinhDG } = ReaderInfo;
  const config = await db.getTable("Config").findOne();
  const minAge = config?.SoTuoiDG || 18;
  const maxAge = 25;

  if (!isValidAge(NgaySinhDG, minAge, maxAge)) {
    throw new Error(`Tuổi độc giả không nằm trong khoảng ${minAge}–${maxAge}`);
  }

  const hashedPassword = await bcrypt.hash(MatKhau, 10);
  const account = await db.getTable("Account").create({ TenDangNhap, MatKhau: hashedPassword });

  await db.getTable("Reader").create({
    ...ReaderInfo,
    MaTaiKhoan: account.MaTaiKhoan,
    NgLapThe: new Date().toISOString().split("T")[0],
  });

  return account;
};

const login = async ({ TenDangNhap, MatKhau }) => {
  const account = await db.getTable("Account").findOne({ where: { TenDangNhap } });
  if (!account) throw new Error("Sai tài khoản hoặc mật khẩu");
  const match = await bcrypt.compare(MatKhau, account.MatKhau);
  if (!match) throw new Error("Sai tài khoản hoặc mật khẩu");
  
  return account;
};

const changePassword = async ({ MaTaiKhoan, oldPassword, newPassword }) => {
  const account = await db.getTable("Account").findByPk(MaTaiKhoan);
  if (!account) throw new Error("Không tìm thấy tài khoản");

  const match = await bcrypt.compare(oldPassword, account.MatKhau);
  if (!match) throw new Error("Mật khẩu cũ không đúng");

  account.MatKhau = await bcrypt.hash(newPassword, 10);
  return account.save();
};

const getAllAccounts = async () => {
  return await db.getTable("Account").findAll({
    attributes: ["MaTaiKhoan", "TenDangNhap"], 
    order: [["MaTaiKhoan", "ASC"]]
  });
};


module.exports = {
  register,
  login,
  changePassword,
  getAllAccounts
};

