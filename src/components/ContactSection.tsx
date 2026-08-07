import { Link } from 'react-router-dom';

const details = [
  {
    label: 'Locatie',
    lines: ['Rijksstraatweg 125', '3921 AD Elst (U)'],
    href: 'https://maps.google.com/?q=Rijksstraatweg+125+Elst+Utrecht',
    linkText: 'Op de kaart',
  },
  { label: 'Telefoon', lines: ['06-42059446'], href: 'tel:0642059446', linkText: 'Bel ons' },
  {
    label: 'E-mail',
    lines: ['info@bodybymarcel.nl'],
    href: 'mailto:info@bodybymarcel.nl',
    linkText: 'Stuur een mail',
  },
];

/* Zondag gesloten, gelijk aan het rooster en de proefdagkalender. */
const openingHours = [
  { day: 'Maandag t/m vrijdag', hours: '06:00 – 21:00' },
  { day: 'Zaterdag', hours: '08:00 – 16:00' },
  { day: 'Zondag', hours: 'Gesloten' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="display-lg mt-6 text-ink">
              Kom een keer
              <br />
              kijken
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              De studio staat aan de Rijksstraatweg in Elst, met gratis parkeren voor de deur. Bel
              even of boek een proefdag, dan zorgen we dat er iemand voor je klaarstaat.
            </p>

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
                  {openingHours.map((row) => (
                    <p key={row.day} className="flex justify-between gap-4 text-[0.9375rem] max-w-xs">
                      <span className="text-ink-soft">{row.day}</span>
                      <span className="mono text-ink">{row.hours}</span>
                    </p>
                  ))}
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

          <div className="aspect-[4/3] lg:aspect-[4/5] border border-hairline bg-mist">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.3597920090741!2d5.503261184825531!3d51.983427245326475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c651494090b197%3A0x1c69d179c91fc018!2sBody%20by%20Marcel!5e0!3m2!1snl!2snl!4v1774468241137!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie van Body by Marcel op Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
