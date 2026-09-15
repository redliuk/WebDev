import type { Metadata, Viewport } from 'next';
import { Fraunces, Karla } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { LocalBusinessJsonLd } from '@/components/JsonLd';
import { site } from '@/lib/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
});

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name} Lavagna`,
  },
  description: site.description,
  applicationName: site.legalName,
  keywords: [
    'erboristeria Lavagna',
    'fitoterapia Lavagna',
    'integratori naturali Tigullio',
    'cosmesi naturale Lavagna',
    'naturopatia Lavagna',
    'alimentazione biologica Chiavari',
  ],
  authors: [{ name: site.legalName }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: `${site.url}/`,
    siteName: site.legalName,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: `${site.legalName} a Lavagna` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#1d4a2e',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${fraunces.variable} ${karla.variable}`}>
      <body>
        <a
          href="#contenuto"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-herb-deep focus:px-5 focus:py-3 focus:text-paper"
        >
          Vai al contenuto
        </a>
        <Header />
        <main id="contenuto">{children}</main>
        <Footer />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
