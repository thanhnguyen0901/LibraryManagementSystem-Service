// services/auth.service.js
const db = require("../database");
const bcrypt = require("bcrypt");

const register = async ({ TenDangNhap, MatKhau }) => {
  const existing = await db.getTable("Account").findOne({ where: { TenDangNhap } });
  if (existing) throw new Error("Tên đăng nhập đã tồn tại");
  const hashedPassword = await bcrypt.hash(MatKhau, 10);
  return await db.getTable("Account").create({ TenDangNhap, MatKhau: hashedPassword });
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

module.exports = {
  register,
  login,
  changePassword,
};

