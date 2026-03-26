import { Link } from 'react-router-dom';
import { type LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface InfoItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Props {
  title: string;
  subtitle: string;
  heroImage: string;
  description: ReactNode;
  features: Feature[];
  gallery: string[];
  practicalInfo?: InfoItem[];
  ctaTitle: string;
  extraContent?: ReactNode;
}

export default function TrainingDetailPage({
  title,
  subtitle,
  heroImage,
  description,
  features,
  gallery,
  practicalInfo,
  ctaTitle,
  extraContent,
}: Props) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-7xl text-white mb-6 leading-tight">{title}</h1>
            <div className="h-1 w-24 bg-[#7AC943] mb-6" />
            <p className="text-2xl text-white/85">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-start">
            <div className="space-y-5 text-zinc-500 leading-relaxed text-lg">
              {description}
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src={gallery[0]} alt={title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-6">Wat kun je verwachten?</h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#7AC943]/10 rounded-2xl mb-6">
                    <Icon size={34} className="text-[#7AC943]" />
                  </div>
                  <h3 className="font-display text-2xl text-zinc-900 mb-3 tracking-wide">{f.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {gallery.slice(0, 6).map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      {practicalInfo && (
        <section className="py-16 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="font-display text-3xl md:text-4xl text-zinc-900 mb-8 text-center tracking-wide">
                Praktische informatie
              </h2>
              <div className="grid sm:grid-cols-2 gap-7">
                {practicalInfo.map((info, i) => {
                  const Icon = info.icon;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#7AC943]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-[#7AC943]" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 mb-1 font-medium uppercase tracking-wider">{info.label}</div>
                        <div className="font-semibold text-zinc-900">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Extra Content */}
      {extraContent}

      {/* CTA */}
      <section className="py-20 md:py-32 bg-zinc-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-8 leading-tight">{ctaTitle}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/proefdag" className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
              Gratis proefles boeken
            </Link>
            <Link to="/groepstrainingen" className="inline-block bg-white hover:bg-zinc-50 text-zinc-900 border-2 border-zinc-200 px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200">
              Terug naar overzicht
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
