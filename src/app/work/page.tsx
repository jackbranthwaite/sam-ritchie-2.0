import { WorkPage } from '@/components/work-page';
import { WorkPage as WorkPageType } from '@/sanity/sanity-types';
import { getAllWork } from '@/sanity/sanity.query';
import React from 'react';

const options = { next: { tags: 'workPage' } };
export default async function Work() {
  const work: WorkPageType[] = await getAllWork(options);
  return (
    <div>
      <WorkPage work={work} />
    </div>
  );
}
