import { Building2, TrendingUp, Users, Clock, MapPin, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrainingDetailPage from './TrainingDetailPage';
import { gallery as galleries } from '../../photos';

const gallery = [...galleries.corporate];

export default function CorporateTraining() {
  return (
    <TrainingDetailPage
      title="Bedrijfstraining"
      subtitle="Groepstraining speciaal voor bedrijven en teams."
      heroImage={gallery[0]}
      description={
        <>
          <p>
            Een fit en vitaal team presteert beter. Body by Marcel biedt op maat gemaakte
            bedrijfstrainingen voor teams en organisaties. Of het nu gaat om een wekelijkse
            groepstraining, een teambuilding bootcamp of een vitaliteitsprogramma, wij regelen het.
          </p>
          <p>
            We komen naar uw locatie of u bezoekt ons in Elst. Onze coaches stemmen het programma
            af op de doelstellingen van uw bedrijf en het niveau van uw medewerkers. Van lichte
            beweegprogramma's tot intensieve teamuitdagingen.
          </p>
          <p>
            Investeer in de gezondheid en het welzijn van uw team. Fittere medewerkers verzuimen
            minder, zijn productiever en hebben meer plezier in hun werk. Dat is de ROI van
            bedrijfsfitness bij Body by Marcel.
          </p>
        </>
      }
      features={[
        { icon: Building2, title: 'Op locatie mogelijk', description: 'We komen naar uw kantoor, bedrijfsterrein of wij ontvangen u in onze studio in Elst. Flexibel en gemakkelijk.' },
        { icon: TrendingUp, title: 'Meetbare resultaten', description: 'Minder verzuim, meer energie en een betere teamdynamiek. Wij meten de voortgang en rapporteren aan u.' },
        { icon: Users, title: 'Teambuilding', description: 'Samen zweten schept een band. Onze bedrijfstrainingen versterken de samenwerking en het teamgevoel.' },
      ]}
      gallery={gallery}
      practicalInfo={[
        { icon: Clock, label: 'Duur', value: 'Flexibel (30-90 min)' },
        { icon: Users, label: 'Groepsgrootte', value: '5 - 30 personen' },
        { icon: BarChart3, label: 'Programma', value: 'Op maat gemaakt' },
        { icon: MapPin, label: 'Locatie', value: 'Bij u of in BBM Elst' },
      ]}
      ctaTitle="Investeer in uw team"
      extraContent={
        <section className="pb-20 md:pb-24">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-8">
            <h2 className="display-lg text-ink mb-3">Bedrijfspakketten</h2>
            <p className="text-ink-soft leading-relaxed max-w-xl">
              Alle pakketten zijn maatwerk. In een vrijblijvend gesprek kijken we wat er past bij de
              omvang van uw team en de ruimte in de agenda.
            </p>

            <dl className="mt-9 border-t border-ink">
              {[
                { name: 'Starter', sessions: '4 sessies per maand', description: 'Voor teams tot tien personen.' },
                { name: 'Business', sessions: '8 sessies per maand', description: 'De meestgekozen vorm bij groeiende bedrijven.' },
                { name: 'Enterprise', sessions: 'In overleg', description: 'Volledig op maat voor grotere organisaties.' },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className="grid sm:grid-cols-[9rem_11rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline"
                >
                  <dt className="display-md text-ink">{pkg.name}</dt>
                  <dd className="mono text-sm text-moss sm:pt-1">{pkg.sessions}</dd>
                  <dd className="text-sm text-stone sm:pt-1">{pkg.description}</dd>
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
