// routes/loanDetail.routes.js
const express = require('express');
const router = express.Router();
const loanDetailController = require('../controllers/loanDetail.controller');

router.get('/', loanDetailController.getAll);
router.get('/:bookId', loanDetailController.getByBookId);

module.exports = router;
