import React, { ReactNode } from 'react';
import s from './styles.module.scss';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <div className={s.wrapper}>{children}</div>;
};
