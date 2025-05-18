import React from 'react';
import s from './styles.module.scss';

export const PageHeader = ({ title }: { title: string }) => {
  return (
    <div className={s.titleWrapper}>
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};
