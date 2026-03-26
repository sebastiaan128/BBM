import { Activity, Dumbbell, Users, Coffee, Zap, Baby, Weight, ClipboardList } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string | null;
}

const services: Service[] = [
  {
    icon: Activity,
    title: 'Cardio',
    description: 'Verbeter je conditie en uithoudingsvermogen met state-of-the-art cardio apparatuur.',
    link: '/personal-training',
  },
  {
    icon: Dumbbell,
    title: 'Traditionele Krachttraining',
    description: 'Bouw spierkracht op met professionele begeleiding en bewezen methoden.',
    link: '/personal-training',
  },
  {
    icon: Users,
    title: 'Small Group Training',
    description: 'Train in een hechte groep met persoonlijke aandacht voor optimale resultaten.',
    link: '/groepstrainingen/small-group',
  },
  {
    icon: Coffee,
    title: 'Ontspanning',
    description: 'Relax na je workout in onze sauna of aan de sportbar.',
    link: '/contact',
  },
  {
    icon: Zap,
    title: 'Bootcamp',
    description: 'Intensieve outdoor training voor wie grenzen wil verleggen.',
    link: '/groepstrainingen/bootcamp',
  },
  {
    icon: Baby,
    title: 'Kids Fitness & Bootcamp',
    description: "Speciaal afgestemde programma's om kinderen actief en gezond te houden.",
    link: '/groepstrainingen/kids',
  },
  {
    icon: Weight,
    title: 'Vrije Gewichttraining',
    description: 'Ontwikkel functionele kracht met onze complete vrije gewichten sectie.',
    link: '/personal-training',
  },
  {
    icon: ClipboardList,
    title: 'Meten, Wegen & Schema',
    description: "Professionele metingen en gepersonaliseerde trainingsschema's voor jouw doelen.",
    link: '/personal-training',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-36 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            Sportaanbod
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
            Alles wat je nodig hebt
            <br />
            om je doelen te bereiken
          </h2>
          <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            const content = (
              <div className="flex flex-col h-full">
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[#7AC943]/10 text-[#7AC943] group-hover:bg-[#7AC943] group-hover:text-white transition-all duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="font-display text-xl text-white mb-3 tracking-wide">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1">{service.description}</p>
                <span className="inline-block mt-4 text-[#7AC943] text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                  Meer info →
                </span>
              </div>
            );

            const classes = "group relative bg-zinc-800/50 backdrop-blur-sm rounded-2xl p-7 border border-zinc-700/50 hover:border-[#7AC943]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#7AC943]/10 hover:-translate-y-1";

            return service.link ? (
              <Link key={i} to={service.link} className={classes}>{content}</Link>
            ) : (
              <div key={i} className={classes}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
