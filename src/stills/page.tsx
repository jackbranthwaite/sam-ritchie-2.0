import { Stills } from '@/components/stills-page';
import { getSingleStills } from '@/sanity/sanity.query';
import React from 'react';

const options = { next: { revalidate: 30 } };

export default async function StillsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const slug = (await params).category;
  const stills = await getSingleStills(slug, options);
  return (
    <div>
      <Stills data={stills} />
    </div>
  );
}
