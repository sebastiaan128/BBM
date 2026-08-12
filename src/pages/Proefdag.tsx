import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { photo } from '../photos';
import PageHero from '../components/PageHero';

const timeSlots = ['09:00', '10:00', '11:00', '14:00', '16:00', '17:00', '19:00'];

/* De proefdag is een echte volgorde, dus de nummering betekent iets. */
const expectations = [
  { step: '01', title: 'Rondleiding', description: 'Je ziet de studio, de krachthal en het buitenterrein.' },
  { step: '02', title: 'Proeftraining', description: 'Een volledige training mee, onder begeleiding en op jouw niveau.' },
  { step: '03', title: 'Advies', description: 'Na afloop bespreken we je doelen en wat daar het beste bij past.' },
];

export default function Proefdag() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ naam: '', email: '', telefoon: '', opmerkingen: '' });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
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
        eyebrow="Gratis proefdag"
        title="Kom een dag meedraaien"
        intro="Kies een datum en tijd die je uitkomt. Je zit nergens aan vast, en de proefdag kost je niets."
        image={photo.kettlebellDaglicht}
        imageAlt="Training in de studio bij daglicht"
      />

      {/* Stappen */}
      <section className="py-16 bg-paper-dim border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-8">
          <h2 className="mono text-[0.6875rem] uppercase tracking-[0.16em] text-stone mb-8">
            Hoe de dag eruitziet
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
                <BookingCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
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
                        <strong className="font-semibold">Aanvraag ontvangen.</strong> We bellen je
                        binnen 24 uur om de proefdag te bevestigen.
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime || isBooked}
                    className={`btn w-full justify-center ${
                      selectedDate && selectedTime && !isBooked
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
                  href="tel:0642059446"
                  className="mono text-moss underline underline-offset-4 decoration-1 hover:decoration-2"
                >
                  06-42059446
                </a>
                . We zitten aan de Rijksstraatweg 125 in Elst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
