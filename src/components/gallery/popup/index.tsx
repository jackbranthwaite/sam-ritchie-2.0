import React from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { SanityImageAsset } from '@/sanity/sanity-types';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Popup = ({
  content,
  isOpen,
  setIsOpen,
}: {
  content:
    | {
        caption: string;
        image: {
          asset: SanityImageAsset;
        };
      }[]
    | undefined;
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
  if (!isOpen) return <></>;
  return (
    // Look into the Get Lost gallery system
    <div className={s.overlayContainer} onClick={setIsOpen}>
      <div className={s.contentContainer} onClick={(e) => e.stopPropagation()}>
        <Swiper>
          {content?.map((image, i) => {
            return (
              <SwiperSlide key={i} className={s.swiperSlide}>
                <Image
                  key={i}
                  src={image.image.asset.url || ''}
                  alt={image.image.asset.altText || ''}
                  className={s.galleryImage}
                  width={image.image.asset.metadata?.dimensions?.width}
                  height={image.image.asset.metadata?.dimensions?.height}
                  blurDataURL={image.image.asset.metadata?.blurHash}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
