// services/auth.service.js
const db = require('../models');
const Account = db.Account;
const bcrypt = require('bcrypt');

exports.register = async ({ TenDangNhap, MatKhau }) => {
  const existing = await Account.findOne({ where: { TenDangNhap } });
  if (existing) throw new Error('Tên đăng nhập đã tồn tại');
  const hashedPassword = await bcrypt.hash(MatKhau, 10);
  return Account.create({ TenDangNhap, MatKhau: hashedPassword });
};

exports.login = async ({ TenDangNhap, MatKhau }) => {
  const account = await Account.findOne({ where: { TenDangNhap } });
  if (!account) throw new Error('Sai tài khoản hoặc mật khẩu');
  const match = await bcrypt.compare(MatKhau, account.MatKhau);
  if (!match) throw new Error('Sai tài khoản hoặc mật khẩu');
  return account;
};

exports.changePassword = async ({ MaTaiKhoan, oldPassword, newPassword }) => {
  const account = await Account.findByPk(MaTaiKhoan);
  if (!account) throw new Error('Không tìm thấy tài khoản');
  const match = await bcrypt.compare(oldPassword, account.MatKhau);
  if (!match) throw new Error('Mật khẩu cũ không đúng');
  account.MatKhau = await bcrypt.hash(newPassword, 10);
  return account.save();
};