import { Link } from 'react-router-dom';
import {
  Building2, Cloud, Dumbbell, Flame, Heart, RotateCcw, Shield, Smile, Star, Target, Timer,
  TrendingUp, UserCheck, Users, Zap, type LucideIcon,
} from 'lucide-react';
import type { ReactNode } from 'react';
import PageHero from '../../components/PageHero';
import Photo from '../../components/Photo';
import { Alineas } from '../../components/Tekst';

/**
 * Iconen die bij een kenmerk gekozen kunnen worden. Dezelfde namen staan als
 * keuzelijst in public/admin/config.yml; voeg je hier een icoon toe, zet het
 * daar dan ook bij.
 */
const iconen: Record<string, LucideIcon> = {
  Building2, Cloud, Dumbbell, Flame, Heart, RotateCcw, Shield, Smile, Star, Target, Timer,
  TrendingUp, UserCheck, Users, Zap,
};

/** Vorm van de bestanden in src/content/trainingen/. */
export interface TrainingContent {
  titel: string;
  ondertitel: string;
  tekst: string;
  kenmerken: { icoon: string; titel: string; tekst: string }[];
  fotos: string[];
  praktisch: { label: string; waarde: string }[];
  afsluiterTitel: string;
}

interface Props {
  content: TrainingContent;
  extraContent?: ReactNode;
}

export default function TrainingDetailPage({ content, extraContent }: Props) {
  const { titel: title, ondertitel: subtitle, fotos: gallery, praktisch: practicalInfo } = content;
  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Groepstraining"
        title={title}
        intro={subtitle}
        image={gallery[0]}
        imageAlt={`${title} bij Body by Marcel`}
      >
        <Link to="/proefdag" className="btn btn-lime">
          Kom een keer meedoen
        </Link>
        <Link to="/groepstrainingen/rooster" className="btn btn-outline">
          Bekijk het rooster
        </Link>
      </PageHero>

      {/* Omschrijving */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <Alineas tekst={content.tekst} />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-md">
              <Photo src={gallery[0]} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Wat kun je verwachten */}
      <section className="py-20 bg-paper-dim border-y border-hairline">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="display-lg text-ink mb-12 max-w-xl">Wat je kunt verwachten</h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {content.kenmerken.map((f) => {
              const Icon = iconen[f.icoon];
              return (
                <div key={f.titel} className="border-t-2 border-ink pt-5">
                  {Icon && <Icon size={20} className="text-moss mb-3" aria-hidden="true" />}
                  <h3 className="display-md text-ink">{f.titel}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">{f.tekst}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beeld uit de studio */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.slice(0, 6).map((img, i) => (
              <div key={img + i} className="aspect-[3/4] overflow-hidden rounded-md">
                <Photo src={img} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Praktisch */}
      {practicalInfo.length > 0 && (
        <section className="pb-20 md:pb-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-8">
            <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-6">
              Praktisch
            </h2>
            <dl className="border-t border-ink">
              {practicalInfo.map((info) => (
                <div
                  key={info.label}
                  className="grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-8 py-4 border-b border-hairline"
                >
                  <dt className="mono text-[0.6875rem] uppercase tracking-[0.14em] text-stone sm:pt-1">
                    {info.label}
                  </dt>
                  <dd className="font-medium text-ink">{info.waarde}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {extraContent}

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">{content.afsluiterTitel}</h2>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/proefdag" className="btn btn-lime justify-center">
              Gratis proefles boeken
            </Link>
            <Link to="/groepstrainingen" className="btn btn-outline-light justify-center">
              Alle groepstrainingen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
