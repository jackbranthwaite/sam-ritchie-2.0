import React, { ReactNode } from 'react';
import s from './styles.module.scss';

export const Wrapper = ({
  children,
  paddingTop,
  centre,
  height,
}: {
  children: ReactNode;
  paddingTop?: boolean;
  centre?: boolean;
  height?: boolean;
}) => {
  return (
    <div
      className={`${s.wrapper} ${paddingTop ? s.top : ''} ${
        centre ? s.centre : ''
      } ${height ? s.height : ''}`}
    >
      {children}
    </div>
  );
};
