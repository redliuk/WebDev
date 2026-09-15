import { fullAddress, site } from '@/lib/site';

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  '@id': `${site.url}/#erboristeria`,
  name: site.legalName,
  alternateName: site.name,
  description: site.description,
  url: `${site.url}/`,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/og-image.svg`,
  logo: `${site.url}/icon.svg`,
  foundingDate: site.foundingYear,
  vatID: site.vatId,
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Contanti, Carta di credito, Bancomat',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    addressCountry: site.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  hasMap: site.mapsUrl,
  areaServed: ['Lavagna', 'Chiavari', 'Sestri Levante', 'Tigullio'],
  sameAs: [site.social.facebook, site.social.instagram],
  openingHoursSpecification: site.openingHoursSchema.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  })),
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: `${site.name} — ${site.tagline}`,
  inLanguage: 'it-IT',
  publisher: { '@id': `${site.url}/#erboristeria` },
};

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // Dati statici generati a build time, nessun input utente.
      dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusiness, website]) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const businessSummary = `${site.legalName} — ${fullAddress}`;
