const express = require("express");
const axios = require("axios");

const app = express();
app.use(require("body-parser").urlencoded({ extended: false }));
app.set("view engine", "ejs");

const dbAddress = `http://${process.env.DB_ADDRESS}:3050`;
//const dbAddress = `http://${process.env.DB_SERVICE_SERVICE_HOST}:3050`;

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/kaydet", (req, res) => {
  const data = req.body.veri;

  axios
    .post(`${dbAddress}/insert`, {
      db_veri: data,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("err:", err);
    });

  res.redirect("/");
});

app.get("/kayitlar", (req, res) => {
  axios
    .get(`${dbAddress}/db`)
    .then((response) => {
      console.log(response.data);
      res.render("db-contents", {
        records: response.data.split(","),
      });
    })
    .catch((err) => {
      console.log("err:", err);
    });
});

app.listen(3000, () => {
  console.log("Sunucu başlatıldı!");
});
