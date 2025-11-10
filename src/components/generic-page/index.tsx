'use client';

import React from 'react';
import s from './styles.module.scss';
import {
  DualImageBlock,
  ImageGalleryBlock,
  Page,
  SingleImageBlock,
  VimeoEmbed,
} from '@/sanity/sanity-types';
import { PortableText } from 'next-sanity';
import { Wrapper } from '../wrapper';
import { FlexibleContentContainer } from '../flexible-content-container';

export const GenericPage = ({ data }: { data: Page }) => {
  const portableTextComponents = {
    types: {
      FlexibleContentContainer: (props: {
        index: number;
        isInline: boolean;
        value: {
          contentBlocks: Array<
            SingleImageBlock | DualImageBlock | ImageGalleryBlock | VimeoEmbed
          >;
        };
      }) => {
        return <FlexibleContentContainer data={props.value} />;
      },
    },
  };

  if (!data) return <></>;
  return (
    <Wrapper paddingTop centre>
      <div className={s.genericPageWrapper}>
        {data.content && (
          <PortableText
            value={data.content}
            components={portableTextComponents}
          />
        )}
      </div>
    </Wrapper>
  );
};
