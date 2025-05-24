import React from 'react';
import s from './styles.module.scss';

export const GalleryCard = ({
  thumbnail,
  onClick,
}: {
  thumbnail: string;
  onClick: () => void;
}) => {
  return (
    <div className={s.galleryCardWrapper} onClick={onClick}>
      <img src={thumbnail} />
    </div>
  );
};
