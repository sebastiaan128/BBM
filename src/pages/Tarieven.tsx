import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import content from '../content/tarieven.json';
import { prijsTekst } from '../prijs';

type PriceTable = (typeof content.tabellen)[number];

function PriceRows({ table }: { table: PriceTable }) {
  return (
    <section id={table.id} className="scroll-mt-24">
      <h2 className="display-lg text-ink">{table.titel}</h2>
      <p className="mt-3 text-ink-soft leading-relaxed max-w-xl">{table.intro}</p>

      <table className="w-full mt-8 text-left border-collapse">
        <caption className="sr-only">Tarieven {table.titel}</caption>
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
          {table.regels.map((row) => (
            <tr key={row.naam} className="border-b border-hairline align-top">
              <th scope="row" className="py-4 pr-4 font-normal">
                <span className="font-semibold text-ink text-[0.9375rem]">
                  {row.naam}
                  {row.meestGekozen && (
                    <span className="mono ml-2.5 align-middle text-[0.625rem] uppercase tracking-[0.1em] bg-lime text-ink px-1.5 py-0.5">
                      Meest gekozen
                    </span>
                  )}
                </span>
                <span className="block mt-0.5 text-sm text-stone">{prijsTekst(row.toelichting)}</span>
              </th>
              <td className="py-4 text-right">
                <span className="mono text-lg text-ink whitespace-nowrap">{prijsTekst(row.prijs)}</span>
                {row.eenheid && <span className="mono block text-[0.6875rem] text-stone mt-0.5">{prijsTekst(row.eenheid)}</span>}
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
        eyebrow={content.hero.eyebrow}
        title={content.hero.titel}
        intro={content.hero.intro}
        image={content.hero.foto}
        imageAlt={content.hero.fotoAlt}
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
            {content.tabellen.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="group inline-flex items-center gap-2 border border-hairline bg-paper px-3.5 py-2 text-[0.8125rem] font-medium text-ink hover:border-ink hover:text-moss transition-colors duration-150 ease-smooth"
              >
                {t.titel}
                <ArrowDown
                  size={13}
                  className="text-stone group-hover:text-moss group-hover:translate-y-0.5 transition-[color,transform] duration-150 ease-smooth"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Tabellen */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8 py-20 md:py-24 space-y-20">
        {content.tabellen.map((t) => (
          <PriceRows key={t.id} table={t} />
        ))}
      </div>

      {/* Inbegrepen */}
      <section className="py-16 bg-paper-dim border-y border-hairline">
        <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-5">
            {content.inbegrepenTitel}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-ink">
            {content.inbegrepen.map((item) => (
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
          <h2 className="display-lg text-ink mb-10">{content.praktischTitel}</h2>
          <div className="grid md:grid-cols-3 gap-x-10">
            {content.praktisch.map((item) => (
              <div key={item.titel} className="border-t-2 border-ink pt-4">
                <h3 className="display-md text-ink">{item.titel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.tekst}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 border border-hairline p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
            <div className="max-w-lg">
              <h3 className="display-md text-ink">{content.twijfel.titel}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">{content.twijfel.tekst}</p>
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
          <h2 className="display-lg">{content.afsluiter.titel}</h2>
          <p className="mt-6 text-paper/65 leading-relaxed max-w-xl mx-auto">
            {content.afsluiter.tekst}
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
