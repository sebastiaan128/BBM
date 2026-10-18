import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronRight, ExternalLink } from 'lucide-react';
import PageHero from '../../components/PageHero';
import roosterContent from '../../content/rooster.json';
import { sportbit, roosterWidgetUrl } from '../../sportbit';
import {
  schedule,
  categories,
  todayIndex,
  type ClassItem,
  type TrainingCategory,
} from '../../rooster';

const categoryDotColors: Record<TrainingCategory, string> = {
  all: 'bg-stone',
  'small-group': 'bg-plate-blue',
  bootcamp: 'bg-plate-green',
  tabata: 'bg-plate-red',
  circuit: 'bg-plate-yellow',
  kids: 'bg-plate-white border border-hairline',
};

export default function Rooster() {
  const [activeCategory, setActiveCategory] = useState<TrainingCategory>('all');
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const currentDayIndex = todayIndex();

  const filteredSchedule = schedule.map((day) => ({
    ...day,
    classes: day.classes.filter((cls) => activeCategory === 'all' || cls.category === activeCategory),
  }));

  // Escape sluit het lesdetail, zoals bij elk ander venster. Zolang het open
  // staat scrollt het rooster erachter niet mee.
  useEffect(() => {
    if (!selectedClass) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedClass(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedClass]);

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow={roosterContent.hero.eyebrow}
        title={roosterContent.hero.titel}
        intro={roosterContent.hero.intro}
        image={roosterContent.hero.foto}
        imageAlt={roosterContent.hero.fotoAlt}
      >
        <a
          href={sportbit.inloggen}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-lime"
        >
          Inschrijven via SportBit
          <ExternalLink size={15} aria-hidden="true" />
        </a>
        <Link to="/proefdag" className="btn btn-outline">
          Gratis proefles
        </Link>
      </PageHero>

      {/* Zodra het iframe-adres van de SportBit-roosterwidget bekend is
          (zie src/sportbit.ts) vervangt het echte rooster het handmatige
          overzicht hieronder. */}
      {roosterWidgetUrl ? (
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
            <iframe
              src={roosterWidgetUrl}
              title="Lesrooster van Body by Marcel"
              className="w-full min-h-[45rem] border border-hairline"
              loading="lazy"
            />
          </div>
        </section>
      ) : (
        <>
      {/* Filter. Anders dan de sprongknoppen op /tarieven verbergt dit
          daadwerkelijk lessen, dus staat er expliciet bij wat het doet. */}
      <div className="sticky top-[4.5rem] z-20 bg-paper-dim border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8 py-3.5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="mono text-[0.625rem] uppercase tracking-[0.16em] text-stone">
            Toon alleen
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter op trainingsvorm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                aria-pressed={activeCategory === cat.id}
                className={`mono inline-flex items-center gap-2 text-[0.6875rem] uppercase tracking-[0.12em] px-3 py-2 border transition-colors duration-150 ease-smooth ${
                  activeCategory === cat.id
                    ? 'border-ink bg-ink text-paper'
                    : 'border-hairline text-stone hover:border-ink hover:text-ink'
                }`}
              >
                {cat.id !== 'all' && (
                  <span className={`w-2 h-2 ${categoryDotColors[cat.id]}`} aria-hidden="true" />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Rooster */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8 space-y-10">
          {filteredSchedule.map((day, dayIndex) => {
            const isToday = dayIndex === currentDayIndex;
            return (
              <div key={day.day}>
                <div className="flex items-baseline gap-3 pb-2.5 border-b-2 border-ink">
                  <h2 className="display-md text-ink">{day.day}</h2>
                  {isToday && (
                    <span className="mono text-[0.625rem] uppercase tracking-[0.14em] bg-lime text-ink px-2 py-0.5">
                      Vandaag
                    </span>
                  )}
                </div>

                {day.classes.length === 0 ? (
                  <p className="py-6 text-sm text-stone">Geen lessen in dit filter.</p>
                ) : (
                  <ul>
                    {day.classes.map((cls) => (
                      <li key={cls.name + cls.time}>
                        <button
                          onClick={() => {
                            setSelectedClass(cls);
                            setSelectedDay(day.day);
                          }}
                          aria-haspopup="dialog"
                          aria-label={`${cls.name} om ${cls.time}, bekijk de details`}
                          className="w-full text-left py-4 px-3 -mx-3 border-b border-hairline hover:bg-paper-dim transition-colors duration-150 ease-smooth group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
                            <span className="mono text-ink text-[0.9375rem] w-14 flex-shrink-0">
                              {cls.time}
                            </span>

                            <span className="flex items-center gap-2.5 flex-1 min-w-0">
                              <span
                                className={`w-2.5 h-2.5 flex-shrink-0 ${categoryDotColors[cls.category]}`}
                                aria-hidden="true"
                              />
                              <span className="font-semibold text-ink underline decoration-transparent underline-offset-4 decoration-1 group-hover:text-moss group-hover:decoration-moss transition-colors duration-150 ease-smooth">
                                {cls.name}
                              </span>
                            </span>

                            <span className="mono text-xs text-stone sm:w-24 flex-shrink-0">
                              {cls.duration}
                            </span>
                            <span className="text-sm text-stone sm:w-28 flex-shrink-0">
                              {cls.location}
                            </span>

                            {/* Maakt zichtbaar dat de regel zelf aanklikbaar is */}
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

          <p className="text-sm text-stone leading-relaxed border-t border-hairline pt-6">
            Dit weekoverzicht is een indicatie. Het actuele rooster en het aantal vrije plekken
            staan in{' '}
            <a
              href={sportbit.inloggen}
              target="_blank"
              rel="noopener noreferrer"
              className="text-moss underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              SportBit
            </a>
            , waar je je ook inschrijft.
          </p>
        </div>
      </section>
        </>
      )}

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">Je eerste les is gratis</h2>
          <p className="mt-6 text-paper/65 leading-relaxed">
            Kies een training uit het rooster en boek je proefles.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/proefdag" className="btn btn-lime justify-center">
              Gratis proefles boeken
            </Link>
            <Link to="/contact" className="btn btn-outline-light justify-center">
              Stel een vraag
            </Link>
          </div>
        </div>
      </section>

      {/* Detail van een les */}
      {selectedClass && (
        <div
          className="overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70"
          onClick={() => setSelectedClass(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="les-titel"
        >
          <div
            className="dialog-panel bg-paper max-w-md w-full p-8 relative border border-hairline"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedClass(null)}
              // De focus hoort in het venster te staan, niet op de knop in
              // het rooster erachter.
              autoFocus
              className="absolute top-4 right-4 p-1.5 text-stone hover:text-ink transition-colors duration-150 ease-smooth"
              aria-label="Sluiten"
            >
              <X size={18} />
            </button>

            <span
              className={`inline-block w-8 h-1.5 mb-5 ${categoryDotColors[selectedClass.category]}`}
              aria-hidden="true"
            />

            <h2 id="les-titel" className="display-lg text-ink">
              {selectedClass.name}
            </h2>
            <p className="mt-2 text-sm text-stone">
              {selectedDay} om {selectedClass.time}
            </p>

            <dl className="mt-7 border-t border-ink">
              {[
                { label: 'Tijd', value: `${selectedClass.time} · ${selectedClass.duration}` },
                { label: 'Trainer', value: selectedClass.trainer },
                { label: 'Locatie', value: selectedClass.location },
                { label: 'Niveau', value: selectedClass.level },
              ].map((info) => (
                <div
                  key={info.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 py-3 border-b border-hairline"
                >
                  <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone pt-0.5">
                    {info.label}
                  </dt>
                  <dd className="text-[0.9375rem] text-ink">{info.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm text-stone leading-relaxed">
              Het aantal vrije plekken zie je in SportBit, waar je je ook inschrijft.
            </p>

            <a
              href={sportbit.inloggen}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full justify-center mt-5"
            >
              Inschrijven via SportBit
              <ExternalLink size={15} aria-hidden="true" />
            </a>
            <Link
              to="/proefdag"
              className="btn btn-outline w-full justify-center mt-2"
              onClick={() => setSelectedClass(null)}
            >
              Eerst een gratis proefles
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
