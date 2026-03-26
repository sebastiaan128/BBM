import { Star, Shield, Smile, Clock, Users, BarChart3, MapPin } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';

const gallery = [
  'https://images.unsplash.com/photo-1641708594063-46b5bbe83e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1682531024803-376c7dfd7975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1767211808976-4317c37e77c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1605720789771-a7fb8ab19d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
];

export default function Kids() {
  return (
    <TrainingDetailPage
      title="Kids Fitness & Bootcamp"
      subtitle="Kracht en conditie voor jongeren van 8-16 jaar."
      heroImage={gallery[0]}
      description={
        <>
          <p>
            Bij Body by Marcel geloven we dat een actieve leefstijl begint op jonge leeftijd.
            Onze Kids Fitness & Bootcamp lessen zijn speciaal ontworpen voor kinderen en jongeren
            van 8 tot 16 jaar. Leuk, veilig en uitdagend – precies op het goede niveau.
          </p>
          <p>
            Onze gecertificeerde jeugdcoaches weten hoe ze jongeren motiveren en uitdagen. We
            combineren spelelementen met echte fitness-oefeningen, zodat kinderen bewegen als
            iets fijns ervaren en niet als een verplichting.
          </p>
          <p>
            Van coördinatie en lenigheid tot kracht en uithoudingsvermogen – we ontwikkelen alle
            aspecten van de fysieke gezondheid van jouw kind. In een veilige, positieve omgeving
            waar plezier voorop staat.
          </p>
        </>
      }
      features={[
        { icon: Smile, title: 'Leuk en motiverend', description: 'Speelse oefenvormen en spelelementen maken bewegen leuk. Kinderen kijken uit naar elke training.' },
        { icon: Shield, title: 'Veilig en verantwoord', description: 'Gecertificeerde jeugdcoaches zorgen voor leeftijds- en niveaugeschikte oefeningen zonder blessurerisico.' },
        { icon: Star, title: 'Compleet ontwikkeld', description: 'Kracht, lenigheid, coördinatie en conditie – een brede basis voor een actieve en gezonde leefstijl.' },
      ]}
      gallery={gallery}
      practicalInfo={[
        { icon: Clock, label: 'Duur', value: '45 minuten' },
        { icon: Users, label: 'Leeftijd', value: '8 - 16 jaar' },
        { icon: BarChart3, label: 'Niveau', value: 'Alle niveaus' },
        { icon: MapPin, label: 'Locatie', value: 'BBM Elst / Buiten' },
      ]}
      ctaTitle="Geef jouw kind een actieve start"
      extraContent={
        <section className="py-16 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-8 text-center tracking-wide">
                Wat ouders zeggen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { text: '"Mijn dochter gaat elke week met plezier naar de training. Ze is fitter geworden en heeft nieuwe vriendjes gemaakt. Top begeleiding!"', name: 'Moeder van Lisa (12 jaar)' },
                  { text: '"Onze zoon was niet zo sportief, maar door de lessen bij BBM is hij helemaal enthousiast over bewegen. Aanrader voor elk kind!"', name: 'Vader van Thomas (10 jaar)' },
                ].map((quote, i) => (
                  <div key={i} className="bg-zinc-50 rounded-xl p-6">
                    <p className="text-zinc-600 italic mb-4 text-sm leading-relaxed">{quote.text}</p>
                    <p className="text-[#7AC943] font-semibold text-sm">— {quote.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
}
