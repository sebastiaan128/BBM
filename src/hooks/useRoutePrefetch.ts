import { useEffect } from 'react';
import { prefetchRoute } from '../routes';

/**
 * Haalt de pagina achter een link op zodra je hem aanwijst of hem met de
 * tab-toets bereikt. Tegen de tijd dat je klikt staat het bestand er al, en
 * blijft de overgang tussen pagina's een sprong zonder tussenscherm.
 *
 * Eén luisteraar op document in plaats van handlers op elke <Link>: zo geldt
 * het ook voor links in pagina's die later pas worden geladen.
 */
export default function useRoutePrefetch() {
  useEffect(() => {
    const onPointer = (event: Event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;

      // Alleen interne links; externe hosts en mailto/tel slaan we over.
      if (anchor.target === '_blank' || anchor.origin !== window.location.origin) return;

      prefetchRoute(anchor.pathname);
    };

    // pointerover bubbelt, dus één luisteraar volstaat; pointerenter niet.
    document.addEventListener('pointerover', onPointer, { passive: true });
    document.addEventListener('focusin', onPointer, { passive: true });

    return () => {
      document.removeEventListener('pointerover', onPointer);
      document.removeEventListener('focusin', onPointer);
    };
  }, []);
}
