import express from "express";
import { Client } from "pg";
const app = express();
const port = 3000;


const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect().then(() => {
  console.log("Connected to the database");
}).catch((err) => {
  console.error("Error connecting to the database", err);
});

app.get("/users", (req, res) => {
  const query = `SELECT * FROM users`;
  client.query(query, (err, result) => {
    if (err) {
      res.status(500).send("Error fetching users");
    }
    res.send(result.rows[result.rows.length - 1]);
  });
});

app.get("/create-user", (req, res) => {
    const { name, email, password } = req.query;
    const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`;
    const values = [name, email, password];
    client.query(query, values, (err, result) => {
      if (err) {
        return res.status(500).send(`Error creating user ${err.message}`);
      }
      res.send("User created successfully");
    });
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});