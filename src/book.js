import React from "react";
const Book = ({img, title, author}) => {
  return (
    <article>
      <img src={img} alt={img} />
      <h1>{title}</h1>
      <h3>{author}</h3>
    </article>
  )
};

export default Book;