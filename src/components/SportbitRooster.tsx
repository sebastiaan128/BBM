import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { SPORTBIT_BASE, sportbit } from '../sportbit';
import { categorieVoorTitel, categoryDotColors, type TrainingCategory } from '../rooster';
import { useDialog } from '../hooks/useDialog';

/**
 * Het live rooster uit SportBit, in de stijl van de site.
 *
 * SportBit levert een insluitbaar rooster (embed_rooster), maar dat zet alle
 * lessen op vaste pixelhoogtes en toont ook PT-sessies en Open Fitness. We
 * halen daarom dezelfde HTML op die hun script gebruikt, lezen de lessen
 * eruit en tonen alleen de groepslessen. Inschrijven gaat via de
 * aanmeldlink van SportBit zelf.
 */

interface Les {
  id: string;
  titel: string;
  categorie: Exclude<TrainingCategory, 'all'>;
  start: string;
  eind: string;
  trainer: string;
  /** Bezetting zoals SportBit hem meestuurt (bijv. "8/12"), als dat aanstaat. */
  plekken: string;
  voorbij: boolean;
}

interface Dag {
  naam: string;
  datum: string;
  voorbij: boolean;
  lessen: Les[];
}

interface Week {
  label: string;
  periode: string;
  vorige: string | null;
  volgende: string | null;
  dagen: Dag[];
}

const MAANDEN = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
];

const tekst = (el: Element | null | undefined) => el?.textContent?.trim() ?? '';

function leesWeek(html: string): Week {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const periode = doc.getElementById('sportbit-periode');
  const pijlen = doc.querySelectorAll('.week a');
  const query = (richting: 'prev' | 'next') =>
    `?jaar=${periode?.getAttribute(`data-${richting}year`)}&weeknr=${periode?.getAttribute(`data-${richting}week`)}`;

  return {
    label: tekst(doc.querySelector('.week span')),
    periode: tekst(periode?.querySelector('span')).toLowerCase(),
    vorige: pijlen[0] && !pijlen[0].classList.contains('inactive') ? query('prev') : null,
    volgende:
      pijlen.length > 1 && !pijlen[pijlen.length - 1].classList.contains('inactive') ? query('next') : null,
    dagen: [...doc.querySelectorAll('.items-day')].map((dag) => ({
      naam: dag.getAttribute('data-dayname') ?? '',
      datum: (dag.getAttribute('data-month') ?? '').replace(/^0/, '').toLowerCase(),
      voorbij: dag.classList.contains('gepasseerd'),
      lessen: [...dag.querySelectorAll('.evtitem')].flatMap((les) => {
        const titel = tekst(les.querySelector('.title'));
        const categorie = categorieVoorTitel(titel);
        if (!categorie) return [];
        const [start = '', eind = ''] = tekst(les.querySelector('.time')).split(/\s*-\s*/);
        return [{
          id: les.getAttribute('data-eventid') ?? '',
          titel,
          categorie,
          start,
          eind,
          trainer: tekst(les.querySelector('.trainer')),
          plekken: tekst(les.querySelector('.attendees')),
          voorbij: les.classList.contains('gepasseerd'),
        }];
      }),
    })),
  };
}

/** "08:00" en "09:00" → "60 min" */
function duur(start: string, eind: string): string {
  const minuten = (t: string) => {
    const [u, m] = t.split(':').map(Number);
    return u * 60 + m;
  };
  const verschil = minuten(eind) - minuten(start);
  return Number.isFinite(verschil) && verschil > 0 ? `${verschil} min` : '';
}

function vandaagLabel(nu = new Date()): string {
  return `${nu.getDate()} ${MAANDEN[nu.getMonth()]}`;
}

