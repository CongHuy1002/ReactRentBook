import React, { useEffect, useState } from 'react';
import { Book } from '../data/Book';
import BookItem from '../data/BookItem';
import { BookCard } from './BookCard/BookCard';
import { Center, Spinner } from '@chakra-ui/react';
import '../styles/Book.css';
import axios from 'axios';

const BestSeller = () => {
  const [datas, setDatas] = useState([]); 
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
  const books = datas.books;
  return (
    <>
      {isLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : (
        <div className='menu'>
          <h1 className='menuTitle'>Sách Yêu Thích</h1>
          <div className='menuList'>
            {books.map((book) => (
              <>
                <div className=''>
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
