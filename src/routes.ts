import type { ComponentType } from 'react';

type RouteLoader = () => Promise<{ default: ComponentType }>;

/**
 * Elke pagina wordt apart geladen. De loaders staan hier los van App.tsx
 * zodat een link zijn pagina alvast kan ophalen zodra je erover hovert:
 * de browser bewaart de module, dus de import in App krijgt hem gratis.
 */
export const routeLoaders: Record<string, RouteLoader> = {
  '/': () => import('./pages/Home'),
  '/proefdag': () => import('./pages/Proefdag'),
  '/personal-training': () => import('./pages/PersonalTrainingPage'),
  '/tarieven': () => import('./pages/Tarieven'),
  '/contact': () => import('./pages/Contact'),
  '/groepstrainingen': () => import('./pages/groepstrainingen/Overview'),
  '/groepstrainingen/small-group': () => import('./pages/groepstrainingen/SmallGroup'),
  '/groepstrainingen/bootcamp': () => import('./pages/groepstrainingen/Bootcamp'),
  '/groepstrainingen/tabata': () => import('./pages/groepstrainingen/Tabata'),
  '/groepstrainingen/circuit': () => import('./pages/groepstrainingen/Circuit'),
  '/groepstrainingen/kids': () => import('./pages/groepstrainingen/Kids'),
  '/groepstrainingen/corporate': () => import('./pages/groepstrainingen/Corporate'),
  '/groepstrainingen/rooster': () => import('./pages/groepstrainingen/Rooster'),
};

const prefetched = new Set<string>();

/** Haalt de pagina op de achtergrond op. Onbekende paden negeren we. */
export function prefetchRoute(path: string) {
  const normalized = path.length > 1 ? path.replace(/\/$/, '') : path;
  if (prefetched.has(normalized)) return;
  const load = routeLoaders[normalized];
  if (!load) return;
  prefetched.add(normalized);
  load().catch(() => prefetched.delete(normalized));
}
