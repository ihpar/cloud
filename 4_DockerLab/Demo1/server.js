const express = require("express");

const app = express();
let i = 0;

app.get("/", (req, res) => {
  res.send("<h1>Bu benim sayfam</h1>");
  console.log(`Root gönderildi ${i}`);
  i++;
});

app.listen(3000, () => {
  console.log("Sunucu başlatıldı!");
});
