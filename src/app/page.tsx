import React from 'react';
import s from './page.module.scss';

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.homepageHeader}>
        <h4 className={s.title}>Sam Ritchie</h4>
        <p className={s.subtitle}>Photographer and Videographer</p>
      </div>
    </div>
  );
}
