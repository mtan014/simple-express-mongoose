const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (app.get("env") !== "test") {
  require("./db");
}
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});
app.use(cookieParser());
app.use(express.json());

const Kitten = require("./routes/kittens");
app.use("/kittens", Kitten);

const Owner = require("./routes/owners");
app.use("/owners", Owner);

module.exports = app;
