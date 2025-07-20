import React, { useEffect, useRef } from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { SanityImageAsset } from '@/sanity/sanity-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import gsap from 'gsap';
import Left from '@/assets/svgs/chevron-left.svg';
import Right from '@/assets/svgs/chevron-right.svg';
import Close from '@/assets/svgs/close.svg';

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
  const swiperRef = useRef<SwiperType | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const fadeIn = () => {
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.25 });
    gsap.to(contentRef.current, { opacity: 1, duration: 0.25, delay: 0.25 });
  };

  const fadeOut = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.25, delay: 0.25 });
    gsap.to(contentRef.current, {
      opacity: 0,
      duration: 0.25,
      onComplete: setIsOpen,
    });
  };

  useEffect(() => {
    if (isOpen) {
      fadeIn();
    }
  }, [isOpen]);

  if (!isOpen) return <></>;
  return (
    // Look into the Get Lost gallery system
    <div className={s.overlayContainer} onClick={fadeOut} ref={overlayRef}>
      <div className={s.closeIcon}>
        <Close />
      </div>
      <div className={s.closeButton}></div>
      <div
        className={s.contentContainer}
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        <Swiper
          className={s.swiperContainer}
          slidesPerView={'auto'}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          wrapperClass={s.swiperWrapper}
          loop
        >
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
        <div className={s.buttonsWrapper}>
          <div
            className={s.leftButton}
            onClick={() => swiperRef?.current?.slidePrev()}
          >
            <Left color={'#fff'} />
          </div>
          <div
            className={s.rightButton}
            onClick={() => swiperRef?.current?.slideNext()}
          >
            <Right color={'#fff'} />
          </div>
        </div>
      </div>
    </div>
  );
};
