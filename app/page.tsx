import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { brands, fullAddress, services, site } from '@/lib/site';

export const metadata: Metadata = {
  title: `${site.name} — Erboristeria a Lavagna dal 2012`,
  description:
    'Erboristeria Bio&Natura a Lavagna (GE): fitoterapia, integratori, tisane, alimenti biologici, cosmesi naturale e consulenza naturopatica gratuita. Via Roma 143.',
  alternates: { canonical: '/' },
  openGraph: {
    url: `${site.url}/`,
    title: `${site.name} — Erboristeria a Lavagna dal 2012`,
    description:
      'Fitoterapia, cosmesi naturale, alimenti bio e naturopatia nel cuore di Lavagna. Prodotti selezionati e consigli su misura.',
  },
};

const pillars = [
  {
    title: 'Selezione consapevole',
    body: 'Ogni referenza entra in negozio solo dopo averne valutato origine, principi attivi e reale efficacia.',
  },
  {
    title: 'Consiglio su misura',
    body: 'Ti ascoltiamo prima di proporre: il rimedio giusto nasce dalle tue abitudini, non dallo scaffale.',
  },
  {
    title: 'Botteghe, non catene',
    body: 'Marchi artigianali italiani e produttori che conosciamo di persona, con filiere tracciabili.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-cream blur-3xl" />
        <div className="wrap relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <p className="eyebrow">Erboristeria · Lavagna (GE)</p>
            <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Dal 2012, la natura al servizio della salute e del benessere
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bark">
              Fitoterapia, alimentazione biologica e cosmesi naturale scelte con cura, una per una. Entra in negozio:
              ascoltiamo la tua esigenza e troviamo insieme il rimedio più adatto.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/prodotti/" className="btn btn-primary">
                Scopri prodotti e servizi
              </Link>
              <a href={`tel:${site.phone}`} className="btn btn-ghost">
                Chiama {site.phoneDisplay}
              </a>
            </div>

            <dl className="mt-12 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-bark/60">Dove</dt>
                <dd className="mt-1.5 text-sm font-semibold">{fullAddress}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-bark/60">Quando</dt>
                <dd className="mt-1.5 text-sm font-semibold">Mar – Sab · 9:00–12:30 / 15:30–19:30</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.18em] text-bark/60">Consulenza</dt>
                <dd className="mt-1.5 text-sm font-semibold">Naturopatica, gratuita su appuntamento</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-4xl border border-ink/10 bg-cream">
              <Image
                src="/images/scaffale.svg"
                alt="Scaffali dell'erboristeria Bio&Natura con barattoli di erbe e preparati"
                width={800}
                height={1000}
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="h-full w-full object-cover"
              />
            </div>
            <p className="absolute -bottom-5 left-6 rounded-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-cream">
              Oltre 10 anni a Lavagna
            </p>
          </div>
        </div>
      </section>

      <section className="wrap py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-3xl sm:text-4xl">Un’erboristeria che parte dalle persone</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="text-lg text-herb-deep">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bark">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream/70 py-16 lg:py-24">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Cosa trovi da noi</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Sei reparti, un’unica logica: qualità verificata</h2>
            </div>
            <Link href="/prodotti/" className="text-sm font-bold text-herb-deep underline underline-offset-4">
              Vedi tutto il catalogo
            </Link>
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-4xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.slug} className="bg-paper p-8">
                <span className="font-display text-sm text-sage">0{index + 1}</span>
                <h3 className="mt-3 text-xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bark">{service.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="wrap py-16 lg:py-24">
        <div className="grid items-center gap-12 rounded-4xl bg-ink px-6 py-12 text-cream sm:px-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow !text-sage">Naturopatia</p>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl">Una consulenza gratuita per capire da dove partire</h2>
            <p className="mt-5 text-cream/75">
              Sonno, digestione, stress, cambi di stagione: parlarne è il primo passo. In un colloquio riservato
              individuiamo un percorso naturale sostenibile nel tempo, sempre complementare — mai alternativo — alle
              indicazioni del tuo medico.
            </p>
            <Link href="/contatti/" className="btn mt-8 bg-cream text-ink hover:bg-paper">
              Prenota il colloquio
            </Link>
          </div>
          <Image
            src="/images/erbe.svg"
            alt="Erbe officinali illustrate"
            width={1000}
            height={700}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="w-full rounded-4xl border border-cream/15"
          />
        </div>
      </section>

      <section className="wrap pb-20">
        <p className="eyebrow">I marchi che trattiamo</p>
        <ul className="mt-6 flex flex-wrap gap-2.5">
          {brands.map((brand) => (
            <li
              key={brand}
              className="rounded-full border border-ink/12 px-4 py-2 text-sm font-semibold text-bark"
            >
              {brand}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
