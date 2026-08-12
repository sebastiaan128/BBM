import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';
import { photo } from '../photos';
import Photo from './Photo';

interface Slide {
  image: string;
  /** Alleen voor schermlezers; er staat geen bijschrift in beeld. */
  alt: string;
}

/* De foto's wisselen, de kop blijft staan. */
const slides: Slide[] = [
  { image: photo.kettlebellDaglicht, alt: 'Kettlebell squat in de studio' },
  { image: photo.coaching, alt: 'Trainer begeleidt een klant tijdens een oefening' },
  { image: photo.farmerswalk, alt: "Farmer's walk op het buitenterrein" },
];

const facts = [
  { label: 'Groepsgrootte', value: 'Max. 8 personen' },
  { label: 'Waar', value: 'Rijksstraatweg 125, Elst' },
  { label: 'Bellen', value: '06-42059446' },
];

interface Props {
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function HeroCarousel({ autoplay = true, autoplayDelay = 6000 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  // De teller loopt op selectedIndex, dus hij begint opnieuw zodra je zelf
  // een beeld kiest: anders zou het volgende beeld vlak na je klik alsnog
  // langsschuiven. Op een tabblad op de achtergrond staat hij stil.
  useEffect(() => {
    if (!emblaApi || !autoplay || isHovered) return;

    let id: number | undefined;
    const stop = () => window.clearInterval(id);
    const start = () => {
      stop();
      id = window.setInterval(() => emblaApi.scrollNext(), autoplayDelay);
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [emblaApi, autoplay, autoplayDelay, isHovered, selectedIndex]);

  return (
    <section id="home" className="bg-paper">
      <div className="grid lg:grid-cols-[1fr_1.05fr] xl:grid-cols-[1fr_1.15fr]">
        {/* Tekstkolom */}
        <div className="flex items-center px-6 sm:px-10 lg:px-14 xl:px-20 py-20 lg:py-28">
          <div className="max-w-xl">
            <span className="eyebrow">Elst · Utrecht</span>

            <h1 className="display-xl mt-8 text-ink">
              Kracht, rust
              <br />
              en voeding
              <br />
              in balans.
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-ink-soft">
              Body by Marcel is een kleine studio waar je bij naam bekend bent. Groepen van
              maximaal acht, of één op één, met begeleiding die verder kijkt dan de training
              alleen.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/proefdag" className="btn btn-lime">
                Plan je proefdag
              </Link>
              <Link to="/groepstrainingen" className="btn btn-outline">
                Bekijk het rooster
              </Link>
            </div>
          </div>
        </div>

        {/* Fotokolom */}
        <div
          className="relative min-h-[60vh] lg:min-h-[88vh]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden h-full" ref={emblaRef}>
            <div className="flex h-full">
              {slides.map((slide, i) => (
                <div key={slide.image} className="flex-[0_0_100%] min-w-0 relative">
                  {/* Het eerste beeld is het grootste element boven de vouw en
                      bepaalt dus wanneer de pagina 'geladen' oogt.

                      De andere twee laden gewoon mee: de carrousel schuift ze
                      opzij, waardoor de browser ze als 'buiten beeld' ziet en
                      met loading="lazy" pas ophaalt als ze al langsschuiven.
                      Dan sta je naar een leeg vlak te kijken. */}
                  <Photo
                    src={slide.image}
                    alt={slide.alt}
                    className="absolute inset-0"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    fetchPriority={i === 0 ? 'high' : 'auto'}
                  />
                  {/* Alleen genoeg verloop om de indicatiestreepjes leesbaar
                      te houden; er staat geen tekst meer over de foto. */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/45 to-transparent" />
                </div>
              ))}
            </div>
          </div>

          {/* Welk beeld je ziet, en klikbaar om te wisselen */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10">
            <div className="flex gap-1.5 max-w-[10rem]" role="tablist" aria-label="Beelden">
              {slides.map((slide, i) => (
                <button
                  key={slide.image}
                  onClick={() => scrollTo(i)}
                  role="tab"
                  aria-selected={i === selectedIndex}
                  aria-label={`Beeld ${i + 1} van ${slides.length}`}
                  className="flex-1 h-[3px] transition-colors duration-250 ease-smooth"
                  style={{
                    background: i === selectedIndex ? 'var(--color-lime)' : 'rgba(255,255,255,0.45)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feitenstrook: wat een bezoeker uit Elst echt wil weten */}
      <div className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <dl className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-ink-soft">
            {facts.map((fact) => (
              <div key={fact.label} className="py-6 sm:py-7 sm:px-8 first:sm:pl-0 last:sm:pr-0">
                <dt className="mono text-[0.625rem] uppercase tracking-[0.18em] text-paper/45">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] font-medium">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
