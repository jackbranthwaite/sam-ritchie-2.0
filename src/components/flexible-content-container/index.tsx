import React from 'react';
import {
  DualImageBlock,
  ImageGalleryBlock,
  SingleImageBlock,
  VimeoEmbed,
} from '@/sanity/sanity-types';
import { DoubleImage } from '../double-image';
import { FullWidthImage } from '../full-width-image';
import { Gallery } from '../gallery';
import { Video } from '../video';

export const FlexibleContentContainer = ({
  data,
}: {
  data: {
    contentBlocks: Array<
      SingleImageBlock | DualImageBlock | ImageGalleryBlock | VimeoEmbed
    >;
  };
}) => {
  return (
    <>
      {data.contentBlocks.map(
        (
          image:
            | SingleImageBlock
            | DualImageBlock
            | VimeoEmbed
            | ImageGalleryBlock,
          i: number
        ) => {
          if (image._type === 'dualImageBlock') {
            return <DoubleImage data={image} key={i} />;
          }
          if (image._type === 'singleImageBlock') {
            return <FullWidthImage data={image} key={i} />;
          }
          if (image._type === 'imageGalleryBlock') {
            return <Gallery images={image} key={i} />;
          }
          if (image._type === 'vimeoEmbed') {
            return <Video key={i} />;
          }
        }
      )}
    </>
  );
};
