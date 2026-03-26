import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Groepstraining',
    subtitle: 'Small Group & Classes',
    price: '€25',
    period: 'per les',
    description: 'Perfect voor wie gemotiveerd wordt door anderen',
    features: [
      'Maximaal 8 personen per groep',
      'Professionele begeleiding',
      'Gevarieerde trainingen',
      'Flexibel inschrijven per les',
      'Toegang tot alle groepslessen',
      'Eerste les gratis',
    ],
    cta: 'Probeer gratis',
    ctaLink: '/proefdag',
    highlighted: false,
  },
  {
    name: 'Personal Training',
    subtitle: '1-op-1 Begeleiding',
    price: '€65',
    period: 'per sessie',
    description: 'Volledige aandacht, maximaal resultaat',
    features: [
      'Persoonlijk trainingsplan',
      '100% aandacht van je trainer',
      'Flexibele planning',
      'Op maat gemaakte oefeningen',
      'Voedings- en lifestyle advies',
      'Resultaat gegarandeerd',
    ],
    cta: 'Start vandaag',
    ctaLink: '/proefdag',
    highlighted: true,
  },
  {
    name: 'Strippenkaart',
    subtitle: '10 Lessen Voordeel',
    price: '€220',
    period: '10 lessen',
    description: 'Bespaar met onze strippenkaart',
    features: [
      '10 groepslessen naar keuze',
      'Geldig voor alle groepstrainingen',
      '€22 per les (i.p.v. €25)',
      '3 maanden geldig',
      'Flexibel inzetbaar',
      'Ideaal om te combineren',
    ],
    cta: 'Koop strippenkaart',
    ctaLink: '/contact',
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-36 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            Tarieven
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-zinc-900 mb-6">
            Investeer in jezelf
          </h2>
          <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed">
            Transparante prijzen, geen verborgen kosten. Kies het plan dat bij jou past
            en start vandaag nog.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'shadow-2xl scale-105 border-4 border-[#7AC943]'
                  : 'shadow-lg hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-[#7AC943] text-white px-5 py-2 rounded-bl-2xl font-bold text-sm">
                  POPULAIR
                </div>
              )}

              <div className="p-8">
                <div className="mb-6">
                  <h3 className="font-display text-3xl text-zinc-900 mb-1 tracking-wide">{plan.name}</h3>
                  <p className="text-sm text-[#7AC943] font-semibold mb-3">{plan.subtitle}</p>
                  <p className="text-zinc-500 text-sm">{plan.description}</p>
                </div>

                <div className="mb-7 pb-7 border-b border-zinc-100">
                  <div className="flex items-end gap-2">
                    <span className="font-display text-5xl text-zinc-900">{plan.price}</span>
                    <span className="text-zinc-400 mb-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#7AC943]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check size={12} className="text-[#7AC943]" />
                      </div>
                      <span className="text-zinc-600 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-[#7AC943] hover:bg-[#6BB835] text-white shadow-lg hover:scale-105'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-3xl p-12 text-center">
          <h3 className="font-display text-4xl md:text-5xl text-white mb-4">
            Nog vragen over de tarieven?
          </h3>
          <p className="text-white/75 text-lg mb-8 max-w-2xl mx-auto">
            We helpen je graag met het kiezen van het juiste trainingsplan.
            Neem vrijblijvend contact op of kom langs voor een kennismaking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105"
            >
              Neem contact op
            </Link>
            <Link
              to="/proefdag"
              className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              Boek gratis proefles
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
