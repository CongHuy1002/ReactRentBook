import React from "react";
import './imgbook/book.css'

function BookItem({ image, name,author, price }) {
  return (
    <div className="bookItem">
      <img src={image} alt="imgbook" />
      <h1> {name} </h1>
      <p>{author}</p>
      <p> ${price} </p>
    </div>
  );
}

export default BookItem;