'use client';
import React, { useRef, useState } from 'react';
import s from './styles.module.scss';
import 'swiper/css';
import { ImageGalleryBlock } from '@/sanity/sanity-types';
import Image from 'next/image';
import Left from '@/assets/chevron-left.svg';
import Right from '@/assets/chevron-right.svg';

import { Spacer } from '../spacer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { SanityImageAsset } from '@/sanity/sanity-types';
import { Popup } from './popup';

export const Gallery = ({ images }: { images: ImageGalleryBlock }) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [openImage, setOpenImage] = useState<SanityImageAsset | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.galleryWrapper}>
      <Spacer />
      <Swiper
        className={s.swiperContainer}
        style={{ paddingLeft: '3rem' }}
        spaceBetween={32}
        slidesPerView={1.6}
        loop={true}
        onSwiper={(e) => (swiperRef.current = e)}
      >
        {images?.imageGallery?.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Image
                src={item.image.asset.url || ''}
                alt={item.image.asset.altText || ''}
                className={s.mainImage}
                width={item.image.asset.metadata?.dimensions?.width}
                height={item.image.asset.metadata?.dimensions?.height}
                blurDataURL={item.image.asset.metadata?.blurHash}
                onClick={() => {
                  setIsOpen(true);
                  setOpenImage(item.image.asset);
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={s.swiperControls}>
        <div className={s.left} onClick={() => swiperRef.current?.slidePrev()}>
          <Left color={'#534741'} />
        </div>
        <div className={s.right} onClick={() => swiperRef.current?.slideNext()}>
          <Right color={'#534741'} />
        </div>
      </div>
      <Popup
        content={openImage}
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(!isOpen);
          setTimeout(() => {
            setOpenImage(null);
          }, 500);
        }}
      />
      <Spacer />
    </div>
  );
};
