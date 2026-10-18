import { Link } from 'react-router-dom';
import Photo from './Photo';
import { Regels } from './Tekst';
import content from '../content/home.json';

const bedrijven = content.bedrijven;

export default function CorporateSection() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-reveal>
            <span className="eyebrow">{bedrijven.eyebrow}</span>

            <h2 className="display-lg mt-6 text-ink">
              <Regels tekst={bedrijven.titel} />
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-ink-soft">{bedrijven.intro}</p>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-8">
              {bedrijven.punten.map((feature) => (
                <div key={feature.titel} className="py-4 border-t border-hairline">
                  <dt className="font-semibold text-ink text-[0.9375rem]">{feature.titel}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-stone">{feature.tekst}</dd>
                </div>
              ))}
            </dl>

            <Link to="/contact" className="btn btn-primary mt-10">
              {bedrijven.knop}
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {bedrijven.fotos.map((f, i) => (
              <div
                key={f.foto + i}
                className={`aspect-[3/4] overflow-hidden rounded-md ${i % 2 ? 'mt-10' : ''}`}
                data-reveal
              >
                <Photo src={f.foto} alt={f.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
