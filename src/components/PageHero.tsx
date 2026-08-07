import type { ReactNode } from 'react';

interface Props {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  /** Knoppen of andere acties onder de intro. */
  children?: ReactNode;
}

/**
 * Gedeelde paginakop: tekst op papier links, foto rechts tot de rand.
 * Zelfde ritme als de homepage, maar lager.
 */
export default function PageHero({ eyebrow, title, intro, image, imageAlt, children }: Props) {
  return (
    <header className="bg-paper border-b border-hairline">
      {/* De fotokolom is bewust bijna vierkant: de fotoset is staand, dus een
          breed vak zou de bovenkant van mensen wegsnijden. */}
      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex items-center px-6 sm:px-10 lg:px-14 xl:px-20 py-16 lg:py-24">
          <div className="max-w-lg">
            <span className="eyebrow">{eyebrow}</span>
            <h1 className="display-lg mt-6 text-ink">{title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">{intro}</p>
            {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
          </div>
        </div>

        <div className="relative min-h-[20rem] sm:min-h-[26rem] lg:min-h-[34rem]">
          <img src={image} alt={imageAlt} className="photo absolute inset-0" />
        </div>
      </div>
    </header>
  );
}
