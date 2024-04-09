console.log("Initial Commit!");

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Initial Commit!");
});

app.listen(port, () => {
  console.log(`Server is up!!!`);
});
