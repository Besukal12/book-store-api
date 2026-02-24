const Book = require("../models/book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();

    if (allBooks?.length > 0) {
      res.status(200).json({
        succcess: true,
        message: "Here are our books",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        succcess: false,
        message: "There is no books here",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succcess: false,
      message: "Something went wrong on server!",
    });
  }
};
const getSingleBook = async (req, res) => {};
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;

    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newlyCreatedBook) {
      res.status(201).json({
        succcess: true,
        message: "Book Added successfully",
        data: newBookFormData,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
const updateBook = async (req, res) => {};
const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};
