import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">Errore 404</p>
      <h1 className="mt-5 text-4xl sm:text-5xl">Questa pagina non è sullo scaffale</h1>
      <p className="mt-5 max-w-md text-bark">
        Il link potrebbe essere vecchio o errato. Torna alla home oppure scrivici: troviamo noi quello che cerchi.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Torna alla home
        </Link>
        <Link href="/contatti/" className="btn btn-ghost">
          Contattaci
        </Link>
      </div>
    </section>
  );
}
