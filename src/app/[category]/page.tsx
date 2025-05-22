import { TitlePage } from '@/components/title-page';
import { CategoryPage } from '@/sanity/sanity-types';
import { getSingleCategory } from '@/sanity/sanity.query';

// Dynamic metadata for SEO
// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const slug = params.project;
//   const categoryPage: CategoryPage = await getSingleCategory(slug);

//   return {
//     title: `${categoryPage.name} | Project`,
//     description: projcategoryPageect.tagline,
//     openGraph: {
//       images:
//         categoryPage.coverImage?.image || 'add-a-fallback-project-image-here',
//       title: categoryPage.name,
//       description: categoryPage.tagline,
//     },
//   };
// }
const options = { next: { revalidate: 30 } };

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const slug = (await params).category;
  const post: CategoryPage = await getSingleCategory(slug, options);
  return (
    <div>
      <TitlePage data={post} />
    </div>
  );
}
