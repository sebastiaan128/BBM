import { Link } from 'react-router-dom';
import { photo } from '../photos';
import Photo from './Photo';

const benefits = [
  'Een schema dat op jouw doelen en agenda is gebouwd',
  'Eén op één begeleiding, elke sessie',
  'Voedingsadvies dat past bij hoe je leeft',
  'Metingen op vaste momenten, zodat je ziet wat er verandert',
  'Trainen op tijden die jou schikken',
];

export default function PersonalTrainingSection() {
  return (
    <section id="personal-training" className="bg-ink text-paper">
      <div className="grid lg:grid-cols-2">
        {/* Beeld bloedt naar de rand */}
        <div className="relative min-h-[24rem] lg:min-h-[38rem] order-last lg:order-first">
          <Photo
            src={photo.emsVest2}
            alt="Persoonlijke begeleiding tijdens een krachtsessie"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="absolute inset-0"
          />
        </div>

        <div className="flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 py-20 lg:py-28">
          <div className="max-w-lg" data-reveal>
            <span className="eyebrow eyebrow-light">Personal training</span>

            <h2 className="display-lg mt-6">
              Eén op één,
              <br />
              van intake tot resultaat
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-paper/70">
              We beginnen met een intake: waar sta je nu, waar wil je heen, en wat past er in je
              week. Daarna train je met een plan dat meegroeit met je vooruitgang.
            </p>

            <ul className="mt-9 border-t border-ink-soft">
              {benefits.map((benefit) => (
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
