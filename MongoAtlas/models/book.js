const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
});

const BookModel = mongoose.model("Book", bookSchema);

module.exports = BookModel;