import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { services, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Prodotti e servizi',
  description:
    'Fitoterapia e integratori, tisane e Fiori di Bach, alimenti biologici, cosmesi naturale, oli essenziali e consulenza naturopatica a Lavagna.',
  alternates: { canonical: '/prodotti/' },
  openGraph: {
    url: `${site.url}/prodotti/`,
    title: 'Prodotti e servizi — Erboristeria Bio&Natura Lavagna',
    description:
      'Sei reparti dedicati al benessere naturale: fitoterapia, tisane, alimentazione bio, cosmesi, naturopatia e idee regalo.',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'OfferCatalog',
  name: 'Prodotti e servizi Bio&Natura',
  url: `${site.url}/prodotti/`,
  itemListElement: services.map((service, index) => ({
    '@type': 'Offer',
    position: index + 1,
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      description: service.excerpt,
      provider: { '@id': `${site.url}/#erboristeria` },
      areaServed: 'Lavagna',
    },
  })),
};

export default function ProdottiPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Prodotti e servizi', path: '/prodotti/' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />

      <section className="wrap pt-12 pb-14 lg:pt-20">
        <p className="eyebrow">Prodotti e servizi</p>
        <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">
          Tutto quello che serve al benessere quotidiano, scelto uno per uno
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bark">
          Dalla pianta officinale all’integratore, dal tè in foglia alla crema viso: sei reparti pensati per
          accompagnarti in ogni stagione, con il consiglio di chi li conosce davvero.
        </p>
      </section>

      <section className="wrap pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className="flex flex-col rounded-4xl border border-ink/10 bg-cream/50 p-8 transition-colors hover:border-herb/40"
            >
              <span className="font-display text-sm text-sage">Reparto 0{index + 1}</span>
              <h2 className="mt-3 text-2xl">{service.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-bark">{service.excerpt}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li key={item} className="rounded-full bg-paper px-3.5 py-1.5 text-xs font-semibold text-bark">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap pb-20">
        <div className="rounded-4xl bg-ink px-6 py-12 text-cream sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl text-cream sm:text-4xl">Non trovi quello che cerchi?</h2>
              <p className="mt-4 text-cream/75">
                Ordiniamo su richiesta dai nostri fornitori: in genere il prodotto arriva in negozio in 2–3 giorni
                lavorativi. Scrivici il nome dell’articolo, pensiamo noi al resto.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contatti/" className="btn bg-cream text-ink hover:bg-paper">
                Richiedi un prodotto
              </Link>
              <a href={`tel:${site.phone}`} className="btn border border-cream/30 text-cream hover:border-cream">
                Chiama {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-bark/70">
          Gli integratori alimentari non vanno intesi come sostituti di una dieta variata, equilibrata e di uno stile
          di vita sano. Le informazioni riportate non costituiscono consiglio medico.
        </p>
      </section>
    </>
  );
}
