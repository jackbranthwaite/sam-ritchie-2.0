import React from 'react';
import s from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={s.homepageWrapper}>
      <div className={s.homepageHeader}>
        <h4 className={s.title}>Sam Ritchie</h4>
        <p className={s.subtitle}>Photographer and Videographer</p>
      </div>
    </div>
  );
};
