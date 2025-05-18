import { VideoGallery } from '@/components/video-gallery';
import React from 'react';

export default async function VideoPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <VideoGallery data={''} />
    </div>
  );
}
