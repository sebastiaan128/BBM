import { Star, Shield, Smile, Clock, Users, BarChart3, MapPin } from 'lucide-react';
import TrainingDetailPage from './TrainingDetailPage';
import { gallery as galleries } from '../../photos';

const gallery = [...galleries.kids];

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
            van 8 tot 16 jaar. Leuk, veilig en uitdagend, precies op het goede niveau.
          </p>
          <p>
            Onze gecertificeerde jeugdcoaches weten hoe ze jongeren motiveren en uitdagen. We
            combineren spelelementen met echte fitness-oefeningen, zodat kinderen bewegen als
            iets fijns ervaren en niet als een verplichting.
          </p>
          <p>
            Van coördinatie en lenigheid tot kracht en uithoudingsvermogen, we ontwikkelen alle
            aspecten van de fysieke gezondheid van jouw kind. In een veilige, positieve omgeving
            waar plezier voorop staat.
          </p>
        </>
      }
      features={[
        { icon: Smile, title: 'Leuk en motiverend', description: 'Speelse oefenvormen en spelelementen maken bewegen leuk. Kinderen kijken uit naar elke training.' },
        { icon: Shield, title: 'Veilig en verantwoord', description: 'Gecertificeerde jeugdcoaches zorgen voor leeftijds- en niveaugeschikte oefeningen zonder blessurerisico.' },
        { icon: Star, title: 'Compleet ontwikkeld', description: 'Kracht, lenigheid, coördinatie en conditie, een brede basis voor een actieve en gezonde leefstijl.' },
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
        <section className="pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
            <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-8">
              Wat ouders zeggen
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  text: 'Mijn dochter gaat elke week met plezier naar de training. Ze is fitter geworden en heeft er vriendinnen bij.',
                  name: 'Moeder van Lisa (12 jaar)',
                },
                {
                  text: 'Onze zoon was niet zo sportief, maar door de lessen bij BBM vindt hij bewegen nu leuk.',
                  name: 'Vader van Thomas (10 jaar)',
                },
              ].map((quote) => (
                <figure key={quote.name} className="border-l-2 border-lime pl-5">
                  <blockquote className="text-lg leading-relaxed text-ink">{quote.text}</blockquote>
                  <figcaption className="mono mt-3 text-[0.6875rem] uppercase tracking-[0.14em] text-stone">
                    {quote.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      }
    />
  );
}
