'use client';
import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import 'swiper/css';
import { ImageGalleryBlock, SanityImageAsset } from '@/sanity/sanity-types';
import Image from 'next/image';
import { Popup } from './popup';
import { Spacer } from '../spacer';

export const Gallery = ({ images }: { images: ImageGalleryBlock }) => {
  const [mainImage, setMainImage] = useState<{
    caption: string;
    image: {
      asset: SanityImageAsset;
    };
  } | null>(null);
  const [galleryArray, setGalleryArray] =
    useState<ImageGalleryBlock['imageGallery']>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (images?.imageGallery?.length) {
      setMainImage(images.imageGallery[0]);
    }
  }, [images]);

  const rotate = (arr: ImageGalleryBlock['imageGallery'], count = 1) => {
    if (!arr?.length) return [];
    return [...arr.slice(count, arr.length), ...arr.slice(0, count)];
  };

  const openGallery = (index: number) => {
    const newOrder: ImageGalleryBlock['imageGallery'] = rotate(
      images.imageGallery,
      index
    );
    setGalleryArray(newOrder);
    setIsOpen(true);
  };

  if (mainImage === null) return <></>;
  return (
    <div className={s.galleryWrapper}>
      <Spacer />
      <Image
        className={s.mainImage}
        src={mainImage.image.asset.url || ''}
        alt={mainImage.image.asset.altText || ''}
        width={mainImage.image.asset.metadata?.dimensions?.width}
        height={mainImage.image.asset.metadata?.dimensions?.height}
        blurDataURL={mainImage.image.asset.metadata?.blurHash}
      />
      <div className={s.galleryStripWrapper}>
        <div className={s.galleryStrip}>
          {images?.imageGallery?.map((item, i) => {
            return (
              <Image
                key={i}
                src={item.image.asset.url || ''}
                alt={item.image.asset.altText || ''}
                className={s.minorImage}
                width={item.image.asset.metadata?.dimensions?.width}
                height={item.image.asset.metadata?.dimensions?.height}
                blurDataURL={item.image.asset.metadata?.blurHash}
                onClick={() => openGallery(i)}
              />
            );
          })}
        </div>
      </div>
      <Popup
        content={galleryArray}
        isOpen={isOpen}
        setIsOpen={() => setIsOpen(!isOpen)}
      />
      <Spacer />
    </div>
  );
};
