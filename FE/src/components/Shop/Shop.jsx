import React, { useEffect, useState } from 'react';
import { Book } from '../data/Book';
import BookItem from '../data/BookItem';
import { BookCard } from '../home/BookCard/BookCard';
import { Spinner } from '@chakra-ui/react';
import './Shop.css';
import axios from 'axios';
import SortbyPrice from '../SortByPrice/SortbyPrice';
import SortByName from '../SortbyName/SortByName';


const Shop = () => {
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
  const books = datas.books;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className=''>
          <div className='shop-header d-flex align-items-center mb-5'>
            <h1 className='ml-5 fw-bold shop-header_text'>Shop</h1>
          </div>
          <div className='sort'>
              <SortbyPrice />
              <SortByName />
          </div>
          <div className='menu container'>
            <div className='row'>
              {books.map((book) => (
                <>
                  <div className='col-lg-4'>
                    <BookCard book={book}></BookCard>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
