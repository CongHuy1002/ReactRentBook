import React from 'react'
import { Book } from "../data/Book";
import BookItem from "../data/BookItem";
import "../styles/Book.css";

const BestSeller = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Best Sellers</h1>
      <div className="menuList">
        {Book.map((book, key) => {
          return (
            <BookItem
              key={key}
              image={book.image}
              name={book.name}
              author={book.author}
              price={book.price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default BestSeller
