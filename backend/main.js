var http = require("http");
var fs = require("fs");
var url = require("url");
var path = require("path");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Hello");
});

app.listen(port, () => {
  console.log(`Web app listening on port ${port}!`);
});
