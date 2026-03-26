import { UserCheck, Target, TrendingUp, Clock, Users, BarChart3, MapPin } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';

const gallery = [
  'https://images.unsplash.com/photo-1682531024803-376c7dfd7975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1750698545009-679820502908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1605720789771-a7fb8ab19d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758274526108-49b7e3fc05aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
];

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
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-16 h-16 bg-[#7AC943] rounded-full mx-auto mb-6 flex items-center justify-center font-display text-white text-2xl">S</div>
              <blockquote className="text-xl md:text-2xl text-white/85 italic mb-6">
                "Sinds ik met small group training ben begonnen voel ik me fitter dan ooit!
                De begeleiding is top en de groep motiveert me om elke keer weer mijn best te doen."
              </blockquote>
              <div className="text-[#7AC943] font-semibold text-sm">— Sarah, lid sinds 2023</div>
            </div>
          </div>
        </section>
      }
    />
  );
}
