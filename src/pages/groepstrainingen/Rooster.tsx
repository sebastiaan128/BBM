import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, Users, MapPin, BarChart3 } from 'lucide-react';

type TrainingCategory = 'all' | 'small-group' | 'bootcamp' | 'tabata' | 'circuit' | 'kids';

interface ClassItem {
  name: string;
  category: TrainingCategory;
  time: string;
  duration: string;
  trainer: string;
  spots: number;
  spotsLeft: number;
  location: string;
  level: string;
}

interface DaySchedule {
  day: string;
  shortDay: string;
  classes: ClassItem[];
}

const schedule: DaySchedule[] = [
  {
    day: 'Maandag',
    shortDay: 'Ma',
    classes: [
      { name: 'Small Group Training', category: 'small-group', time: '07:00', duration: '60 min', trainer: 'Marcel', spots: 8, spotsLeft: 3, location: 'BBM Elst', level: 'Alle niveaus' },
      { name: 'Circuit Training', category: 'circuit', time: '18:00', duration: '60 min', trainer: 'Marcel', spots: 12, spotsLeft: 7, location: 'BBM Elst', level: 'Alle niveaus' },
      { name: 'Bootcamp', category: 'bootcamp', time: '19:30', duration: '60 min', trainer: 'Marcel', spots: 15, spotsLeft: 10, location: 'Buiten Elst', level: 'Alle niveaus' },
    ],
  },
  {
    day: 'Dinsdag',
    shortDay: 'Di',
    classes: [
      { name: 'Tabata', category: 'tabata', time: '06:30', duration: '45 min', trainer: 'Marcel', spots: 10, spotsLeft: 4, location: 'BBM Elst', level: 'Gemiddeld - Gevorderd' },
      { name: 'Small Group Training', category: 'small-group', time: '17:00', duration: '60 min', trainer: 'Marcel', spots: 8, spotsLeft: 0, location: 'BBM Elst', level: 'Alle niveaus' },
    ],
  },
  {
    day: 'Woensdag',
    shortDay: 'Wo',
    classes: [
      { name: 'Circuit Training', category: 'circuit', time: '07:00', duration: '60 min', trainer: 'Marcel', spots: 12, spotsLeft: 5, location: 'BBM Elst', level: 'Alle niveaus' },
      { name: 'Kids Fitness', category: 'kids', time: '16:00', duration: '45 min', trainer: 'Marcel', spots: 10, spotsLeft: 6, location: 'BBM Elst', level: '8-16 jaar' },
      { name: 'Bootcamp', category: 'bootcamp', time: '18:30', duration: '60 min', trainer: 'Marcel', spots: 15, spotsLeft: 8, location: 'Buiten Elst', level: 'Alle niveaus' },
    ],
  },
  {
    day: 'Donderdag',
    shortDay: 'Do',
    classes: [
      { name: 'Small Group Training', category: 'small-group', time: '06:00', duration: '60 min', trainer: 'Marcel', spots: 8, spotsLeft: 2, location: 'BBM Elst', level: 'Alle niveaus' },
      { name: 'Tabata', category: 'tabata', time: '18:00', duration: '45 min', trainer: 'Marcel', spots: 10, spotsLeft: 7, location: 'BBM Elst', level: 'Gemiddeld - Gevorderd' },
    ],
  },
  {
    day: 'Vrijdag',
    shortDay: 'Vr',
    classes: [
      { name: 'Circuit Training', category: 'circuit', time: '07:00', duration: '60 min', trainer: 'Marcel', spots: 12, spotsLeft: 9, location: 'BBM Elst', level: 'Alle niveaus' },
      { name: 'Small Group Training', category: 'small-group', time: '17:30', duration: '60 min', trainer: 'Marcel', spots: 8, spotsLeft: 4, location: 'BBM Elst', level: 'Alle niveaus' },
    ],
  },
  {
    day: 'Zaterdag',
    shortDay: 'Za',
    classes: [
      { name: 'Bootcamp', category: 'bootcamp', time: '09:00', duration: '60 min', trainer: 'Marcel', spots: 15, spotsLeft: 11, location: 'Buiten Elst', level: 'Alle niveaus' },
      { name: 'Kids Bootcamp', category: 'kids', time: '10:30', duration: '45 min', trainer: 'Marcel', spots: 10, spotsLeft: 5, location: 'Buiten Elst', level: '8-16 jaar' },
    ],
  },
];

