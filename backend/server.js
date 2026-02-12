const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields required");
  }

  const sql =
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      res.status(500).send("Error");
    } else {
      res.send("Message stored");
    }
  });
});
