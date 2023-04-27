const express = require("express");

const app = express();
app.use(express.json());

const db = [];

app.post("/insert", (req, res) => {
  const data = req.body.db_veri;
  db.push(data);
  console.log(db);
  res.send("OK");
});

app.get("/db", (req, res) => {
  res.send(db.join(","));
});

app.listen(3050, () => {
  console.log("DB başlatıldı!");
});