import React, { useEffect, useState } from 'react';
import { Book } from '../data/Book';
import BookItem from '../data/BookItem';
import { BookCard } from '../home/BookCard/BookCard';
import { Spinner, Select } from '@chakra-ui/react';
import './Shop.css';
import axios from 'axios';

const Shop = () => {
  const [datas, setDatas] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const [sortName, setSortName] = useState('');
  const [sortPrice, setSortPrice] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const api = `http://localhost:5000/?sortPrice=${sortPrice}&sortName=${sortName}`;
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
  }, [sortName, sortPrice]); // Empty dependency array for one-time execution
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
            <Select
              onChange={(e) => setSortPrice(e.target.value)}
              bgColor='#fff'
              color='#000'
              marginRight={3}
              w='md'
            >
              <option value='none' selected disabled>
                Sort by price
              </option>
              <option value='desc'>From Highest to Lowest</option>
              <option value='asc'>From Lowest to Highest</option>
            </Select>
            <Select
              onChange={(e) => setSortName(e.target.value)}
              bgColor='#fff'
              color='#000'
              w='md'
            >
              <option value='none' selected disabled>
                Sort by name
              </option>
              <option value='asc'>From A to Z</option>
              <option value='desc'>From Z to A</option>
            </Select>
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
