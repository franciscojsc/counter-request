const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

const counter = { value: 0 };

app.get("/", (req, res) => {
  counter.value++;
  res.render("home", { counter });
});

app.listen(8080);
