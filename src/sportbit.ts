import { site } from './site';

/**
 * Koppeling met SportBit, het systeem waarin de lessen en inschrijvingen
 * al worden beheerd (bodybymarcel.sportbitapp.nl).
 *
 * ── De roosterwidget aanzetten ────────────────────────────────────────
 * SportBit levert een roosterwidget: een insluitbaar rooster waarin
 * bezoekers de lestijden zien en zich direct inschrijven. Die code staat
 * niet publiek; vraag hem op in je SportBit-omgeving of bij hun support.
 *
 * Krijg je een IFRAME-adres, vul het in bij 'SportBit-roosterwidget' in
 * /admin (Algemeen), of in src/content/site.json. Het rooster op
 * /groepstrainingen/rooster schakelt dan vanzelf over van het handmatige
 * overzicht naar het echte, actuele rooster.
 *
 * Krijg je in plaats daarvan een <script>-fragment, laat het me weten:
 * dat vraagt een andere inbouw dan een iframe.
 */

const BASE = 'https://bodybymarcel.sportbitapp.nl';

export const sportbit = {
  /** Ledenportaal: inloggen om in te schrijven voor lessen. */
  inloggen: `${BASE}/cbm/account/inloggen/`,
  /** Lid worden: de aanmelding begint met het kiezen van een abonnement. */
  aanmelden: `${BASE}/web/nl/registreren/lidmaatschap`,
  /** Proefles inplannen zonder account. */
  proefles: `${BASE}/cbm/proeflesplanner/stap-1/`,
} as const;

/**
 * Het iframe-adres van de SportBit-roosterwidget, uit de site-instellingen.
 * Zolang het leeg is, toont de site het handmatige weekoverzicht met de
 * melding dat het een indicatie is.
 */
export const roosterWidgetUrl: string | null = site.sportbitRoosterWidget || null;
