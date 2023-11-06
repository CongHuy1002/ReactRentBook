import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from '../data/Book';

import './featured.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

const FeaturedBook = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
   
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 800) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

   
    updateSlidesPerView();

   
    window.addEventListener('resize', updateSlidesPerView);

  
    return () => {
      window.removeEventListener('resize', updateSlidesPerView);
    };
  }, []);
  return (
    <div className="swiper-featured-container">
      <h1 className="swiper-featured-title">Featured Book</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={slidesPerView} 
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
        className="swiper_container"
      >
        {Book.map((book, key) => (
          <SwiperSlide key={key}>
            <div className="bookfeature">
              <img src={book.image} alt="imgbook" />
              <h1> {book.name} </h1>
              <p></p>
              <p> ${book.price} </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBook;
