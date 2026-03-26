import { Building2, TrendingDown, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: Building2, title: 'Bedrijfstraining', description: 'Op maat gemaakte groepslessen voor uw team' },
  { icon: TrendingDown, title: 'Lager ziekteverzuim', description: 'Investeer in de gezondheid van uw medewerkers' },
  { icon: Users, title: 'Teambuilding', description: 'Versterk de onderlinge band door samen te sporten' },
  { icon: Award, title: 'Betere prestaties', description: 'Fittere medewerkers zijn productiever en gemotiveerder' },
];

export default function CorporateSection() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              Voor bedrijven
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 leading-tight mb-6">
              Investeer in
              <br />
              uw team
            </h2>
            <div className="h-1 w-16 bg-[#7AC943] mb-8" />
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Gezonde en fitte medewerkers zijn productiever, gemotiveerder en minder vaak ziek.
              Body by Marcel biedt bedrijven op maat gemaakte fitnessprogramma's die perfect
              aansluiten bij de behoeften van uw organisatie.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-[#7AC943]/10 rounded-xl flex items-center justify-center text-[#7AC943] flex-shrink-0">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-zinc-900 mb-1 text-sm">{feature.title}</h3>
                      <p className="text-sm text-zinc-500">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            >
              Vraag offerte aan
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1750698544794-bf1cd7038f92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Corporate fitness training"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-28 h-28 bg-[#7AC943] rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
