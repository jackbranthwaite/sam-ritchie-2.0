'use client';
import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import { Wrapper } from '../wrapper';
import { VideoPage, VimeoEmbed } from '@/sanity/sanity-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GalleryCard } from './gallery-card';
import 'swiper/css';

export const VideoGallery = ({ data }: { data: VideoPage }) => {
  const [selectedVideo, setSelectedVideo] = useState<VimeoEmbed | null>(null);
  const [videos, setVideos] = useState<VimeoEmbed[] | null>(null);

  useEffect(() => {
    if (data.videoGallery) {
      setVideos(data.videoGallery);
    }
    if (data.videoGallery) {
      setSelectedVideo(data.videoGallery[0]);
    }
  }, []);

  if (!selectedVideo) return <>loading</>;
  return (
    <div className={s.videoGalleryWrapper}>
      <Wrapper>
        <div className={s.selectedVideoWrapper}>
          <div
            dangerouslySetInnerHTML={{ __html: selectedVideo.responsiveEmbed }}
          ></div>
          <h3 className={s.title}>{selectedVideo.title}</h3>
          <p className={s.description}>{selectedVideo.description}</p>
        </div>
        <div className={s.swiperWrapper}>
          <div className={s.leftGradient}></div>
          <Swiper slidesPerView={3} spaceBetween={32} loop>
            {videos?.map((video, i) => {
              return (
                <SwiperSlide key={i}>
                  <GalleryCard
                    thumbnail={video.thumbnail}
                    onClick={() => setSelectedVideo(video)}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className={s.rightGradient}></div>
        </div>
      </Wrapper>
    </div>
  );
};
