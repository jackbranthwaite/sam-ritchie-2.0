'use client';

import React, { useRef } from 'react';
import s from './styles.module.scss';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import Left from '@/assets/svgs/chevron-left.svg';
import Right from '@/assets/svgs/chevron-right.svg';
import 'swiper/css';
import { StillsPage } from '@/sanity/sanity-types';

export const Gallery = ({
  images,
}: {
  images: StillsPage['stillsGallery'];
}) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className={s.galleryWrapper}>
      <Swiper loop ref={swiperRef}>
        {images &&
          images.map((image: { alt: string; image: string }, i) => {
            return (
              <SwiperSlide key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${image?.image}`}
                  alt={`${image.alt}`}
                  className={s.image}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
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
