/**
 * Koppeling met SportBit, het systeem waarin de lessen en inschrijvingen
 * al worden beheerd (bodybymarcel.sportbitapp.nl).
 *
 * ── De roosterwidget aanzetten ────────────────────────────────────────
 * SportBit levert een roosterwidget: een insluitbaar rooster waarin
 * bezoekers de lestijden zien en zich direct inschrijven. Die code staat
 * niet publiek; vraag hem op in je SportBit-omgeving of bij hun support.
 *
 * Krijg je een IFRAME-adres, zet dat hieronder bij `roosterWidgetUrl`.
 * Het rooster op /groepstrainingen/rooster schakelt dan vanzelf over van
 * het handmatige overzicht naar het echte, actuele rooster.
 *
 * Krijg je in plaats daarvan een <script>-fragment, laat het me weten:
 * dat vraagt een andere inbouw dan een iframe.
 */

const BASE = 'https://bodybymarcel.sportbitapp.nl';

export const sportbit = {
  /** Ledenportaal: inloggen om in te schrijven voor lessen. */
  inloggen: `${BASE}/cbm/account/inloggen/`,
  /** Nieuw account aanmaken. */
  aanmelden: `${BASE}/cbm/account/aanmelden/`,
  /** Proefles inplannen zonder account. */
  proefles: `${BASE}/cbm/proeflesplanner/stap-1/`,
} as const;

/**
 * Vul hier het iframe-adres van de SportBit-roosterwidget in.
 * Zolang dit `null` is, toont de site het handmatige weekoverzicht met de
 * melding dat het een indicatie is.
 */
export const roosterWidgetUrl: string | null = null;
