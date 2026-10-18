import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero';
import content from '../content/contact.json';
import { site, telLink, mailLink } from '../site';
import { submitNetlifyForm } from '../netlifyForms';
import MapEmbed from '../components/MapEmbed';

const c = site.contact;

const contactInfo = [
  { title: 'Adres', details: [c.straat, c.postcodePlaats], link: c.mapsLink, linkText: 'Op de kaart' },
  { title: 'Telefoon', details: [c.telefoon], link: telLink, linkText: 'Bel ons' },
  { title: 'E-mail', details: [c.email], link: mailLink, linkText: 'Stuur een mail' },
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
  const [isSending, setIsSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSendFailed(false);
    try {
      await submitNetlifyForm('contact', formData);
    } catch {
      setSendFailed(true);
      return;
    } finally {
      setIsSending(false);
    }
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
        eyebrow={content.hero.eyebrow}
        title={content.hero.titel}
        intro={content.hero.intro}
        image={content.hero.foto}
        imageAlt={content.hero.fotoAlt}
      />

      {/* Gegevens */}
      <section className="border-b border-hairline bg-paper-dim">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_1.6fr] divide-y sm:divide-y-0 sm:divide-x divide-hairline">
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

            {/* Openingstijden: dag links, tijden rechts, zoals op de homepage */}
            <div className="py-7 sm:px-7 last:sm:pr-0">
              <dt className="mono text-[0.625rem] uppercase tracking-[0.18em] text-stone">
                Openingstijden
              </dt>
              <dd className="mt-2 space-y-1.5">
                {site.openingstijden.map((o) => (
                  <p key={o.dagen} className="flex justify-between gap-4 text-[0.9375rem]">
                    <span className="text-ink-soft">{o.dagen}</span>
                    <span className="mono text-ink text-right whitespace-pre">{o.tijden}</span>
                  </p>
                ))}
                {site.openingstijdenNotitie && (
                  <p className="pt-1 text-sm text-stone">{site.openingstijdenNotitie}</p>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Formulier + kaart */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-14 lg:gap-20 items-start">
            {/* Formulier */}
            <div>
              <h2 className="display-lg text-ink">{content.formulier.titel}</h2>
              <p className="mt-4 text-ink-soft leading-relaxed">{content.formulier.intro}</p>

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
                          {content.formulier.bevestiging}
                        </p>
                      </div>
                    </div>
                  )}
                  {sendFailed && (
                    <p className="text-sm text-ink border border-hairline p-4">
                      Versturen is niet gelukt. Probeer het nog eens, of mail naar{' '}
                      <a href={mailLink} className="underline underline-offset-4">
                        {c.email}
                      </a>
                      .
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted || isSending}
                  className={`btn w-full justify-center ${
                    isSubmitted || isSending
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
                  <MapEmbed />
                </div>
                <h2 className="display-md text-ink mt-5">{content.kaartTitel}</h2>
                <p className="mt-2 text-sm text-stone leading-relaxed">
                  {c.straat}, {c.postcodePlaats}. {c.parkeren}
                </p>
                <a
                  href={c.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline mt-5"
                >
                  Open in Google Maps
                </a>
              </div>

              <div>
                <h2 className="display-md text-ink mb-5">{content.faqTitel}</h2>
                <dl className="border-t border-ink">
                  {content.faqs.map((faq) => (
                    <div key={faq.vraag} className="py-4 border-b border-hairline">
                      <dt className="font-semibold text-ink text-[0.9375rem]">{faq.vraag}</dt>
                      <dd className="mt-1 text-sm text-stone leading-relaxed">{faq.antwoord}</dd>
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
          <h2 className="display-lg">{content.afsluiter.titel}</h2>
          <p className="mt-6 text-paper/65 leading-relaxed max-w-xl mx-auto">
            {content.afsluiter.tekst}
          </p>
          <Link to="/proefdag" className="btn btn-lime mt-9">
            Boek een gratis proefdag
          </Link>
        </div>
      </section>
    </div>
  );
}
