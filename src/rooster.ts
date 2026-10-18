import roosterContent from './content/rooster.json';

/**
 * Het weekrooster: de enige plek waar de lestijden vandaan komen.
 *
 * Zowel /groepstrainingen (het blok "Deze week") als
 * /groepstrainingen/rooster leest hieruit, zodat de twee pagina's elkaar
 * niet kunnen tegenspreken. Lestijden pas je aan in src/content/rooster.json.
 *
 * Zodra de SportBit-roosterwidget is ingesteld (zie src/sportbit.ts) toont
 * de roosterpagina het echte rooster en is dit bestand alleen nog de bron
 * voor het weekoverzicht op de overzichtspagina.
 */

export type TrainingCategory =
  | 'all'
  | 'bootcamp'
  | 'tabata'
  | 'kids'
  | 'zumba'
  | 'calisthenics';

export interface ClassItem {
  /** Volledige naam, zoals op de roosterpagina. */
  name: string;
  /** Korte naam voor het compacte weekoverzicht. */
  short: string;
  category: TrainingCategory;
  time: string;
  duration: string;
  trainer: string;
  location: string;
  level: string;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  classes: ClassItem[];
}

// De lessen zelf staan in src/content/rooster.json (in /admin: Rooster).
export const schedule: DaySchedule[] = roosterContent.dagen.map((d) => ({
  day: d.dag,
  shortDay: d.kort,
  classes: d.lessen.map((l) => ({
    name: l.naam,
    short: l.kort,
    category: l.categorie as TrainingCategory,
    time: l.tijd,
    duration: l.duur,
    trainer: l.trainer,
    location: l.locatie,
    level: l.niveau,
  })),
}));

const alleCategorieen: { id: TrainingCategory; label: string }[] = [
  { id: 'all', label: 'Alles' },
  { id: 'bootcamp', label: 'Bootcamp' },
  { id: 'tabata', label: 'Tabata' },
  { id: 'kids', label: 'Kids' },
  { id: 'zumba', label: 'Zumba' },
  { id: 'calisthenics', label: 'Calisthenics' },
];

/** Filterlabels op de roosterpagina: alleen soorten die nu in het rooster staan. */
export const categories = alleCategorieen.filter(
  (c) => c.id === 'all' || schedule.some((d) => d.classes.some((cls) => cls.category === c.id)),
);

/**
 * Index van vandaag binnen `schedule`, of -1 als er geen lessen zijn.
 * Het rooster loopt van maandag tot en met zaterdag; op zondag is gesloten.
 */
export function todayIndex(now: Date = new Date()): number {
  const day = now.getDay(); // 0 = zondag
  if (day === 0) return -1;
  const index = day - 1;
  return index < schedule.length ? index : -1;
}
