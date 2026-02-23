const express = require("express");
const {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

//Create express router
const router = express.Router();

//All routes that related to book only
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
