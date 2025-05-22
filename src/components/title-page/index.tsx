'use client';

import React from 'react';
import s from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Wrapper } from '../wrapper';
import { SimpleCategoryPage } from '@/sanity/sanity-types';

export const TitlePage = ({ data }: { data: SimpleCategoryPage }) => {
  const slug = usePathname();
  return (
    <Wrapper>
      <div className={s.titlePageWrapper}>
        <div className={s.wrapper}>
          <Link className={s.image} href={`${slug}/stills`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${data.stillsTitleImage?.image}`}
              alt={`${data.stillsTitleImage?.alt}`}
            />
            <p className={s.title}>Stills</p>
          </Link>
        </div>
        <Link className={s.wrapper} href={`${slug}/video`}>
          <div className={s.image}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${data.videosTitleImage?.image}`}
              alt={`${data.videosTitleImage?.alt}`}
            />
            <p className={s.title}>Video</p>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};
