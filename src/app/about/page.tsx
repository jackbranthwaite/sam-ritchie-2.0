import { GenericPage } from '@/components/generic-page';
import { getGeneric } from '@/sanity/sanity.query';
import React from 'react';
const options = { next: { revalidate: 30 } };
export default async function About() {
  const data = await getGeneric('about', options);

  return (
    <div>
      <GenericPage data={data} />
    </div>
  );
}
