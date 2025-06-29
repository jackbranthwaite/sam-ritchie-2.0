'use client';

import React, { useRef } from 'react';
import s from './styles.module.scss';
import { SwiperRef } from 'swiper/react';
import Left from '@/assets/svgs/chevron-left.svg';
import Right from '@/assets/svgs/chevron-right.svg';
import 'swiper/css';
import { ImageGalleryBlock } from '@/sanity/sanity-types';

export const Gallery = ({ images }: { images: ImageGalleryBlock }) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  console.log(images);
  return (
    <div className={s.galleryWrapper}>
      {/* <Swiper loop ref={swiperRef}>
        {images &&
          images.imageGallery.map((image, i) => {
            return (
              <SwiperSlide key={i}>

                <img
                  src={`${image?.image}`}
                  alt={`${image?.alt}`}
                  className={s.image}
                />
              </SwiperSlide>
            );
          })}
      </Swiper> */}
      <div className={s.navWrapper}>
        <div
          className={s.navButton}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <Left />
        </div>
        <div
          className={s.navButton}
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <Right />
        </div>
      </div>
    </div>
  );
};
