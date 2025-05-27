import React from 'react';
import s from './styles.module.scss';
import { Gallery } from '../gallery';
import { Wrapper } from '../wrapper';
import { PageHeader } from '../page-header';
import {
  DualImageBlock,
  SingleImageBlock,
  StillsPage,
} from '@/sanity/sanity-types';
import { FlexibleImageContainer } from '../flexible-image-container';
import { PortableText } from 'next-sanity';

export const Stills = ({ data }: { data: StillsPage }) => {
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

  if (!data?.stillsGallery) return <></>;
  return (
    <div className={s.stillsPageWrapper}>
      <Gallery images={data.stillsGallery} />
      <Wrapper>
        <PageHeader title={data.title || ''} />
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
