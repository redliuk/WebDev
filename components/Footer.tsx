import Link from 'next/link';
import { fullAddress, nav, site } from '@/lib/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream/80">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9 text-sage" />
            <span className="font-display text-xl text-cream">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{site.claim}.</p>
        </div>

        <div>
          <h2 className="font-display text-base text-cream">Dove siamo</h2>
          <address className="mt-4 space-y-2 text-sm not-italic">
            <p>{fullAddress}</p>
            <p>
              <a className="hover:text-cream" href={`tel:${site.phone}`}>
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-cream" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>

        <div>
          <h2 className="font-display text-base text-cream">Orari</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {site.openingHours.map((row) => (
              <li key={row.days} className="flex justify-between gap-4">
                <span>{row.days}</span>
                <span className={'closed' in row && row.closed ? 'text-cream/45' : 'text-cream'}>{row.hours}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-base text-cream">Naviga</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-cream" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/25 px-4 py-1.5 text-xs hover:border-cream"
            >
              Facebook
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/25 px-4 py-1.5 text-xs hover:border-cream"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} — P.IVA {site.vatId}
          </p>
          <p className="text-cream/50">
            I prodotti erboristici non sostituiscono il parere del medico né una dieta variata ed equilibrata.
          </p>
        </div>
      </div>
    </footer>
  );
}
