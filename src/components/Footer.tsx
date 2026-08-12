import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Groepstrainingen', href: '/groepstrainingen' },
  { label: 'Personal Training', href: '/personal-training' },
  { label: 'Tarieven', href: '/tarieven' },
  { label: 'Contact', href: '/contact' },
  { label: 'Proefdag', href: '/proefdag' },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t-2 border-lime">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12 mb-14">
          {/* Merk */}
          <div>
            <Logo tone="light" size="2.25rem" className="!items-start" />
            <p className="mt-5 text-paper/60 text-sm leading-relaxed max-w-xs">
              Fitness en personal training in het hart van Elst, Utrecht. Kracht, rust en voeding in
              balans.
            </p>
            <div className="flex gap-2 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ink-soft hover:border-lime hover:text-lime flex items-center justify-center text-paper/60 transition-colors duration-150 ease-smooth"
                aria-label="Body by Marcel op Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-ink-soft hover:border-lime hover:text-lime flex items-center justify-center text-paper/60 transition-colors duration-150 ease-smooth"
                aria-label="Body by Marcel op Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h2 className="mono text-[0.625rem] uppercase tracking-[0.18em] text-paper/40 mb-5">
              Navigatie
            </h2>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-paper/75 hover:text-lime transition-colors duration-150 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mono text-[0.625rem] uppercase tracking-[0.18em] text-paper/40 mb-5">
              Contact
            </h2>
            <address className="not-italic space-y-4 text-sm">
              <p className="text-paper/75 leading-relaxed">
                Rijksstraatweg 125
                <br />
                3921 AD Elst, Utrecht
              </p>
              <p>
                <a
                  href="tel:0642059446"
                  className="mono text-paper/75 hover:text-lime transition-colors duration-150 ease-smooth"
                >
                  06-42059446
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@bodybymarcel.nl"
                  className="text-paper/75 hover:text-lime transition-colors duration-150 ease-smooth"
                >
                  info@bodybymarcel.nl
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-7 border-t border-ink-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="mono text-xs text-paper/55">
            © {new Date().getFullYear()} Body by Marcel
          </p>
          {/* TODO: hier horen een echt privacybeleid en echte algemene
              voorwaarden te staan. Tot die pagina's er zijn geen link, want
              een link met dat label die naar het contactformulier gaat is
              misleidend. */}
          <p className="text-xs text-paper/55">
            Vragen over je gegevens?{' '}
            <Link
              to="/contact"
              className="text-paper underline underline-offset-4 decoration-1 hover:text-lime transition-colors"
            >
              Neem contact op
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
