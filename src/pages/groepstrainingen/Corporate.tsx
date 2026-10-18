import { Link } from 'react-router-dom';
import TrainingDetailPage from './TrainingDetailPage';
import content from '../../content/trainingen/corporate.json';

const { pakketten } = content;

export default function CorporateTraining() {
  return (
    <TrainingDetailPage
      content={content}
      extraContent={
        <section className="pb-20 md:pb-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-8">
            <h2 className="display-lg text-ink mb-3">{pakketten.titel}</h2>
            <p className="text-ink-soft leading-relaxed max-w-xl">{pakketten.intro}</p>

            <dl className="mt-9 border-t border-ink">
              {pakketten.items.map((pkg) => (
                <div
                  key={pkg.naam}
                  className="grid sm:grid-cols-[9rem_11rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline"
                >
                  <dt className="display-md text-ink">{pkg.naam}</dt>
                  <dd className="mono text-sm text-moss sm:pt-1">{pkg.sessies}</dd>
                  <dd className="text-sm text-stone sm:pt-1">{pkg.tekst}</dd>
                </div>
              ))}
            </dl>

            <Link to="/contact" className="btn btn-primary mt-9">
              Vraag een offerte aan
            </Link>
          </div>
        </section>
      }
    />
  );
}
