import React from 'react';
import s from './styles.module.scss';
import { DoubleFragment } from '@/graphql/generated/graphql';
import Image from 'next/image';

export const DoubleImage = ({ data }: { data: DoubleFragment }) => {
  return (
    <div className={s.doubleImageWrapper}>
      <div className={s.leftImage}>
        <Image
          src={`${data.imageLeft?.responsiveImage?.src}`}
          alt={`${data.imageLeft?.responsiveImage?.alt}`}
          width={data.imageLeft?.responsiveImage?.width}
          height={data.imageLeft?.responsiveImage?.height}
          className={s.image}
        />
      </div>
      <div className={s.rightImage}>
        <Image
          src={`${data.imageRight?.responsiveImage?.src}`}
          alt={`${data.imageRight?.responsiveImage?.alt}`}
          width={data.imageRight?.responsiveImage?.width}
          height={data.imageRight?.responsiveImage?.height}
          className={s.image}
        />
      </div>
    </div>
  );
};
