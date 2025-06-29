import React from 'react';
import s from './styles.module.scss';
import { WorkPage } from '@/sanity/sanity-types';
import Link from 'next/link';

export const Card = ({ data }: { data: WorkPage }) => {
  return (
    <Link className={s.workCardWrapper} href={`/work/${data.slug?.current}`}>
      <div
        className={s.image}
        style={{ backgroundImage: `url(${data.titleImage?.image})` }}
      >
        <div className={s.imageOverlay}></div>
        <div className={s.tagWrapper}>
          {data?.workTags?.map((tag, i) => {
            return (
              <h3 className={s.tags} key={i}>
                {tag.value}
              </h3>
            );
          })}
        </div>
      </div>
      <h3 className={s.title}>{data.title}</h3>
    </Link>
  );
};
