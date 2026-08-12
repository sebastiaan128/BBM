import { Link } from 'react-router-dom';
import { photo } from '../photos';
import Photo from './Photo';

const features = [
  { title: 'Bedrijfstraining', description: 'Groepslessen op een vast moment in de week, afgestemd op uw team.' },
  { title: 'Lager verzuim', description: 'Medewerkers die bewegen melden zich minder vaak ziek.' },
  { title: 'Teambuilding', description: 'Samen trainen doet meer voor de onderlinge band dan een uitje.' },
  { title: 'Scherpere dagen', description: 'Fittere mensen houden hun energie langer vast.' },
];

export default function CorporateSection() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div data-reveal>
            <span className="eyebrow">Voor bedrijven</span>

            <h2 className="display-lg mt-6 text-ink">
              Zet uw team
              <br />
              in beweging
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-ink-soft">
              Body by Marcel verzorgt bedrijfstrainingen voor teams uit Elst en omgeving. U kiest het
              moment, wij zorgen voor een programma waar iedereen op zijn eigen niveau in meekan.
            </p>

            <dl className="mt-10 grid sm:grid-cols-2 gap-x-8">
              {features.map((feature) => (
                <div key={feature.title} className="py-4 border-t border-hairline">
                  <dt className="font-semibold text-ink text-[0.9375rem]">{feature.title}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-stone">{feature.description}</dd>
                </div>
              ))}
            </dl>

            <Link to="/contact" className="btn btn-primary mt-10">
              Vraag een offerte aan
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-md" data-reveal>
              <Photo
                src={photo.duoHalters}
                alt="Twee collega's trainen samen met halters"
                loading="lazy"
              />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-md mt-10" data-reveal>
              <Photo
                src={photo.duoHalters2}
                alt="Collega's trainen samen in de studio"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