export default function SportbitRooster({
  roosterId,
  categorie,
  fallback,
}: {
  roosterId: string;
  categorie: TrainingCategory;
  fallback: React.ReactNode;
}) {
  // null = de huidige week
  const [weekQuery, setWeekQuery] = useState<string | null>(null);
  const [week, setWeek] = useState<Week | null>(null);
  const [laden, setLaden] = useState(true);
  const [mislukt, setMislukt] = useState(false);
  const [gekozen, setGekozen] = useState<{ les: Les; dag: Dag } | null>(null);
  const [aanmeldLink, setAanmeldLink] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    setLaden(true);
    fetch(`${SPORTBIT_BASE}/cbm/embed/rooster/web/${roosterId}/${weekQuery ?? ''}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`SportBit gaf ${res.status}`);
        return res.text();
      })
      .then((html) => {
        const gelezen = leesWeek(html);
        if (gelezen.dagen.length === 0) throw new Error('Geen rooster in het antwoord van SportBit');
        setWeek(gelezen);
        setLaden(false);
      })
      .catch((err) => {
        if (controller.signal.aborted) return;
        console.error(err);
        // Bij een latere week houden we de huidige in beeld; zonder enig
        // rooster valt de pagina terug op het handmatige overzicht.
        setLaden(false);
        if (!week) setMislukt(true);
      });
    return () => controller.abort();
    // `week` hoort hier bewust niet bij: alleen een andere week laadt opnieuw.
  }, [roosterId, weekQuery]);

  // De aanmeldlink staat alleen in het lesdetail van SportBit.
  useEffect(() => {
    if (!gekozen) return;
    const controller = new AbortController();
    setAanmeldLink(null);
    fetch(`${SPORTBIT_BASE}/cbm/embed/rooster/popup/?eventid=${encodeURIComponent(gekozen.les.id)}`, {
      signal: controller.signal,
    })
      .then((res) => res.text())
      .then((html) => {
        const href = new DOMParser().parseFromString(html, 'text/html').querySelector('a.btn')?.getAttribute('href');
        setAanmeldLink(href || sportbit.inloggen);
      })
      .catch(() => {
        if (!controller.signal.aborted) setAanmeldLink(sportbit.inloggen);
      });
    return () => controller.abort();
  }, [gekozen]);

  const sluit = useCallback(() => setGekozen(null), []);
  useDialog(gekozen !== null, sluit);

  if (mislukt) return <>{fallback}</>;

  const vandaag = vandaagLabel();
  // De bezetting toont SportBit alleen als dat in hun rooster-instellingen aanstaat.
  const plekkenZichtbaar = (week?.dagen ?? []).some((dag) => dag.lessen.some((les) => les.plekken));
  // Zondag is de studio dicht: zonder lessen laten we hem weg.
  const dagen = (week?.dagen ?? [])
    .map((dag) => ({
      ...dag,
      zichtbaar: dag.lessen.filter((les) => categorie === 'all' || les.categorie === categorie),
    }))
    .filter((dag) => dag.lessen.length > 0 || dag.naam !== 'Zondag');

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
        {/* Weeknavigatie */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8">
          <div>
            <p className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone">
              {week?.label || 'Week'}
            </p>
            <p className="mt-1 text-ink font-semibold">{week?.periode || ' '}</p>
          </div>
          <div className="flex items-center gap-2">
            {weekQuery !== null && (
              <button
                onClick={() => setWeekQuery(null)}
                className="mono text-[0.6875rem] uppercase tracking-[0.12em] px-3 py-2 border border-hairline text-stone hover:border-ink hover:text-ink transition-colors duration-150 ease-smooth"
              >
                Deze week
              </button>
            )}
            <button
              onClick={() => week?.vorige && setWeekQuery(week.vorige)}
              disabled={!week?.vorige || laden}
              aria-label="Vorige week"
              className="p-2 border border-hairline text-ink hover:border-ink disabled:opacity-30 disabled:hover:border-hairline transition-colors duration-150 ease-smooth"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => week?.volgende && setWeekQuery(week.volgende)}
              disabled={!week?.volgende || laden}
              aria-label="Volgende week"
              className="p-2 border border-hairline text-ink hover:border-ink disabled:opacity-30 disabled:hover:border-hairline transition-colors duration-150 ease-smooth"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className={`space-y-10 transition-opacity duration-150 ease-smooth ${laden ? 'opacity-40' : ''}`}
          aria-busy={laden}
          aria-live="polite"
        >
          {!week && <p className="py-10 text-sm text-stone">Rooster laden…</p>}

          {dagen.map((dag) => {
            const isVandaag = !dag.voorbij && dag.datum === vandaag;
            return (
              <div key={dag.naam + dag.datum} className={dag.voorbij ? 'opacity-50' : undefined}>
                <div className="flex items-baseline gap-3 pb-2.5 border-b-2 border-ink">
                  <h2 className="display-md text-ink">{dag.naam}</h2>
                  <span className="mono text-xs text-stone">{dag.datum}</span>
                  {isVandaag && (
                    <span className="mono text-[0.625rem] uppercase tracking-[0.14em] bg-lime text-ink px-2 py-0.5">
                      Vandaag
                    </span>
                  )}
                </div>

                {dag.zichtbaar.length === 0 ? (
                  <p className="py-6 text-sm text-stone">
                    {categorie === 'all' ? 'Geen groepslessen op deze dag.' : 'Geen lessen in dit filter.'}
                  </p>
                ) : (
                  <ul>
                    {dag.zichtbaar.map((les) => (
                      <li key={les.id}>
                        <button
                          onClick={() => setGekozen({ les, dag })}
                          aria-haspopup="dialog"
                          aria-label={`${les.titel} om ${les.start}, bekijk de details`}
                          className={`w-full text-left py-4 px-3 -mx-3 border-b border-hairline hover:bg-paper-dim transition-colors duration-150 ease-smooth group ${
                            les.voorbij && !dag.voorbij ? 'opacity-50' : ''
                          }`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                            <span className="mono text-ink text-[0.9375rem] w-14 flex-shrink-0">
                              {les.start}
                            </span>

                            <span className="flex items-center gap-2.5 flex-1 min-w-0">
                              <span
                                className={`w-2.5 h-2.5 flex-shrink-0 ${categoryDotColors[les.categorie]}`}
                                aria-hidden="true"
                              />
                              <span className="font-semibold text-ink underline decoration-transparent underline-offset-4 decoration-1 group-hover:text-moss group-hover:decoration-moss transition-colors duration-150 ease-smooth">
                                {les.titel}
                              </span>
                            </span>

                            <span className="mono text-xs text-stone sm:w-24 flex-shrink-0">
                              {duur(les.start, les.eind)}
                            </span>
                            <span className="text-sm text-stone sm:w-28 flex-shrink-0 capitalize">
                              {les.trainer}
                            </span>
                            {plekkenZichtbaar && (
                              <span className="mono text-xs text-stone sm:w-28 flex-shrink-0 whitespace-nowrap sm:text-right">
                                {les.plekken && `${les.plekken} plekken`}
                              </span>
                            )}

                            <ChevronRight
                              size={16}
                              className="hidden sm:block flex-shrink-0 text-stone group-hover:text-moss group-hover:translate-x-0.5 transition-[color,transform] duration-150 ease-smooth"
                              aria-hidden="true"
                            />
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}

          {week && (
            <p className="text-sm text-stone leading-relaxed border-t border-hairline pt-6">
              Dit rooster komt rechtstreeks uit SportBit. Klik op een les om je in te schrijven;
              daar zie je ook hoeveel plekken er nog vrij zijn.
            </p>
          )}
        </div>
      </div>

      {/* Detail van een les */}
      {gekozen && (
        <div
          className="overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70"
          onClick={sluit}
          role="dialog"
          aria-modal="true"
          aria-labelledby="sportbit-les-titel"
        >
          <div
            className="dialog-panel bg-paper max-w-md w-full p-8 relative border border-hairline"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={sluit}
              autoFocus
              className="absolute top-4 right-4 p-1.5 text-stone hover:text-ink transition-colors duration-150 ease-smooth"
              aria-label="Sluiten"
            >
              <X size={18} />
            </button>

            <span
              className={`inline-block w-8 h-1.5 mb-5 ${categoryDotColors[gekozen.les.categorie]}`}
              aria-hidden="true"
            />

            <h2 id="sportbit-les-titel" className="display-lg text-ink">
              {gekozen.les.titel}
            </h2>
            <p className="mt-2 text-sm text-stone">
              {gekozen.dag.naam} {gekozen.dag.datum} om {gekozen.les.start}
            </p>

            <dl className="mt-7 border-t border-ink">
              {[
                {
                  label: 'Tijd',
                  value: [`${gekozen.les.start} – ${gekozen.les.eind}`, duur(gekozen.les.start, gekozen.les.eind)]
                    .filter(Boolean)
                    .join(' · '),
                },
                // SportBit schrijft trainersnamen soms met een kleine letter.
                { label: 'Trainer', value: gekozen.les.trainer.replace(/^./, (c) => c.toUpperCase()) },
                { label: 'Plekken', value: gekozen.les.plekken && `${gekozen.les.plekken} bezet` },
              ]
                .filter((info) => info.value)
                .map((info) => (
                  <div key={info.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 border-b border-hairline">
                    <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone pt-0.5">
                      {info.label}
                    </dt>
                    <dd className="text-[0.9375rem] text-ink">{info.value}</dd>
                  </div>
                ))}
            </dl>

            {gekozen.les.voorbij ? (
              <p className="mt-6 text-sm text-stone leading-relaxed">Deze les is al geweest.</p>
            ) : (
              <>
                <p className="mt-6 text-sm text-stone leading-relaxed">
                  {gekozen.les.plekken
                    ? 'Inschrijven doe je in SportBit.'
                    : 'In SportBit zie je hoeveel plekken er nog vrij zijn en schrijf je je in.'}
                </p>
                <a
                  href={aanmeldLink ?? sportbit.inloggen}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={!aanmeldLink}
                  className={`btn btn-primary w-full justify-center mt-5 ${aanmeldLink ? '' : 'opacity-60 pointer-events-none'}`}
                >
                  {aanmeldLink ? 'Inschrijven via SportBit' : 'Even laden…'}
                  <ExternalLink size={15} aria-hidden="true" />
                </a>
              </>
            )}
            <Link to="/proefdag" className="btn btn-outline w-full justify-center mt-2" onClick={sluit}>
              Eerst een gratis proefles
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
