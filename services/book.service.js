// services/book.service.js
const db = require("../database");

const getAllBooks = async () => {
  return await db.getTable("Book").findAll();
};

const getBookById = async (id) => {
  return await db.getTable("Book").findByPk(id);
};

const createBook = async (bookData) => {
  return await db.getTable("Book").create(bookData);
};

const updateBook = async (id, bookData) => {
  const book = await db.getTable("Book").findByPk(id);
  if (!book) throw new Error("Book not found");
  return book.update(bookData);
};

const deleteBook = async (id) => {
  const book = await db.getTable("Book").findByPk(id);
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
