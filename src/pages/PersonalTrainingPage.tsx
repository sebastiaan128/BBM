import { Link } from 'react-router-dom';
import { Award, Target, Heart, TrendingUp, CheckCircle2, Star, Clock, Users } from 'lucide-react';

const trainers = [
  {
    name: 'Marcel van de Berg',
    role: 'Eigenaar & Head Coach',
    specialties: ['Kracht & Conditie', 'Taekwon-do', 'Functioneel Trainen'],
    image: 'https://images.unsplash.com/photo-1549995546-87cb41aa98a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    bio: 'Met meer dan 15 jaar ervaring in de fitnesswereld en een achtergrond in Taekwon-do, helpt Marcel klanten hun fysieke en mentale doelen te bereiken.',
    certifications: ['Personal Trainer A', 'Taekwon-do 4e Dan', 'Nutrition Coach'],
  },
  {
    name: 'Lisa Jansen',
    role: 'Personal Trainer & Groepstrainer',
    specialties: ['Gewichtsverlies', 'Core Training', 'HIIT'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    bio: 'Lisa is gespecialiseerd in het begeleiden van vrouwen naar een gezonder en sterker lichaam. Met haar energieke en positieve aanpak maakt ze van elke training een succes.',
    certifications: ['Personal Trainer B', 'Nutrition Specialist', 'Pre/Postnatal Coach'],
  },
  {
    name: 'Kim de Vries',
    role: 'Personal Trainer & Performance Coach',
    specialties: ['Krachtsport', 'Atletiek', 'Revalidatie'],
    image: 'https://images.unsplash.com/photo-1762744888286-c47377a6b760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    bio: 'Kim combineert haar kennis van fysiotherapie met personal training. Perfect voor wie na een blessure weer wil beginnen.',
    certifications: ['Personal Trainer A', 'Fysiotherapeut', 'Sports Performance'],
  },
  {
    name: 'Sarah Vermeer',
    role: 'Kids Coach & Personal Trainer',
    specialties: ['Jeugdtraining', 'Mobility', 'Beginners'],
    image: 'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    bio: 'Sarah is dé specialist in jeugdtraining en werkt ook met volwassen beginners. Haar geduld en enthousiasme zorgen ervoor dat iedereen zich welkom voelt.',
    certifications: ['Personal Trainer B', 'Jeugdtrainer', 'Mobility Specialist'],
  },
];

const benefits = [
  { icon: Target, title: 'Persoonlijk trainingsplan', description: 'Een programma volledig afgestemd op jouw doelen, niveau en beschikbare tijd.' },
  { icon: Award, title: '100% aandacht', description: 'Elke sessie draait om jou. Geen afleiding, alleen focus op jouw vooruitgang.' },
  { icon: Heart, title: 'Motivatie & begeleiding', description: 'Je trainer zorgt dat je gemotiveerd blijft en grenzen durft te verleggen.' },
  { icon: TrendingUp, title: 'Snellere resultaten', description: 'Met persoonlijke begeleiding bereik je je doelen sneller en effectiever.' },
];

const included = [
  'Uitgebreide intake & doelanalyse',
  'Persoonlijk trainingsplan',
  'Voedings- en lifestyle advies',
  'Continue voortgangsbewaking',
  'WhatsApp support tussen sessies',
  'Flexibele planning',
];

export default function PersonalTrainingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611711605692-acb25d5d8399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Personal Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              Personal Training
            </h1>
            <div className="h-1 w-24 bg-[#7AC943] mb-8" />
            <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-2xl">
              Volledige aandacht, persoonlijk plan, maximaal resultaat.
            </p>
            <Link
              to="/proefdag"
              className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Boek je intake
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-36 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
                Waarom Personal Training?
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6 leading-tight">
                Jouw doelen,
                <br />
                ons commitment
              </h2>
              <div className="h-1 w-16 bg-[#7AC943] mb-6" />
              <div className="space-y-4 text-zinc-600 leading-relaxed">
                <p>
                  Bij Body by Marcel draait personal training om jou. We nemen de tijd om je doelen, ervaring
                  en uitdagingen te begrijpen en stellen een volledig persoonlijk trainingsplan samen.
                </p>
                <p>
                  Of je nu wilt afvallen, sterker worden, herstellen van een blessure of gewoon fitter wilt zijn –
                  onze gecertificeerde trainers begeleiden je stap voor stap naar succes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Personal training session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#7AC943] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">
              Voordelen van Personal Training
            </h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#7AC943]/10 rounded-2xl mb-6">
                    <Icon size={34} className="text-[#7AC943]" />
                  </div>
                  <h3 className="font-display text-2xl text-zinc-900 mb-3 tracking-wide">{b.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-24 md:py-36 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              Ons Team
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">
              Maak kennis met onze trainers
            </h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
              Alle trainers bij Body by Marcel zijn gecertificeerd, ervaren en gedreven om jou naar jouw doelen te begeleiden.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {trainers.map((trainer, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-36 h-36 rounded-full overflow-hidden mb-4 ring-4 ring-[#7AC943]/20">
                      <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display text-2xl text-zinc-900 tracking-wide">{trainer.name}</h3>
                      <div className="flex items-center gap-1 bg-[#7AC943]/10 px-2 py-1 rounded-full">
                        <Star size={12} className="text-[#7AC943] fill-[#7AC943]" />
                        <span className="text-xs font-bold text-[#7AC943]">5.0</span>
                      </div>
                    </div>
                    <p className="text-[#7AC943] font-semibold text-sm">{trainer.role}</p>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5 text-center">{trainer.bio}</p>
                  <div className="mb-5">
                    <div className="text-xs font-semibold text-zinc-400 mb-2 text-center uppercase tracking-wider">Specialisaties</div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {trainer.specialties.map((s, j) => (
                        <span key={j} className="px-3 py-1.5 bg-[#7AC943]/10 text-[#7AC943] text-xs rounded-full font-semibold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-zinc-400 mb-2 text-center uppercase tracking-wider">Certificeringen</div>
                    <div className="space-y-1.5">
                      {trainer.certifications.map((c, j) => (
                        <div key={j} className="flex items-center justify-center gap-2">
                          <CheckCircle2 size={14} className="text-[#7AC943]" />
                          <span className="text-xs text-zinc-500">{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1611711605692-acb25d5d8399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            ].map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden">
                <img src={src} alt={`Training ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6">
              Tarieven Personal Training
            </h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <div className="bg-zinc-50 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl text-zinc-900 tracking-wide">Losse Sessie</h3>
                <Clock size={30} className="text-[#7AC943]" />
              </div>
              <div className="mb-4">
                <span className="font-display text-5xl text-zinc-900">€65</span>
                <span className="text-zinc-400 ml-2 text-sm">per sessie</span>
              </div>
              <p className="text-zinc-500 text-sm">Perfect om te proberen of als aanvulling op je groepstrainingen.</p>
            </div>
            <div className="bg-[#7AC943] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-white/20 text-white px-4 py-1.5 rounded-bl-xl text-xs font-bold">
                VOORDEEL
              </div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display text-2xl text-white tracking-wide">Pakket 10 Sessies</h3>
                <Users size={30} className="text-white" />
              </div>
              <div className="mb-4">
                <span className="font-display text-5xl text-white">€600</span>
                <span className="text-white/80 ml-2 text-sm">€60 per sessie</span>
              </div>
              <p className="text-white/85 text-sm">Bespaar €50 en commit je aan jouw doelen met dit voordelige pakket.</p>
            </div>
          </div>

          <div className="bg-zinc-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-zinc-900 mb-5">Wat is inbegrepen?</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#7AC943] flex-shrink-0" />
                  <span className="text-zinc-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#7AC943]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
            Boek je gratis kennismakingsgesprek en ontdek wat personal training voor jou kan doen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/proefdag"
              className="inline-block bg-white hover:bg-zinc-100 text-[#7AC943] px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Boek gratis intake
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200"
            >
              Stel een vraag
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
