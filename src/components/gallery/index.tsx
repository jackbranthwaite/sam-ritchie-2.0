'use client';
import React from 'react';
import s from './styles.module.scss';

import 'swiper/css';
import { ImageGalleryBlock } from '@/sanity/sanity-types';
import Image from 'next/image';

export const Gallery = ({ images }: { images: ImageGalleryBlock }) => {
  if (!images.imageGallery) return <></>;
  return (
    <div className={s.galleryWrapper}>
      <Image
        className={s.mainImage}
        src={images.imageGallery[0].image.asset.url || ''}
        alt={images.imageGallery[0].image.asset.altText || ''}
        width={images.imageGallery[0].image.asset.metadata?.dimensions?.width}
        height={images.imageGallery[0].image.asset.metadata?.dimensions?.height}
        blurDataURL={images.imageGallery[0].image.asset.metadata?.blurHash}
      />
      <div className={s.galleryStripWrapper}>
        <div className={s.galleryStrip}>
          {images.imageGallery.map((item, i) => {
            return (
              <Image
                key={i}
                src={item.image.asset.url || ''}
                alt={item.image.asset.altText || ''}
                className={s.minorImage}
                width={item.image.asset.metadata?.dimensions?.width}
                height={item.image.asset.metadata?.dimensions?.height}
                blurDataURL={item.image.asset.metadata?.blurHash}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
