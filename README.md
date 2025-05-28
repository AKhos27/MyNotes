
# Project Title – MyNotes

A simple backend note-taking application that allows users to create, view, update, and delete personal notes using RESTful APIs. Built using Node.js, Express.js, and MongoDB.

---

## Description

MyNotes is a beginner-level backend project designed for learning and demonstrating full-stack web development principles, specifically focused on CRUD (Create, Read, Update, Delete) operations with a NoSQL database. The purpose of this project is to help interns or new developers understand how to structure a Node.js application, connect to a MongoDB database, and expose useful API endpoints to interact with.

---

## Getting Started

### Dependencies

Before installing, ensure you have the following:
- Node.js v18+
- MongoDB (local or Atlas)
- Postman (for testing API requests)
- OS: Windows 10 / macOS / Linux

### Installing

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mynotes.git
   cd mynotes
   ```

2. Install required dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/mynotes
   ```

4. Start the server:
   ```bash
   node app.js
   ```

---

## Executing Program

- Ensure MongoDB is running locally or use a cloud URI.
- Run the server:
  ```bash
  node app.js
  ```

- Use Postman to test:
  - `POST /notes`
  - `GET /notes`
  - `PUT /notes/:id`
  - `DELETE /notes/:id`

---

## Help

- Make sure MongoDB is properly installed and running.
- Ensure the `.env` file contains a valid connection string.
- Use Postman and set `Content-Type: application/json` in headers.
- If needed, run:
  ```bash
  npm install dotenv express mongoose
  ```

---

## Authors

- Aryaa Khosla – [@aryaakhosla](https://github.com/aryaakhosla)

---

## Version History

- 0.2  
  Various bug fixes and optimizations  
  See commit history

- 0.1  
  Initial Release

---

## License

This project is licensed under the MIT License – see the `LICENSE.md` file for details.

---

## Acknowledgments

- Inspiration from internship requirements
- Documentation templates from:
  - [awesome-readme](https://github.com/matiassingers/awesome-readme)
  - [PurpleBooth](https://github.com/PurpleBooth)
  - [dbader](https://github.com/dbader)
  - [zenorocha](https://github.com/zenorocha)
  - [fvcproductions](https://github.com/fvcproductions)
