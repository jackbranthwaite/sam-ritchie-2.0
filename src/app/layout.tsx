import type { Metadata } from 'next';
import './globals.scss';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Menu } from '@/sanity/sanity-types';
import { getMenu } from '@/sanity/sanity.query';
import '@/styles/main.scss';
import { Sansita } from 'next/font/google';
import { Nunito } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Sam Ritchie',
  description: 'Photographer and Videographer',
};

const sansita = Sansita({
  weight: ['400', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
});

const nunito = Nunito({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
});

const options = { next: { revalidate: 30 } };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu: Menu[] = await getMenu(options);
  return (
    <html lang='en' className={`${sansita.className} ${nunito.className}`}>
      <body>
        <Header menu={menu[0]} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
