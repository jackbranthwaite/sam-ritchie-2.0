import React, { useEffect, useRef } from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { SanityImageAsset } from '@/sanity/sanity-types';
import gsap from 'gsap';
import Close from '@/assets/svgs/close.svg';

export const Popup = ({
  content,
  isOpen,
  setIsOpen,
}: {
  content: SanityImageAsset | null;
  isOpen: boolean;
  setIsOpen: () => void;
}) => {
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

  if (!content) return <></>;

  return (
    <div className={s.overlayContainer} onClick={fadeOut} ref={overlayRef}>
      <div className={s.closeIcon}>close</div>
      <div className={s.closeButton}></div>

      <div
        className={s.contentContainer}
        onClick={(e) => e.stopPropagation()}
        ref={contentRef}
      >
        <Image
          src={content?.url || ''}
          alt={content?.altText || ''}
          className={s.galleryImage}
          width={content?.metadata?.dimensions?.width}
          height={content?.metadata?.dimensions?.height}
          blurDataURL={content?.metadata?.blurHash}
        />
      </div>
    </div>
  );
};
