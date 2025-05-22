import React from 'react';
import s from './styles.module.scss';
import Image from 'next/image';
import { DualImageBlock } from '@/sanity/sanity-types';

export const DoubleImage = ({ data }: { data: DualImageBlock }) => {
  return (
    <div className={s.doubleImageWrapper}>
      <div className={s.leftImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${data?.leftImage?.asset?.url}`}
          alt={`${data.leftImage?.asset?.alt}`}
          className={s.image}
        />
      </div>
      <div className={s.rightImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${data.rightImage?.asset?.url}`}
          alt={`${data.rightImage?.asset?.alt}`}
          className={s.image}
        />
      </div>
    </div>
  );
};
