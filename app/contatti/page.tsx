import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { fullAddress, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Erboristeria Bio&Natura, Via Roma 143 a Lavagna (GE). Telefono 0185 189845, orari di apertura, mappa e modulo di contatto.',
  alternates: { canonical: '/contatti/' },
  openGraph: {
    url: `${site.url}/contatti/`,
    title: 'Contatti — Erboristeria Bio&Natura Lavagna',
    description: `${fullAddress} · ${site.phoneDisplay} · ${site.email}`,
  },
};

export default function ContattiPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contatti', path: '/contatti/' },
        ]}
      />

      <section className="wrap pt-12 pb-14 lg:pt-20">
        <p className="eyebrow">Contatti</p>
        <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">Resta in contatto con noi</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bark">
          Siamo in Via Roma, nel centro di Lavagna. Passa in negozio, chiamaci o scrivici: rispondiamo entro 24 ore
          lavorative.
        </p>
      </section>

      <section className="wrap grid gap-10 pb-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl">Indirizzo</h2>
            <address className="mt-2 not-italic text-bark">{fullAddress}</address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-bold text-herb-deep underline underline-offset-4"
            >
              Apri in Google Maps
            </a>
          </div>

          <div>
            <h2 className="text-xl">Telefono ed email</h2>
            <p className="mt-2 text-bark">
              <a className="hover:text-herb-deep" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
              <br />
              <a className="hover:text-herb-deep" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl">Orari di apertura</h2>
            <ul className="mt-3 divide-y divide-ink/10 border-y border-ink/10 text-sm">
              {site.openingHours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4 py-2.5">
                  <span className="font-semibold">{row.days}</span>
                  <span className={'closed' in row && row.closed ? 'text-bark/50' : 'text-bark'}>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl">Social</h2>
            <div className="mt-3 flex gap-3">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !py-2.5">
                Facebook
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !py-2.5"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>

      <section className="wrap pb-20">
        <div className="overflow-hidden rounded-4xl border border-ink/10">
          <iframe
            title={`Mappa di ${site.legalName} a Lavagna`}
            src="https://www.google.com/maps?q=Via%20Roma%20143%2C%2016033%20Lavagna%20GE&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[22rem] w-full border-0"
          />
        </div>
      </section>
    </>
  );
}
