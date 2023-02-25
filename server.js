const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

let quotes = require("./quotes.json");
app.get("/", async function (req, res) {
  let x = Math.floor(Math.random() * quotes.length);
  await res.send(quotes[x]); // changed
});

app.listen(3001, function () {
  console.log("Server is listening on port 3001. Ready to accept requests!");
});
