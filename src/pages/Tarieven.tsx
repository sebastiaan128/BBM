import { Link } from 'react-router-dom';
import { Check, Users, User, Baby, Building2, Ticket, Clock, CreditCard, Calendar } from 'lucide-react';

const personalTrainingPrices = [
  { name: 'Losse Sessie', price: '€65', period: 'per sessie', description: 'Flexibel en vrijblijvend', badge: null, highlighted: false },
  { name: '5 Sessies Pakket', price: '€315', period: '€63 per sessie', description: 'Bespaar €10', badge: 'Bespaar €10', highlighted: false },
  { name: '10 Sessies Pakket', price: '€600', period: '€60 per sessie', description: 'Bespaar €50', badge: 'POPULAIR', highlighted: true },
  { name: '20 Sessies Pakket', price: '€1140', period: '€57 per sessie', description: 'Beste prijs - Bespaar €160', badge: 'BESTE DEAL', highlighted: false },
];

const groepsTrainingPrices = [
  { name: 'Losse Les', price: '€25', period: 'per les', description: 'Probeer vrijblijvend', features: ['Alle groepslessen', 'Maximaal 8 personen', 'Flexibel inschrijven'], highlighted: false },
  { name: 'Strippenkaart 10 Lessen', price: '€220', period: '€22 per les', description: 'Populairste keuze', features: ['Alle groepslessen', '3 maanden geldig', 'Bespaar €30'], highlighted: true },
  { name: 'Strippenkaart 20 Lessen', price: '€400', period: '€20 per les', description: 'Beste waarde', features: ['Alle groepslessen', '6 maanden geldig', 'Bespaar €100'], highlighted: false },
];

const comboPacks = [
  { name: 'Starter Combi', price: '€280', save: 'Bespaar €30', includes: ['5 Personal Training sessies', '10 Groepslessen strippenkaart'], description: 'Perfect om te starten met een mix van personal training en groepslessen', highlighted: false },
  { name: 'Performance Combi', price: '€750', save: 'Bespaar €70', includes: ['10 Personal Training sessies', '20 Groepslessen strippenkaart'], description: 'Ideaal voor wie het beste van beide werelden wil', highlighted: true },
  { name: 'Premium Combi', price: '€1400', save: 'Bespaar €140', includes: ['20 Personal Training sessies', '20 Groepslessen strippenkaart'], description: 'Maximum flexibiliteit en resultaat', highlighted: false },
];

const specialPrices = [
  {
    category: 'Kids Fitness (8-16 jaar)', icon: Baby, color: 'bg-blue-500',
    options: [
      { name: 'Losse Les', price: '€18', description: 'Speciaal jeugdtarief' },
      { name: 'Strippenkaart 10 Lessen', price: '€160', description: '€16 per les - Bespaar €20' },
    ],
  },
  {
    category: 'Duo Personal Training', icon: Users, color: 'bg-purple-500',
    options: [
      { name: 'Losse Sessie (per persoon)', price: '€45', description: 'Train samen, motiveer elkaar' },
      { name: '10 Sessies Pakket (per persoon)', price: '€400', description: '€40 per sessie - Bespaar €50' },
    ],
  },
  {
    category: 'Small Group (3-4 personen)', icon: Users, color: 'bg-orange-500',
    options: [
      { name: 'Losse Sessie (per persoon)', price: '€35', description: 'Kleine groep, grote resultaten' },
      { name: '10 Sessies Pakket (per persoon)', price: '€320', description: '€32 per sessie - Bespaar €30' },
    ],
  },
  {
    category: 'Bedrijfstraining', icon: Building2, color: 'bg-teal-500',
    options: [
      { name: 'Vanaf 5 personen', price: 'Op aanvraag', description: 'Maatwerk voor jouw team' },
      { name: 'Structureel contract', price: 'Op aanvraag', description: 'Vaste wekelijkse training' },
    ],
  },
];

