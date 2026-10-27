/**
 * Zet elk bedrag in een tekst in dezelfde notatie, wat er in /admin ook
 * getypt is: hele euro's als "€60,-", met centen als "€52,50", duizendtallen
 * met een punt ("€1.140,-").
 *
 *   "€60"      → "€60,-"
 *   "€ 60,00"  → "€60,-"
 *   "€52.5"    → "€52,50"
 *   "€1140,-"  → "€1.140,-"
 *
 * Tekst zonder €-teken (zoals "Op aanvraag") blijft zoals hij is.
 */
const BEDRAG = /€\s*(\d{1,3}(?:\.\d{3})+|\d+)(?:[,.](\d{1,2})(?!\d)|,\s*[-–—]+)?/g;

export function prijsTekst(tekst: string): string {
  return tekst.replace(BEDRAG, (_, euros: string, centen?: string) => {
    // Met de hand in plaats van toLocaleString: dan is de uitkomst bij het
    // vooraf renderen in Node exact gelijk aan die in de browser.
    const heel = String(Number(euros.replace(/\./g, ''))).replace(/\B(?=(\d{3})+$)/g, '.');
    const cc = centen?.padEnd(2, '0');
    return !cc || cc === '00' ? `€${heel},-` : `€${heel},${cc}`;
  });
}
