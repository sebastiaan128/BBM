import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-36 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            Contact
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">
            Klaar om te starten?
          </h2>
          <div className="h-1 w-16 bg-[#7AC943] mx-auto mb-6" />
          <p className="text-xl text-white/65 max-w-2xl mx-auto mb-8">
            Neem contact op voor een vrijblijvend kennismakingsgesprek
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl"
          >
            Naar contactformulier
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-14 lg:gap-20">
          {/* Info */}
          <div className="space-y-7">
            {[
              { icon: MapPin, title: 'Locatie', content: 'Rijksstraatweg 125\n3921AD Elst\nUtrecht, Nederland' },
              { icon: Phone, title: 'Telefoon', href: 'tel:0642059446', content: '06-42059446' },
              { icon: Mail, title: 'Email', href: 'mailto:info@bodybymarcel.nl', content: 'info@bodybymarcel.nl' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#7AC943]/10 rounded-xl flex items-center justify-center text-[#7AC943] flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1.5">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-white/65 hover:text-[#7AC943] transition-colors whitespace-pre-line text-sm">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-white/65 whitespace-pre-line text-sm">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Social */}
            <div className="pt-4">
              <h3 className="text-base font-semibold text-white mb-4">Volg ons</h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                ].map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="w-12 h-12 bg-[#7AC943]/10 hover:bg-[#7AC943] rounded-xl flex items-center justify-center text-[#7AC943] hover:text-white transition-all duration-200"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Opening hours */}
            <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
              <h3 className="text-base font-semibold text-white mb-4">Openingstijden</h3>
              <div className="space-y-2.5 text-sm">
                {[
                  { day: 'Maandag - Vrijdag', hours: '06:00 - 22:00' },
                  { day: 'Zaterdag', hours: '08:00 - 20:00' },
                  { day: 'Zondag', hours: '10:00 - 18:00' },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-white/60">{row.day}</span>
                    <span className="text-white font-semibold">{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] md:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.3597920090741!2d5.503261184825531!3d51.983427245326475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c651494090b197%3A0x1c69d179c91fc018!2sBody%20by%20Marcel!5e0!3m2!1snl!2snl!4v1774468241137!5m2!1snl!2snl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Body by Marcel Locatie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
