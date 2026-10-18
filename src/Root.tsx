import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import WhatsAppKnop from './components/WhatsAppKnop';
import useScrollReveal from './hooks/useScrollReveal';
import useRoutePrefetch from './hooks/useRoutePrefetch';
import seo from './content/seo.json';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Expliciet 'instant': html heeft scroll-behavior: smooth voor de ankers
    // op de pagina zelf, en zonder deze regel rijdt de nieuwe pagina bij elke
    // navigatie eerst helemaal naar boven.
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

/**
 * Titel en omschrijving bij het doorklikken binnen de site. Bij het openen
 * van een pagina staan ze al goed in de HTML (scripts/seo-paginas.mjs); dit
 * houdt ze kloppend als de app daarna van pagina wisselt.
 */
function PaginaTitel() {
  const { pathname } = useLocation();
  useEffect(() => {
    const pad = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    const pagina = seo.paginas.find((p) => p.pad === pad);
    document.title = pagina?.titel ?? seo.standaardTitel;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', pagina?.omschrijving ?? seo.standaardOmschrijving);
  }, [pathname]);
  return null;
}

export default function Root() {
  useScrollReveal();
  useRoutePrefetch();

  return (
    <div className="min-h-screen bg-paper">
      <ScrollToTop />
      <PaginaTitel />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
      <WhatsAppKnop />
    </div>
  );
}
