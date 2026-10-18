import { Link } from 'react-router-dom';
import { setConsent, useConsent } from '../consent';

/**
 * Vraagt toestemming voor Analytics. Weigeren is net zo makkelijk als
 * accepteren, en zonder keuze wordt er niets gemeten.
 */
export default function CookieBanner() {
  const consent = useConsent();
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-titel"
      className="fixed inset-x-0 bottom-0 z-50 bg-ink text-paper border-t-2 border-lime shadow-[0_-8px_32px_rgba(26,26,23,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <div className="md:flex-1">
          <h2 id="cookie-titel" className="font-semibold">
            Cookies
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-paper/75">
            We willen graag meten hoe de site gebruikt wordt, met Google Analytics. Dat doen we
            alleen als je dat goed vindt. Meer hierover in onze{' '}
            <Link to="/privacy-policy" className="text-lime underline underline-offset-4">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3 shrink-0">
          <button type="button" onClick={() => setConsent('granted')} className="btn btn-lime">
            Accepteren
          </button>
          <button type="button" onClick={() => setConsent('denied')} className="btn btn-outline-light">
            Alleen noodzakelijk
          </button>
        </div>
      </div>
    </div>
  );
}
