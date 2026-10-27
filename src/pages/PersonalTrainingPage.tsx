import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Photo from '../components/Photo';
import { Alineas, Regels } from '../components/Tekst';
import content from '../content/personal-training.json';
import { prijsTekst } from '../prijs';

const { hero, waarom, team, prijzen, afsluiter } = content;

export default function PersonalTrainingPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.titel}
        intro={hero.intro}
        image={hero.foto}
        imageAlt={hero.fotoAlt}
      >
        <Link to="/proefdag" className="btn btn-lime">
          Boek je intake
        </Link>
        <Link to="/tarieven" className="btn btn-outline">
          Bekijk de tarieven
        </Link>
      </PageHero>

      {/* Waarom */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="eyebrow">{waarom.eyebrow}</span>
              <h2 className="display-lg mt-6 text-ink">
                <Regels tekst={waarom.titel} />
              </h2>
              <div className="mt-7 space-y-4 text-lg leading-relaxed text-ink-soft">
                <Alineas tekst={waarom.tekst} />
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 mt-10">
                {waarom.voordelen.map((b) => (
                  <div key={b.titel} className="py-4 border-t border-hairline">
                    <h3 className="font-semibold text-ink text-[0.9375rem]">{b.titel}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{b.tekst}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="photo-accent photo-accent-left">
              <div className="aspect-[3/4]">
                <Photo src={waarom.foto} alt={waarom.fotoAlt} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team. Een foto is een vierkante uitsnede van hoofd en schouders van
          de trainer zelf; zonder foto toont het profiel de eerste letter. */}
      <section className="py-20 md:py-24 bg-paper-dim border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">{team.eyebrow}</span>
            <h2 className="display-lg mt-6 text-ink">{team.titel}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10">
            {team.trainers.map((trainer) => (
              <article key={trainer.naam} className="flex gap-5 py-8 border-t border-hairline">
                <div className="size-20 sm:size-24 shrink-0 overflow-hidden rounded-full">
                  {trainer.foto ? (
                    <Photo src={trainer.foto} alt={trainer.naam} loading="lazy" sizes="96px" />
                  ) : (
                    <div className="h-full bg-ink flex items-center justify-center" aria-hidden="true">
                      <span className="display-md text-lime">{trainer.naam[0]}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="display-md text-ink">{trainer.naam}</h3>
                  <p className="mono text-[0.6875rem] uppercase tracking-[0.12em] text-moss mt-1">
                    {trainer.functie}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{trainer.bio}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Focus van ${trainer.naam}`}>
                    {trainer.focus.map((s) => (
                      <li
                        key={s}
                        className="mono text-[0.6875rem] uppercase tracking-[0.08em] text-ink-soft border border-hairline px-2.5 py-1"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beeldstrook */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {content.beeldstrook.map((src, i) => (
          <div key={src + i} className="aspect-[3/4] overflow-hidden">
            <Photo src={src} alt="" loading="lazy" />
          </div>
        ))}
      </section>

      {/* Tarieven */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="display-lg text-ink mb-10">{prijzen.titel}</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-8">
              <h3 className="display-md text-ink">{prijzen.los.naam}</h3>
              <p className="mono text-4xl text-ink mt-4">{prijsTekst(prijzen.los.prijs)}</p>
              <p className="mono text-xs text-stone mt-1">{prijsTekst(prijzen.los.per)}</p>
              <p className="mt-5 text-sm leading-relaxed text-stone">{prijzen.los.tekst}</p>
            </div>

            <div className="bg-ink text-paper p-8 relative">
              <span className="mono absolute top-0 right-0 bg-lime text-ink text-[0.625rem] uppercase tracking-[0.12em] px-2.5 py-1.5">
                {prijzen.voordeel.label}
              </span>
              <h3 className="display-md">{prijzen.voordeel.naam}</h3>
              <p className="mono text-4xl mt-4">{prijsTekst(prijzen.voordeel.prijs)}</p>
              <p className="mono text-xs text-paper/50 mt-1">{prijsTekst(prijzen.voordeel.per)}</p>
              <p className="mt-5 text-sm leading-relaxed text-paper/70">{prijzen.voordeel.tekst}</p>
            </div>
          </div>

          <h3 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mt-14 mb-5">
            {prijzen.inbegrepenTitel}
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-ink">
            {prijzen.inbegrepen.map((item) => (
              <li key={item} className="py-3.5 border-b border-hairline text-[0.9375rem] text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">{afsluiter.titel}</h2>
          <p className="mt-6 text-paper/65 leading-relaxed max-w-xl mx-auto">{afsluiter.tekst}</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/proefdag" className="btn btn-lime justify-center">
              Boek een gratis intake
            </Link>
            <Link to="/contact" className="btn btn-outline-light justify-center">
              Stel eerst een vraag
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
