import { Timer, Zap, TrendingUp, Clock, Flame, BarChart3, MapPin } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';
import { gallery as galleries } from '../../photos';

const gallery = [...galleries.tabata];

export default function Tabata() {
  return (
    <TrainingDetailPage
      title="Tabata"
      subtitle="Korte, explosieve intervallen. Maximaal resultaat in minimale tijd."
      heroImage={gallery[0]}
      description={
        <>
          <p>
            Tabata is gebaseerd op het wetenschappelijk bewezen intervalprotocol: 20 seconden alles
            geven, 10 seconden rust, 8 rondes per oefening. Simpel in opzet, vernietigend in
            intensiteit. Je verbrandt calorieën tijdens én uren na de training.
          </p>
          <p>
            Bij Body by Marcel combineren we het klassieke Tabata-protocol met gevarieerde
            oefeningen voor een complete full-body workout. Van squats en push-ups tot kettlebell
            swings en jumping jacks, elke sessie is anders.
          </p>
          <p>
            Tabata is ideaal voor wie weinig tijd heeft maar maximale resultaten wil. In 30 minuten
            heb je meer gedaan dan een uur rustig cardio. De afterburn zorgt dat je vetverbranding
            nog lang na de training op gang blijft.
          </p>
        </>
      }
      features={[
        { icon: Timer, title: '20/10 protocol', description: '20 seconden intense inspanning, 10 seconden rust. Bewezen effectief voor vetverbranding en conditie.' },
        { icon: Zap, title: 'Afterburn effect', description: 'Je lichaam blijft na de training calorieën verbranden. EPOC zorgt voor verhoogde vetverbranding tot 24 uur later.' },
        { icon: TrendingUp, title: 'Snel resultaat', description: 'Door de hoge intensiteit zie je sneller resultaten dan bij traditionele cardio. Efficiënt en effectief.' },
      ]}
      gallery={gallery}
      practicalInfo={[
        { icon: Clock, label: 'Duur', value: '30-45 minuten' },
        { icon: Flame, label: 'Intensiteit', value: 'Hoog' },
        { icon: BarChart3, label: 'Niveau', value: 'Gemiddeld - Gevorderd' },
        { icon: MapPin, label: 'Locatie', value: 'BBM Elst' },
      ]}
      ctaTitle="Klaar voor de ultieme uitdaging?"
    />
  );
}
