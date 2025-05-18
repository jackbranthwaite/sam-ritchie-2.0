import React from 'react';
import s from './styles.module.scss';
import { FullWidthFragment } from '@/graphql/generated/graphql';
import Image from 'next/image';

export const FullWidthImage = ({ data }: { data: FullWidthFragment }) => {
  return (
    <div className={s.fullWidthImageWrapper}>
      <Image
        src={`${data.fullWidthImage?.responsiveImage?.src}`}
        alt={`${data.fullWidthImage?.responsiveImage?.alt}`}
        width={data.fullWidthImage?.responsiveImage?.width}
        height={data.fullWidthImage?.responsiveImage?.height}
        className={s.image}
      />
    </div>
  );
};
