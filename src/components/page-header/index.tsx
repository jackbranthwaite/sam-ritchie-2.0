import React from 'react';
import s from './styles.module.scss';

export const PageHeader = ({
  title,
  marginTop,
}: {
  title: string;
  marginTop?: number;
}) => {
  return (
    <div
      className={s.titleWrapper}
      style={{ marginTop: marginTop ? `${marginTop}rem` : '0rem' }}
    >
      <h3 className={s.title}>{title}</h3>
    </div>
  );
};
