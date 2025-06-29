'use client';
import React, { Suspense, useEffect, useState } from 'react';
import s from './styles.module.scss';
import { WorkPage as WorkPageType } from '@/sanity/sanity-types';
import { Card } from './card';
import { Wrapper } from '../wrapper';
import { WorkTags } from './work-tags';
import { PageHeader } from '../page-header';

export const WorkPage = ({ work }: { work: WorkPageType[] }) => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(work);

  useEffect(() => {
    if (activeTags.length > 0) {
      const _filtered: WorkPageType[] = [];

      work.map((item) => {
        item.workTags?.map((tag) => {
          if (
            activeTags.includes(tag.label as string) &&
            !_filtered.includes(item)
          ) {
            _filtered.push(item);
          }
        });
      });

      setFilteredProjects(_filtered);
    } else {
      setFilteredProjects(work);
    }
  }, [activeTags]);
  return (
    <Wrapper>
      <PageHeader title='Work' marginTop={4} />
      <Suspense>
        <WorkTags
          work={work}
          activeTags={activeTags}
          setActiveTags={(a) => setActiveTags(a)}
        />
      </Suspense>
      <div className={s.workPageWrapper}>
        {filteredProjects.map((item, i) => {
          return <Card key={i} data={item} />;
        })}
      </div>
    </Wrapper>
  );
};
