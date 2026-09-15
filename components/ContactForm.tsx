'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'sent' | 'error';

// Sostituire con il proprio endpoint Formspree (https://formspree.io/forms).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? 'https://formspree.io/f/xxxxxxxx';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (!response.ok) throw new Error('Invio non riuscito');

      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  const field =
    'mt-1.5 w-full rounded-2xl border border-ink/15 bg-paper px-4 py-3 text-sm outline-none transition-colors placeholder:text-bark/40 focus:border-herb';

  return (
    <form
      onSubmit={handleSubmit}
      name="contatti"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="rounded-4xl border border-ink/10 bg-cream/60 p-6 sm:p-8"
    >
      {/* Netlify Forms: campo tecnico richiesto per il rilevamento statico */}
      <input type="hidden" name="form-name" value="contatti" />
      <p className="hidden">
        <label>
          Non compilare: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Nome e cognome *
          <input required name="nome" autoComplete="name" className={field} placeholder="Maria Rossi" />
        </label>
        <label className="block text-sm font-semibold">
          Email *
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={field}
            placeholder="maria@esempio.it"
          />
        </label>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Telefono
          <input type="tel" name="telefono" autoComplete="tel" className={field} placeholder="333 1234567" />
        </label>
        <label className="block text-sm font-semibold">
          Motivo del contatto
          <select name="motivo" className={field} defaultValue="Informazioni">
            <option>Informazioni</option>
            <option>Consulenza naturopatica</option>
            <option>Disponibilità prodotto</option>
            <option>Idee regalo</option>
          </select>
        </label>
      </div>

      <label className="mt-4 block text-sm font-semibold">
        Messaggio *
        <textarea required name="messaggio" rows={5} className={field} placeholder="Come possiamo aiutarti?" />
      </label>

      <label className="mt-4 flex items-start gap-3 text-xs leading-relaxed text-bark">
        <input required type="checkbox" name="privacy" className="mt-0.5 h-4 w-4 accent-[#1d4a2e]" />
        <span>
          Acconsento al trattamento dei dati per essere ricontattato, secondo l’informativa privacy (art. 13 GDPR).
        </span>
      </label>

      <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-6 w-full disabled:opacity-60 sm:w-auto">
        {status === 'sending' ? 'Invio in corso…' : 'Invia richiesta'}
      </button>

      <p aria-live="polite" className="mt-4 text-sm">
        {status === 'sent' && (
          <span className="text-herb-deep">Messaggio inviato. Ti rispondiamo entro 24 ore lavorative.</span>
        )}
        {status === 'error' && (
          <span className="text-clay">
            Invio non riuscito. Scrivici a <strong>bioenatura@gmail.com</strong> o chiamaci in negozio.
          </span>
        )}
      </p>
    </form>
  );
}
