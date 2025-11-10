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
import { Wrapper } from '../wrapper';

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
          item:
            | SingleImageBlock
            | DualImageBlock
            | VimeoEmbed
            | ImageGalleryBlock,
          i: number
        ) => {
          if (item._type === 'dualImageBlock') {
            return (
              <Wrapper key={i} height>
                <DoubleImage data={item} />
              </Wrapper>
            );
          }
          if (item._type === 'singleImageBlock') {
            return (
              <Wrapper key={i} height>
                <FullWidthImage data={item} />
              </Wrapper>
            );
          }
          if (item._type === 'imageGalleryBlock') {
            return <Gallery images={item} key={i} />;
          }
          if (item._type === 'vimeoEmbed') {
            return (
              <Wrapper key={i} height>
                <Video video={item} />
              </Wrapper>
            );
          }
        }
      )}
    </>
  );
};
