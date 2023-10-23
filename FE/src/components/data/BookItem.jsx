import React from "react";
import './imgbook/book.css'

function BookItem({ image, name,author, price }) {
  return (
    <div className="card-book">
    <div className="bookItem">
      <div className="bookimg">
      <img src={image} alt="imgbook" />
      </div>
      <div className="bookinfo">
      <h1> {name} </h1>
      <p>{author}</p>
      <div className="giasach"> {price} </div>
      </div>
    </div>
    </div>
  );
}

export default BookItem;