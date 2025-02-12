const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/todos", (req, res) => {
  let todos = ["react", "js", "css", "py"];
  res.send(todos);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
