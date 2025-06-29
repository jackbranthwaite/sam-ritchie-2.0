import React from 'react';
import Image from 'next/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlFor } from '@/sanity/urlFor';
import { WorkPage } from '@/sanity/sanity-types';

export const IdealImage = ({ image }: { image: WorkPage['titleImage'] }) => {
  if (image)
    return (
      <>
        {image?.asset && (
          <Image
            src={urlFor(image).url()}
            alt={image.alt || 'Forgot the alt'}
            width={getImageDimensions(image.asset).width}
            height={getImageDimensions(image.asset).height}
            placeholder='blur'
            blurDataURL={urlFor(image)
              .width(getImageDimensions(image.asset).width)
              .height(getImageDimensions(image.asset).height)
              .blur(10)
              .url()}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        )}
      </>
    );
};
