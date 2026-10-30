import { site } from './site';

/**
 * Koppeling met SportBit, het systeem waarin de lessen en inschrijvingen
 * al worden beheerd (bodybymarcel.sportbitapp.nl).
 *
 * ── De roosterwidget ──────────────────────────────────────────────────
 * SportBit levert een insluitbaar rooster waarin bezoekers de lestijden
 * zien en zich direct inschrijven. De site toont daaruit alleen de
 * groepslessen, in eigen stijl (zie src/components/SportbitRooster.tsx).
 * Welk rooster getoond wordt staat bij 'SportBit-roosterwidget' in /admin
 * (Algemeen), of in src/content/site.json: het rooster-ID uit de
 * insluitcode van SportBit. Leeg = het handmatige weekoverzicht.
 */

export const SPORTBIT_BASE = 'https://bodybymarcel.sportbitapp.nl';
const BASE = SPORTBIT_BASE;

export const sportbit = {
  /** Ledenportaal: inloggen om in te schrijven voor lessen. */
  inloggen: `${BASE}/cbm/account/inloggen/`,
  /** Lid worden: de aanmelding begint met het kiezen van een abonnement. */
  aanmelden: `${BASE}/web/nl/registreren/lidmaatschap`,
  /** Proefles inplannen zonder account. */
  proefles: `${BASE}/cbm/proeflesplanner/stap-1/`,
} as const;

/**
 * Het rooster-ID van de SportBit-roosterwidget, uit de site-instellingen.
 * Zolang het leeg is, toont de site het handmatige weekoverzicht met de
 * melding dat het een indicatie is.
 */
export const roosterWidgetId: string | null = site.sportbitRoosterWidget.trim() || null;
