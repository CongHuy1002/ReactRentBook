import React, { useEffect, useState } from 'react';
import { Book } from "../data/Book";
import BookItem from "../data/BookItem";
import { BookCard } from './BookCard/BookCard';
import "../styles/Book.css";
import axios from 'axios';

const BestSeller = () => {
  const [datas, setDatas] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const api = 'http://localhost:5000/';
      
      try {
        setIsLoading(true);
        const response = await axios.get(api);
        if (response.status !== 200) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setDatas(response.data);
      } catch (error) {
        console.error('API request error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array for one-time execution
  console.log(datas.books);
  const books = datas.books;
  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div className="menu">
          <h1 className="menuTitle">Best Sellers</h1>
          <div className="menuList">
              {books.map((book) => (
              <BookCard book={book}></BookCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;
