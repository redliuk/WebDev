export const site = {
  name: 'Bio&Natura',
  legalName: 'Erboristeria Bio&Natura',
  tagline: 'Erboristeria a Lavagna',
  claim: 'Dal 2012, la natura al servizio della salute e del benessere',
  description:
    'Erboristeria a Lavagna specializzata in fitoterapia, integratori, alimentazione biologica, cosmesi naturale e naturopatia.',
  // Sostituire con il dominio definitivo prima del deploy in produzione.
  url: 'https://erboristeriabioenatura.it',
  locale: 'it_IT',
  vatId: '02118060991',
  foundingYear: '2012',
  phone: '+390185189845',
  phoneDisplay: '0185 189845',
  email: 'bioenatura@gmail.com',
  address: {
    street: 'Via Roma, 143',
    postalCode: '16033',
    city: 'Lavagna',
    province: 'GE',
    region: 'Liguria',
    country: 'IT',
  },
  geo: {
    latitude: 44.3067,
    longitude: 9.3446,
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Roma+143+16033+Lavagna+GE',
  social: {
    facebook: 'https://www.facebook.com/bioenatura.it',
    instagram: 'https://www.instagram.com/bioenaturaerboristeria/',
  },
  // TODO: confermare gli orari reali con il negozio prima della pubblicazione.
  openingHours: [
    { days: 'Lunedì', hours: 'Chiuso', closed: true },
    { days: 'Martedì – Venerdì', hours: '9:00 – 12:30 / 15:30 – 19:30' },
    { days: 'Sabato', hours: '9:00 – 12:30 / 15:30 – 19:30' },
    { days: 'Domenica', hours: 'Chiuso', closed: true },
  ],
  // Formato Schema.org OpeningHoursSpecification
  openingHoursSchema: [
    {
      days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '12:30',
    },
    {
      days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '15:30',
      closes: '19:30',
    },
  ],
} as const;

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/chi-siamo/', label: 'Chi siamo' },
  { href: '/prodotti/', label: 'Prodotti e servizi' },
  { href: '/contatti/', label: 'Contatti' },
] as const;

export const services = [
  {
    slug: 'fitoterapia',
    title: 'Fitoterapia e integratori',
    excerpt:
      'Piante officinali, gemmoderivati, drenanti, depurativi e vitamine per sostenere l’equilibrio dell’organismo.',
    items: ['Estratti e tinture madri', 'Gemmoderivati', 'Integratori alimentari', 'Vitamine e minerali'],
  },
  {
    slug: 'tisane',
    title: 'Tisane, tè e infusi',
    excerpt:
      'Miscele sfuse preparate in negozio, tè in foglia selezionati e Fiori di Bach personalizzati sulla persona.',
    items: ['Tisane su misura', 'Tè in foglia', 'Infusi e karkadè', 'Fiori di Bach'],
  },
  {
    slug: 'alimentazione',
    title: 'Alimentazione biologica',
    excerpt:
      'Alimenti biologici, senza glutine e senza lattosio, superfood e proposte per ogni regime alimentare.',
    items: ['Prodotti bio certificati', 'Senza glutine e lattosio', 'Superfood', 'Dolcificanti naturali'],
  },
  {
    slug: 'cosmesi',
    title: 'Cosmesi naturale',
    excerpt:
      'Viso, corpo e capelli con formule naturali e certificate, dalla detergenza quotidiana ai trattamenti mirati.',
    items: ['Skincare viso e corpo', 'Tinture e haircare', 'Saponi artigianali', 'Solari naturali'],
  },
  {
    slug: 'naturopatia',
    title: 'Consulenza naturopatica',
    excerpt:
      'Un colloquio gratuito per individuare il rimedio più adatto al tuo momento, senza sostituire il parere medico.',
    items: ['Colloquio gratuito', 'Percorsi personalizzati', 'Test del capello', 'Consigli stagionali'],
  },
  {
    slug: 'oggettistica',
    title: 'Oli essenziali e oggettistica',
    excerpt:
      'Oli essenziali puri, profumatori d’ambiente e una sezione dedicata alle idee regalo originali.',
    items: ['Oli essenziali puri', 'Diffusori e profumatori', 'Idee regalo', 'Confezioni personalizzate'],
  },
] as const;

export const brands = [
  'Biosline',
  'Erboristeria Magentina',
  'Sanotint',
  'Guam',
  'La Saponaria',
  'Zuccari',
  "Nature's",
  'Biokap',
  'Nutrigea',
  'Algem',
  'Naturunique',
  'Yogi Tea',
  'Himalaya',
  'Herboveneta',
  'Kos',
] as const;
