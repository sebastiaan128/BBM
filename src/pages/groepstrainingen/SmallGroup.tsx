import { UserCheck, Target, TrendingUp, Clock, Users, BarChart3, MapPin } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';
import { gallery as galleries } from '../../photos';

const gallery = [...galleries.smallGroup];

export default function SmallGroup() {
  return (
    <TrainingDetailPage
      title="Small Group Training"
      subtitle="Persoonlijke aandacht in een kleine groep."
      heroImage={gallery[0]}
      description={
        <>
          <p>
            Small Group Training combineert de persoonlijke aandacht van personal training met
            de motiverende energie van een groep. Met maximaal 8 deelnemers garanderen we dat
            elke persoon de begeleiding krijgt die hij of zij nodig heeft.
          </p>
          <p>
            Onze ervaren coaches passen oefeningen aan op jouw niveau en doelen. Of je nu
            beginner bent of al jaren traint, iedereen wordt uitgedaagd op het juiste niveau.
          </p>
          <p>
            De groepsdynamiek zorgt voor extra motivatie en plezier, terwijl de kleine groepsgrootte
            betekent dat je altijd correct en veilig traint. Dat is de kracht van small group training
            bij Body by Marcel.
          </p>
        </>
      }
      features={[
        { icon: UserCheck, title: 'Persoonlijke begeleiding', description: 'Onze coaches kennen je naam, niveau en doelen. Elke oefening wordt aangepast aan jouw situatie.' },
        { icon: Target, title: 'Gevarieerde oefeningen', description: 'Elke training is anders. Van krachttraining tot cardio, van core work tot mobility.' },
        { icon: TrendingUp, title: 'Geschikt voor elk niveau', description: 'Beginners en gevorderden trainen samen, maar iedereen op het eigen niveau en tempo.' },
      ]}
      gallery={gallery}
      practicalInfo={[
        { icon: Clock, label: 'Duur', value: '45-60 minuten' },
        { icon: Users, label: 'Groepsgrootte', value: 'Maximaal 8 personen' },
        { icon: BarChart3, label: 'Niveau', value: 'Alle niveaus' },
        { icon: MapPin, label: 'Locatie', value: 'BBM Elst' },
      ]}
      ctaTitle="Klaar om te starten?"
      extraContent={
        <section className="pb-20 md:pb-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-8">
            <figure className="border-l-2 border-lime pl-6 md:pl-8">
              <blockquote className="display-md text-ink leading-snug">
                Sinds ik met small group training ben begonnen voel ik me fitter dan ooit. De
                begeleiding is goed en de groep zorgt dat ik elke week weer kom opdagen.
              </blockquote>
              <figcaption className="mono mt-4 text-[0.6875rem] uppercase tracking-[0.14em] text-stone">
                Sarah, lid sinds 2023
              </figcaption>
            </figure>
          </div>
        </section>
      }
    />
  );
}
