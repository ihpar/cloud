const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Bu benim sayfam</h1>");
});

app.listen(3000, () => {
  console.log("Sunucu başlatıldı!");
});