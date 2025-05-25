import React from 'react';
import s from './styles.module.scss';

export const GenericPage = ({ data }: { data: unknown }) => {
  console.log(data);
  return <div className={s.genericPageWrapper}></div>;
};
