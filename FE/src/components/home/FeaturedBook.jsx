import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Book } from "../data/Book";

import './featured.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import FeaturedBookItem from '../data/FeaturedBookItem';

const FeaturedBook = () => {
    return (
        <div className="swiper-featured">
            <h1 className="title-featured">Featured Book</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                slidesPerView={3} // Số lượng slide hiển thị ban đầu
                spaceBetween={1}
                centeredSlides={true}
                loop={true}
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
                        <div className="multi-images-slide">
                            <FeaturedBookItem
                                image={book.image}
                                name={book.name}
                                author={book.author}
                                price={book.price}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default FeaturedBook;
