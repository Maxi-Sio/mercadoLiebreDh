const express = require('express');
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
//app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + './views/login.html');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + './views/register.html');
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});