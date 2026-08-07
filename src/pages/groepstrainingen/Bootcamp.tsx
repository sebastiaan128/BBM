import { Cloud, Flame, Users, Clock, MapPin, BarChart3, Calendar } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';
import { gallery as galleries } from '../../photos';

const gallery = [...galleries.bootcamp];

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
            Van sprints en burpees tot tire flips en battle ropes, elke bootcamp is uniek en uitdagend.
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
        { icon: Cloud, title: 'Altijd buiten', description: 'Regen, wind of zon, we trainen in alle weersomstandigheden. Dat maakt je mentaal sterker.' },
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
