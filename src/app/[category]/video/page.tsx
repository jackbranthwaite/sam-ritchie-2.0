import { VideoGallery } from '@/components/video-gallery';
import { getSingleVideos } from '@/sanity/sanity.query';
import React from 'react';

const options = { next: { revalidate: 30 } };

export default async function VideoPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const slug = (await params).category;
  const videos = await getSingleVideos(slug, options);
  return (
    <div>
      <VideoGallery data={videos} />
    </div>
  );
}
