import React from 'react';
import s from './styles.module.scss';
import { Gallery } from '../gallery';
import { Wrapper } from '../wrapper';
import { DoubleImage } from '../double-image';
import { PageHeader } from '../page-header';
import { FullWidthImage } from '../full-width-image';
import { StillsPage } from '@/sanity/sanity-types';

export const Stills = ({ data }: { data: StillsPage }) => {
  if (!data?.stillsGallery) return <></>;
  return (
    <div className={s.stillsPageWrapper}>
      <Gallery images={data.stillsGallery} />
      <Wrapper>
        <PageHeader title={data.title || ''} />
        {data.content?.map((item) => {
          if (item._type === 'flexibleImageContainer') {
            return item.imageBlocks?.map((imageBlock, j) => {
              if (imageBlock._type === 'dualImageBlock') {
                return <DoubleImage data={imageBlock} key={j} />;
              } else if (imageBlock._type === 'singleImageBlock') {
                return <FullWidthImage data={imageBlock} key={j} />;
              } else {
                return <></>;
              }
            });
          }
        })}
      </Wrapper>
    </div>
  );
};
