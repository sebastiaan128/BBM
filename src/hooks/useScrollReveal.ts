import { useEffect } from 'react';

/** Trapje tussen elementen die samen in beeld komen. */
const STAGGER_MS = 60;
/** Meer dan zeven treden en de laatste kaart laat te lang op zich wachten. */
const MAX_STEPS = 6;

function reveal(el: Element, step: number) {
  if (step > 0) {
    (el as HTMLElement).style.transitionDelay = `${Math.min(step, MAX_STEPS) * STAGGER_MS}ms`;
  }
  el.classList.add('is-revealed');
}

/**
 * Laat alles met `data-reveal` binnenkomen zodra het in beeld scrollt.
 *
 * Eén observer voor de hele pagina, in plaats van een hook per sectie. Wat
 * in dezelfde stap in beeld komt (de kaarten van een raster) krijgt een
 * trapje mee; een element dat je los tegenkomt verschijnt zonder wachttijd.
 *
 * Nieuwe elementen worden vanzelf opgepikt: pagina's worden lazy geladen en
 * verschijnen dus ná het opzetten van de observer, en lijsten met een filter
 * wisselen hun inhoud tussendoor.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Zonder observer, of als iemand beweging heeft uitgezet, staat alles er
    // gewoon meteen. De begintoestand mag nooit blijven hangen.
    if (prefersReduced || !('IntersectionObserver' in window)) {
      const showAll = () =>
        document.querySelectorAll('[data-reveal]:not(.is-revealed)').forEach((el) => reveal(el, 0));
      showAll();
      const mo = new MutationObserver(showAll);
      mo.observe(document.body, { childList: true, subtree: true });
      return () => mo.disconnect();
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        // De volgorde van entries ligt niet vast; op leesvolgorde sorteren
        // zorgt dat het trapje van boven naar beneden loopt.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        visible.forEach((entry, i) => {
          reveal(entry.target, i);
          observer.unobserve(entry.target);
        });
      },
      // Iets voorbij de onderrand, zodat het element al staat wanneer je
      // erbij bent in plaats van te bewegen terwijl je het leest.
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    );

    const observeNew = () =>
      document
        .querySelectorAll('[data-reveal]:not(.is-revealed)')
        .forEach((el) => io.observe(el));

    observeNew();
    const mo = new MutationObserver(observeNew);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}
