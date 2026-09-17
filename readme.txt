# Todo API

A simple and lightweight RESTful Todo API built with **Node.js**, **Fastify**, **MongoDB**, and **Mongoose**.

This project provides a backend API for creating, retrieving, updating, and deleting Todo items. It was built as a practical project to learn how to build REST APIs, work with MongoDB, define schemas with Mongoose, and structure a backend application using Fastify.

---

## 🚀 Features

* Create Todo items
* Get all Todos
* Get a single Todo by ID
* Update Todo items
* Delete Todo items
* Todo status management
* MongoDB database integration
* Mongoose schema and model
* Automatic `createdAt` and `updatedAt` timestamps
* RESTful API endpoints
* JSON request and response handling
* Fastify built-in logging
* Automatic server restart during development with Nodemon

---

## 🛠️ Technologies

The project is built with the following technologies:

### Node.js

Node.js is used as the JavaScript runtime environment for running the backend application.

### Fastify

[Fastify](https://fastify.dev/) is used as the web framework for creating the HTTP server and REST API routes.

The application creates a Fastify instance with logging enabled:

```js
const fastify = require("fastify")({ logger: true });
```

Fastify is responsible for:

* Creating the HTTP server
* Registering routes
* Handling HTTP requests
* Sending HTTP responses
* Logging server activity

---

### MongoDB

MongoDB is used as the database for storing Todo documents.

The application connects to the following local MongoDB database:

```text
mongodb://localhost:27017/todos
```

The database name is:

```text
todos
```

---

### Mongoose

Mongoose is used as the MongoDB ODM (Object Data Modeling) library.

It provides:

* MongoDB connection management
* Schema definition
* Data modeling
* Document creation
* Querying
* Updating documents
* Deleting documents
* Validation

The Todo model is defined with a Mongoose schema.

---

### Nodemon

Nodemon is used during development to automatically restart the server whenever project files change.

Development server:

```bash
npm start
```

The project uses:

```json
"start": "nodemon app.js"
```

---

## 📁 Project Structure

```text
todos/
│
├── routes/
│   └── todo.js
│
├── util/
│   ├── database.js
│   └── schema.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

### `app.js`

The main entry point of the application.

It is responsible for:

* Creating the Fastify application
* Enabling Fastify logging
* Connecting to MongoDB
* Registering Todo routes
* Starting the HTTP server

The server runs on:

```text
http://localhost:3000
```

and listens on:

```text
0.0.0.0:3000
```

---

### `routes/todo.js`

This file contains all Todo-related API routes.

The project currently provides:

* `GET /todos`
* `GET /todos/:id`
* `POST /todos`
* `PATCH /todos/:id`
* `DELETE /todos/:id`

The routes use the Mongoose Todo model to communicate with MongoDB.

---

### `util/schema.js`

This file contains the Mongoose Todo schema and model.

Each Todo contains:

```text
title
describe
status
createdAt
updatedAt
```

The schema also provides validation for required fields and Todo status.

---

### `util/database.js`

This file is responsible for connecting the application to MongoDB.

The application connects to:

```text
mongodb://localhost:27017/todos
```

If the connection succeeds, the server continues starting.

If the connection fails, the application logs the error and exits.

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/armin-meh82/todos.git
```

Move into the project directory:

```bash
cd todos
```

---

### 2. Install dependencies

```bash
npm install
```

The main dependencies include:

```text
fastify
mongodb
mongoose
nodemon
```

---

### 3. Start MongoDB

Make sure MongoDB is installed and running locally.

The application expects MongoDB to be available at:

```text
mongodb://localhost:27017
```

The project uses the following database:

```text
todos
```

---

### 4. Start the development server

```bash
npm start
```

The application will start on:

```text
http://localhost:3000
```

---

### 5. Start without Nodemon

The project also provides a production-style start command:

```bash
npm run start-server
```

This runs:

```bash
node app.js
```

---

# 📡 API Documentation

Base URL:

```text
http://localhost:3000
```

---

## 1. Get All Todos

### Request

```http
GET /todos
```

Example:

```text
http://localhost:3000/todos
```

This endpoint returns all Todo documents stored in MongoDB.

### Example Response

```json
[
  {
    "_id": "68...",
    "title": "Learn Node.js",
    "describe": "Study backend development",
    "status": "pending",
    "createdAt": "2026-09-17T10:00:00.000Z",
    "updatedAt": "2026-09-17T10:00:00.000Z"
  }
]
```

---

## 2. Get Todo by ID

### Request

```http
GET /todos/:id
```

Example:

```text
GET /todos/68xxxxxxxxxxxxxxxxxxxx
```

The API searches MongoDB using the Todo's MongoDB `_id`.

### If the Todo exists

The Todo document is returned.

### If the Todo does not exist

The API returns:

```json
{
  "message": "not found"
}
```

with HTTP status:

```text
404 Not Found
```

---

# 3. Create a Todo

### Request

```http
POST /todos
```

### Request Body

```json
{
  "title": "Learn Node.js",
  "describe": "Build a REST API with Fastify"
}
```

The `status` field is optional when creating a Todo.

If no status is provided, the default status is:

```text
pending
```

### Example

```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Learn Node.js",
    "describe": "Build a REST API with Fastify"
  }'
```

---

# 4. Update a Todo

### Request

```http
PATCH /todos/:id
```

Example:

```text
PATCH /todos/68xxxxxxxxxxxxxxxxxxxx
```

The endpoint accepts the fields that should be updated.

For example:

```json
{
  "status": "in-progress"
}
```

Or:

```json
{
  "title": "Learn Fastify",
  "describe": "Build a Todo API",
  "status": "done"
}
```

After updating, the API returns the updated Todo document.

If the Todo does not exist:

```json
{
  "message": "not found"
}
```

with:

```text
404 Not Found
```

---

# 5. Delete a Todo

### Request

```http
DELETE /todos/:id
```

Example:

```text
DELETE /todos/68xxxxxxxxxxxxxxxxxxxx
```

If the Todo exists, it is removed from MongoDB.

### Response

```json
{
  "message": "deleted"
}
```

If the Todo does not exist:

```json
{
  "message": "not found"
}
```

with HTTP status:

```text
404 Not Found
```

---

# 📊 Todo Data Model

The Todo schema is defined using Mongoose.

```js
{
  title: String,
  describe: String,
  status: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## `title`

The title of the Todo.

Type:

```text
String
```

Required:

```text
Yes
```

Example:

```json
{
  "title": "Learn JavaScript"
}
```

---

## `describe`

A description of the Todo.

Type:

```text
String
```

Required:

```text
Yes
```

Example:

```json
{
  "describe": "Study backend development with Node.js"
}
```

---

## `status`

Represents the current state of the Todo.

Available values are:

```text
pending
in-progress
done
```

Default:

```text
pending
```

### Example

```json
{
  "title": "Learn Fastify",
  "describe": "Build a REST API",
  "status": "in-progress"
}
```

---

## `createdAt`

Automatically generated by Mongoose.

It represents when the Todo was created.

---

## `updatedAt`

Automatically generated by Mongoose.

It represents the last time the Todo was updated.

The project enables Mongoose timestamps:

```js
timestamps: true
```

---

# 🔄 Todo Status Flow

A Todo can have one of three statuses:

```text
pending
    ↓
in-progress
    ↓
done
```

### Pending

The Todo has been created but work has not started.

```json
{
  "status": "pending"
}
```

### In Progress

Work on the Todo has started.

```json
{
  "status": "in-progress"
}
```

### Done

The Todo has been completed.

```json
{
  "status": "done"
}
```

The Mongoose schema restricts the status field to these three values.

---

# 🧩 API Architecture

The project follows a simple backend structure:

```text
Client
  │
  ▼
Fastify Server
  │
  ▼
Routes
  │
  ▼
Mongoose Model
  │
  ▼
MongoDB
```

For example, when creating a Todo:

```text
POST /todos
      │
      ▼
Fastify
      │
      ▼
todo.js route
      │
      ▼
Todo Mongoose Model
      │
      ▼
MongoDB
      │
      ▼
Created Todo
      │
      ▼
JSON Response
```

This keeps the HTTP routing logic separate from the database model.

---

# 🗄️ Database

The application uses MongoDB as its database.

Database:

```text
todos
```

Connection:

```text
mongodb://localhost:27017/todos
```

MongoDB stores Todo objects as documents.

A document can look similar to:

```json
{
  "_id": "68xxxxxxxxxxxxxxxxxxxx",
  "title": "Learn Backend",
  "describe": "Build a REST API",
  "status": "pending",
  "createdAt": "2026-09-17T10:00:00.000Z",
  "updatedAt": "2026-09-17T10:00:00.000Z"
}
```

---

# 🛡️ Error Handling

The API handles common "Todo not found" cases.

For example:

```http
GET /todos/invalid-or-non-existing-id
```

can result in:

```json
{
  "message": "not found"
}
```

with:

```text
404 Not Found
```

The same behavior is implemented for:

* Getting a Todo
* Updating a Todo
* Deleting a Todo

---

# 🧪 Testing the API

You can test the API using tools such as:

* Postman
* Insomnia
* curl
* Thunder Client
* REST Client extensions

Example:

### Create

```http
POST http://localhost:3000/todos
```

```json
{
  "title": "Learn MongoDB",
  "describe": "Practice MongoDB with Mongoose"
}
```

### Get all

```http
GET http://localhost:3000/todos
```

### Update

```http
PATCH http://localhost:3000/todos/YOUR_TODO_ID
```

```json
{
  "status": "done"
}
```

### Delete

```http
DELETE http://localhost:3000/todos/YOUR_TODO_ID
```

---

# 📋 API Summary

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| GET    | `/todos`     | Get all Todos    |
| GET    | `/todos/:id` | Get a Todo by ID |
| POST   | `/todos`     | Create a Todo    |
| PATCH  | `/todos/:id` | Update a Todo    |
| DELETE | `/todos/:id` | Delete a Todo    |

---

# 📦 Dependencies

The project currently uses:

| Package    | Purpose                                     |
| ---------- | ------------------------------------------- |
| `fastify`  | HTTP server and REST API framework          |
| `mongoose` | MongoDB ODM and data modeling               |
| `mongodb`  | MongoDB Node.js driver                      |
| `nodemon`  | Automatic server restart during development |

The dependency versions are defined in `package.json`.

---

# 📜 Available Scripts

### Development

```bash
npm start
```

Starts the application with Nodemon.

### Start Server

```bash
npm run start-server
```

Starts the application directly with Node.js.

### Test

```bash
npm test
```

The current project does not yet contain an automated test suite, and the existing `test` script is the default placeholder from the project setup.

---

# 🎯 Project Goals

This project was created as a practical backend project to work with:

* Node.js backend development
* REST API design
* Fastify
* MongoDB
* Mongoose
* CRUD operations
* HTTP methods
* Request/response handling
* Database models
* MongoDB document operations
* API error handling
* Backend project structure

---

# 🚧 Possible Future Improvements

The current project is intentionally simple, but it can be extended with more advanced backend features.

Possible improvements include:

* [ ] User authentication
* [ ] JWT authentication
* [ ] User-specific Todos
* [ ] Authorization
* [ ] Request validation
* [ ] Centralized error handling
* [ ] Pagination
* [ ] Filtering Todos by status
* [ ] Searching Todos
* [ ] Sorting
* [ ] API documentation with Swagger/OpenAPI
* [ ] Automated tests
* [ ] Environment variables
* [ ] Docker support
* [ ] Docker Compose
* [ ] Production configuration
* [ ] Logging improvements
* [ ] Rate limiting
* [ ] API versioning
* [ ] CI/CD with GitHub Actions

---

# 👨‍💻 Author

**Armin**

GitHub:

https://github.com/armin-meh82

Repository:

https://github.com/armin-meh82/todos


