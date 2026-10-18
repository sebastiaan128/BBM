import { Link } from 'react-router-dom';
import MapEmbed from './MapEmbed';
import { Regels } from './Tekst';
import content from '../content/home.json';
import { site, telLink, mailLink } from '../site';

const contact = content.contact;
const c = site.contact;

const details = [
  { label: 'Locatie', lines: [c.straat, c.postcodePlaats], href: c.mapsLink, linkText: 'Op de kaart' },
  { label: 'Telefoon', lines: [c.telefoon], href: telLink, linkText: 'Bel ons' },
  { label: 'E-mail', lines: [c.email], href: mailLink, linkText: 'Stuur een mail' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div data-reveal>
            <span className="eyebrow">{contact.eyebrow}</span>
            <h2 className="display-lg mt-6 text-ink">
              <Regels tekst={contact.titel} />
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink-soft">{contact.intro}</p>

            <dl className="mt-10 border-t border-hairline">
              {details.map((item) => (
                <div
                  key={item.label}
                  className="grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline"
                >
                  <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone sm:pt-0.5">
                    {item.label}
                  </dt>
                  <dd>
                    {item.lines.map((line) => (
                      <p key={line} className="text-[0.9375rem] text-ink">
                        {line}
                      </p>
                    ))}
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block mt-1.5 mono text-[0.6875rem] uppercase tracking-[0.14em] text-moss underline underline-offset-4 decoration-1 hover:decoration-2"
                    >
                      {item.linkText}
                    </a>
                  </dd>
                </div>
              ))}

              <div className="grid sm:grid-cols-[7rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline">
                <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone sm:pt-0.5">
                  Open
                </dt>
                <dd className="space-y-1">
                  {site.openingstijden.map((row) => (
                    <p key={row.dagen} className="flex justify-between gap-4 text-[0.9375rem] max-w-xs">
                      <span className="text-ink-soft">{row.dagen}</span>
                      <span className="mono text-ink text-right whitespace-pre">{row.tijden}</span>
                    </p>
                  ))}
                  {site.openingstijdenNotitie && (
                    <p className="pt-1 text-sm text-stone max-w-xs">{site.openingstijdenNotitie}</p>
                  )}
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/proefdag" className="btn btn-lime">
                Plan je proefdag
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Naar het contactformulier
              </Link>
            </div>
          </div>

          <div className="aspect-[4/3] lg:aspect-[4/5] border border-hairline bg-mist" data-reveal>
            <MapEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
