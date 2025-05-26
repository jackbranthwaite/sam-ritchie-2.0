import React from 'react';
import { DualImageBlock, SingleImageBlock } from '@/sanity/sanity-types';
import { DoubleImage } from '../double-image';
import { FullWidthImage } from '../full-width-image';

export const FlexibleImageContainer = ({
  data,
}: {
  data: { imageBlocks: Array<SingleImageBlock | DualImageBlock> };
}) => {
  return (
    <>
      {data.imageBlocks.map(
        (image: SingleImageBlock | DualImageBlock, i: number) => {
          if (image._type === 'dualImageBlock') {
            return <DoubleImage data={image} key={i} />;
          }
          if (image._type === 'singleImageBlock') {
            return <FullWidthImage data={image} key={i} />;
          }
        }
      )}
    </>
  );
};
