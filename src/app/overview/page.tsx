import { GenericPage } from '@/components/generic-page';
import { Page } from '@/sanity/sanity-types';
import { getGeneric } from '@/sanity/sanity.query';
import React from 'react';

const options = { next: { revalidate: 30 } };

export default async function Overview() {
  const data: Page[] = await getGeneric('overview', options);

  return (
    <div>
      <GenericPage data={data[0]} />
    </div>
  );
}
