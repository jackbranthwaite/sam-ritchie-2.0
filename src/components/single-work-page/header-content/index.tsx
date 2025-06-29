import React from 'react';
import s from './styles.module.scss';
import { PortableText } from 'next-sanity';
import { WorkPage } from '@/sanity/sanity-types';

export const HeaderContent = ({ data }: { data: WorkPage }) => {
  return (
    <div className={s.headerContentWrapper}>
      <div className={s.contributors}>
        {data.contributors?.map((contributor, i) => {
          return (
            <div className={s.contributor} key={i}>
              <p className={s.contributorRole}>{contributor.role}</p>
              <p className={s.contributorName}>{contributor.name}</p>
            </div>
          );
        })}
      </div>
      <div className={s.description}>
        {data.description && <PortableText value={data.description} />}
      </div>
    </div>
  );
};
