import React from 'react';
import s from './styles.module.scss';
import {
  DualImageBlock,
  ImageGalleryBlock,
  SingleImageBlock,
  VimeoEmbed,
  WorkPage,
} from '@/sanity/sanity-types';
import { IdealImage } from '../ideal-image';
import { Wrapper } from '../wrapper';
import { HeaderContent } from './header-content';
import { PageHeader } from '../page-header';
import { PortableText } from 'next-sanity';
import { FlexibleContentContainer } from '../flexible-content-container';

export const SingleWorkPage = ({ data }: { data: WorkPage }) => {
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

  return (
    <div className={s.singleWorkPageWrapper}>
      <IdealImage image={data.titleImage} />
      <Wrapper>
        <PageHeader title={data.title || ''} />
        <HeaderContent data={data} />
        {data.content && (
          <PortableText
            value={data.content}
            components={portableTextComponents}
          />
        )}
      </Wrapper>
    </div>
  );
};
