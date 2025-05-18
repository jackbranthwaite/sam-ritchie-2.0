'use client';

import React from 'react';
import s from './styles.module.scss';
import Envelope from '@/assets/svgs/envelope.svg';
import Instagram from '@/assets/svgs/instagram.svg';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <a href='mailto:sam.amritchie@gmail.com'>
        <Envelope />
      </a>
      <a href='https://www.instagram.com/sam_anthonyr' target='_blank'>
        <Instagram />
      </a>
    </footer>
  );
};
