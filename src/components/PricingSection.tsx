import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Groepstraining',
    subtitle: 'Small group, bootcamp, tabata en circuit',
    price: '€25',
    period: 'per les',
    features: [
      'Maximaal 8 personen per groep',
      'Alle groepslessen toegankelijk',
      'Per les inschrijven, geen abonnement',
      'Je eerste les is gratis',
    ],
    cta: 'Probeer het gratis',
    ctaLink: '/proefdag',
    highlighted: false,
  },
  {
    name: 'Personal training',
    subtitle: 'Eén op één, zestig minuten',
    price: '€65',
    period: 'per sessie',
    features: [
      'Persoonlijk trainingsschema',
      'Volledige aandacht van je trainer',
      'Voedings- en leefstijladvies',
      'Trainen wanneer het jou uitkomt',
    ],
    cta: 'Boek een intake',
    ctaLink: '/proefdag',
    highlighted: true,
  },
  {
    name: 'Strippenkaart',
    subtitle: 'Tien groepslessen naar keuze',
    price: '€220',
    period: '€22 per les',
    features: [
      'Geldig voor alle groepstrainingen',
      'Drie maanden geldig',
      'Je bespaart €30',
      'Goed te combineren met personal training',
    ],
    cta: 'Koop een strippenkaart',
    ctaLink: '/contact',
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-paper-dim border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow">Tarieven</span>
          <h2 className="display-lg mt-6 text-ink">Geen inschrijfgeld, geen opzegtermijn</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Je betaalt per les, per strippenkaart of per pakket. Wat je niet gebruikt, betaal je niet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col p-7 ${
                plan.highlighted ? 'bg-ink text-paper' : 'card'
              }`}
            >
              <h3 className={`display-md ${plan.highlighted ? 'text-paper' : 'text-ink'}`}>
                {plan.name}
              </h3>
              <p className={`mt-1.5 text-sm ${plan.highlighted ? 'text-paper/55' : 'text-stone'}`}>
                {plan.subtitle}
              </p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className={`mono text-4xl ${plan.highlighted ? 'text-paper' : 'text-ink'}`}>
                  {plan.price}
                </span>
                <span
                  className={`mono text-xs ${plan.highlighted ? 'text-paper/50' : 'text-stone'}`}
                >
                  {plan.period}
                </span>
              </p>

              <ul
                className={`mt-6 pt-1 border-t flex-1 ${
                  plan.highlighted ? 'border-ink-soft' : 'border-hairline'
                }`}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`py-2.5 border-b text-sm leading-snug ${
                      plan.highlighted
                        ? 'border-ink-soft text-paper/80'
                        : 'border-hairline text-ink-soft'
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.ctaLink}
                className={`btn justify-center mt-7 ${plan.highlighted ? 'btn-lime' : 'btn-outline'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-hairline p-6">
          <p className="text-[0.9375rem] text-ink-soft max-w-xl">
            Er zijn ook tarieven voor kids, duo-training en bedrijven, en voordeelpakketten vanaf vijf
            sessies.
          </p>
          <Link to="/tarieven" className="btn btn-primary flex-shrink-0">
            Alle tarieven
          </Link>
        </div>
      </div>
    </section>
  );
}
