'use client';

import React, { useEffect, useRef, useState } from 'react';
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
  const internalRef = useRef<HTMLDivElement | null>(null);
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
      setColour('#534741');
      gsap.to(mobileMenuRef.current, { opacity: 1, pointerEvents: 'auto' });
      gsap.to(internalRef.current, { opacity: 1, translateY: 0 });
      tl.current?.play();
    } else if (!menuOpen) {
      if (pathname === '/') {
        setColour('#fff');
      }
      tl.current?.reverse();
      gsap.to(internalRef.current, { opacity: 0, translateY: '5rem' });
      gsap.to(mobileMenuRef.current, { opacity: 0, pointerEvents: 'none' });
    }
  }, [menuOpen]);

  return (
    <header className={s.header}>
      <div className={s.headerWrapper}>
        <div className={s.logo}>
          <Link href={'/'} style={{ color: colour }} className={s.desktopLogo}>
            Sam Ritchie - Photographer and Videographer
          </Link>
          <Link href={'/'} style={{ color: colour }} className={s.mobileLogo}>
            Sam Ritchie
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

        <>
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
            <div className={s.internalWrapper} ref={internalRef}>
              {menu.menu?.map((page, i) => {
                return (
                  <Link href={`/${page.reference?.slug.current}`} key={i}>
                    {page.title || page.reference?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      </div>
    </header>
  );
};
