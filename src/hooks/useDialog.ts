import { useEffect } from 'react';

/**
 * Escape sluit een venster, zoals bij elk ander venster. Zolang het open
 * staat scrollt de pagina erachter niet mee.
 */
export function useDialog(open: boolean, close: () => void) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, close]);
}
