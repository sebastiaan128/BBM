/**
 * Het weekrooster: de enige plek waar de lestijden staan.
 *
 * Zowel /groepstrainingen (het blok "Deze week") als
 * /groepstrainingen/rooster leest hieruit, zodat de twee pagina's elkaar
 * niet kunnen tegenspreken. Pas je een lestijd aan, dan doe je dat hier.
 *
 * Zodra de SportBit-roosterwidget is ingesteld (zie src/sportbit.ts) toont
 * de roosterpagina het echte rooster en is dit bestand alleen nog de bron
 * voor het weekoverzicht op de overzichtspagina.
 */

export type TrainingCategory =
  | 'all'
  | 'small-group'
  | 'bootcamp'
  | 'tabata'
  | 'circuit'
  | 'kids';

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

const bbm = { trainer: 'Marcel', location: 'BBM Elst' };
const buiten = { trainer: 'Marcel', location: 'Buiten Elst' };

const alleNiveaus = 'Alle niveaus';
const gevorderd = 'Gemiddeld tot gevorderd';
const jeugd = '8 tot 16 jaar';

export const schedule: DaySchedule[] = [
  {
    day: 'Maandag',
    shortDay: 'Ma',
    classes: [
      { name: 'Small Group Training', short: 'Small Group', category: 'small-group', time: '07:00', duration: '60 min', level: alleNiveaus, ...bbm },
      { name: 'Circuit Training', short: 'Circuit', category: 'circuit', time: '18:00', duration: '60 min', level: alleNiveaus, ...bbm },
      { name: 'Bootcamp', short: 'Bootcamp', category: 'bootcamp', time: '19:30', duration: '60 min', level: alleNiveaus, ...buiten },
    ],
  },
  {
    day: 'Dinsdag',
    shortDay: 'Di',
    classes: [
      { name: 'Tabata', short: 'Tabata', category: 'tabata', time: '06:30', duration: '45 min', level: gevorderd, ...bbm },
      { name: 'Small Group Training', short: 'Small Group', category: 'small-group', time: '17:00', duration: '60 min', level: alleNiveaus, ...bbm },
    ],
  },
  {
    day: 'Woensdag',
    shortDay: 'Wo',
    classes: [
      { name: 'Circuit Training', short: 'Circuit', category: 'circuit', time: '07:00', duration: '60 min', level: alleNiveaus, ...bbm },
      { name: 'Kids Fitness', short: 'Kids Fitness', category: 'kids', time: '16:00', duration: '45 min', level: jeugd, ...bbm },
      { name: 'Bootcamp', short: 'Bootcamp', category: 'bootcamp', time: '18:30', duration: '60 min', level: alleNiveaus, ...buiten },
    ],
  },
  {
    day: 'Donderdag',
    shortDay: 'Do',
    classes: [
      { name: 'Small Group Training', short: 'Small Group', category: 'small-group', time: '06:00', duration: '60 min', level: alleNiveaus, ...bbm },
      { name: 'Tabata', short: 'Tabata', category: 'tabata', time: '18:00', duration: '45 min', level: gevorderd, ...bbm },
    ],
  },
  {
    day: 'Vrijdag',
    shortDay: 'Vr',
    classes: [
      { name: 'Circuit Training', short: 'Circuit', category: 'circuit', time: '07:00', duration: '60 min', level: alleNiveaus, ...bbm },
      { name: 'Small Group Training', short: 'Small Group', category: 'small-group', time: '17:30', duration: '60 min', level: alleNiveaus, ...bbm },
    ],
  },
  {
    day: 'Zaterdag',
    shortDay: 'Za',
    classes: [
      { name: 'Bootcamp', short: 'Bootcamp', category: 'bootcamp', time: '09:00', duration: '60 min', level: alleNiveaus, ...buiten },
      { name: 'Kids Bootcamp', short: 'Kids Bootcamp', category: 'kids', time: '10:30', duration: '45 min', level: jeugd, ...buiten },
    ],
  },
];

/** Filterlabels op de roosterpagina. */
export const categories: { id: TrainingCategory; label: string }[] = [
  { id: 'all', label: 'Alles' },
  { id: 'small-group', label: 'Small Group' },
  { id: 'bootcamp', label: 'Bootcamp' },
  { id: 'tabata', label: 'Tabata' },
  { id: 'circuit', label: 'Circuit' },
  { id: 'kids', label: 'Kids' },
];

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
