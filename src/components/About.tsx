import { photo } from '../photos';
import Photo from './Photo';

export default function About() {
  return (
    <section className="py-20 md:py-28 bg-paper">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
        <div className="grid lg:grid-cols-[0.9fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Eén foto met de groene lijn. Een tweede, overlappende foto erbij
              botste met het kader: twee accenten om dezelfde hoek. */}
          <div className="photo-accent lg:mr-4" data-reveal>
            <div className="aspect-[3/4]">
              <Photo
                src={photo.trainerPortret}
                alt="Trainer in de krachthal van Body by Marcel"
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
          </div>

          {/* Tekst */}
          <div className="lg:pt-4" data-reveal>
            <span className="eyebrow">Over de studio</span>

            <h2 className="display-lg mt-6 text-ink">
              Je bent hier
              <br />
              geen abonneenummer
            </h2>

            <div className="mt-8 space-y-5 text-ink-soft leading-relaxed">
              <p>
                Met een achtergrond in <strong className="text-ink font-semibold">Taekwon-do</strong> en
                jarenlange ervaring in de fitnessindustrie weet ik hoeveel er van balans afhangt.
                Balans tussen kracht en rust, tussen intensiteit en herstel, tussen training en
                voeding.
              </p>
              <p>
                Bij Body by Marcel draait alles om jou. Of je nu net begint, een specifiek doel voor
                ogen hebt of gewoon in vorm wilt blijven, je traint met een programma dat op jou is
                afgestemd, en met iemand die je vooruitgang bijhoudt.
              </p>
              <p>
                Het resultaat is een club waar hard werken samengaat met een warme sfeer, en waar
                iedereen zich thuis voelt.
              </p>
            </div>

            {/* Feiten, geen decoratie */}
            <dl className="mt-10 border-t border-hairline">
              {[
                { k: 'Achtergrond', v: 'Taekwon-do, jarenlange ervaring als trainer' },
                { k: 'Aanpak', v: 'Training, voeding en herstel als één geheel' },
                { k: 'Groepsgrootte', v: 'Nooit meer dan acht per les' },
              ].map((row) => (
                <div
                  key={row.k}
                  className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-b border-hairline"
                >
                  <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone sm:pt-0.5">
                    {row.k}
                  </dt>
                  <dd className="text-[0.9375rem] text-ink">{row.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
