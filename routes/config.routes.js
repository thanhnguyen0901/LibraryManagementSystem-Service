// routes/config.routes.js
const express = require('express');
const router = express.Router();
const configController = require('../controllers/config.controller');

router.get('/', configController.get);
router.put('/', configController.update);

module.exports = router;
