import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import { photo } from '../photos';

interface Row {
  name: string;
  price: string;
  unit: string;
  note: string;
  best?: boolean;
}

interface PriceTable {
  id: string;
  title: string;
  intro: string;
  rows: Row[];
}

const tables: PriceTable[] = [
  {
    id: 'personal-training',
    title: 'Personal training',
    intro: 'Eén op één, zestig minuten per sessie. Hoe meer sessies, hoe lager het tarief.',
    rows: [
      { name: 'Losse sessie', price: '€65', unit: 'per sessie', note: 'Flexibel en vrijblijvend' },
      { name: '5 sessies', price: '€315', unit: '€63 per sessie', note: 'Je bespaart €10' },
      { name: '10 sessies', price: '€600', unit: '€60 per sessie', note: 'Je bespaart €50', best: true },
      { name: '20 sessies', price: '€1140', unit: '€57 per sessie', note: 'Je bespaart €160' },
    ],
  },
  {
    id: 'groepstraining',
    title: 'Groepstraining',
    intro: 'Small group, bootcamp, tabata en circuit. Maximaal acht personen per les.',
    rows: [
      { name: 'Losse les', price: '€25', unit: 'per les', note: 'Alle groepslessen' },
      { name: 'Strippenkaart 10 lessen', price: '€220', unit: '€22 per les', note: '3 maanden geldig, je bespaart €30', best: true },
      { name: 'Strippenkaart 20 lessen', price: '€400', unit: '€20 per les', note: '6 maanden geldig, je bespaart €100' },
    ],
  },
  {
    id: 'combi',
    title: 'Combinaties',
    intro: 'Personal training naast je groepslessen, in één pakket.',
    rows: [
      { name: 'Starter, 5 PT en 10 groepslessen', price: '€280', unit: 'eenmalig', note: 'Je bespaart €30' },
      { name: 'Performance, 10 PT en 20 groepslessen', price: '€750', unit: 'eenmalig', note: 'Je bespaart €70', best: true },
      { name: 'Premium, 20 PT en 20 groepslessen', price: '€1400', unit: 'eenmalig', note: 'Je bespaart €140' },
    ],
  },
  {
    id: 'overig',
    title: 'Kids, duo en bedrijven',
    intro: 'Aangepaste tarieven voor jeugd, samen trainen en teams.',
    rows: [
      { name: 'Kids fitness (8–16 jaar), losse les', price: '€18', unit: 'per les', note: 'Jeugdtarief' },
      { name: 'Kids fitness, 10 lessen', price: '€160', unit: '€16 per les', note: 'Je bespaart €20' },
      { name: 'Duo personal training, losse sessie', price: '€45', unit: 'per persoon', note: 'Samen trainen, samen betalen' },
      { name: 'Duo personal training, 10 sessies', price: '€400', unit: '€40 per sessie p.p.', note: 'Je bespaart €50' },
      { name: 'Small group PT (3–4 personen), losse sessie', price: '€35', unit: 'per persoon', note: 'Kleine groep, eigen schema' },
      { name: 'Small group PT, 10 sessies', price: '€320', unit: '€32 per sessie p.p.', note: 'Je bespaart €30' },
      { name: 'Bedrijfstraining vanaf 5 personen', price: 'Op aanvraag', unit: '', note: 'Maatwerk voor uw team' },
      { name: 'Bedrijfstraining, vast contract', price: 'Op aanvraag', unit: '', note: 'Wekelijks op een vast moment' },
    ],
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

const practical = [
  {
    title: 'Betalen',
    text: 'Contant, pin, iDEAL of overschrijving. Strippenkaarten en pakketten betaal je vooraf.',
  },
  {
    title: 'Geldigheid',
    text: 'Strippenkaart van 10 lessen is 3 maanden geldig, die van 20 lessen 6 maanden.',
  },
  {
    title: 'Afmelden',
    text: 'Tot 24 uur van tevoren kosteloos. Daarna gaat de les van je kaart af.',
  },
];

function PriceRows({ table }: { table: PriceTable }) {
  return (
    <section id={table.id} className="scroll-mt-24">
      <h2 className="display-lg text-ink">{table.title}</h2>
      <p className="mt-3 text-ink-soft leading-relaxed max-w-xl">{table.intro}</p>

      <table className="w-full mt-8 text-left border-collapse">
        <caption className="sr-only">Tarieven {table.title}</caption>
        <thead>
          <tr className="border-b border-ink">
            <th scope="col" className="mono text-[0.625rem] uppercase tracking-[0.16em] text-stone font-medium pb-2.5">
              Pakket
            </th>
            <th scope="col" className="mono text-[0.625rem] uppercase tracking-[0.16em] text-stone font-medium pb-2.5 text-right w-28">
              Prijs
            </th>
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.name} className="border-b border-hairline align-top">
              <th scope="row" className="py-4 pr-4 font-normal">
                <span className="font-semibold text-ink text-[0.9375rem]">
                  {row.name}
                  {row.best && (
                    <span className="mono ml-2.5 align-middle text-[0.625rem] uppercase tracking-[0.1em] bg-lime text-ink px-1.5 py-0.5">
                      Meest gekozen
                    </span>
                  )}
                </span>
                <span className="block mt-0.5 text-sm text-stone">{row.note}</span>
              </th>
              <td className="py-4 text-right">
                <span className="mono text-lg text-ink whitespace-nowrap">{row.price}</span>
                {row.unit && <span className="mono block text-[0.6875rem] text-stone mt-0.5">{row.unit}</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default function Tarieven() {
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Tarieven"
        title="Alles op een rij, zonder kleine lettertjes"
        intro="Geen inschrijfgeld en geen opzegtermijn. Je betaalt per les, per strippenkaart of per pakket."
        image={photo.schijven}
        imageAlt="Halterschijven in het rek in de studio"
      >
        <Link to="/proefdag" className="btn btn-lime">
          Eerst een gratis proefles
        </Link>
      </PageHero>

      {/* Sprongnavigatie. Bewust geen filter: alle tarieven blijven staan,
          deze knoppen scrollen alleen naar de juiste tabel. */}
      <nav aria-label="Spring naar een tarievengroep" className="border-b border-hairline bg-paper-dim">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8 py-5">
          <p className="mono text-[0.625rem] uppercase tracking-[0.16em] text-stone mb-3">
            Spring naar
          </p>
          <div className="flex flex-wrap gap-2">
            {tables.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="group inline-flex items-center gap-2 border border-hairline bg-paper px-3.5 py-2 text-[0.8125rem] font-medium text-ink hover:border-ink hover:text-moss transition-colors duration-150"
              >
                {t.title}
                <ArrowDown
                  size={13}
                  className="text-stone group-hover:text-moss group-hover:translate-y-0.5 transition-all duration-200"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Tabellen */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8 py-20 md:py-24 space-y-20">
        {tables.map((t) => (
          <PriceRows key={t.id} table={t} />
        ))}
      </div>

      {/* Inbegrepen */}
      <section className="py-16 bg-paper-dim border-y border-hairline">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-5">
            Bij elk personal-trainingtraject inbegrepen
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-ink">
            {included.map((item) => (
              <li key={item} className="py-3.5 border-b border-hairline text-[0.9375rem] text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Praktisch */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="display-lg text-ink mb-10">Goed om te weten</h2>
          <div className="grid md:grid-cols-3 gap-x-10">
            {practical.map((item) => (
              <div key={item.title} className="border-t-2 border-ink pt-4">
                <h3 className="display-md text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border border-hairline p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="max-w-lg">
              <h3 className="display-md text-ink">Niet zeker wat bij je past?</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                Begin met een losse les of een gratis proefdag. Daarna kiezen we samen het pakket dat
                aansluit bij hoe vaak je echt gaat trainen.
              </p>
            </div>
            <Link to="/proefdag" className="btn btn-primary flex-shrink-0">
              Boek een gratis proefles
            </Link>
          </div>
        </div>
      </section>

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">Klaar om te beginnen?</h2>
          <p className="mt-6 text-paper/65 leading-relaxed max-w-xl mx-auto">
            Boek je eerste training, of stel eerst je vraag. Beide kan.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/proefdag" className="btn btn-lime justify-center">
              Boek je eerste training
            </Link>
            <Link to="/contact" className="btn btn-outline-light justify-center">
              Neem contact op
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
