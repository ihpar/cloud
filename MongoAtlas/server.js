const express = require("express");
const app = express();
const mongoose = require("mongoose");

const BookModel = require("./models/book");

mongoose.connect("connection_string")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(5500, () => {
  console.log("Server running");
});

app.get("/insert-book", (req, res) => {
  const bookModel = new BookModel();
  bookModel.title = "Kitap " + Math.trunc(Math.random() * 100);
  bookModel.author = "Yazar " + Math.trunc(Math.random() * 100);

  bookModel.save()
    .then(data => {
      res.status(200).send({ "msg": "inserted", "data": data });
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/get-books", (req, res) => {
  BookModel.find({})
    .then(data => {
      res.status(200).send({ "msg": "fetched", "data": data });
    })
    .catch(err => {
      console.log(err);
    });
});