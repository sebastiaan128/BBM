import { Link } from 'react-router-dom';
import Photo from './Photo';
import { Regels } from './Tekst';
import content from '../content/home.json';

const pt = content.personalTraining;

export default function PersonalTrainingSection() {
  return (
    <section id="personal-training" className="bg-ink text-paper">
      <div className="grid lg:grid-cols-2">
        {/* Beeld bloedt naar de rand */}
        <div className="relative min-h-[24rem] lg:min-h-[38rem] order-last lg:order-first">
          <Photo
            src={pt.foto}
            alt={pt.fotoAlt}
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0"
          />
        </div>

        <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
          <div className="max-w-lg" data-reveal>
            <span className="eyebrow eyebrow-light">{pt.eyebrow}</span>

            <h2 className="display-lg mt-6">
              <Regels tekst={pt.titel} />
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-paper/70">{pt.intro}</p>

            <ul className="mt-9 border-t border-ink-soft">
              {pt.punten.map((benefit) => (
                <li
                  key={benefit}
                  className="flex gap-4 py-3.5 border-b border-ink-soft text-[0.9375rem] text-paper/90"
                >
                  <span className="mt-2 w-2 h-2 bg-lime flex-shrink-0" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="btn btn-lime">
                Boek een intakegesprek
              </Link>
              <Link to="/personal-training" className="btn btn-outline-light">
                Lees meer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
