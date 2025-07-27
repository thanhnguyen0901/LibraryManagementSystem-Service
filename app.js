const fs = require('fs');
const dotenvPath = fs.existsSync('.env.local') ? '.env.local' : '.env';
require('dotenv').config({ path: dotenvPath });

const express = require('express');
const cors = require('cors');
const config = require('./configs/config');
const db = require('./database');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Library Management System API is running...');
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
    console.log(`Connecting to database ${config.database.name}...`);
    
    await db.connectDB();
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Unable to start server:', error);
  }
})();
