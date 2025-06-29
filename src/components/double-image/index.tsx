import React from 'react';
import s from './styles.module.scss';
import { DualImageBlock } from '@/sanity/sanity-types';
import { IdealImage } from '../ideal-image';

export const DoubleImage = ({ data }: { data: DualImageBlock }) => {
  return (
    <div className={s.doubleImageWrapper}>
      <div className={s.leftImage}>
        <IdealImage image={data.leftImage} />
      </div>
      <div className={s.rightImage}>
        <IdealImage image={data.rightImage} />
      </div>
    </div>
  );
};
