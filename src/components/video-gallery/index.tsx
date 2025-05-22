'use client';
import React from 'react';
import s from './styles.module.scss';
import { Wrapper } from '../wrapper';
import { VideoPage } from '@/sanity/sanity-types';
// import { Swiper, SwiperSlide } from 'swiper/react';

export const VideoGallery = ({ data }: { data: VideoPage }) => {
  // const [selectedVideo, setSelectedVideo] = useState<UploadVideoField | null>(
  //   null
  // );
  // const [videos, setVideos] = useState<VideoRecord[] | null>(null);

  // useEffect(() => {
  //   if (data.videos) {
  //     setVideos(data.videos);
  //   }
  //   if (data.videos[0].video?.video) {
  //     setSelectedVideo(data.videos[0].video?.video);
  //   }
  // }, []);
  console.log(data as VideoPage);
  return (
    <div className={s.videoGalleryWrapper}>
      <Wrapper>
        {data.videoGallery?.map((item) => {
          return (
            <video key={item._key} height={500} width={1000}>
              <source src={item.vimeo?.pictures.sizes[0].link}></source>
            </video>
          );
        })}
      </Wrapper>
    </div>
  );
};

{
  /* <Swiper>
{videos?.map((video, i) => {
  if (
    video.video?.video?.muxPlaybackId === selectedVideo?.muxPlaybackId
  )
    return;
  if (video.video?.video) {
    return (
      <SwiperSlide
        key={video.video?.video?.muxPlaybackId}
        onClick={() =>
          setSelectedVideo(video.video?.video as UploadVideoField)
        }
      >
        {i}
      </SwiperSlide>
    );
  }
})}
</Swiper> */
}
