import React, { ReactNode, useEffect, useState } from 'react';
import s from './styles.module.scss';
import { createPortal } from 'react-dom';

export const Overlay = ({
  isOpen,
  setIsOpen,
  children,
}: {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (!isOpen) return null;
  const overlayRoot = document.getElementById('overlay-root');
  if (!overlayRoot) return null;
  return createPortal(
    <div style={{ top: scrollPosition, position: 'absolute' }}>
      <div className={s.overlay} onClick={setIsOpen}></div>
      {children}
    </div>,
    overlayRoot
  );
};
