import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';
import { setConsent } from '../consent';
import { site, telLink, mailLink } from '../site';

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
            <Logo tone="light" size="2.75rem" className="!items-start" />
            <p className="mt-5 text-paper/60 text-sm leading-relaxed max-w-xs">{site.footerTekst}</p>
            <div className="flex gap-2 mt-6">
              {[
                { href: site.social.instagram, label: 'Instagram', Icon: Instagram },
                { href: site.social.facebook, label: 'Facebook', Icon: Facebook },
              ]
                // Een leeg veld in /admin betekent: geen knop.
                .filter((s) => s.href)
                .map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-ink-soft hover:border-lime hover:text-lime flex items-center justify-center text-paper/60 transition-colors duration-150 ease-smooth"
                    aria-label={`Body by Marcel op ${label}`}
                  >
                    <Icon size={17} />
                  </a>
                ))}
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
                {site.contact.straat}
                <br />
                {site.contact.postcodePlaats}
              </p>
              <p>
                <a
                  href={telLink}
                  className="mono text-paper/75 hover:text-lime transition-colors duration-150 ease-smooth"
                >
                  {site.contact.telefoon}
                </a>
              </p>
              <p>
                <a
                  href={mailLink}
                  className="text-paper/75 hover:text-lime transition-colors duration-150 ease-smooth"
                >
                  {site.contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="pt-7 border-t border-ink-soft flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="mono text-xs text-paper/55">
            © {new Date().getFullYear()} Body by Marcel
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-paper/55">
            <li>
              <Link to="/privacy-policy" className="hover:text-lime transition-colors">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/algemene-voorwaarden" className="hover:text-lime transition-colors">
                Algemene voorwaarden
              </Link>
            </li>
            <li>
              {/* Wist de keuze, zodat de banner terugkomt. */}
              <button
                type="button"
                onClick={() => setConsent(null)}
                className="hover:text-lime transition-colors"
              >
                Cookie-instellingen
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
