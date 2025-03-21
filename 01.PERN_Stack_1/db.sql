CREATE DATABASE bookDB;

CREATE TABLE book (
    id VARCHAR(200) PRIMARY KEY UNIQUE,
    name VARCHAR(40),
    description VARCHAR(300)
);

"INSERT INTO book(id, name, description)
VALUES ($1, $2, $3) RETURNING * ", [id, name, description]


SELECT * FROM book;

"SELECT * FROM book WHERE id=$1", [id]

"DELETE FROM book WHERE id=$1", [id]

"UPDATE book SET name = $1, description = $2 WHERE id=$3 RETURNING *", [name, description, id]