import React from 'react';
import s from './styles.module.scss';
import { WorkPage } from '@/sanity/sanity-types';
import { IdealImage } from '../ideal-image';
import { Wrapper } from '../wrapper';
import { HeaderContent } from './header-content';
import { PageHeader } from '../page-header';

export const SingleWorkPage = ({ data }: { data: WorkPage }) => {
  return (
    <div className={s.singleWorkPageWrapper}>
      <IdealImage image={data.titleImage} />
      <Wrapper>
        <PageHeader title={data.title || ''} />
        <HeaderContent data={data} />
      </Wrapper>
    </div>
  );
};
