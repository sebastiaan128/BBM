import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Slide {
  id: number;
  image: string;
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1734630341082-0fec0e10126c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    headline: 'Body by Marcel',
    subtext: 'Persoonlijke fitness & training in het hart van Elst, Utrecht. Waar balans tussen kracht, rust en voeding centraal staat.',
    ctaText: 'Plan je proefdag',
    ctaLink: '/proefdag',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1758875570256-6510adffb1de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    headline: 'Groepstrainingen',
    subtext: 'Train samen in een kleine groep met maximaal 8 personen. Professionele begeleiding en persoonlijke aandacht.',
    ctaText: 'Ontdek groepslessen',
    ctaLink: '/groepstrainingen',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1611711605692-acb25d5d8399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    headline: 'Personal Training',
    subtext: 'Jouw doelen, onze expertise. 100% persoonlijke aandacht in elke sessie voor maximaal resultaat.',
    ctaText: 'Boek intakegesprek',
    ctaLink: '/personal-training',
  },
];

interface Props {
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function HeroCarousel({ autoplay = true, autoplayDelay = 6000 }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
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
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplay || isHovered) return;
    const id = setInterval(() => emblaApi.scrollNext(), autoplayDelay);
    return () => clearInterval(id);
  }, [emblaApi, autoplay, autoplayDelay, isHovered]);

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[600px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] min-w-0 relative">
              <div className="absolute inset-0">
                <img src={slide.image} alt={slide.headline} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />
              </div>
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl">
                    <h1 className="font-display text-7xl md:text-8xl lg:text-[9rem] text-white leading-none mb-5">
                      {slide.headline}
                    </h1>
                    <div className="h-1 w-20 bg-[#7AC943] mb-7" />
                    <p className="text-xl md:text-2xl text-white/85 mb-12 max-w-2xl font-light leading-relaxed">
                      {slide.subtext}
                    </p>
                    <Link
                      to={slide.ctaLink}
                      className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Vorige"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Volgende"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === selectedIndex ? 'w-10 h-3 bg-[#7AC943]' : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      {selectedIndex === 0 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center pt-2">
            <div className="w-1.5 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
