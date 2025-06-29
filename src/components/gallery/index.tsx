'use client';
import React from 'react';
import s from './styles.module.scss';

import 'swiper/css';
import { ImageGalleryBlock } from '@/sanity/sanity-types';

export const Gallery = ({ images }: { images: ImageGalleryBlock }) => {
  if (!images.imageGallery) return <></>;
  return (
    <div className={s.galleryWrapper}>
      {images.imageGallery.map((image, i) => {
        return (
          //  eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            className={s.image}
            src={image.image?.asset.url}
            alt={image.image.asset.altText || 'Forgot the alt'}
          />
        );
      })}
    </div>
  );
};
