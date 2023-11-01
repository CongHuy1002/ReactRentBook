import React, { useEffect, useState } from 'react';
import { Book } from "../data/Book";
import BookItem from "../data/BookItem";
import { BookCard } from './BookCard/BookCard';
import { Spinner } from '@chakra-ui/react';
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
      <Spinner/>
      ) : (
        <div className="menu container">
          <h1 className="menuTitle">Best Sellers</h1>
          <div className="row">
              {Book.map((book) => (
                <>
                  <div className="col-lg-4">
                    <BookCard book={book}></BookCard>
                  </div>
                </>
              
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BestSeller;
