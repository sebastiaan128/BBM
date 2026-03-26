import { Link } from 'react-router-dom';
import { ArrowRight, Users, Target, Award, Calendar } from 'lucide-react';

const trainingTypes = [
  { id: 'small-group', title: 'Small Group Training', description: 'Maximaal 8 personen. Persoonlijke begeleiding in een kleine groep.', image: 'https://images.unsplash.com/photo-1682531024803-376c7dfd7975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' },
  { id: 'bootcamp', title: 'Bootcamp', description: 'Buiten trainen in weer en wind. Functioneel en intensief.', image: 'https://images.unsplash.com/photo-1767211808976-4317c37e77c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' },
  { id: 'tabata', title: 'Tabata', description: 'Korte, explosieve intervallen. Maximaal resultaat in minimale tijd.', image: 'https://images.unsplash.com/photo-1657289174053-fc19f9fd9aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' },
  { id: 'circuit', title: 'Circuit Training', description: 'Wisselende stations, totale body workout. Nooit saai.', image: 'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' },
  { id: 'kids', title: 'Kids Fitness & Bootcamp', description: 'Kracht en conditie voor jongeren van 8-16 jaar.', image: 'https://images.unsplash.com/photo-1641708594063-46b5bbe83e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' },
  { id: 'corporate', title: 'Bedrijfstraining', description: 'Groepstraining speciaal voor bedrijven en teams.', image: 'https://images.unsplash.com/photo-1593234270323-0414ec1574e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' },
];

const weekSchedule = [
  { day: 'Maandag', classes: [{ name: 'Small Group', time: '07:00' }, { name: 'Circuit', time: '18:00' }, { name: 'Bootcamp', time: '19:30' }] },
  { day: 'Dinsdag', classes: [{ name: 'Tabata', time: '06:30' }, { name: 'Small Group', time: '17:00' }] },
  { day: 'Woensdag', classes: [{ name: 'Circuit', time: '07:00' }, { name: 'Kids Fitness', time: '16:00' }, { name: 'Bootcamp', time: '18:30' }] },
  { day: 'Donderdag', classes: [{ name: 'Small Group', time: '06:00' }, { name: 'Tabata', time: '18:00' }] },
  { day: 'Vrijdag', classes: [{ name: 'Circuit', time: '07:00' }, { name: 'Small Group', time: '17:30' }] },
  { day: 'Zaterdag', classes: [{ name: 'Bootcamp', time: '09:00' }, { name: 'Kids Bootcamp', time: '10:30' }] },
];

export default function GroepstrainingenOverview() {
  const today = new Date().getDay();
  const currentDayIndex = today === 0 ? 6 : today - 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Group training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight">
              Groepstrainingen bij Body by Marcel
            </h1>
            <div className="h-1 w-24 bg-[#7AC943] mb-8" />
            <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-2xl">
              Samen trainen, samen groeien. Ontdek onze groepslessen voor elk niveau.
            </p>
            <Link to="/groepstrainingen/rooster" className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Bekijk het rooster
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
                Onze Filosofie
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6 leading-tight">
                Samen sterker,
                <br />
                persoonlijk begeleid
              </h2>
              <div className="h-1 w-16 bg-[#7AC943] mb-6" />
              <div className="space-y-4 text-zinc-500 leading-relaxed mb-8">
                <p>
                  Bij Body by Marcel draait groepstraining niet om massa, maar om kwaliteit. Onze kleine groepen
                  garanderen persoonlijke aandacht van professionele coaches, terwijl je geniet van de energie
                  en motivatie van je trainingspartners.
                </p>
                <p>
                  Of je nu beginner bent of gevorderd, elke training wordt aangepast aan jouw niveau en doelen.
                  Dat is de BBM-aanpak: professioneel, persoonlijk en geschikt voor iedereen.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, text: 'Kleine groepen (max 8)' },
                  { icon: Target, text: 'Persoonlijke begeleiding' },
                  { icon: Award, text: 'Alle niveaus welkom' },
                  { icon: Calendar, text: 'Flexibel rooster' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#7AC943]/10 rounded-lg flex items-center justify-center">
                        <Icon size={18} className="text-[#7AC943]" />
                      </div>
                      <span className="font-semibold text-zinc-700 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Trainer with group"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-[#7AC943] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Training Types Grid */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">Kies jouw training</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingTypes.map((t) => (
              <Link
                key={t.id}
                to={`/groepstrainingen/${t.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-zinc-900 mb-3 tracking-wide">{t.title}</h3>
                  <p className="text-zinc-500 mb-4 leading-relaxed text-sm">{t.description}</p>
                  <div className="flex items-center text-[#7AC943] font-semibold gap-2 group-hover:gap-3 transition-all text-sm">
                    <span>Meer info</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip */}
      <section className="py-14 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'https://images.unsplash.com/photo-1605720789771-a7fb8ab19d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'https://images.unsplash.com/photo-1681439474763-e961dc9c652f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
              'https://images.unsplash.com/photo-1758274526108-49b7e3fc05aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
            ].map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden">
                <img src={src} alt={`Action ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Preview */}
      <section className="py-24 md:py-36 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6">Deze week</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {weekSchedule.map((day, i) => (
              <div key={i} className={`border-b border-zinc-100 last:border-0 ${i === currentDayIndex ? 'bg-[#7AC943]/5' : ''}`}>
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {i === currentDayIndex && <div className="w-2 h-2 bg-[#7AC943] rounded-full" />}
                      <h3 className="font-display text-xl text-zinc-900 tracking-wide">{day.day}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {day.classes.map((cls, j) => (
                        <div key={j} className="px-4 py-2 bg-zinc-100 rounded-lg text-sm">
                          <span className="font-semibold text-zinc-900">{cls.name}</span>
                          <span className="text-zinc-500 ml-2">{cls.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/groepstrainingen/rooster" className="inline-flex items-center gap-2 text-[#7AC943] font-semibold hover:gap-3 transition-all text-sm">
              <span>Volledig rooster bekijken</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#7AC943]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Eerste groepstraining gratis!
            <br />
            Plan je proefles.
          </h2>
          <Link to="/proefdag" className="inline-block bg-white hover:bg-zinc-100 text-[#7AC943] px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Proefles boeken
          </Link>
        </div>
      </section>
    </div>
  );
}
