import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';

export const Tag = ({
  tag,
  onClick,
  activeTags,
}: {
  tag: string;
  onClick: () => void;
  activeTags: string[];
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (activeTags.includes(tag)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [activeTags]);
  return (
    <div
      className={`${s.tagWrapper} ${isActive ? s.active : ''}`}
      onClick={onClick}
    >
      <p className={s.tag}>{tag}</p>
    </div>
  );
};
