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
├── docker/
│   ├── docker-compose.yml      # MariaDB container setup
│   └── init.sql                # Used by Docker to init DB with tables and seed data
```

---

## 🐳 Run with Docker (MariaDB)

1. Navigate to the `docker` folder:

```bash
cd docker
```

2. Make sure you have Docker installed and run the command:

```bash
docker-compose up -d
```

3. This will:
- Start a MariaDB instance on port `3306`
- Initialize the schema and seed data from `init.sql`

You can edit the file `docker-compose.yml` to change default user/password:

```yaml
environment:
  MYSQL_ROOT_PASSWORD: root
  MYSQL_DATABASE: quan_ly_thu_vien
  MYSQL_USER: admin
  MYSQL_PASSWORD: password!
```

Update your `.env` file accordingly.

---

## 🛠 Getting Started (Backend)

### 1. Clone and Install

```bash
git clone https://vietthanh090198@dev.azure.com/vietthanh090198/PTIT/_git/LibraryManagementSystem-Service
cd LibraryManagementSystem-Service
npm install
```

### 2. Environment Configuration

Create a `.env` file:

```env
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_NAME=quan_ly_thu_vien
DB_USER=admin
DB_PASSWORD=password!
DB_DIALECT=mariadb
```

> ⚠️ These values must match those in your `docker-compose.yml`

### 3. Start the Server

```bash
npm start
```

---

## 🧪 API Testing

Use [Postman](https://www.postman.com/) to test endpoints like:

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET  /api/books`
- `POST /api/loans`
- `GET  /api/reports/summary`
- `PUT  /api/auth/change-password`

---

## 📦 Build and Test

No build step required. Runtime: **Node.js >=14**  
Tests can be added using **Jest**, **Mocha**, or your preferred test framework.

---

## 🤝 Contribute

We welcome contributions! Steps to contribute:

1. Fork this repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes
4. Push to your fork
5. Open a pull request

---

## 🔗 References

- [Sequelize ORM](https://sequelize.org/)
- [Express.js](https://expressjs.com/)
- [MariaDB](https://mariadb.com/kb/en/)
- [Docker Compose](https://docs.docker.com/compose/)

---

> Inspired by best practices from:
> - [ASP.NET Core](https://github.com/aspnet/Home)
> - [Visual Studio Code](https://github.com/Microsoft/vscode)
> - [Chakra Core](https://github.com/Microsoft/ChakraCore)