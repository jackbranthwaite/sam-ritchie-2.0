import { GenericPage } from '@/components/generic-page';
import { Page } from '@/sanity/sanity-types';
import { getGeneric } from '@/sanity/sanity.query';
import React from 'react';
const options = { next: { tags: 'page' } };
export default async function Contact() {
  const data: Page[] = await getGeneric('contact', options);

  return (
    <div>
      <GenericPage data={data[0]} />
    </div>
  );
}