const categories: { id: TrainingCategory; label: string; color: string }[] = [
  { id: 'all', label: 'Alle trainingen', color: 'bg-zinc-700' },
  { id: 'small-group', label: 'Small Group', color: 'bg-blue-600' },
  { id: 'bootcamp', label: 'Bootcamp', color: 'bg-orange-500' },
  { id: 'tabata', label: 'Tabata', color: 'bg-red-600' },
  { id: 'circuit', label: 'Circuit', color: 'bg-purple-600' },
  { id: 'kids', label: 'Kids', color: 'bg-yellow-500' },
];

const categoryColors: Record<TrainingCategory, string> = {
  all: 'bg-zinc-200 text-zinc-700',
  'small-group': 'bg-blue-100 text-blue-700 border-blue-200',
  bootcamp: 'bg-orange-100 text-orange-700 border-orange-200',
  tabata: 'bg-red-100 text-red-700 border-red-200',
  circuit: 'bg-purple-100 text-purple-700 border-purple-200',
  kids: 'bg-yellow-100 text-yellow-700 border-yellow-200',
};

const categoryDotColors: Record<TrainingCategory, string> = {
  all: 'bg-zinc-500',
  'small-group': 'bg-blue-600',
  bootcamp: 'bg-orange-500',
  tabata: 'bg-red-600',
  circuit: 'bg-purple-600',
  kids: 'bg-yellow-500',
};

