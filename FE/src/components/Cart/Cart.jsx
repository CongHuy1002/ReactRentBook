import React, { useEffect, useState } from 'react';
import { BookCard } from '../home/BookCard/BookCard';
import { Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';

const Cart = () => {
  const [datas, setDatas] = useState([]); // Initialize with an empty array
  const [isLoading, setIsLoading] = useState(true);
  const toast = useToast();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'http://localhost:5000/cart/',
          {},
          {
            withCredentials: true,
          },
        );
        if (res.status === 200) {
          toast({
            title: 'Logout successfully',
            description: 'You have logged out successfully.',
            status: 'success',
            duration: 2000,
            isClosable: true,
          });
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []); // Empty dependency array for one-time execution
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className=''>
          {/* <div className='shop-header d-flex align-items-center mb-5'>
            <h1 className='ml-5 fw-bold shop-header_text'>Shop</h1>
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
          </div> */}
        </div>
      )}
    </>
  );
};

export default Cart;
