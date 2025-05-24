'use client';

import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@/sanity/sanity-types';

export const Header = ({ menu }: { menu: Menu }) => {
  const pathname = usePathname();
  const [colour, setColour] = useState('#fff');

  console.log(menu);

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
          {menu.menu?.map((page, i) => {
            return (
              <Link
                href={`/${page.reference?.slug.current}`}
                style={{ color: colour }}
                key={i}
              >
                <div className={s.menuItem}>
                  {page.title || page.reference?.title}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};