export default function Rooster() {
  const [activeCategory, setActiveCategory] = useState<TrainingCategory>('all');
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const today = new Date().getDay();
  const currentDayIndex = today === 0 ? -1 : today - 1; // -1 for Sunday (no classes)

  const filteredSchedule = schedule.map((day) => ({
    ...day,
    classes: day.classes.filter(
      (cls) => activeCategory === 'all' || cls.category === activeCategory
    ),
  }));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Rooster"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-7xl text-white mb-6 leading-tight">
              Rooster
            </h1>
            <div className="h-1 w-24 bg-[#7AC943] mb-6" />
            <p className="text-2xl text-white/85">
              Bekijk het weekrooster en plan jouw trainingen.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-zinc-50 border-b border-zinc-100 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? `${cat.color} text-white scale-105 shadow-md`
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredSchedule.map((day, dayIndex) => {
              const isToday = dayIndex === currentDayIndex;
              return (
                <div
                  key={day.day}
                  className={`rounded-2xl overflow-hidden shadow-sm border ${
                    isToday ? 'border-[#7AC943]' : 'border-zinc-100'
                  }`}
                >
                  <div
                    className={`px-6 py-4 flex items-center gap-3 ${
                      isToday ? 'bg-[#7AC943]' : 'bg-zinc-900'
                    }`}
                  >
                    {isToday && <div className="w-2 h-2 bg-white rounded-full" />}
                    <h2 className="font-display text-2xl text-white tracking-wide">
                      {day.day}
                    </h2>
                    {isToday && (
                      <span className="ml-auto text-white/80 text-sm font-medium">Vandaag</span>
                    )}
                  </div>
                  {day.classes.length === 0 ? (
                    <div className="bg-white px-6 py-8 text-center text-zinc-400 text-sm">
                      Geen lessen gevonden voor dit filter.
                    </div>
                  ) : (
                    <div className="bg-white divide-y divide-zinc-50">
                      {day.classes.map((cls, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setSelectedClass(cls);
                            setSelectedDay(day.day);
                          }}
                          className="w-full text-left px-6 py-4 hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              <div className={`w-3 h-3 rounded-full flex-shrink-0 ${categoryDotColors[cls.category]}`} />
                              <div className="min-w-0">
                                <div className="font-semibold text-zinc-900 group-hover:text-[#7AC943] transition-colors">
                                  {cls.name}
                                </div>
                                <div className="flex items-center gap-3 mt-0.5">
                                  <span className="text-sm text-zinc-500">{cls.time}</span>
                                  <span className="text-zinc-300">·</span>
                                  <span className="text-sm text-zinc-500">{cls.duration}</span>
                                  <span className="text-zinc-300">·</span>
                                  <span className="text-sm text-zinc-500">{cls.location}</span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <div
                                className={`text-xs font-semibold px-3 py-1 rounded-full border ${categoryColors[cls.category]}`}
                              >
                                {cls.level}
                              </div>
                              {cls.spotsLeft === 0 ? (
                                <span className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
                                  Vol
                                </span>
                              ) : cls.spotsLeft <= 3 ? (
                                <span className="text-xs font-semibold text-orange-600 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full">
                                  {cls.spotsLeft} plekken
                                </span>
                              ) : (
                                <span className="text-xs font-semibold text-[#7AC943] bg-[#7AC943]/10 border border-[#7AC943]/20 px-3 py-1 rounded-full">
                                  Beschikbaar
                                </span>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legend */}
      <section className="py-8 bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {categories.slice(1).map((cat) => (
              <div key={cat.id} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${categoryDotColors[cat.id]}`} />
                <span className="text-sm text-zinc-600">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Eerste les gratis!
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Kies een training uit het rooster en boek je gratis proefles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/proefdag"
              className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Gratis proefles boeken
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200"
            >
              Vragen? Neem contact op
            </Link>
          </div>
        </div>
      </section>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedClass(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClass(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors"
            >
              <X size={18} className="text-zinc-600" />
            </button>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${categoryColors[selectedClass.category]}`}>
              <div className={`w-2 h-2 rounded-full ${categoryDotColors[selectedClass.category]}`} />
              {selectedClass.name}
            </div>

            <h3 className="font-display text-3xl text-zinc-900 mb-1 tracking-wide">
              {selectedClass.name}
            </h3>
            <p className="text-zinc-500 text-sm mb-6">
              {selectedDay} om {selectedClass.time}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { icon: Clock, label: 'Tijd', value: `${selectedClass.time} (${selectedClass.duration})` },
                { icon: Users, label: 'Trainer', value: selectedClass.trainer },
                { icon: MapPin, label: 'Locatie', value: selectedClass.location },
                { icon: BarChart3, label: 'Niveau', value: selectedClass.level },
              ].map((info, i) => {
                const Icon = info.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#7AC943]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#7AC943]" />
                    </div>
                    <div>
                      <div className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{info.label}</div>
                      <div className="font-semibold text-zinc-900 text-sm">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mb-6">
              {selectedClass.spotsLeft === 0 ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
                  <p className="text-red-700 font-semibold text-sm">Deze les is vol</p>
                  <p className="text-red-500 text-xs mt-1">Neem contact op voor de wachtlijst</p>
                </div>
              ) : (
                <div className="bg-[#7AC943]/10 border border-[#7AC943]/20 rounded-xl p-3 text-center">
                  <p className="text-[#7AC943] font-semibold text-sm">
                    {selectedClass.spotsLeft} van de {selectedClass.spots} plekken beschikbaar
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <Link
                to="/proefdag"
                className="block w-full text-center bg-[#7AC943] hover:bg-[#6BB835] text-white py-3 rounded-xl font-semibold transition-all duration-200"
                onClick={() => setSelectedClass(null)}
              >
                Gratis proefles boeken
              </Link>
              <button
                onClick={() => setSelectedClass(null)}
                className="block w-full text-center text-zinc-500 hover:text-zinc-700 text-sm font-medium py-2 transition-colors"
              >
                Sluiten
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
