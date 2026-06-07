import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nurio | Gerçek Emilim. Gerçek Sonuç.',
  description:
    'Nurio, gelişmiş şelat teknolojisiyle formüle edilmiş kedi ve köpek mineral takviyesidir. Minerallerin vücutta daha stabil kalmasını ve daha etkili kullanılmasını destekler.',
  keywords: [
    'şelatlı mineral',
    'pet mineral takviyesi',
    'kedi mineral',
    'köpek mineral',
    'Nurio Cat',
    'Nurio Dog',
    'chelated mineral',
    'evcil hayvan takviye',
  ],
  authors: [{ name: 'Nurio Pet', url: 'https://advanimal.com.tr' }],
  creator: 'Nurio Pet',
  publisher: 'Nurio Pet',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://advanimal.com.tr',
    siteName: 'Nurio Pet',
    title: 'Nurio | Gerçek Emilim. Gerçek Sonuç.',
    description:
      'Gelişmiş şelat teknolojisiyle kedi ve köpekler için yeni nesil mineral takviyesi. Takviye değil, emilim farkı.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nurio Pet — Şelatlı Mineral Takviyesi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nurio | Gerçek Emilim. Gerçek Sonuç.',
    description:
      'Gelişmiş şelat teknolojisiyle kedi ve köpekler için yeni nesil mineral takviyesi.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  metadataBase: new URL('https://advanimal.com.tr'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
