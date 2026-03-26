import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Groepstrainingen', href: '/groepstrainingen' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Tarieven', href: '/tarieven' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <img
                src="/logo-white.svg"
                alt="Body by Marcel"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Persoonlijke fitness & training in het hart van Elst, Utrecht. Waar balans tussen kracht, rust en voeding centraal staat.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 hover:bg-[#7AC943] rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-800 hover:bg-[#7AC943] rounded-lg flex items-center justify-center text-zinc-400 hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Navigatie</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-zinc-400 hover:text-[#7AC943] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#7AC943] mt-1 flex-shrink-0" />
                <p className="text-zinc-400 text-sm">Rijksstraatweg 125<br />3921AD Elst, Utrecht</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#7AC943] flex-shrink-0" />
                <a href="tel:0642059446" className="text-zinc-400 hover:text-[#7AC943] transition-colors text-sm">
                  06-42059446
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#7AC943] flex-shrink-0" />
                <a href="mailto:info@bodybymarcel.nl" className="text-zinc-400 hover:text-[#7AC943] transition-colors text-sm">
                  info@bodybymarcel.nl
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Body by Marcel. Alle rechten voorbehouden.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/contact" className="text-zinc-600 hover:text-[#7AC943] transition-colors">Privacybeleid</Link>
            <Link to="/contact" className="text-zinc-600 hover:text-[#7AC943] transition-colors">Algemene voorwaarden</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
