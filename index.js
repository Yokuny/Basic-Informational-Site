const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

function readFileAndSend(filePath, res) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading ${filePath}`);
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
}

app.get("/", (req, res) => {
  readFileAndSend("./pages/index.html", res);
});

app.get("/contact-me", (req, res) => {
  readFileAndSend("./pages/contact-me.html", res);
});

app.get("/about", (req, res) => {
  readFileAndSend("./pages/about.html", res);
});

app.use((req, res, next) => {
  res.status(404);
  readFileAndSend("./pages/404.html", res);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});