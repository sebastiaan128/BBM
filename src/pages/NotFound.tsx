import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { photo } from '../photos';

const destinations = [
  { label: 'Home', href: '/', description: 'Terug naar het begin' },
  {
    label: 'Groepstrainingen',
    href: '/groepstrainingen',
    description: 'Small group, bootcamp, tabata, circuit, kids en bedrijven',
  },
  { label: 'Rooster', href: '/groepstrainingen/rooster', description: 'Alle lessen per dag' },
  {
    label: 'Personal training',
    href: '/personal-training',
    description: 'Eén op één, van intake tot resultaat',
  },
  { label: 'Tarieven', href: '/tarieven', description: 'Losse lessen, strippenkaarten en pakketten' },
  { label: 'Contact', href: '/contact', description: 'Adres, openingstijden en het formulier' },
];

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <div className="bg-paper">
      <header className="border-b border-hairline">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex items-center px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-24">
            <div className="max-w-lg">
              <span className="eyebrow">Fout 404</span>

              <h1 className="display-lg mt-6 text-ink">Deze pagina bestaat niet</h1>

              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Waarschijnlijk klopt er iets niet aan het adres, of is de pagina verplaatst. Hieronder
                staat waar je wel terecht kunt.
              </p>

              {/* Het opgevraagde adres, zodat je weet welke link fout was */}
              <p className="mt-6 mono text-xs text-stone break-all">
                Opgevraagd: <span className="text-ink">{pathname}</span>
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/" className="btn btn-lime">
                  Naar de homepage
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Melden dat deze link stuk is
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[20rem] sm:min-h-[26rem] lg:min-h-[34rem]">
            <img
              src={photo.matten}
              alt="De lege studio van Body by Marcel"
              className="photo absolute inset-0"
            />
          </div>
        </div>
      </header>

      {/* Waar je wel heen kunt */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-6">
            Alle pagina's
          </h2>

          <ul className="border-t border-ink">
            {destinations.map((item) => (
              <li key={item.href} className="border-b border-hairline">
                <Link
                  to={item.href}
                  className="group grid sm:grid-cols-[14rem_1fr_auto] gap-1 sm:gap-6 items-baseline py-4"
                >
                  <span className="font-semibold text-ink group-hover:text-moss transition-colors duration-150">
                    {item.label}
                  </span>
                  <span className="text-sm text-stone">{item.description}</span>
                  <ArrowRight
                    size={15}
                    className="hidden sm:block text-stone group-hover:text-moss group-hover:translate-x-0.5 transition-all"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-stone leading-relaxed">
            Kom je er niet uit? Bel{' '}
            <a href="tel:0642059446" className="mono text-moss underline underline-offset-4 decoration-1 hover:decoration-2">
              06-42059446
            </a>{' '}
            of mail{' '}
            <a
              href="mailto:info@bodybymarcel.nl"
              className="text-moss underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              info@bodybymarcel.nl
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
