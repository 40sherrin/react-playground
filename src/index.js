import React from "react";
import ReactDOM from "react-dom";
import data from "./data";
import Book from "./book";
import "./index.css";



const BookLists = () => {
  return (
    <section>
      {
        data.map((book, index) => {
          return <Book key={book.id} {...book} />
        })
      }
    </section>
  )
};





ReactDOM.render(<BookLists />, document.getElementById("root"));