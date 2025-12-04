const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => {
  console.log("Server is running on port 3000");
});

const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
  },
];
app.use(express.json());

app.get("/books", (req, res) => {
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const book = books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).end("Book not found");
  }
  res.json(book);
});

app.post("/books", (req, res) => {
  // const book = books.find((book) => book.id === parseInt(req.params.id));
  // if (!book) {
  //   return res.status(404).end("Book not found");
  // }
  console.log(req.headers);
  console.log(req.body);
  // res.json(book);
});

app.get("/about", (req, res) => {
  res.end("About Page");
});

app.post("/post", (req, res) => {
  res.status(200).end("Post Page");
});
