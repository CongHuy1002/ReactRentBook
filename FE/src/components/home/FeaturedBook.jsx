import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from '../data/Book';
import axios from 'axios';
// import BookItem from '../data/BookItem';

import './featured.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Spinner } from '@chakra-ui/react';

const FeaturedBook = () => {
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
        <div className='swiper-featured-container'>
          <h1 className='swiper-featured-title'>Featured Book</h1>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
          >
            {books.map((book, key) => (
              <SwiperSlide key={key}>
                {/* <div className='bookItem'>
                            <img src={book.image} alt='imgbook' />
                            <h1> {book.name} </h1>
                            <p></p>
                            <p> ${book.price} </p>
                        </div> */}
                <div className='bookfeature'>
                  <img
                    src={
                      'http://localhost:5000/src/public/images/' + book.images
                    }
                    alt='imgbook'
                  />
                  <h1> {book.name} </h1>
                  <p></p>
                  <p> ${book.price} </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default FeaturedBook;
