'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import s from './styles.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from '@/sanity/sanity-types';
import gsap from 'gsap';

export const Header = ({ menu }: { menu: Menu }) => {
  const pathname = usePathname();
  const [colour, setColour] = useState('#fff');
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const lineOne = useRef<HTMLSpanElement | null>(null);
  const lineTwo = useRef<HTMLSpanElement | null>(null);
  const lineThree = useRef<HTMLSpanElement | null>(null);
  const menuButton = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useEffect(() => {
    if (pathname === '/') {
      setColour('#ffff');
    } else {
      setColour('#534741');
    }
    if (menuOpen) {
      setMenuOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(lineOne.current, { translateY: '6px' }, '<');
    tl.current.to(lineThree.current, { translateY: '-6px' }, '<');
    tl.current.to(lineTwo.current, { opacity: 0 }, '<');
    tl.current.to(lineOne.current, { rotate: 45 }, '<');
    tl.current.to(lineThree.current, { rotate: -45 }, '<');
  }, []);

  useEffect(() => {
    if (menuOpen) {
      gsap.to(mobileMenuRef.current, { height: 'auto', opacity: 1 });
      tl.current?.play();
    } else if (!menuOpen) {
      gsap.to(mobileMenuRef.current, { height: 0, opacity: 0 });
      tl.current?.reverse();
    }
  }, [menuOpen]);

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.logo}>
          <Link href={'/'} style={{ color: colour }}>
            Sam Ritchie - Photographer and Videographer
          </Link>
        </div>
        <div className={s.menuDesktop}>
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
        <div
          className={s.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          ref={menuButton}
        >
          <span style={{ backgroundColor: colour }} ref={lineOne}></span>
          <span style={{ backgroundColor: colour }} ref={lineTwo}></span>
          <span style={{ backgroundColor: colour }} ref={lineThree}></span>
        </div>
        <div className={s.menuMobile} ref={mobileMenuRef}>
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
