// services/book.service.js
const db = require('../models');
const Book = db.Book;

exports.getAllBooks = () => Book.findAll();

exports.getBookById = (id) => Book.findByPk(id);

exports.createBook = (bookData) => Book.create(bookData);

exports.updateBook = async (id, bookData) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error('Book not found');
  return book.update(bookData);
};

exports.deleteBook = async (id) => {
  const book = await Book.findByPk(id);
  if (!book) throw new Error('Book not found');
  return book.destroy();
};
