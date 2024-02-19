const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("images"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.get("/gallery", (req, res) => {
  res.render("gallery", {
    images: fs.readdirSync("images")
  });
});

app.post("/upload", upload.single("image"), (req, res) => {
  res.render("upload-success");
});

app.listen(3000, () => {
  console.log("Sunucu başlatıldı!");
});