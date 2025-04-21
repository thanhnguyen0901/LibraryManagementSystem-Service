# 📚 Library Management System Service

## 🚀 Introduction

This is a backend service for a **Library Management System**, built with **Node.js**, **Express**, and **MariaDB** using **Sequelize ORM**.  
The system manages books, users (readers and librarians), loans, fines, and configurations.

---

## 📁 Project Structure

```
.
├── app.js                       # App entry point
├── .env                         # Environment variables
├── package.json                 # Dependency manager
├── configs/
│   └── config.js                # DB configuration
├── controllers/                # Handle incoming requests
│   ├── auth.controller.js
│   ├── book.controller.js
│   └── ...
├── routes/                     # Define API endpoints
│   ├── auth.routes.js
│   ├── book.routes.js
│   └── ...
├── services/                   # Business logic
│   ├── auth.service.js
│   ├── book.service.js
│   └── ...
├── database/
│   ├── index.js                # DB connection and setup
│   ├── init.sql                # DB schema initialization script
│   └── models/                 # Sequelize models
│       ├── account.model.js
│       ├── book.model.js
│       └── ...
```

---

## 🛠 Getting Started

### 1. Installation

```bash
git clone https://vietthanh090198@dev.azure.com/vietthanh090198/PTIT/_git/LibraryManagementSystem-Service
cd LibraryManagementSystem-Service
npm install
```

### 2. Configure Environment

Create a `.env` file with the following variables:

```env
PORT=3001
DB_HOST=localhost
DB_NAME=quanlythuvien
DB_USER=root
DB_PASSWORD=your_password
```

### 3. Start the Application

```bash
npm start
```

---

## 🧪 Build and Test

This project doesn't use a build step. Just make sure Node.js (>=14) is installed.

You can use [Postman](https://www.postman.com/) to test available API endpoints like:

- `POST /api/auth/login`
- `GET /api/books`
- `POST /api/loans`
- etc.

Unit tests can be added with Mocha, Jest or another testing library (optional, not included by default).

---

## 🤝 Contribute

We welcome contributions! You can:

- Fork this repository
- Create your feature branch (`git checkout -b feature/new-feature`)
- Commit your changes (`git commit -am 'Add new feature'`)
- Push to the branch (`git push origin feature/new-feature`)
- Open a Pull Request

---

## 🔗 References

- [Sequelize ORM](https://sequelize.org/)
- [Express.js](https://expressjs.com/)
- [MariaDB](https://mariadb.com/kb/en/)

---

> Inspired by best practices from:
> - [ASP.NET Core](https://github.com/aspnet/Home)
> - [Visual Studio Code](https://github.com/Microsoft/vscode)
> - [Chakra Core](https://github.com/Microsoft/ChakraCore)