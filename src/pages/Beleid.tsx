import { Link } from 'react-router-dom';
import { site, telLink, mailLink } from '../site';

export interface BeleidContent {
  titel: string;
  intro: string;
  /** Alinea's binnen een sectie zijn gescheiden door een lege regel. */
  secties: { kop: string; tekst: string }[];
}

/**
 * Tekstpagina voor de privacy policy en de algemene voorwaarden. De inhoud
 * staat in src/content/paginas/ en is via /admin aan te passen.
 */
export default function Beleid({ content }: { content: BeleidContent }) {
  return (
    <div className="bg-paper">
      <article className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-8 py-16 md:py-24">
        <span className="eyebrow">Body by Marcel</span>
        <h1 className="display-lg mt-6 text-ink">{content.titel}</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">{content.intro}</p>

        <div className="mt-12 border-t border-hairline">
          {content.secties.map((s) => (
            <section key={s.kop} className="py-7 border-b border-hairline">
              <h2 className="font-semibold text-ink">{s.kop}</h2>
              {s.tekst.split(/\n\s*\n/).map((alinea, i) => (
                <p key={i} className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {alinea}
                </p>
              ))}
            </section>
          ))}
        </div>

        <address className="not-italic mt-10 text-sm text-stone leading-relaxed">
          Body by Marcel, {site.contact.straat}, {site.contact.postcodePlaats}
          <br />
          Telefoon:{' '}
          <a href={telLink} className="mono text-moss underline underline-offset-4">
            {site.contact.telefoon}
          </a>
          <br />
          E-mail:{' '}
          <a href={mailLink} className="text-moss underline underline-offset-4">
            {site.contact.email}
          </a>
        </address>

        <p className="mt-8 text-sm">
          <Link to="/" className="text-moss underline underline-offset-4">
            Terug naar de homepage
          </Link>
        </p>
      </article>
    </div>
  );
}
