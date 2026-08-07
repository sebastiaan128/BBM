import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import { photo } from '../photos';

const contactInfo = [
  {
    title: 'Adres',
    details: ['Rijksstraatweg 125', '3921 AD Elst (U)', 'Utrecht'],
    link: 'https://maps.google.com/?q=Rijksstraatweg+125+Elst+Utrecht',
    linkText: 'Op de kaart',
  },
  { title: 'Telefoon', details: ['06-42059446'], link: 'tel:0642059446', linkText: 'Bel ons' },
  {
    title: 'E-mail',
    details: ['info@bodybymarcel.nl'],
    link: 'mailto:info@bodybymarcel.nl',
    linkText: 'Stuur een mail',
  },
  {
    title: 'Openingstijden',
    details: ['Ma t/m vr 06:00 – 21:00', 'Za 08:00 – 16:00', 'Zo gesloten'],
    link: null,
    linkText: null,
  },
];

const faqs = [
  { q: 'Hoe snel krijg ik antwoord?', a: 'Binnen 24 uur, meestal dezelfde dag nog.' },
  {
    q: 'Kan ik langskomen zonder afspraak?',
    a: 'Bel even van tevoren voor een rondleiding, of boek meteen een proefdag.',
  },
  { q: 'Is er parkeergelegenheid?', a: 'Ja, je parkeert gratis bij de studio.' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-paper">
      <PageHero
        eyebrow="Contact"
        title="Stel je vraag"
        intro="Bel, mail of vul het formulier in. We reageren meestal dezelfde dag nog."
        image={photo.studioHal}
        imageAlt="De krachthal van Body by Marcel in Elst"
      />

      {/* Gegevens */}
      <section className="border-b border-hairline bg-paper-dim">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-hairline">
            {contactInfo.map((info) => (
              <div key={info.title} className="py-7 sm:px-7 first:sm:pl-0 last:sm:pr-0">
                <dt className="mono text-[0.625rem] uppercase tracking-[0.18em] text-stone">
                  {info.title}
                </dt>
                <dd className="mt-2 space-y-0.5">
                  {info.details.map((d) => (
                    <p key={d} className="text-[0.9375rem] text-ink">
                      {d}
                    </p>
                  ))}
                  {info.link && (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-block mt-2 mono text-[0.6875rem] uppercase tracking-[0.14em] text-moss underline underline-offset-4 decoration-1 hover:decoration-2"
                    >
                      {info.linkText}
                    </a>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Formulier + kaart */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* Formulier */}
            <div>
              <h2 className="display-lg text-ink">Stuur een bericht</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">
                Vul in wat je wilt weten. Hoe concreter je vraag, hoe gerichter ons antwoord.
              </p>

              <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                <div>
                  <label htmlFor="naam" className="label">
                    Naam <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    className="field"
                    placeholder="Je naam"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="label">
                      E-mail <span aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="field"
                      placeholder="jij@voorbeeld.nl"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="label">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="field"
                      placeholder="06-12345678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="onderwerp" className="label">
                    Onderwerp <span aria-hidden="true">*</span>
                  </label>
                  <select
                    id="onderwerp"
                    name="onderwerp"
                    required
                    value={formData.onderwerp}
                    onChange={handleChange}
                    className="field"
                  >
                    <option value="">Kies een onderwerp</option>
                    <option value="proefdag">Proefdag boeken</option>
                    <option value="personal-training">Personal training</option>
                    <option value="groepstraining">Groepstraining</option>
                    <option value="bedrijfstraining">Bedrijfstraining</option>
                    <option value="tarieven">Vraag over tarieven</option>
                    <option value="anders">Iets anders</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="bericht" className="label">
                    Bericht <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={6}
                    value={formData.bericht}
                    onChange={handleChange}
                    className="field"
                    placeholder="Waar kunnen we je mee helpen?"
                  />
                </div>

                <div aria-live="polite">
                  {isSubmitted && (
                    <div className="border border-moss bg-lime/10 p-4 flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-moss flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-ink text-[0.9375rem]">Bericht verzonden</p>
                        <p className="text-sm text-stone mt-0.5">
                          We nemen binnen 24 uur contact met je op.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`btn w-full justify-center ${
                    isSubmitted
                      ? 'bg-hairline text-stone cursor-not-allowed'
                      : 'btn-primary'
                  }`}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle2 size={17} /> Verzonden
                    </>
                  ) : (
                    <>
                      <Send size={17} /> Verstuur bericht
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Kaart en vragen */}
            <div className="space-y-12">
              <div>
                <div className="aspect-[4/3] bg-mist border border-hairline">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d907.3597920090741!2d5.503261184825531!3d51.983427245326475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c651494090b197%3A0x1c69d179c91fc018!2sBody%20by%20Marcel!5e0!3m2!1snl!2snl!4v1774468241137!5m2!1snl!2snl"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Locatie van Body by Marcel op Google Maps"
                  />
                </div>
                <h2 className="display-md text-ink mt-5">Kom langs</h2>
                <p className="mt-2 text-sm text-stone leading-relaxed">
                  Rijksstraatweg 125, 3921 AD Elst (U). Gratis parkeren voor de deur.
                </p>
                <a
                  href="https://maps.google.com/?q=Rijksstraatweg+125+Elst+Utrecht"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline mt-5"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h2 className="display-md text-ink mb-5">Veelgestelde vragen</h2>
                <dl className="border-t border-ink">
                  {faqs.map((faq) => (
                    <div key={faq.q} className="py-4 border-b border-hairline">
                      <dt className="font-semibold text-ink text-[0.9375rem]">{faq.q}</dt>
                      <dd className="mt-1 text-sm text-stone leading-relaxed">{faq.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Afsluiter */}
      <section className="bg-ink text-paper py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="display-lg">Liever gewoon een keer meetrainen?</h2>
          <p className="mt-6 text-paper/65 leading-relaxed max-w-xl mx-auto">
            De proefdag is gratis en verplicht je tot niets.
          </p>
          <Link to="/proefdag" className="btn btn-lime mt-9">
            Boek een gratis proefdag
          </Link>
        </div>
      </section>
    </div>
  );
}
