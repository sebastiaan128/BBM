import { Building2, TrendingUp, Users, Clock, MapPin, BarChart3, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import TrainingDetailPage from './TrainingDetailPage';

const gallery = [
  'https://images.unsplash.com/photo-1593234270323-0414ec1574e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1682531024803-376c7dfd7975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1772764768073-c95db4f77864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758875570127-b6ff35e42436?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1605720789771-a7fb8ab19d04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  'https://images.unsplash.com/photo-1758274526108-49b7e3fc05aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
];

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
            groepstraining, een teambuilding bootcamp of een vitaliteitsprogramma – wij regelen het.
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
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-zinc-900 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-white mb-6 tracking-wide">
                    Onze bedrijfspakketten
                  </h2>
                  <div className="space-y-4">
                    {[
                      { name: 'Starter', sessions: '4 sessies per maand', description: 'Ideaal voor kleine teams tot 10 personen.' },
                      { name: 'Business', sessions: '8 sessies per maand', description: 'Populair voor groeiende bedrijven.' },
                      { name: 'Enterprise', sessions: 'Onbeperkt', description: 'Volledig op maat voor grote organisaties.' },
                    ].map((pkg, i) => (
                      <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                        <div className="w-10 h-10 bg-[#7AC943] rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award size={18} className="text-white" />
                        </div>
                        <div>
                          <div className="font-display text-xl text-white tracking-wide">{pkg.name}</div>
                          <div className="text-[#7AC943] text-sm font-semibold">{pkg.sessions}</div>
                          <div className="text-zinc-400 text-sm">{pkg.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <p className="text-zinc-400 text-lg mb-6 leading-relaxed">
                    Alle pakketten zijn maatwerk. Neem contact op voor een vrijblijvend gesprek
                    over de mogelijkheden voor uw organisatie.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
                  >
                    Vraag een offerte aan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
}
