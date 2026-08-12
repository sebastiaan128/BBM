import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import useRoutePrefetch from './hooks/useRoutePrefetch';

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

export default function Root() {
  useScrollReveal();
  useRoutePrefetch();

  return (
    <div className="min-h-screen bg-paper">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
