import { groq } from 'next-sanity';
import { client } from './client';
import { processVimeoUrl } from '@/utils/vimeoHelpers';

export async function getSingleCategory(
  slug: string,
  options: { next: { revalidate: number } }
) {
  return await client.fetch(
    groq`*[_type == "categoryPage" && slug.current == $slug][0]{  
    _id, 
    title,
    slug,
    stillsTitleImage {alt, "image": asset->url},
    videosTitleImage {alt, "image": asset->url},
}`,
    { slug, options }
  );
}

export async function getSingleStills(
  slug: string,
  options: { next: { revalidate: number } }
) {
  return client.fetch(
    groq`
        *[_type == "categoryPage" && slug.current == $slug][0] {
          stillsTitleImage {alt, "image": asset->url},
          stillsGallery[] {alt, "image": asset->url},
          title,
          content[] {
            _type == "block" => {
              ...
            },
            _type == "flexibleImageContainer" => {
              _type,
              title,
              imageBlocks[] {
                _type,
                _type == "dualImageBlock" => {
                  leftImage {
                    asset->{
                      _id,
                      url,
                      metadata {
                        dimensions
                      }
                    },
                    hotspot,
                    crop
                  },
                  rightImage {
                    asset->{
                      _id,
                      url,
                      metadata {
                        dimensions
                      }
                    },
                    hotspot,
                    crop
                  },
                  caption
                },
                _type == "singleImageBlock" => {
                  image {
                    asset->{
                      _id,
                      url,
                      metadata {
                        dimensions
                      }
                    },
                    hotspot,
                    crop
                  },
                  caption,
                  fullWidth
                }
              }
            }
          }
        }
`,
    { slug, options }
  );
}

export async function getSingleVideos(
  slug: string,
  options: { next: { revalidate: number } }
) {
  const singleVideo = await client.fetch(
    groq`*[_type == "categoryPage" && slug.current == $slug][0]{
      _id,
      _rev,
      title,
      slug,
      videosTitleImage{
        asset->{
          _id,
          url,
          metadata
        },
        alt
      },
      videoGallery[]
    }
  `,
    { slug, options }
  );

  return {
    ...singleVideo,
    videoGallery: singleVideo.videoGallery.map((video: { url: string }) => ({
      ...video,
      ...processVimeoUrl(video.url, {
        autoplay: false,
        muted: true,
        loop: true,
      }),
    })),
  };
}

export async function getMenu(options: { next: { revalidate: number } }) {
  const menu = await client.fetch(
    groq`*[_type == "menu"]{
      menu[] {
        _id,
        title,
        order,
        reference-> {
          _type,
          title,
          slug
        }
      }
    }
  `,
    { options }
  );

  return menu;
}
