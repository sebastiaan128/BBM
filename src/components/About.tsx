import Photo from './Photo';
import { Alineas, Regels } from './Tekst';
import content from '../content/home.json';

const over = content.over;

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Eén foto met de groene lijn. Een tweede, overlappende foto erbij
              botste met het kader: twee accenten om dezelfde hoek. */}
          <div className="photo-accent lg:mr-4" data-reveal>
            <div className="aspect-[3/4]">
              <Photo
                src={over.foto}
                alt={over.fotoAlt}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Tekst */}
          <div className="lg:pt-4" data-reveal>
            <span className="eyebrow">{over.eyebrow}</span>

            <h2 className="display-lg mt-6 text-ink">
              <Regels tekst={over.titel} />
            </h2>

            <div className="mt-8 space-y-5 text-ink-soft leading-relaxed">
              <Alineas tekst={over.tekst} />
            </div>

            {/* Feiten, geen decoratie */}
            <dl className="mt-10 border-t border-hairline">
              {over.feiten.map((row) => (
                <div
                  key={row.label}
                  className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline"
                >
                  <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone sm:pt-0.5">
                    {row.label}
                  </dt>
                  <dd className="text-[0.9375rem] text-ink">{row.waarde}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
