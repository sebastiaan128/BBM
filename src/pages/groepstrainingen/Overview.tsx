import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../../components/PageHero';
import { photo } from '../../photos';
import { schedule, todayIndex } from '../../rooster';
import Photo from '../../components/Photo';

const trainingTypes = [
  {
    id: 'small-group',
    title: 'Small Group Training',
    description: 'Maximaal acht personen, dus je krijgt nog steeds correctie op je techniek.',
    image: photo.cardioDuo,
  },
  {
    id: 'bootcamp',
    title: 'Bootcamp',
    description: 'Buiten op het terrein, met je eigen gewicht en wat er verder voorhanden is.',
    image: photo.farmerswalk,
  },
  {
    id: 'tabata',
    title: 'Tabata',
    description: 'Korte, explosieve intervallen. Twintig seconden aan, tien seconden uit.',
    image: photo.opdrukken,
  },
  {
    id: 'circuit',
    title: 'Circuit Training',
    description: 'Vaste ronde langs de stations, hele lichaam in één les.',
    image: photo.kabelPull,
  },
  {
    id: 'kids',
    title: 'Kids Fitness & Bootcamp',
    description: 'Voor 8 tot 16 jaar. Bewegen leren zonder dat het op school lijkt.',
    image: photo.lunge2,
  },
  {
    id: 'corporate',
    title: 'Bedrijfstraining',
    description: 'Een vast moment in de week voor uw team, op maat samengesteld.',
    image: photo.duoHalters,
  },
];

const principles = [
  { k: 'Groepsgrootte', v: 'Nooit meer dan acht mensen per les' },
  { k: 'Begeleiding', v: 'Een trainer die je naam en je schema kent' },
  { k: 'Niveau', v: 'Elke oefening heeft een lichtere en zwaardere variant' },
  { k: 'Rooster', v: 'Vroeg in de ochtend, eind van de middag en zaterdag' },
];

export default function GroepstrainingenOverview() {
  const currentDayIndex = todayIndex();

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Groepstrainingen"
        title="Samen trainen, zonder in de massa te verdwijnen"
        intro="Zes vormen van groepstraining, allemaal in groepen van maximaal acht. Kies wat bij je past, of probeer er eerst een."
        image={photo.duoMedicijnbal}
        imageAlt="Twee deelnemers trainen samen met een medicijnbal"
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
              <span className="eyebrow">De aanpak</span>
              <h2 className="display-lg mt-6 text-ink">
                Kwaliteit boven
                <br />
                aantallen
              </h2>
              <div className="mt-7 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  Groepstraining hoeft niet te betekenen dat je een nummer bent. Door de groepen klein
                  te houden blijft er ruimte om je houding te corrigeren en de oefening aan te passen
                  aan wat jij op dat moment aankunt.
                </p>
                <p>
                  Beginner of gevorderd: je doet dezelfde les mee, op jouw niveau.
                </p>
              </div>

              <dl className="mt-10 border-t border-hairline">
                {principles.map((row) => (
                  <div
                    key={row.k}
                    className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline"
                  >
                    <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone sm:pt-0.5">
                      {row.k}
                    </dt>
                    <dd className="text-[0.9375rem] text-ink">{row.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="photo-accent photo-accent-left">
              <div className="aspect-[4/5]">
                <Photo
                  src={photo.highFive}
                  alt="Deelnemer en trainer geven elkaar een high five"
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
            <h2 className="display-lg text-ink">Kies je training</h2>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Klik op een training voor de details, het niveau en de tijden.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trainingTypes.map((t) => (
              <Link
                key={t.id}
                to={`/groepstrainingen/${t.id}`}
                data-reveal
                className="card group flex flex-col overflow-hidden"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <Photo src={t.image} alt="" loading="lazy" className="group-hover:scale-[1.03]" />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <h3 className="display-md text-ink underline decoration-transparent underline-offset-4 decoration-1 group-hover:decoration-moss group-hover:text-moss transition-colors duration-150 ease-smooth">
                    {t.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone flex-1">{t.description}</p>
                  <span className="mono inline-flex items-center gap-1.5 mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-moss">
                    Bekijk {t.title.toLowerCase()}
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
          <h2 className="display-lg text-ink mb-10">Deze week</h2>

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
                  {day.classes.map((cls) => (
                    <li key={cls.short} className="text-[0.9375rem] text-ink-soft">
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
        {[photo.studioHal, photo.opdrukken2, photo.schoudersHalters, photo.matten].map((src) => (
          <div key={src} className="aspect-[4/3] overflow-hidden">
            <Photo src={src} alt="" loading="lazy" />
          </div>
        ))}
      </section>

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">
            Je eerste groepsles
            <br />
            is gratis
          </h2>
          <p className="mt-6 text-paper/65 leading-relaxed">
            Kom een keer meedoen en kijk of het klikt. Geen abonnement, geen verplichtingen.
          </p>
          <Link to="/proefdag" className="btn btn-lime mt-9">
            Proefles boeken
          </Link>
        </div>
      </section>
    </div>
  );
}