export default function Tarieven() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-zinc-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1772206605293-3fadeaa944e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Tarieven"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-[#7AC943]/20 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            Transparante Prijzen
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6">Tarieven</h1>
          <div className="h-1 w-24 bg-[#7AC943] mx-auto mb-8" />
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            Geen verrassingen, geen verborgen kosten. Kies het pakket dat bij jou past.
          </p>
        </div>
      </section>

      {/* Personal Training */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              <User size={16} />
              Personal Training
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">Personal Training Tarieven</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">1-op-1 begeleiding. Hoe meer je traint, hoe meer je bespaart.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {personalTrainingPrices.map((item, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-6 transition-all duration-300 ${item.highlighted ? 'shadow-2xl scale-105 border-4 border-[#7AC943]' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'}`}>
                {item.badge && (
                  <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl rounded-tr-xl text-xs font-bold ${item.highlighted ? 'bg-[#7AC943] text-white' : 'bg-zinc-900 text-white'}`}>
                    {item.badge}
                  </div>
                )}
                <Ticket size={28} className="text-[#7AC943] mb-4" />
                <h3 className="font-display text-xl text-zinc-900 mb-2 tracking-wide">{item.name}</h3>
                <div className="font-display text-4xl text-zinc-900 mb-1">{item.price}</div>
                <p className="text-sm text-[#7AC943] font-semibold mb-2">{item.period}</p>
                <p className="text-zinc-400 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="bg-zinc-50 rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-zinc-900 mb-5 text-center">Wat krijg je bij Personal Training?</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {['Uitgebreide intake & doelanalyse', 'Persoonlijk trainingsplan', 'Voedings- en lifestyle advies', 'Continue voortgangsbewaking', 'WhatsApp support', 'Flexibele planning'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check size={18} className="text-[#7AC943] flex-shrink-0" />
                  <span className="text-zinc-600 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Groepstraining */}
      <section className="py-24 md:py-36 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              <Users size={16} />
              Groepstraining
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">Groepstraining Tarieven</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">Small Group, Bootcamp, Tabata, Circuit - maximaal 8 personen per groep.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {groepsTrainingPrices.map((item, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${item.highlighted ? 'shadow-2xl scale-105 border-4 border-[#7AC943]' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'}`}>
                {item.highlighted && (
                  <div className="absolute top-0 right-0 bg-[#7AC943] text-white px-5 py-2 rounded-bl-xl rounded-tr-xl text-sm font-bold">POPULAIR</div>
                )}
                <h3 className="font-display text-2xl text-zinc-900 mb-4 tracking-wide">{item.name}</h3>
                <div className="font-display text-5xl text-zinc-900 mb-1">{item.price}</div>
                <p className="text-[#7AC943] font-semibold mb-3 text-sm">{item.period}</p>
                <p className="text-zinc-500 mb-6 text-sm">{item.description}</p>
                <ul className="space-y-2.5">
                  {item.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} className="text-[#7AC943] flex-shrink-0" />
                      <span className="text-zinc-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Pakketten */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              <Ticket size={16} />
              Combo Deals
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">Combo Pakketten</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">Combineer personal training en groepslessen voor maximaal resultaat.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {comboPacks.map((pack, i) => (
              <div key={i} className={`relative bg-white rounded-2xl p-8 transition-all duration-300 ${pack.highlighted ? 'shadow-2xl scale-105 border-4 border-[#7AC943]' : 'shadow-lg hover:shadow-xl hover:-translate-y-1'}`}>
                {pack.highlighted && (
                  <div className="absolute top-0 right-0 bg-[#7AC943] text-white px-5 py-2 rounded-bl-xl rounded-tr-xl text-sm font-bold">BESTE DEAL</div>
                )}
                <h3 className="font-display text-2xl text-zinc-900 mb-4 tracking-wide">{pack.name}</h3>
                <div className="font-display text-5xl text-zinc-900 mb-1">{pack.price}</div>
                <p className="text-[#7AC943] font-semibold mb-5 text-sm">{pack.save}</p>
                <div className="mb-5">
                  <div className="text-xs font-semibold text-zinc-400 mb-3 uppercase tracking-wider">Dit pakket bevat:</div>
                  <ul className="space-y-2.5">
                    {pack.includes.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Check size={16} className="text-[#7AC943] flex-shrink-0" />
                        <span className="text-zinc-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-zinc-400 text-xs">{pack.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speciale Tarieven */}
      <section className="py-24 md:py-36 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6">Speciale Tarieven</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
            <p className="text-xl text-zinc-500 max-w-3xl mx-auto">Kids fitness, duo training, small group en bedrijfstraining.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialPrices.map((special, i) => {
              const Icon = special.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 ${special.color} rounded-xl flex items-center justify-center`}>
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="font-display text-2xl text-zinc-900 tracking-wide">{special.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {special.options.map((opt, j) => (
                      <div key={j} className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-100 last:border-0">
                        <div className="flex-1">
                          <div className="font-semibold text-zinc-900 text-sm mb-0.5">{opt.name}</div>
                          <div className="text-xs text-zinc-400">{opt.description}</div>
                        </div>
                        <div className="font-display text-2xl text-[#7AC943] whitespace-nowrap">{opt.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Praktische Info */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6">Praktische Informatie</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: CreditCard, title: 'Betaalmethoden', text: 'Contant, Pin, iDEAL of bankoverschrijving. Strippenkaarten en pakketten vooraf te betalen.' },
              { icon: Calendar, title: 'Geldigheid', text: 'Strippenkaarten 10 lessen: 3 maanden geldig. Strippenkaarten 20 lessen: 6 maanden geldig.' },
              { icon: Clock, title: 'Annulering', text: 'Tot 24 uur van tevoren gratis annuleren. Daarna wordt de les in mindering gebracht.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#7AC943]/10 rounded-2xl mb-4">
                    <Icon size={28} className="text-[#7AC943]" />
                  </div>
                  <h3 className="font-display text-xl text-zinc-900 mb-3 tracking-wide">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-zinc-50 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">💡</div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-900 mb-2">Niet zeker welk pakket bij jou past?</h3>
                <p className="text-zinc-500 mb-4 text-sm">
                  Geen probleem! Begin met een losse les of gratis proefdag, en we helpen je het beste pakket te kiezen.
                </p>
                <Link to="/proefdag" className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200">
                  Boek gratis proefles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#7AC943]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Klaar om te beginnen?</h2>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
            Neem contact op voor vragen over tarieven of boek direct je eerste training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/proefdag" className="inline-block bg-white hover:bg-zinc-100 text-[#7AC943] px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Boek je eerste training
            </Link>
            <Link to="/contact" className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
