// routes/fine.routes.js
const express = require('express');
const router = express.Router();
const fineController = require('../controllers/fine.controller');

router.get('/', fineController.getAll);
router.post('/pay', fineController.pay);

module.exports = router;