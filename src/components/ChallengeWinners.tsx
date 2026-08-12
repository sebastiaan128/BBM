import { useState } from 'react';
import { Link } from 'react-router-dom';
import { photo } from '../photos';
import Photo from './Photo';

interface Winner {
  year: number;
  name: string;
  result: string;
  photo: string;
}

const winners: Winner[] = [
  { year: 2024, name: 'Naam winnaar', result: 'Resultaat', photo: photo.deadlift },
  { year: 2023, name: 'Naam winnaar', result: 'Resultaat', photo: photo.schouderdrukken },
  { year: 2022, name: 'Naam winnaar', result: 'Resultaat', photo: photo.duoHalters2 },
  { year: 2021, name: 'Naam winnaar', result: 'Resultaat', photo: photo.kettlebellSquat },
  { year: 2020, name: 'Naam winnaar', result: 'Resultaat', photo: photo.bicepsBank },
];

const years = ['Alle jaren', ...winners.map((w) => String(w.year))];

function WinnerCard({ winner: w }: { winner: Winner }) {
  return (
    <article className="group" data-reveal>
      <div className="relative aspect-[4/5] overflow-hidden rounded-md">
        <Photo
          src={w.photo}
          alt={`Winnaar ${w.year}`}
          loading="lazy"
          className="group-hover:scale-[1.03]"
        />
        <span className="mono absolute top-0 left-0 bg-lime text-ink text-xs font-medium px-2.5 py-1.5">
          {w.year}
        </span>
      </div>
      <h3 className="display-md mt-4 text-paper">{w.name}</h3>
      <p className="mt-1 text-sm text-paper/55">{w.result}</p>
    </article>
  );
}

export default function ChallengeWinners() {
  const [activeFilter, setActiveFilter] = useState('Alle jaren');

  const filtered =
    activeFilter === 'Alle jaren' ? winners : winners.filter((w) => String(w.year) === activeFilter);

  return (
    <section className="py-20 md:py-28 bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12" data-reveal>
          <div className="max-w-lg">
            <span className="eyebrow eyebrow-light">Eindejaarschallenge</span>
            <h2 className="display-lg mt-6">Hall of fame</h2>
            <p className="mt-5 text-paper/65 leading-relaxed">
              Elk jaar sluiten we af met een challenge. Dit zijn de mensen die hem wonnen.
            </p>
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

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-10">
          {filtered.map((w) => (
            <WinnerCard key={w.year} winner={w} />
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
