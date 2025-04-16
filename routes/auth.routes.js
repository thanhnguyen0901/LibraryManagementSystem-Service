// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.put('/password', authController.changePassword);

module.exports = router;