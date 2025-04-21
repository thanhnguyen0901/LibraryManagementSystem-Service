// services/book.service.js
const { Op } = require("sequelize");
const db = require("../database");
const Book = db.getTable("Book");

const getAllBooks = async () => {
  return Book.findAll();
};

const getBookById = async (id) => {
  return Book.findByPk(id);
};

const createBook = async (bookData) => {
  return Book.create(bookData);
};

const updateBook = async (id, bookData) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error("Book not found");
  return book.update(bookData);
};

const deleteBook = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error("Book not found");
  return book.destroy();
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
