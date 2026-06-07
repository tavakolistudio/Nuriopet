import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nurio Plex | Gerçek Performans, Gerçek Emilimle Başlar',
  description:
    'Nurio Plex, gelişmiş şelat teknolojisiyle çiftlik hayvanlarında mineral biyoyararlanımını destekler. Süt sığırı, et sığırı, koyun ve keçi için profesyonel mineral besleme çözümü.',
  keywords: [
    'şelatlı mineral',
    'chelated mineral',
    'hayvan besleme',
    'livestock mineral supplement',
    'süt sığırı takviyesi',
    'biyoyararlanım',
    'bioavailability',
    'Nurio Plex',
    'Advanced Chelated Compound Technology',
  ],
  authors: [{ name: 'Nurio Plex', url: 'https://nurioplex.com' }],
  creator: 'Nurio Plex',
  publisher: 'Nurio Plex',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Nurio Plex',
    title: 'Nurio Plex | Advanced Chelated Mineral Nutrition',
    description:
      'Gelişmiş şelat teknolojisiyle çiftlik hayvanları için yüksek biyoyararlanımlı mineral besleme çözümü.',
    images: [
      {
        url: '/images/plex-product.png',
        width: 1200,
        height: 675,
        alt: 'Nurio Plex — Advanced Chelated Mineral Supplement for Livestock',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurio Plex | Advanced Chelated Mineral Nutrition',
    description:
      'Gelişmiş şelat teknolojisiyle çiftlik hayvanları için yüksek biyoyararlanımlı mineral besleme çözümü.',
    images: ['/images/plex-product.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  metadataBase: new URL('https://nurioplex.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
