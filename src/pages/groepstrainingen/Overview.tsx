import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../../components/PageHero';
import content from '../../content/groepstrainingen.json';
import { schedule, todayIndex } from '../../rooster';
import Photo from '../../components/Photo';
import { Alineas, Regels } from '../../components/Tekst';

const { hero, aanpak, afsluiter } = content;

export default function GroepstrainingenOverview() {
  const currentDayIndex = todayIndex();

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.titel}
        intro={hero.intro}
        image={hero.foto}
        imageAlt={hero.fotoAlt}
      >
        <Link to="/groepstrainingen/rooster" className="btn btn-lime">
          Bekijk het rooster
        </Link>
        <Link to="/proefdag" className="btn btn-outline">
          Gratis proefles
        </Link>
      </PageHero>

      {/* Aanpak */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20 items-center">
            <div>
              <span className="eyebrow">{aanpak.eyebrow}</span>
              <h2 className="display-lg mt-6 text-ink">
                <Regels tekst={aanpak.titel} />
              </h2>
              <div className="mt-7 space-y-4 text-lg leading-relaxed text-ink-soft">
                <Alineas tekst={aanpak.tekst} />
              </div>

              <dl className="mt-10 border-t border-hairline">
                {aanpak.principes.map((row) => (
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

            <div className="photo-accent photo-accent-left">
              <div className="aspect-[4/5]">
                <Photo
                  src={aanpak.foto}
                  alt={aanpak.fotoAlt}
                  loading="lazy"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kies je training */}
      <section className="py-20 md:py-24 bg-paper-dim border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="display-lg text-ink">{content.kiesTitel}</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">{content.kiesIntro}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.trainingen.map((t) => (
              <Link
                key={t.id}
                to={`/groepstrainingen/${t.id}`}
                data-reveal
                className="card group flex flex-col overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Photo src={t.foto} alt="" loading="lazy" className="group-hover:scale-[1.03]" />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="display-md text-ink underline decoration-transparent underline-offset-4 decoration-1 group-hover:decoration-moss group-hover:text-moss transition-colors duration-150 ease-smooth">
                    {t.titel}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone flex-1">{t.tekst}</p>
                  <span className="mono inline-flex items-center gap-1.5 mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-moss">
                    Bekijk {t.titel.toLowerCase()}
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

      {/* Deze week */}
      <section className="py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="display-lg text-ink mb-10">{content.weekTitel}</h2>

          <div className="border-t border-ink">
            {schedule.map((day, i) => (
              <div
                key={day.day}
                className={`grid sm:grid-cols-[9rem_1fr] gap-2 sm:gap-6 py-4 border-b border-hairline ${
                  i === currentDayIndex ? 'bg-lime/10 -mx-3 px-3' : ''
                }`}
              >
                <h3 className="flex items-center gap-2 font-semibold text-ink">
                  {i === currentDayIndex && (
                    <span className="w-1.5 h-1.5 bg-lime" aria-hidden="true" />
                  )}
                  {day.day}
                  {i === currentDayIndex && <span className="sr-only">(vandaag)</span>}
                </h3>
                <ul className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {day.classes.length === 0 && (
                    <li className="text-[0.9375rem] text-stone">Geen groepslessen</li>
                  )}
                  {day.classes.map((cls) => (
                    <li key={cls.short + cls.time} className="text-[0.9375rem] text-ink-soft">
                      <span className="mono text-stone mr-2">{cls.time}</span>
                      {cls.short}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            to="/groepstrainingen/rooster"
            className="group inline-flex items-center gap-2 mt-8 mono text-[0.6875rem] uppercase tracking-[0.14em] text-moss underline underline-offset-4 decoration-1"
          >
            Volledig rooster
            <ArrowRight
              size={13}
              className="transition-transform duration-150 ease-smooth group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      {/* Beeldstrook */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {content.beeldstrook.map((src, i) => (
          <div key={src + i} className="aspect-[4/3] overflow-hidden">
            <Photo src={src} alt="" loading="lazy" />
          </div>
        ))}
      </section>

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">
            <Regels tekst={afsluiter.titel} />
          </h2>
          <p className="mt-6 text-paper/65 leading-relaxed">{afsluiter.tekst}</p>
          <Link to="/proefdag" className="btn btn-lime mt-9">
            Proefles boeken
          </Link>
        </div>
      </section>
    </div>
  );
}
