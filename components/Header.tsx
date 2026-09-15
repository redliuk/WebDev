'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/site';
import { Logo } from './Logo';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
      <div className="wrap flex h-18 items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
          <Logo className="h-9 w-9 text-herb-deep" />
          <span className="leading-tight">
            <span className="block font-display text-xl text-ink">{site.name}</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-bark/70">
              Erboristeria · Lavagna
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(item.href) ? 'bg-herb-deep/10 text-herb-deep' : 'text-bark hover:text-herb-deep'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a href={`tel:${site.phone}`} className="btn btn-primary ml-2 !px-5 !py-2.5">
            {site.phoneDisplay}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
        >
          <span className="sr-only">{open ? 'Chiudi menu' : 'Apri menu'}</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-ink/10 bg-paper lg:hidden" aria-label="Navigazione mobile">
          <ul className="wrap flex flex-col py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`block border-b border-ink/5 py-3.5 text-base font-semibold ${
                    isActive(item.href) ? 'text-herb-deep' : 'text-bark'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <a href={`tel:${site.phone}`} className="btn btn-primary w-full">
                Chiama {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
