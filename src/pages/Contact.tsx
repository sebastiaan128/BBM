import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, title: 'Adres', details: ['Rijksstraatweg 125', '3921AD Elst (U)', 'Utrecht, Nederland'], link: 'https://maps.google.com/?q=Rijksstraatweg+125+Elst+Utrecht', linkText: 'Bekijk op kaart' },
  { icon: Phone, title: 'Telefoon', details: ['06-42059446'], link: 'tel:0642059446', linkText: 'Bel nu' },
  { icon: Mail, title: 'E-mail', details: ['info@bodybymarcel.nl'], link: 'mailto:info@bodybymarcel.nl', linkText: 'Stuur e-mail' },
  { icon: Clock, title: 'Openingstijden', details: ['Ma - Vr: 06:00 - 21:00', 'Za: 08:00 - 16:00', 'Zo: Gesloten'], link: null, linkText: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-zinc-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758875569414-120ebc62ada3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
            alt="Contact"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-[#7AC943]/20 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
            Neem Contact Op
          </span>
          <h1 className="font-display text-6xl md:text-8xl text-white mb-6">Contact</h1>
          <div className="h-1 w-24 bg-[#7AC943] mx-auto mb-8" />
          <p className="text-xl text-white/85 max-w-3xl mx-auto">
            Heb je vragen? We helpen je graag verder.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-14 h-14 bg-[#7AC943]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={26} className="text-[#7AC943]" />
                  </div>
                  <h3 className="font-display text-xl text-zinc-900 mb-3 tracking-wide">{info.title}</h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((d, j) => <p key={j} className="text-zinc-500 text-sm">{d}</p>)}
                  </div>
                  {info.link && (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center text-[#7AC943] font-semibold hover:underline text-sm"
                    >
                      {info.linkText}
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="py-24 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-4">
                Stuur ons een bericht
              </h2>
              <div className="h-1 w-16 bg-[#7AC943] mb-6" />
              <p className="text-zinc-500 text-lg mb-10">
                Vul het formulier in en we nemen zo snel mogelijk contact met je op.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="naam" className="block text-sm font-semibold text-zinc-700 mb-2">Naam *</label>
                  <input type="text" id="naam" name="naam" required value={formData.naam} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all text-sm"
                    placeholder="Jouw naam" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">E-mail *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all text-sm"
                      placeholder="jouw@email.nl" />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-semibold text-zinc-700 mb-2">Telefoon</label>
                    <input type="tel" id="telefoon" name="telefoon" value={formData.telefoon} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all text-sm"
                      placeholder="06-12345678" />
                  </div>
                </div>
                <div>
                  <label htmlFor="onderwerp" className="block text-sm font-semibold text-zinc-700 mb-2">Onderwerp *</label>
                  <select id="onderwerp" name="onderwerp" required value={formData.onderwerp} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all text-sm bg-white">
                    <option value="">Selecteer een onderwerp</option>
                    <option value="proefdag">Proefdag boeken</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="groepstraining">Groepstraining</option>
                    <option value="bedrijfstraining">Bedrijfstraining</option>
                    <option value="tarieven">Vraag over tarieven</option>
                    <option value="anders">Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bericht" className="block text-sm font-semibold text-zinc-700 mb-2">Bericht *</label>
                  <textarea id="bericht" name="bericht" required rows={6} value={formData.bericht} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all resize-none text-sm"
                    placeholder="Vertel ons waar we je mee kunnen helpen..." />
                </div>

                {isSubmitted && (
                  <div className="bg-[#7AC943]/10 border-2 border-[#7AC943] rounded-xl p-4 flex items-center gap-3">
                    <CheckCircle2 size={22} className="text-[#7AC943] flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-zinc-900 text-sm">Bericht verzonden!</p>
                      <p className="text-xs text-zinc-500">We nemen zo snel mogelijk contact met je op.</p>
                    </div>
                  </div>
                )}

                <button type="submit" disabled={isSubmitted}
                  className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 ${
                    isSubmitted ? 'bg-zinc-300 text-zinc-400 cursor-not-allowed' : 'bg-[#7AC943] hover:bg-[#6BB835] text-white hover:scale-105 shadow-lg'
                  }`}>
                  {isSubmitted ? <><CheckCircle2 size={18} /> Verzonden</> : <><Send size={18} /> Verstuur bericht</>}
                </button>
              </form>
            </div>

            {/* Map & FAQ */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-zinc-100">
                <div className="aspect-[4/3] bg-zinc-100">
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
                <div className="p-6">
                  <h3 className="font-display text-xl text-zinc-900 mb-3 tracking-wide">Bezoek onze studio</h3>
                  <p className="text-zinc-500 text-sm mb-4">Rijksstraatweg 125<br />3921AD Elst (U)<br />Utrecht</p>
                  <a href="https://maps.google.com/?q=Rijksstraatweg+125+Elst+Utrecht" target="_blank" rel="noopener noreferrer"
                    className="inline-block bg-[#7AC943] hover:bg-[#6BB835] text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200">
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="bg-zinc-50 rounded-2xl p-8">
                <h3 className="font-display text-2xl text-zinc-900 mb-6 tracking-wide">Veelgestelde vragen</h3>
                <div className="space-y-5">
                  {[
                    { q: 'Hoe snel krijg ik antwoord?', a: 'We streven ernaar om binnen 24 uur te reageren op alle berichten.' },
                    { q: 'Kan ik langskomen zonder afspraak?', a: 'Voor een rondleiding kun je het beste van tevoren bellen of een proefdag boeken.' },
                    { q: 'Is er parkeergelegenheid?', a: 'Ja, er is gratis parkeren mogelijk bij de studio.' },
                  ].map((faq, i) => (
                    <div key={i}>
                      <h4 className="font-semibold text-zinc-900 mb-1.5 text-sm">{faq.q}</h4>
                      <p className="text-zinc-500 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-36 bg-[#7AC943]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white mb-6">Klaar om te starten?</h2>
          <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto">
            Boek direct je gratis proefdag en ervaar de Body by Marcel aanpak.
          </p>
          <a href="/proefdag" className="inline-block bg-white hover:bg-zinc-100 text-[#7AC943] px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg">
            Boek gratis proefdag
          </a>
        </div>
      </section>
    </div>
  );
}
