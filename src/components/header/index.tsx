'use client';

import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const [colour, setColour] = useState('#fff');

  useEffect(() => {
    if (pathname === '/') {
      setColour('#ffff');
    } else {
      setColour('#534741');
    }
  }, [pathname]);

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.logo}>
          <Link href={'/'} style={{ color: colour }}>
            Sam Ritchie - Photographer and Videographer
          </Link>
        </div>
        <div className={s.menu}>
          <Link href={'/overview'} style={{ color: colour }}>
            <div className={s.menuItem}>Overview</div>
          </Link>
          {/* {menu.map((page, i) => {
            return (
              <Link href={`/${page.slug}`} style={{ color: colour }} key={i}>
                <div className={s.menuItem}>{page.title}</div>
              </Link>
            );
          })} */}
          <Link href={'/contact'} style={{ color: colour }}>
            <div className={s.menuItem}>Contact</div>
          </Link>
          <Link href={'/about'} style={{ color: colour }}>
            <div className={s.menuItem}>About</div>
          </Link>
        </div>
      </div>
    </header>
  );
};
