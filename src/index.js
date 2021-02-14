import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki"
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki"
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki"
  }
];

const BookLists = () => {
  return (
    <section>
      {
        books.map((book, index) => {
          return <Book key={book.id} {...book} />
        })
      }
    </section>
  )
};

const Book = ({img, title, author}) => {
  return (
    <article>
      <img src={img} alt={img} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  )
};



ReactDOM.render(<BookLists />, document.getElementById("root"));