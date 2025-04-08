const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs")


app.get("/", (req, res) => {
  res.send("Welcome to Premium Bag Shop API!");
});
app.get("/login", (req, res) => {
  res.send("Welcome to Premium Bag Shop API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});