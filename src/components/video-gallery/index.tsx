'use client';
import React, { useEffect, useRef, useState } from 'react';
import s from './styles.module.scss';
import { Wrapper } from '../wrapper';
import { VideoPage, VimeoEmbed } from '@/sanity/sanity-types';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { GalleryCard } from './gallery-card';
import 'swiper/css';
import { useWindowSize } from '@/utils/useWindowSize';
import { Pagination } from 'swiper/modules';
import Left from '@/assets/chevron-left.svg';
import Right from '@/assets/chevron-right.svg';

export const VideoGallery = ({ data }: { data: VideoPage }) => {
  const [selectedVideo, setSelectedVideo] = useState<VimeoEmbed | null>(null);
  const [videos, setVideos] = useState<VimeoEmbed[] | null>(null);
  const [slides, setSlides] = useState(3);
  const { width } = useWindowSize();
  const swiperRef = useRef<SwiperRef | null>(null);

  useEffect(() => {
    if (width && width < 590) {
      setSlides(1);
    } else if (width && width < 767) {
      setSlides(2);
    } else {
      setSlides(3);
    }
  }, [width]);

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
          <Swiper
            slidesPerView={slides}
            spaceBetween={32}
            loop
            modules={[Pagination]}
            pagination={{
              el: '.swiper-pagination',
              type: 'bullets',
              bulletClass: '.swiper-pagination-bullet',
              bulletActiveClass: '.swiper-pagination-bullet-active',
            }}
            ref={swiperRef}
          >
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
        <div className={s.navigation}>
          <div
            className={s.navButton}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <Left color={'#534741'} width={12.5} height={25} />
          </div>
          <div className='swiper-pagination'></div>
          <div
            className={s.navButton}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <Right color={'#534741'} width={12.5} height={25} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
