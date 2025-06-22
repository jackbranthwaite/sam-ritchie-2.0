import React from 'react';
import s from './styles.module.scss';
import { WorkPage as WorkPageType } from '@/sanity/sanity-types';
import { Card } from './card';
import { Wrapper } from '../wrapper';
import { WorkTags } from './work-tags';

export const WorkPage = ({ work }: { work: WorkPageType[] }) => {
  return (
    <Wrapper>
      <h1 className={s.pageTitle}>Work</h1>
      <WorkTags work={work} />
      <div className={s.workPageWrapper}>
        {work.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </div>
    </Wrapper>
  );
};
