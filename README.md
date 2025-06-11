# Backend Developer Assignment – Node.js + Express.js

This is a backend application built with **Node.js**, **Express.js**, and **MongoDB**. It follows a clean architecture with separate folders for routes, controllers, and models.

## 🔧 Features

* RESTful API built with Express.js
* MongoDB database connection using Mongoose
* Modular structure: `routes/`, `controllers/`, `models/`
* Environment variables handled via `.env` file

---

## 📁 Project Structure

```
project-root/
├── models/
│   ├── UserModel.js
│   └── ProductModel.js
├── controllers/
│   ├── UserController.js
│   └── ProductController.js
├── routes/
│   ├── UserRoute.js
│   └── ProductRoute.js
├── .env
├── server.js
└── package.json
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yrgamage/Backend-Developer-assignment.git
cd Backend-Developer-assignment
```

### 2. Install dependencies

```bash
npm install
npm install mongoose dotenv cors
npm install express body-parser
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your MongoDB URI:

```env
PORT=3000
MONGO_URI=mongodb+srv://yrgamage28:bGXbsEDSD7hAQvDA@cluster1.xjcfbo6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1
```

### 4. Start the development server

```command line
npm run devStart
```

The server will run on:

```
http://localhost:3000
```

---

## 📬 Example API Request (Postman)

**POST** `/api/users/register`

```json
{
  "username": "userone",
  "password": "securepassword123"
}
```

**POST** `/api/products`

```json
{
  "name": "Sample Product",
  "price": 19.99,
  "description": "This is a sample product"
}
```

## ✅ Requirements

* Node.js v18+ recommended
* MongoDB account (e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

---

## 📢 Contact

If you have any questions, feel free to reach out.
