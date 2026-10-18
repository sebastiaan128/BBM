import { useState } from 'react';
import { Link } from 'react-router-dom';
import Photo from './Photo';
import content from '../content/home.json';

const challenge = content.challenge;

interface Winner {
  jaar: number;
  /** Leeg zolang de namen van dat jaar nog niet bekend zijn. */
  namen: string;
  onderdelen: string;
  foto: string;
}

// Nieuwste jaar eerst, ook als ze in /admin in een andere volgorde staan.
const winners: Winner[] = [...challenge.winnaars].sort((a, b) => b.jaar - a.jaar);

const years = ['Alle jaren', ...winners.map((w) => String(w.jaar))];

function WinnerCard({ winner: w }: { winner: Winner }) {
  return (
    <article className="group" data-reveal>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md">
        <Photo
          src={w.foto}
          alt={w.namen ? `${w.namen}, winnaars ${w.jaar}` : `Winnaars ${w.jaar}`}
          loading="lazy"
          className="group-hover:scale-[1.03]"
        />
        <span className="mono absolute top-0 left-0 bg-lime text-ink text-xs font-medium px-2.5 py-1.5">
          {w.jaar}
        </span>
      </div>
      <h3 className="display-md mt-4 text-paper">{w.namen || `Winnaars ${w.jaar}`}</h3>
      <p className="mt-1 text-sm text-paper/55">{w.onderdelen}</p>
    </article>
  );
}

export default function ChallengeWinners() {
  const [activeFilter, setActiveFilter] = useState('Alle jaren');

  const filtered =
    activeFilter === 'Alle jaren' ? winners : winners.filter((w) => String(w.jaar) === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12" data-reveal>
          <div className="max-w-lg">
            <span className="eyebrow eyebrow-light">{challenge.eyebrow}</span>
            <h2 className="display-lg mt-6">{challenge.titel}</h2>
            <p className="mt-5 text-paper/65 leading-relaxed">{challenge.intro}</p>
          </div>

          {/* Jaarfilter */}
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter op jaar">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setActiveFilter(y)}
                aria-pressed={activeFilter === y}
                className={`mono text-xs uppercase tracking-[0.1em] px-3.5 py-2 border transition-colors duration-150 ease-smooth ${
                  activeFilter === y
                    ? 'border-lime text-lime'
                    : 'border-ink-soft text-paper/50 hover:text-paper hover:border-paper/40'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
          {filtered.map((w) => (
            <WinnerCard key={w.jaar} winner={w} />
          ))}
        </div>

        <p className="mt-14 pt-8 border-t border-ink-soft text-paper/55 text-sm">
          Doe je mee met de volgende editie?{' '}
          <Link to="/proefdag" className="text-lime underline underline-offset-4 decoration-1 hover:decoration-2 font-medium">
            Schrijf je in
          </Link>
        </p>
      </div>
    </section>
  );
}
