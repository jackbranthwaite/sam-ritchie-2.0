import React from 'react';
import s from './page.module.scss';
import { HomePage } from '@/components/home-page';

export default function Home() {
  return (
    <div className={s.page}>
      <HomePage />
    </div>
  );
}
