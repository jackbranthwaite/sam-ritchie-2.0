'use client';
import React from 'react';
import s from './styles.module.scss';
// import { VideoPlayer } from 'react-datocms/video-player';
import { Wrapper } from '../wrapper';
// import { Swiper, SwiperSlide } from 'swiper/react';

export const VideoGallery = ({ data }: { data: unknown }) => {
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
  console.log(data);
  return (
    <div className={s.videoGalleryWrapper}>
      <Wrapper>
        {' '}
        {/* <VideoPlayer data={data?.videos[0].vimeoLink} /> */}
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
