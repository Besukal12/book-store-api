const Book = require("../models/book.js");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();

    if (allBooks?.length > 0) {
      res.status(200).json({
        succcess: true,
        message: "Here are your books",
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

const getSingleBook = async (req, res) => {
  try {
    const getCurrentBookId = req.params.id;
    const singleBook = await Book.findById(getCurrentBookId);
    if (!singleBook) {
      return res.status(404).json({
        succcess: false,
        message: "Book is not found",
      });
    }

    res.status(200).json({
      succcess: true,
      message: "Here is the book with detail information",
      data: singleBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succcess: false,
      message: "Something went wrong on server!",
    });
  }
};

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

const updateBook = async (req, res) => {
  try {
    const updateBookDataForm = req.body;
    const currentBookId = req.params.id;
    const updateBookById = await Book.findByIdAndUpdate(
      currentBookId,
      updateBookDataForm,
      {
        new: true,
      },
    );

    if (!updateBookById) {
      return res.status(404).json({
        succcess: false,
        message: "Book is not found",
      });
    }

    res.status(200).json({
      succcess: true,
      message: "Book is updated succesfully",
      data: updateBookById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succcess: false,
      message: "Something went wrong on server!",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const currentBook = req.params.id;
    const deleteBookById = await Book.findByIdAndDelete(currentBook);

    if (!deleteBookById) {
      return res.status(404).json({
        succcess: false,
        message: "Book is not found",
      });
    }

    res.status(200).json({
      succcess: true,
      message: "Book is deleted succesfully",
      data: deleteBookById,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      succcess: false,
      message: "Something went wrong on server!",
    });
  }
};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
};

