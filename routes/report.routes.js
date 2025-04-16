// routes/report.routes.js
const express = require('express');
const router = express.Router();
const reportController = require('../controllers/report.controller');

router.get('/monthly', reportController.getMonthlySummary);
router.get('/overdue', reportController.getOverdueBooks);
router.get('/debt-readers', reportController.getDebtReaders);

module.exports = router;