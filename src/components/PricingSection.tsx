import { Link } from 'react-router-dom';
import content from '../content/home.json';

const tarieven = content.tarieven;

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-paper-dim border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="max-w-2xl mb-14" data-reveal>
          <span className="eyebrow">{tarieven.eyebrow}</span>
          <h2 className="display-lg mt-6 text-ink">{tarieven.titel}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{tarieven.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {tarieven.pakketten.map((plan) => (
            <div
              key={plan.naam}
              data-reveal
              className={`flex flex-col p-7 ${
                plan.uitgelicht ? 'bg-ink text-paper' : 'card'
              }`}
            >
              <h3 className={`display-md ${plan.uitgelicht ? 'text-paper' : 'text-ink'}`}>
                {plan.naam}
              </h3>
              <p className={`mt-1.5 text-sm ${plan.uitgelicht ? 'text-paper/55' : 'text-stone'}`}>
                {plan.ondertitel}
              </p>

              <p className="mt-6 flex items-baseline gap-2">
                <span className={`mono text-4xl ${plan.uitgelicht ? 'text-paper' : 'text-ink'}`}>
                  {plan.prijs}
                </span>
                <span
                  className={`mono text-xs ${plan.uitgelicht ? 'text-paper/50' : 'text-stone'}`}
                >
                  {plan.per}
                </span>
              </p>

              <ul
                className={`mt-6 pt-1 border-t flex-1 ${
                  plan.uitgelicht ? 'border-ink-soft' : 'border-hairline'
                }`}
              >
                {plan.punten.map((feature) => (
                  <li
                    key={feature}
                    className={`py-2.5 border-b text-sm leading-snug ${
                      plan.uitgelicht
                        ? 'border-ink-soft text-paper/80'
                        : 'border-hairline text-ink-soft'
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={plan.link}
                className={`btn justify-center mt-7 ${plan.uitgelicht ? 'btn-lime' : 'btn-outline'}`}
              >
                {plan.knop}
              </Link>
            </div>
          ))}
        </div>

        <div
          className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-hairline p-6"
          data-reveal
        >
          <p className="text-[0.9375rem] text-ink-soft max-w-xl">{tarieven.onderTekst}</p>
          <Link to="/tarieven" className="btn btn-primary flex-shrink-0">
            Alle tarieven
          </Link>
        </div>
      </div>
    </section>
  );
}
