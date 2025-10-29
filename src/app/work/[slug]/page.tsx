import { SingleWorkPage } from '@/components/single-work-page';
import { WorkPage } from '@/sanity/sanity-types';
import { getSingleWork } from '@/sanity/sanity.query';
import React from 'react';

const options = { next: { tags: 'workPage' } };

export default async function Work({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work: WorkPage = await getSingleWork(slug, options);
  return (
    <div>
      <SingleWorkPage data={work} />
    </div>
  );
}
