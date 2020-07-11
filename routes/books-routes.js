const express = require('express');
const { saveBook, deleteBook, getSavedBooks } = require('../controllers/books-controller');

const router = express.Router();

router.get('/api/get/books', getSavedBooks);
router.post("/api/save/books", saveBook);
// router.delete("/api/delete/books", deleteBook);

module.exports = router;