import React from 'react';
import s from './styles.module.scss';
import { SingleImageBlock } from '@/sanity/sanity-types';
import { IdealImage } from '../ideal-image';

export const FullWidthImage = ({ data }: { data: SingleImageBlock }) => {
  return (
    <div className={s.fullWidthImageWrapper}>
      <IdealImage image={data.image} />
    </div>
  );
};
