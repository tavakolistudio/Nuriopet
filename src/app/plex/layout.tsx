import type { Metadata } from 'next';

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
    'et sığırı takviyesi',
    'biyoyararlanım',
    'bioavailability',
    'Nurio Plex',
    'hayvan mineral takviyesi',
  ],
  authors: [{ name: 'Nurio Plex', url: 'https://nurioplex.com' }],
  creator: 'Nurio Plex',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    siteName: 'Nurio Plex',
    title: 'Nurio Plex | Advanced Chelated Mineral Nutrition',
    description:
      'Gelişmiş şelat teknolojisiyle çiftlik hayvanları için yüksek biyoyararlanımlı mineral besleme çözümü.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurio Plex | Advanced Chelated Mineral Nutrition',
    description:
      'Gelişmiş şelat teknolojisiyle çiftlik hayvanları için yüksek biyoyararlanımlı mineral besleme çözümü.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  metadataBase: new URL('https://nurioplex.com'),
};

export default function PlexLayout({ children }: { children: React.ReactNode }) {
  return children;
}
