import { groq } from 'next-sanity';
import { client } from './client';

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
    groq`*[_type == "categoryPage" && slug.current == $slug][0]{ 
  title,
  slug,
  stillsTitleImage {alt, "image": asset->url},
  stillsGallery[] {alt, "image": asset->url},
  stillsContent[]-> {
    _type == "doubleImage" => {
        "doubleImage": @ -> { ... }
    },
    _type == "fullWidthImage" => {
        "fullWidthImage": @ -> { ... }
    }
  }
}`,
    { slug, options }
  );
}
