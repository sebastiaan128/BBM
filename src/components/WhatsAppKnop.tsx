import { MessageCircle } from 'lucide-react';
import { useConsent } from '../consent';
import { site } from '../site';

/** '06-42059446' → '31642059446', het formaat dat wa.me verwacht. */
function internationaal(nummer: string) {
  const cijfers = nummer.replace(/\D/g, '');
  return cijfers.startsWith('0') ? `31${cijfers.slice(1)}` : cijfers;
}

/**
 * Zwevende knop rechtsonder die een WhatsApp-gesprek opent. Staat uit als
 * het nummer in /admin leeg is, en wacht tot de cookiebalk weg is zodat ze
 * niet over elkaar heen liggen.
 */
export default function WhatsAppKnop() {
  const consent = useConsent();
  const { nummer, bericht } = site.whatsapp;
  if (!nummer || consent === null) return null;

  const href = `https://wa.me/${internationaal(nummer)}${bericht ? `?text=${encodeURIComponent(bericht)}` : ''}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een bericht via WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-ink text-paper border border-ink-soft px-4 py-3 text-sm font-medium shadow-[0_8px_24px_rgba(26,26,23,0.25)] hover:text-lime transition-colors duration-150 ease-smooth"
    >
      <MessageCircle size={18} className="text-lime" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
