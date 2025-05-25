import { GenericPage } from '@/components/generic-page';
import { getGeneric } from '@/sanity/sanity.query';
import React from 'react';

const options = { next: { revalidate: 30 } };

export default async function Overview() {
  const data = await getGeneric('overview', options);

  return (
    <div>
      <GenericPage data={data} />
    </div>
  );
}
