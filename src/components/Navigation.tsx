import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Groepstrainingen', href: '/groepstrainingen' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Tarieven', href: '/tarieven' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`sticky top-0 z-50 bg-paper border-b transition-shadow duration-200 ${
        isScrolled ? 'border-hairline shadow-[0_1px_12px_rgba(26,26,23,0.06)]' : 'border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="flex items-center justify-between h-[4.5rem]">
          <Link to="/" className="flex-shrink-0" aria-label="Body by Marcel, naar de homepage">
            <Logo tone="ink" size="1.6rem" />
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                className={`text-[0.9375rem] transition-colors duration-150 pb-1 border-b-2 ${
                  location.pathname === item.href
                    ? 'text-ink font-semibold border-lime'
                    : 'text-stone hover:text-ink border-transparent'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/proefdag" className="btn btn-lime !py-2.5 !px-5 !text-sm">
              Proefdag
            </Link>
          </div>

          {/* Mobiel */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-ink p-2 -mr-2"
            aria-expanded={isMobileOpen}
            aria-label={isMobileOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileOpen && (
          <div className="md:hidden border-t border-hairline py-2 pb-5">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`py-3.5 text-[0.9375rem] border-b border-hairline ${
                    location.pathname === item.href ? 'text-ink font-semibold' : 'text-stone'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/proefdag" className="btn btn-lime justify-center mt-5">
                Plan je proefdag
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
