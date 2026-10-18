import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Photo from './Photo';
import content from '../content/home.json';

const aanbod = content.aanbod;

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-paper-dim border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="max-w-2xl mb-14" data-reveal>
          <span className="eyebrow">{aanbod.eyebrow}</span>
          <h2 className="display-lg mt-6 text-ink">{aanbod.titel}</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">{aanbod.intro}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aanbod.items.map((service) => (
            <Link
              key={service.titel}
              to={service.link}
              data-reveal
              className="card group flex flex-col overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <Photo
                  src={service.foto}
                  alt=""
                  loading="lazy"
                  className="group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="display-md text-ink underline decoration-transparent underline-offset-4 decoration-1 group-hover:decoration-moss group-hover:text-moss transition-colors duration-150 ease-smooth">
                  {service.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone flex-1">
                  {service.tekst}
                </p>

                {/* Altijd zichtbaar, dus ook duidelijk zonder muis */}
                <span className="mono inline-flex items-center gap-1.5 mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-moss">
                  {service.linkTekst}
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-150 ease-smooth group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
