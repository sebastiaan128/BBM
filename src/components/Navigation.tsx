import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo-white.svg"
              alt="Body by Marcel"
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-[#7AC943]'
                    : 'text-white/90 hover:text-[#7AC943]'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/proefdag"
              className="bg-[#7AC943] hover:bg-[#6BB835] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105 shadow-md"
            >
              Proefdag
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden text-white p-2 hover:text-[#7AC943] transition-colors"
            aria-label="Menu"
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 pb-6">
            <div className="flex flex-col gap-1 pt-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-[#7AC943] bg-[#7AC943]/10'
                      : 'text-white/90 hover:text-[#7AC943] hover:bg-zinc-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/proefdag"
                className="mt-2 mx-4 bg-[#7AC943] hover:bg-[#6BB835] text-white py-3 rounded-lg font-semibold text-center transition-all duration-200"
              >
                Gratis Proefdag
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
