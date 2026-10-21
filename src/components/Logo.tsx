interface Props {
  /** Op een lichte of donkere ondergrond. */
  tone?: 'ink' | 'light';
  /** Basisgrootte van het beeldmerk; de rest schaalt mee in em. */
  size?: string;
  className?: string;
  /** Laat de onderregel weg, bijvoorbeeld in een krappe navigatiebalk. */
  showTagline?: boolean;
}

/**
 * Het woordmerk zoals het op de shirts staat: BBM gecentreerd boven
 * BODY BY MARCEL, met streepjes naast de onderregel. Gezet in Tinos, dat
 * metrisch overeenkomt met de Times New Roman van het originele logo.
 *
 * Bewust HTML in plaats van een los SVG-bestand: een SVG die via <img> wordt
 * geladen kan de webfont van de pagina niet gebruiken en valt dan terug op
 * een lokaal lettertype.
 */
export default function Logo({
  tone = 'ink',
  size = '1.75rem',
  className = '',
  showTagline = true,
}: Props) {
  const wordmark = tone === 'ink' ? 'text-ink' : 'text-paper';
  const tagline = tone === 'ink' ? 'text-stone' : 'text-paper/60';
  const rule = tone === 'ink' ? 'bg-hairline' : 'bg-paper/35';

  return (
    <span
      className={`inline-flex flex-col items-center leading-none ${className}`}
      style={{ fontFamily: 'var(--font-logo)', fontSize: size }}
    >
      <span className="sr-only">Body by Marcel, fitness en personal training</span>

      <span aria-hidden="true" className="flex flex-col items-center leading-none">
        <span className="font-bold text-lime tracking-[0.02em]">BBM</span>

        <span
          className={`${wordmark} font-normal tracking-[0.11em] mt-[0.14em]`}
          style={{ fontSize: '0.46em' }}
        >
          BODY BY MARCEL
        </span>

        {showTagline && (
          <span
            className={`${tagline} flex items-center gap-[0.5em] whitespace-nowrap mt-[0.5em]`}
            style={{ fontSize: '0.26em' }}
          >
            <span className={`${rule} h-px w-[1.6em] flex-shrink-0`} />
            Fitness &amp; Personal Training
            <span className={`${rule} h-px w-[1.6em] flex-shrink-0`} />
          </span>
        )}
      </span>
    </span>
  );
}
