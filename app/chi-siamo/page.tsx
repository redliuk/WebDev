import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { brands, site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Chi siamo',
  description:
    'La storia di Bio&Natura, erboristeria di Lavagna attiva dal 2012: selezione dei prodotti, marchi trattati e approccio alla consulenza.',
  alternates: { canonical: '/chi-siamo/' },
  openGraph: {
    url: `${site.url}/chi-siamo/`,
    title: 'Chi siamo — Erboristeria Bio&Natura Lavagna',
    description:
      'Fitoterapia, alimentazione e cosmesi naturale: come scegliamo i prodotti e come lavoriamo con i nostri clienti.',
  },
};

const milestones = [
  { year: '2012', text: 'Apre Bio&Natura in Via Roma, nel centro di Lavagna.' },
  { year: '2016', text: 'Nasce il reparto dedicato all’alimentazione biologica e senza glutine.' },
  { year: '2019', text: 'Avviamo le consulenze naturopatiche su appuntamento.' },
  { year: 'Oggi', text: 'Oltre 15 marchi selezionati e una clientela che arriva da tutto il Tigullio.' },
];

export default function ChiSiamoPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Chi siamo', path: '/chi-siamo/' },
        ]}
      />

      <section className="wrap pt-12 pb-16 lg:pt-20">
        <p className="eyebrow">Chi siamo</p>
        <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl">Bio&amp;Natura, l’erboristeria di Lavagna</h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5 text-lg leading-relaxed text-bark">
            <p>
              Tutti i prodotti presenti in negozio sono selezionati per rispondere a esigenze reali e garantire
              benefici concreti. Operiamo nei campi della fitoterapia, dell’alimentazione e della cosmesi naturale,
              con un’offerta completa per chi cerca i nostri articoli per necessità o per passione.
            </p>
            <p>
              Arricchisce la proposta una sezione dedicata all’oggettistica, per chi è alla ricerca di idee regalo
              originali e ricercate: confezioni preparate al momento, con prodotti scelti insieme.
            </p>
            <p>
              Crediamo che il valore di un’erboristeria stia nel tempo dedicato a ogni persona. Per questo non
              vendiamo “il prodotto del mese”: ascoltiamo, facciamo domande e, quando serve, ti diciamo anche che la
              risposta giusta è rivolgersi al medico.
            </p>
          </div>

          <div className="overflow-hidden rounded-4xl border border-ink/10 bg-cream">
            <Image
              src="/images/consulenza.svg"
              alt="Il banco di consulenza dell'erboristeria Bio&Natura"
              width={900}
              height={900}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream/70 py-16 lg:py-20">
        <div className="wrap">
          <h2 className="text-3xl sm:text-4xl">Le tappe</h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item) => (
              <li key={item.year} className="border-t border-ink/15 pt-5">
                <span className="font-display text-3xl text-herb-deep">{item.year}</span>
                <p className="mt-3 text-sm leading-relaxed text-bark">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap py-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Solo i migliori marchi</h2>
            <p className="mt-4 text-bark">
              Laboratori italiani, filiere corte e aziende storiche dell’erboristeria: se un marchio non convince noi,
              non arriva sui nostri scaffali.
            </p>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-4xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {brands.map((brand) => (
              <li key={brand} className="bg-paper px-5 py-4 text-sm font-semibold text-bark">
                {brand}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-4xl border border-ink/10 bg-cream/60 p-8 text-center sm:p-12">
          <h2 className="text-2xl sm:text-3xl">Vieni a trovarci in Via Roma 143</h2>
          <p className="mx-auto mt-3 max-w-xl text-bark">
            Il modo migliore per conoscerci è entrare: annusare le tisane, farsi consigliare, prendersi il tempo che
            serve.
          </p>
          <Link href="/contatti/" className="btn btn-primary mt-7">
            Come raggiungerci
          </Link>
        </div>
      </section>
    </>
  );
}
