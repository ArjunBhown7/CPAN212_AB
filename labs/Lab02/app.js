const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const lab2_router = require("./route");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// adding route files
app.use("/lab2", lab2_router);

app.get("/", (req, res) => {
  res.send("Hello to base server");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", () => {
  res.send("PAGE NOT FOUND");
});
