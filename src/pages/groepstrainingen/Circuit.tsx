import { RotateCcw, Dumbbell, Heart, Clock, Users, BarChart3, MapPin } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';

const gallery = [
  'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1605720789771-a7fb8ab19d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1657289174053-fc19f9fd9aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1767211808976-4317c37e77c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758274526108-49b7e3fc05aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
];

export default function Circuit() {
  return (
    <TrainingDetailPage
      title="Circuit Training"
      subtitle="Wisselende stations, totale body workout. Nooit saai."
      heroImage={gallery[0]}
      description={
        <>
          <p>
            Circuit Training bij Body by Marcel is een dynamische trainingsformat waarbij je door
            meerdere stations roteert. Elk station heeft een andere oefening – kracht, cardio, core
            of mobiliteit – zodat je in één sessie je hele lichaam traint.
          </p>
          <p>
            De afwisseling houdt je geest scherp en je lichaam uitgedaagd. Geen twee circuits zijn
            hetzelfde: onze coaches wisselen de stations wekelijks af voor maximale variatie en
            progressie. Je lichaam went nooit aan dezelfde bewegingen.
          </p>
          <p>
            Circuit Training is geschikt voor alle niveaus. De intensiteit en het gewicht worden
            aangepast aan jouw niveau, terwijl je toch samen met de groep traint. Ideaal voor
            een complete workout in 45-60 minuten.
          </p>
        </>
      }
      features={[
        { icon: RotateCcw, title: 'Wisselende stations', description: 'Meerdere stations per sessie zorgen voor afwisseling en een complete full-body workout zonder verveling.' },
        { icon: Dumbbell, title: 'Kracht & cardio', description: 'Combinatie van krachttraining en cardiovasculaire oefeningen voor optimale resultaten en conditie.' },
        { icon: Heart, title: 'Volledig lichaam', description: 'Van boven- tot onderlichaam, core tot schouders – circuit training traint alles in één sessie.' },
      ]}
      gallery={gallery}
      practicalInfo={[
        { icon: Clock, label: 'Duur', value: '45-60 minuten' },
        { icon: Users, label: 'Groepsgrootte', value: 'Maximaal 12 personen' },
        { icon: BarChart3, label: 'Niveau', value: 'Alle niveaus' },
        { icon: MapPin, label: 'Locatie', value: 'BBM Elst' },
      ]}
      ctaTitle="Train je hele lichaam in één sessie"
    />
  );
}
