import { useSyncExternalStore } from 'react';

/**
 * Cookietoestemming. Zolang de bezoeker niet op Accepteren heeft gedrukt,
 * laadt de site geen Google Analytics. 'null' betekent: nog geen keuze
 * gemaakt, dan staat de banner in beeld.
 *
 * De keuze staat in localStorage. Lukt dat niet (privévenster, geblokkeerde
 * opslag), dan geldt hij alleen voor dit bezoek.
 */
export type Consent = 'granted' | 'denied' | null;

/** Hetzelfde Analytics-property als op de vorige site. */
const GA_ID = 'G-HSHLJHD9NS';
const STORAGE_KEY = 'bbm-cookies';

let current: Consent = read();
const listeners = new Set<() => void>();

function read(): Consent {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  current = value;
  try {
    if (value) localStorage.setItem(STORAGE_KEY, value);
    else localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Alleen voor dit bezoek dan.
  }
  // Intrekken van eerder gegeven toestemming: de al geplaatste
  // Analytics-cookies weghalen en opnieuw laden, zodat het script weg is.
  if (value !== 'granted' && analyticsLoaded) {
    for (const c of document.cookie.split(';')) {
      const name = c.split('=')[0].trim();
      if (name.startsWith('_ga')) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${location.hostname.replace(/^www\./, '.')}`;
        document.cookie = `${name}=; Max-Age=0; path=/`;
      }
    }
    location.reload();
    return;
  }
  if (value === 'granted') loadAnalytics();
  listeners.forEach((l) => l());
}

export function useConsent(): Consent {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => current,
  );
}

let analyticsLoaded = false;

/**
 * Laadt gtag.js. Paginawissels binnen de site meet GA4 zelf, via de
 * standaard 'enhanced measurement' die op de browsergeschiedenis let.
 */
function loadAnalytics() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // gtag verwacht het arguments-object zelf, geen array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', GA_ID, { anonymize_ip: true });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

if (current === 'granted') loadAnalytics();
