import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Volledig gepersonaliseerd trainingsschema',
  'One-on-one begeleiding door Marcel',
  'Voedingsadvies op maat',
  'Regelmatige voortgangsmetingen',
  'Flexibele planning',
  'Gegarandeerde resultaten',
];

export default function PersonalTrainingSection() {
  return (
    <section id="personal-training" className="relative py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758875570256-6510adffb1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Personal training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-zinc-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            Personal Training
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white leading-tight mb-6">
            Jouw doelen,
            <br />
            onze focus
          </h2>
          <div className="h-1 w-16 bg-[#7AC943] mb-8" />
          <p className="text-lg text-white/80 mb-10 leading-relaxed">
            Met personal training bij Body by Marcel krijg je de volledige aandacht die je verdient.
            Samen stellen we een plan op dat perfect aansluit bij jouw doelen, niveau en levensstijl.
          </p>

          <div className="space-y-4 mb-10">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-[#7AC943] rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>

          <Link
            to="/contact"
            className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Boek een intakegesprek
          </Link>
        </div>
      </div>
    </section>
  );
}
