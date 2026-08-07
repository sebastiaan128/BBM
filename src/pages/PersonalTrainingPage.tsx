import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { photo } from '../photos';

/**
 * LET OP: dit zijn placeholders. De namen, functies, bio's en certificeringen
 * die hier eerder stonden waren verzonnen en stonden bij de verkeerde foto's
 * (vrouwennamen onder foto's van mannen). Vul de echte gegevens in en
 * controleer per foto wie erop staat voordat de site live gaat.
 */
const trainers = [
  {
    name: 'Naam trainer',
    role: 'Functie',
    specialties: ['Specialisatie', 'Specialisatie', 'Specialisatie'],
    image: photo.trainerPortret,
    bio: 'Korte introductie: achtergrond, manier van werken en voor wie deze trainer het beste past.',
    certifications: ['Certificering', 'Certificering'],
  },
  {
    name: 'Naam trainer',
    role: 'Functie',
    specialties: ['Specialisatie', 'Specialisatie', 'Specialisatie'],
    image: photo.trainerRek,
    bio: 'Korte introductie: achtergrond, manier van werken en voor wie deze trainer het beste past.',
    certifications: ['Certificering', 'Certificering'],
  },
  {
    name: 'Naam trainer',
    role: 'Functie',
    specialties: ['Specialisatie', 'Specialisatie', 'Specialisatie'],
    image: photo.coaching,
    bio: 'Korte introductie: achtergrond, manier van werken en voor wie deze trainer het beste past.',
    certifications: ['Certificering', 'Certificering'],
  },
  {
    name: 'Naam trainer',
    role: 'Functie',
    specialties: ['Specialisatie', 'Specialisatie', 'Specialisatie'],
    image: photo.highFive,
    bio: 'Korte introductie: achtergrond, manier van werken en voor wie deze trainer het beste past.',
    certifications: ['Certificering', 'Certificering'],
  },
];

const benefits = [
  {
    title: 'Een plan voor jou',
    description: 'Opgebouwd rond je doel, je niveau en de tijd die je werkelijk hebt.',
  },
  {
    title: 'Volledige aandacht',
    description: 'Geen wachten op een toestel, geen gedeelde aandacht. Het uur is van jou.',
  },
  {
    title: 'Iemand die meekijkt',
    description: 'Je trainer ziet wanneer je vorm verslapt, en wanneer er meer in zit.',
  },
  {
    title: 'Zichtbare voortgang',
    description: 'Vaste meetmomenten, zodat je weet of het werkt in plaats van het te hopen.',
  },
];

const included = [
  'Uitgebreide intake en doelanalyse',
  'Persoonlijk trainingsschema',
  'Voedings- en leefstijladvies',
  'Voortgangsmetingen op vaste momenten',
  'Vragen tussendoor via WhatsApp',
  'Sessies inplannen wanneer het jou uitkomt',
];

export default function PersonalTrainingPage() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Personal training"
        title="Een uur dat helemaal van jou is"
        intro="Van intake tot resultaat, met een trainer die je schema kent en je vooruitgang bijhoudt."
        image={photo.handdruk}
        imageAlt="Kennismaking met de trainer in de studio"
      >
        <Link to="/proefdag" className="btn btn-lime">
          Boek je intake
        </Link>
        <Link to="/tarieven" className="btn btn-outline">
          Bekijk de tarieven
        </Link>
      </PageHero>

      {/* Waarom */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-start">
            <div>
              <span className="eyebrow">Waarom personal training</span>
              <h2 className="display-lg mt-6 text-ink">
                Sneller vooruit met
                <br />
                iemand naast je
              </h2>
              <div className="mt-7 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  We beginnen met een gesprek: wat wil je bereiken, wat heb je al geprobeerd, en
                  hoeveel ruimte is er in je week. Daaruit volgt een plan dat je aankunt en volhoudt.
                </p>
                <p>
                  Afvallen, sterker worden, opbouwen na een blessure of simpelweg fitter zijn. De
                  aanpak verschilt, de aandacht niet.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-10 mt-10">
                {benefits.map((b) => (
                  <div key={b.title} className="py-4 border-t border-hairline">
                    <h3 className="font-semibold text-ink text-[0.9375rem]">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{b.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="photo-accent photo-accent-left">
              <div className="aspect-[3/4]">
                <img
                  src={photo.emsVest2}
                  alt="Krachttraining onder begeleiding"
                  loading="lazy"
                  className="photo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-24 bg-paper-dim border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Het team</span>
            <h2 className="display-lg mt-6 text-ink">Met wie je traint</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {trainers.map((trainer) => (
              <article key={trainer.name}>
                <div className="aspect-[3/4] overflow-hidden rounded-md mb-4">
                  <img src={trainer.image} alt={trainer.name} loading="lazy" className="photo" />
                </div>

                <h3 className="display-md text-ink">{trainer.name}</h3>
                <p className="mono text-[0.6875rem] uppercase tracking-[0.12em] text-moss mt-1.5">
                  {trainer.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone">{trainer.bio}</p>

                <p className="mt-4 text-sm text-ink-soft">{trainer.specialties.join(' · ')}</p>

                <ul className="mt-4 pt-3 border-t border-hairline space-y-1">
                  {trainer.certifications.map((c) => (
                    <li key={c} className="mono text-[0.6875rem] text-stone">
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beeldstrook */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[photo.deadlift, photo.kettlebellSquat, photo.cardioLoopband, photo.kabelRow].map((src) => (
          <div key={src} className="aspect-[3/4] overflow-hidden">
            <img src={src} alt="" loading="lazy" className="photo" />
          </div>
        ))}
      </section>

      {/* Tarieven */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="display-lg text-ink mb-10">Wat het kost</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="card p-8">
              <h3 className="display-md text-ink">Losse sessie</h3>
              <p className="mono text-4xl text-ink mt-4">€65</p>
              <p className="mono text-xs text-stone mt-1">per sessie van 60 minuten</p>
              <p className="mt-5 text-sm leading-relaxed text-stone">
                Om te proberen, of als aanvulling naast je groepstrainingen.
              </p>
            </div>

            <div className="bg-ink text-paper p-8 relative">
              <span className="mono absolute top-0 right-0 bg-lime text-ink text-[0.625rem] uppercase tracking-[0.12em] px-2.5 py-1.5">
                Voordeel
              </span>
              <h3 className="display-md">Tien sessies</h3>
              <p className="mono text-4xl mt-4">€600</p>
              <p className="mono text-xs text-paper/50 mt-1">€60 per sessie, je bespaart €50</p>
              <p className="mt-5 text-sm leading-relaxed text-paper/70">
                Voor wie een doel heeft dat meer dan een paar weken vraagt.
              </p>
            </div>
          </div>

          <h3 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mt-14 mb-5">
            Bij elk traject inbegrepen
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-ink">
            {included.map((item) => (
              <li key={item} className="py-3.5 border-b border-hairline text-[0.9375rem] text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">Klaar om te beginnen?</h2>
          <p className="mt-6 text-paper/65 leading-relaxed max-w-xl mx-auto">
            Het kennismakingsgesprek is gratis en kost je een half uur. Daarna weet je precies wat
            personal training voor jou zou betekenen.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/proefdag" className="btn btn-lime justify-center">
              Boek een gratis intake
            </Link>
            <Link to="/contact" className="btn btn-outline-light justify-center">
              Stel eerst een vraag
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
