import site from './content/site.json';

/**
 * Contactgegevens, openingstijden en links die op meerdere pagina's staan.
 * De waarden komen uit src/content/site.json (in /admin: Algemeen).
 */
export { site };

/** '06-42059446' → 'tel:0642059446' */
export const telLink = `tel:${site.contact.telefoon.replace(/[^\d+]/g, '')}`;
export const mailLink = `mailto:${site.contact.email}`;
