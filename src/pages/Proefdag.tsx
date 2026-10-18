import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import content from '../content/proefdag.json';
import { site, telLink } from '../site';
import PageHero from '../components/PageHero';
import { submitNetlifyForm } from '../netlifyForms';

/* De proefdag is een echte volgorde, dus de nummering betekent iets. */
const expectations = content.stappen.map((s, i) => ({
  step: String(i + 1).padStart(2, '0'),
  title: s.titel,
  description: s.tekst,
}));

export default function Proefdag() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ naam: '', email: '', telefoon: '', opmerkingen: '' });
  const [isBooked, setIsBooked] = useState(false);
  // Zaterdag is de sportschool alleen 's ochtends open.
  const timeSlots = selectedDate?.getDay() === 6 ? content.tijdenZaterdag : content.tijdenDoordeweeks;
  const [isSending, setIsSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) return;
    setIsSending(true);
    setSendFailed(false);
    try {
      await submitNetlifyForm('proefdag', {
        ...formData,
        moment: `${format(selectedDate, 'EEEE d MMMM yyyy', { locale: nl })} om ${selectedTime}`,
      });
      setIsBooked(true);
    } catch {
      setSendFailed(true);
    } finally {
      setIsSending(false);
    }
  };

  const fields = [
    { id: 'naam', label: 'Naam', type: 'text', placeholder: 'Je volledige naam', required: true },
    { id: 'email', label: 'E-mail', type: 'email', placeholder: 'jij@voorbeeld.nl', required: true },
    { id: 'telefoon', label: 'Telefoonnummer', type: 'tel', placeholder: '06-12345678', required: true },
  ];

  return (
    <div className="bg-paper">
      {/* Dezelfde kop als op de andere pagina's. Stond hier eerst apart, met
          een fotokolom die meekromp met de tekst: de staande foto werd dan
          een strook waarin iemand halverwege werd afgesneden. */}
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.titel}
        intro={content.hero.intro}
        image={content.hero.foto}
        imageAlt={content.hero.fotoAlt}
      />

      {/* Stappen */}
      <section className="py-16 bg-paper-dim border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-8">
            {content.stappenTitel}
          </h2>
          <ol className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {expectations.map((item) => (
              <li key={item.step} className="border-t-2 border-ink pt-4">
                <span className="mono text-xs text-moss">{item.step}</span>
                <h3 className="display-md text-ink mt-1.5">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Reserveren */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Datum en tijd */}
            <div className="space-y-6">
              <div>
                <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-3">
                  Stap 1. Kies een datum
                </h2>
                <BookingCalendar
                  selectedDate={selectedDate}
                  onSelectDate={(d) => {
                    setSelectedDate(d);
                    // Een tijd die op de nieuwe dag niet bestaat mag niet blijven staan.
                    setSelectedTime(null);
                  }}
                />
              </div>

              {selectedDate && (
                <div>
                  <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-3">
                    Stap 2. Kies een tijd
                  </h2>
                  <div className="border border-hairline p-5 sm:p-6">
                    <p className="text-sm text-ink-soft mb-4 first-letter:uppercase">
                      {format(selectedDate, 'EEEE d MMMM yyyy', { locale: nl })}
                    </p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          aria-pressed={selectedTime === time}
                          className={`mono py-2.5 text-sm border transition-colors duration-150 ease-smooth ${
                            selectedTime === time
                              ? 'bg-ink text-paper border-ink'
                              : 'border-hairline text-ink hover:border-ink'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gegevens */}
            <div className="lg:sticky lg:top-24">
              <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-3">
                Stap 3. Je gegevens
              </h2>

              <div className="border border-hairline p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {fields.map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="label">
                        {field.label} <span aria-hidden="true">*</span>
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        required={field.required}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        className="field"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="opmerkingen" className="label">
                      Opmerkingen
                    </label>
                    <textarea
                      id="opmerkingen"
                      rows={4}
                      value={formData.opmerkingen}
                      onChange={(e) => setFormData({ ...formData, opmerkingen: e.target.value })}
                      className="field"
                      placeholder="Waar wil je aan werken? Zijn er blessures om rekening mee te houden?"
                    />
                  </div>

                  <div
                    className={`border p-4 ${
                      selectedDate && selectedTime ? 'border-moss bg-lime/10' : 'border-hairline'
                    }`}
                  >
                    <p className="mono text-[0.625rem] uppercase tracking-[0.14em] text-stone">
                      Gekozen moment
                    </p>
                    <p className="mt-1 text-[0.9375rem] text-ink first-letter:uppercase">
                      {selectedDate && selectedTime
                        ? `${format(selectedDate, 'EEEE d MMMM yyyy', { locale: nl })} om ${selectedTime}`
                        : 'Kies hiernaast eerst een datum en tijd'}
                    </p>
                  </div>

                  <div aria-live="polite">
                    {isBooked && (
                      <p className="text-sm text-ink border border-moss bg-lime/10 p-4">
                        <strong className="font-semibold">Aanvraag ontvangen.</strong>{' '}
                        {content.bevestiging}
                      </p>
                    )}
                    {sendFailed && (
                      <p className="text-sm text-ink border border-hairline p-4">
                        Versturen is niet gelukt. Probeer het nog eens, of bel ons even.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || isBooked || isSending}
                    className={`btn w-full justify-center ${
                      selectedDate && selectedTime && !isBooked && !isSending
                        ? 'btn-primary'
                        : 'bg-hairline text-stone cursor-not-allowed'
                    }`}
                  >
                    {isBooked ? 'Aanvraag verstuurd' : 'Proefdag reserveren'}
                  </button>
                </form>
              </div>

              <p className="mt-5 text-sm text-stone leading-relaxed">
                Liever even bellen? Dat kan op{' '}
                <a
                  href={telLink}
                  className="mono text-moss underline underline-offset-4 decoration-1 hover:decoration-2"
                >
                  {site.contact.telefoon}
                </a>
                . We zitten aan de {site.contact.straat} in Elst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
