![image](https://github.com/user-attachments/assets/cfff00e0-f8e2-42fe-ae0b-952459ff1c56)


# PostgreSQL
PostgreSQL, often simply "Postgres," is a powerful, open-source relational database management system (RDBMS). 

[How to Install PostgreSQL on Windows 11](https://youtu.be/IYHx0ovvxPs?si=ASR50_wKt43n2kcD)


Absolutely! Here's a table covering common PostgreSQL commands, including descriptions, syntax, and examples:

| Command | Description | Syntax | Example |
|---|---|---|---|
| **`\l`** | Lists all databases. (psql meta-command) | `\l` | |
| **`\c database_name`** | Connects to a database. (psql meta-command) | `\c database_name` | `\c my_database` |
| **`\dt`** | Lists all tables in the current database. (psql meta-command) | `\dt` | |
| **`\d table_name`** | Describes a table's structure. (psql meta-command) | `\d table_name` | `\d employees` |
| **`\q`** | Exits psql. (psql meta-command) | `\q` | |
| **`CREATE DATABASE`** | Creates a new database. | `CREATE DATABASE database_name;` | `CREATE DATABASE my_database;` |
| **`DROP DATABASE`** | Deletes an existing database. | `DROP DATABASE database_name;` | `DROP DATABASE my_database;` |
| **`CREATE TABLE`** | Creates a new table. | `CREATE TABLE table_name (column1 datatype constraints, column2 datatype constraints, ...);` | `CREATE TABLE employees (id SERIAL PRIMARY KEY, name VARCHAR(100), salary DECIMAL);` |
| **`DROP TABLE`** | Deletes an existing table. | `DROP TABLE table_name;` | `DROP TABLE employees;` |
| **`ALTER TABLE`** | Modifies an existing table. | `ALTER TABLE table_name ADD COLUMN column_name datatype;` <br> `ALTER TABLE table_name DROP COLUMN column_name;` <br> `ALTER TABLE table_name ALTER COLUMN column_name TYPE new_datatype;` | `ALTER TABLE employees ADD COLUMN department VARCHAR(50);` <br> `ALTER TABLE employees DROP COLUMN salary;` <br> `ALTER TABLE employees ALTER COLUMN name TYPE VARCHAR(255);` |
| **`INSERT INTO`** | Inserts new rows into a table. | `INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);` | `INSERT INTO employees (name, department) VALUES ('John Doe', 'Sales');` |
| **`UPDATE`** | Modifies existing rows in a table. | `UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;` | `UPDATE employees SET salary = 50000 WHERE name = 'John Doe';` |
| **`DELETE FROM`** | Deletes rows from a table. | `DELETE FROM table_name WHERE condition;` | `DELETE FROM employees WHERE department = 'Sales';` |
| **`SELECT`** | Retrieves data from a table. | `SELECT column1, column2, ... FROM table_name WHERE condition ORDER BY column1;` | `SELECT name, salary FROM employees WHERE salary > 40000 ORDER BY name;` |
| **`CREATE INDEX`** | Creates an index on a table column. | `CREATE INDEX index_name ON table_name (column_name);` | `CREATE INDEX idx_name ON employees (name);` |
| **`DROP INDEX`** | Deletes an index. | `DROP INDEX index_name;` | `DROP INDEX idx_name;` |
| **`CREATE VIEW`** | Creates a virtual table based on a query. | `CREATE VIEW view_name AS SELECT ... FROM ... WHERE ...;` | `CREATE VIEW high_salary_employees AS SELECT name, salary FROM employees WHERE salary > 60000;` |
| **`DROP VIEW`** | Deletes a view. | `DROP VIEW view_name;` | `DROP VIEW high_salary_employees;` |
| **`GRANT`** | Grants privileges to users or roles. | `GRANT privilege ON object TO user_or_role;` | `GRANT SELECT ON employees TO user1;` |
| **`REVOKE`** | Revokes privileges from users or roles. | `REVOKE privilege ON object FROM user_or_role;` | `REVOKE SELECT ON employees FROM user1;` |
| **`COPY`** | Copies data between a file and a table. | `COPY table_name FROM 'file_path' WITH (FORMAT csv, HEADER);` <br> `COPY table_name TO 'file_path' WITH (FORMAT csv, HEADER);` | `COPY employees FROM '/tmp/employees.csv' WITH (FORMAT csv, HEADER);` <br> `COPY employees TO '/tmp/employees_output.csv' with (FORMAT csv, HEADER);` |
| **`TRUNCATE`** | Removes all rows from a table. | `TRUNCATE TABLE table_name;` | `TRUNCATE TABLE employees;` |
| **`EXPLAIN`** | Displays the execution plan of a query. | `EXPLAIN SELECT ... FROM ... WHERE ...;` | `EXPLAIN SELECT * FROM employees WHERE id = 10;` |
| **`VACUUM`** | Reclaims storage occupied by deleted tuples. | `VACUUM table_name;` <br> `VACUUM FULL table_name;` | `VACUUM employees;` <br> `VACUUM FULL employees;` |
| **`ANALYZE`** | Collects statistics about the table contents. | `ANALYZE table_name;` | `ANALYZE employees;` |
| **`BEGIN; COMMIT; ROLLBACK;`** | Manages transactions. | `BEGIN; ... COMMIT;` or `BEGIN; ... ROLLBACK;` | `BEGIN; INSERT INTO employees (name) VALUES ('Jane Smith'); COMMIT;` |


**Important Notes:**

* **Data Types:** Replace `datatype` with appropriate PostgreSQL data types (e.g., `INTEGER`, `VARCHAR`, `DATE`, `TIMESTAMP`, `BOOLEAN`).
* **Constraints:** Replace `constraints` with table constraints (e.g., `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `FOREIGN KEY`).
* **Conditions:** Replace `condition` with `WHERE` clause conditions.
* **File Paths:** Replace `'file_path'` with the actual file path.
* **psql Meta-Commands:** The commands starting with `\` are psql meta-commands, which are specific to the psql command-line tool.
* **Security:** Be cautious when granting privileges. Always follow the principle of least privilege.
* **Transactions:** Transactions ensure that a series of database operations are treated as a single unit, either all succeeding or all failing.

### Table of NPM packages for working with PostgreSQL in an Express and Node.js application:

| **Package Name**       | **Install Command**                          | **Documentation Link**                                                                 | **Description**                                                                 | **Remarks**                                                                 |
|-------------------------|---------------------------------------------|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| **pg**                 | `npm install pg`                            | [pg Documentation](https://node-postgres.com/)                                        | A non-blocking PostgreSQL client for Node.js. Supports connections, queries, and pooling. | Most popular and widely used PostgreSQL client for Node.js.                 |
| **pg-pool**            | `npm install pg-pool`                       | [pg-pool Documentation](https://github.com/brianc/node-pg-pool)                      | A connection pool for `pg` to manage database connections efficiently.          | Included in the `pg` package. No need to install separately.                |
| **pg-native**          | `npm install pg-native`                     | [pg-native Documentation](https://github.com/brianc/node-postgres/tree/master/packages/pg-native) | A native bindings version of `pg` for better performance.                       | Requires native PostgreSQL libraries. Not recommended for most use cases.   |
| **sequelize**          | `npm install sequelize`                     | [Sequelize Documentation](https://sequelize.org/)                                     | An ORM (Object-Relational Mapping) for PostgreSQL, MySQL, MariaDB, SQLite, etc. | Great for complex queries and relationships. Adds abstraction over raw SQL.  |
| **knex.js**            | `npm install knex`                          | [Knex.js Documentation](https://knexjs.org/)                                          | A SQL query builder for PostgreSQL, MySQL, SQLite, etc.                        | Lightweight and flexible. Supports migrations and raw queries.              |
| **node-postgres-promise** | `npm install pg-promise`                  | [pg-promise Documentation](https://github.com/vitaly-t/pg-promise)                   | A promise-based wrapper for `pg` with additional features.                      | Simplifies working with promises and adds utility methods.                  |
| **typeorm**            | `npm install typeorm`                       | [TypeORM Documentation](https://typeorm.io/)                                          | An ORM for TypeScript and JavaScript. Supports PostgreSQL, MySQL, SQLite, etc. | Ideal for TypeScript projects. Supports migrations and entity management.   |
| **postgres**           | `npm install postgres`                      | [postgres Documentation](https://github.com/porsager/postgres)                        | A simple and fast PostgreSQL client for Node.js.                                | Lightweight and easy to use. Supports tagged template literals for queries. |
| **express-pg-helpers** | `npm install express-pg-helpers`            | [express-pg-helpers Documentation](https://github.com/emilioplatzer/express-pg-helpers) | A set of utilities for integrating PostgreSQL with Express.                     | Simplifies common tasks like query execution and error handling.             |
| **pg-format**          | `npm install pg-format`                     | [pg-format Documentation](https://github.com/datalanche/node-pg-format)              | A library for safely formatting dynamic SQL queries.                            | Useful for preventing SQL injection.                                        |

---

### **Key Recommendations**
1. **For Most Projects**: Use `pg` (with `pg-pool` for connection pooling). It’s lightweight, well-documented, and widely supported.
2. **For ORM Needs**: Use `sequelize` or `typeorm` if you prefer working with models and relationships instead of raw SQL.
3. **For Query Building**: Use `knex.js` if you need a flexible query builder.
4. **For TypeScript Projects**: Use `typeorm` for its TypeScript support and modern features.

