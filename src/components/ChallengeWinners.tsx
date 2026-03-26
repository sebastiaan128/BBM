import { useState } from 'react';
import { Trophy } from 'lucide-react';

const winners = [
  {
    year: 2024,
    name: 'Naam Winnaar',
    result: 'Resultaat',
    photo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    year: 2023,
    name: 'Naam Winnaar',
    result: 'Resultaat',
    photo: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    year: 2022,
    name: 'Naam Winnaar',
    result: 'Resultaat',
    photo: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    year: 2021,
    name: 'Naam Winnaar',
    result: 'Resultaat',
    photo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
  {
    year: 2020,
    name: 'Naam Winnaar',
    result: 'Resultaat',
    photo: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
  },
];

const years = ['Alle jaren', ...winners.map((w) => String(w.year))];

function WinnerCard({ winner: w }: { winner: typeof winners[0] }) {
  return (
    <div className="bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-[#7AC943]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7AC943]/10 group">
      <div className="aspect-video overflow-hidden relative">
        <img
          src={w.photo}
          alt={w.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-[#7AC943] text-white text-xs font-bold px-3 py-1 rounded-full">
          {w.year}
        </div>
        <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
          <Trophy size={14} className="text-yellow-400" />
        </div>
      </div>
      <div className="p-5">
        <p className="text-[#7AC943] text-xs font-semibold uppercase tracking-widest mb-1">
          Winnaar {w.year}
        </p>
        <h3 className="font-display text-xl text-white tracking-wide mb-1">{w.name}</h3>
        <p className="text-zinc-400 text-sm">{w.result}</p>
      </div>
    </div>
  );
}

export default function ChallengeWinners() {
  const [activeFilter, setActiveFilter] = useState('Alle jaren');

  const filtered = activeFilter === 'Alle jaren'
    ? winners
    : winners.filter((w) => String(w.year) === activeFilter);

  return (
    <section className="py-24 md:py-36 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            <Trophy size={16} />
            Eindejaars Challenge
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6 leading-tight">
            Hall of Fame
          </h2>
          <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
        </div>

        {/* Year filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {years.map((y) => (
            <button
              key={y}
              onClick={() => setActiveFilter(y)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeFilter === y
                  ? 'bg-[#7AC943] text-white shadow-lg shadow-[#7AC943]/20 scale-105'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 border border-zinc-700'
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        {/* Cards */}
        {filtered.length === 5 ? (
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-6">
            {filtered.slice(0, 3).map((w) => (
              <div key={w.year} className="col-span-2"><WinnerCard winner={w} /></div>
            ))}
            <div className="col-span-2 sm:col-start-2"><WinnerCard winner={filtered[3]} /></div>
            <div className="col-span-2"><WinnerCard winner={filtered[4]} /></div>
          </div>
        ) : filtered.length === 1 ? (
          <div className="flex justify-center">
            <div className="w-full max-w-sm">
              <WinnerCard winner={filtered[0]} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((w) => <WinnerCard key={w.year} winner={w} />)}
          </div>
        )}

        <p className="text-center text-zinc-500 text-sm mt-12">
          Doe jij mee met de volgende editie?{' '}
          <a href="/proefdag" className="text-[#7AC943] hover:underline font-semibold">
            Schrijf je in
          </a>
        </p>
      </div>
    </section>
  );
}
