export type CategoryPage = {
  _id: string;
  title: string;
  slug: string;
  stillsTitleImage: { alt: string; image: string };
  stillsGallery: [];
  videosTitleImage: { alt: string; image: string };
  videoGallery: [];
};

export type StillsPage = {
  title: string;
  slug: string;
  stillsTitleImage: { alt: string; image: string };
  stillsGallery: [];
};
