import { Stills } from '@/components/stills-page';
import { getSingleStills } from '@/sanity/sanity.query';
import React from 'react';

type Props = {
  params: {
    category: string;
  };
};

const options = { next: { revalidate: 30 } };

export default async function StillsPage({ params }: Props) {
  const slug = params.category;
  const stills = await getSingleStills(slug, options);
  return (
    <div>
      <Stills data={stills} />
    </div>
  );
}
