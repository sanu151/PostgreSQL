const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const pool = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Get all books
app.get("/books", async (req, res) => {
  const books = await pool.query("SELECT * FROM book");
  res.status(200).send({
    message: "Books are returned",
    data: books.rows,
  });
});

// Get particular book using ID
app.get("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const searchBooks = await pool.query("SELECT * FROM book WHERE id = ($1)", [
      id,
    ]);
    res.status(200).send({
      message: `Book is returned`,
      data: searchBooks.rows,
    });
  } catch (error) {
    res.send(error);
  }
});

// Create a book
app.post("/books", async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name and description are required." });
    }

    const id = uuidv4();

    const newBook = await pool.query(
      "INSERT INTO book (id, name, description) VALUES ($1, $2, $3) RETURNING *",
      [id, name, description]
    );

    res.status(201).json({
      message: `Book is created.`,
      data: newBook.rows[0],
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
});

// Update a book
app.put("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const updatedBook = await pool.query(
      "UPDATE book SET name=$1, description=$2 WHERE id=$3 RETURNING *",
      [name, description, id]
    );
    res.status(200).send({
      message: `Book is updated`,
      data: updatedBook.rows,
    });
  } catch (error) {
    res.send(error);
  }
});

// Delete a book
app.delete("/books/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM book WHERE id=$1", [id]);
    res.status(200).send({
      message: `Book ID: ${id} is successfully deleted`,
    });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;
