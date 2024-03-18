import React from 'react';
import '../../styles/Book.css';
import './BookCard.css';

export function BookCard({ book }) {
  const imageUrl = `http://localhost:5000/src/public/images/${book.images}`;
  const formatPriceVND = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(price);
  };
  return (
    <a href={`/details/${book.slug}`} className='bookItem'>
      <div className='menuItem'>
        <div
          className='book-img'
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className='book-name'>{book.name}</div>
        <div className='author-name'>{book.author.name}</div>
        <div className='book-price'>
          {book && book.price ? formatPriceVND(book.price) : ''}
        </div>
      </div>
    </a>
  );
}
