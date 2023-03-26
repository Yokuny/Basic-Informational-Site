const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading index.html");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});
app.get("/contact-me", (req, res) => {
  fs.readFile("./pages/contact-me.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading contact-me.html");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});
app.get("/about", (req, res) => {
  fs.readFile("./pages/about.html", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error loading about.html");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});
app.use((req, res, next) => {
  res.status(404);
  res.sendFile("404.html", { root: path.join(__dirname + "/pages") });
});
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
