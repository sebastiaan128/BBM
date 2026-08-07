import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { photo } from '../photos';

interface Service {
  title: string;
  description: string;
  image: string;
  link: string;
  /** Benoemt waar je heen gaat: vier kaarten wijzen naar dezelfde pagina. */
  linkLabel: string;
}

const services: Service[] = [
  {
    title: 'Cardio',
    description: 'Loopbanden, stairmaster en fietsen, met een schema dat bij je conditie past.',
    image: photo.cardioLoopband,
    link: '/personal-training',
    linkLabel: 'Naar personal training',
  },
  {
    title: 'Krachttraining',
    description: 'Opbouwen met vrije gewichten en machines, techniek eerst.',
    image: photo.deadlift,
    link: '/personal-training',
    linkLabel: 'Naar personal training',
  },
  {
    title: 'Small Group Training',
    description: 'Acht mensen, één trainer. Groepsenergie zonder in te leveren op aandacht.',
    image: photo.highFive,
    link: '/groepstrainingen/small-group',
    linkLabel: 'Naar small group',
  },
  {
    title: 'Bootcamp',
    description: 'Buiten trainen op het terrein achter de studio, weer of geen weer.',
    image: photo.farmerswalk,
    link: '/groepstrainingen/bootcamp',
    linkLabel: 'Naar bootcamp',
  },
  {
    title: 'Vrije gewichten',
    description: 'Complete dumbbell- en schijvensectie voor functionele kracht.',
    image: photo.dumbbellrek,
    link: '/personal-training',
    linkLabel: 'Naar personal training',
  },
  {
    title: 'Kids Fitness & Bootcamp',
    description: 'Bewegen leren op een manier die kinderen leuk blijven vinden.',
    image: photo.lunge2,
    link: '/groepstrainingen/kids',
    linkLabel: 'Naar kids fitness',
  },
  {
    title: 'Meten, wegen & schema',
    description: 'Metingen op vaste momenten, zodat je vooruitgang zichtbaar wordt.',
    image: photo.coaching,
    link: '/personal-training',
    linkLabel: 'Naar personal training',
  },
  {
    title: 'Sauna & sportbar',
    description: 'Even blijven hangen na je training. Herstel telt net zo hard mee.',
    image: photo.koeling,
    link: '/contact',
    linkLabel: 'Naar contact',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-paper-dim border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Sportaanbod</span>
          <h2 className="display-lg mt-6 text-ink">Wat je hier kunt doen</h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Klik op een onderdeel voor de details, de tijden en wat het kost.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group flex flex-col bg-paper border border-hairline hover:border-ink transition-colors duration-200 rounded-md overflow-hidden"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  className="photo transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col flex-1 p-5">
                <h3 className="display-md text-ink underline decoration-transparent underline-offset-4 decoration-1 group-hover:decoration-moss group-hover:text-moss transition-colors duration-150">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone flex-1">
                  {service.description}
                </p>

                {/* Altijd zichtbaar, dus ook duidelijk zonder muis */}
                <span className="mono inline-flex items-center gap-1.5 mt-4 text-[0.6875rem] uppercase tracking-[0.12em] text-moss">
                  {service.linkLabel}
                  <ArrowRight
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
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
