'use client';

import React from 'react';
import s from './styles.module.scss';
import { DualImageBlock, Page, SingleImageBlock } from '@/sanity/sanity-types';
import { PortableText } from 'next-sanity';
import { Wrapper } from '../wrapper';
import { FlexibleImageContainer } from '../flexible-image-container';

export const GenericPage = ({ data }: { data: Page }) => {
  const portableTextComponents = {
    types: {
      flexibleImageContainer: (props: {
        index: number;
        isInline: boolean;
        value: { imageBlocks: Array<SingleImageBlock | DualImageBlock> };
      }) => {
        return <FlexibleImageContainer data={props.value} />;
      },
    },
  };
  return (
    <Wrapper>
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
