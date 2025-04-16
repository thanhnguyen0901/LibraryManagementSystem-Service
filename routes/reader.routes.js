// routes/reader.routes.js
const express = require('express');
const router = express.Router();
const readerController = require('../controllers/reader.controller');

router.get('/', readerController.getAll);
router.get('/:id', readerController.getById);
router.post('/', readerController.create);
router.put('/:id', readerController.update);
router.delete('/:id', readerController.remove);

module.exports = router;