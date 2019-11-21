const express = require("express");
const app = express();
const path = require("path");
const os = require("os");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

const counter = { value: 0 };
const server = { value: os.hostname };

app.get("/", (req, res) => {
  counter.value++;
  res.render("home", { counter, server });
});

app.listen(8080);
