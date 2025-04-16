// app.js
const express = require('express');
const dotenv = require('dotenv');
const db = require('./models');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Sample route (test only)
app.get('/', (req, res) => {
  res.send('Library Management System API is running.');
});

const bookRoutes = require('./routes/book.routes');
app.use('/api/books', bookRoutes);

const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

const readerRoutes = require('./routes/reader.routes');
app.use('/api/readers', readerRoutes);

const staffRoutes = require('./routes/staff.routes');
app.use('/api/staff', staffRoutes);

const loanRoutes = require('./routes/loan.routes');
app.use('/api/loans', loanRoutes);

const fineRoutes = require('./routes/fine.routes');
app.use('/api/fines', fineRoutes);

const loanDetailRoutes = require('./routes/loanDetail.routes');
app.use('/api/loan-details', loanDetailRoutes);

const reportRoutes = require('./routes/report.routes');
app.use('/api/reports', reportRoutes);

// Connect and sync database
(async () => {
  try {
    await db.sequelize.authenticate();
    console.log(' Database connected successfully.');

    await db.sequelize.sync();
    console.log(' Models synchronized.');

    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(` Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(' Unable to connect to the database:', error);
  }
})();
