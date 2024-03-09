const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const BookModel = require("./models/book");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongo db");
  })
  .catch((err) => {
    console.log("Error", err);
  });

app.listen(5500, () => {
  console.log("Server running at 5500");
});

app.post("/insert-book", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const bookModel = new BookModel();
  bookModel.title = title;
  bookModel.author = author;

  bookModel
    .save()
    .then((data) => {
      res.status(200).send({ msg: "inserted", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/get-books", (req, res) => {
  BookModel.find({})
    .then((data) => {
      res.status(200).send({ msg: "fetched", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/search-books", (req, res) => {
  const query = req.body.query;
  BookModel.find({ title: { $regex: query, $options: "i" } })
    .then((data) => {
      res.status(200).send({ msg: "searched", data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});
