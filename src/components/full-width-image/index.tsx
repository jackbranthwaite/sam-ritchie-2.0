import React from 'react';
import s from './styles.module.scss';
import { SingleImageBlock } from '@/sanity/sanity-types';

export const FullWidthImage = ({ data }: { data: SingleImageBlock }) => {
  return (
    <div className={s.fullWidthImageWrapper}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${data.image?.asset?.url}`}
        alt={`${data.image?.asset?.alt}`}
        className={s.image}
      />
    </div>
  );
};
