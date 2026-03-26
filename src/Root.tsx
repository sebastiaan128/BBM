import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Root() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
