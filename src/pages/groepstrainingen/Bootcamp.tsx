import { Cloud, Flame, Users, Clock, MapPin, BarChart3, Calendar } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';

const gallery = [
  'https://images.unsplash.com/photo-1767211808976-4317c37e77c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1605720789771-a7fb8ab19d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758274526108-49b7e3fc05aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1657289174053-fc19f9fd9aab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
];

export default function Bootcamp() {
  return (
    <TrainingDetailPage
      title="Bootcamp"
      subtitle="Buiten trainen in weer en wind. Functioneel en intensief."
      heroImage={gallery[0]}
      description={
        <>
          <p>
            Bootcamp bij Body by Marcel vindt buiten plaats, in de frisse lucht van Elst en omgeving.
            Regen of zonneschijn, wij trainen altijd. Functionele oefeningen met je eigen lichaamsgewicht
            en natuurlijke elementen maken je sterker, sneller en mentaal weerbaarder.
          </p>
          <p>
            Van sprints en burpees tot tire flips en battle ropes – elke bootcamp is uniek en uitdagend.
            De groep motiveert elkaar om grenzen te verleggen, terwijl onze coaches zorgen dat je veilig
            en effectief traint.
          </p>
          <p>
            Bootcamp is niet alleen fysiek intensief, het is ook een mentale uitdaging. Je leert doorzetten,
            samenwerken en jezelf overtreffen. Perfect voor wie echt wil pushen.
          </p>
        </>
      }
      features={[
        { icon: Cloud, title: 'Altijd buiten', description: 'Regen, wind of zon – we trainen in alle weersomstandigheden. Dat maakt je mentaal sterker.' },
        { icon: Flame, title: 'Functionele oefeningen', description: 'Geen machines, wel bewegingen die je in het dagelijks leven gebruikt. Praktisch en effectief.' },
        { icon: Users, title: 'Teamspirit', description: 'Samen train je harder. De groep motiveert en pusht elkaar naar nieuwe prestaties.' },
      ]}
      gallery={gallery}
      practicalInfo={[
        { icon: Clock, label: 'Duur', value: '60 minuten' },
        { icon: MapPin, label: 'Locatie', value: 'Buiten (Elst omgeving)' },
        { icon: BarChart3, label: 'Niveau', value: 'Alle niveaus' },
        { icon: Calendar, label: 'Seizoen', value: 'Het hele jaar door' },
      ]}
      ctaTitle="Doe mee met de volgende bootcamp"
    />
  );
}
