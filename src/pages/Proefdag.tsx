import { useState } from 'react';
import BookingCalendar from '../components/BookingCalendar';
import { Activity, Users, Award } from 'lucide-react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

const timeSlots = ['09:00', '10:00', '11:00', '14:00', '16:00', '17:00', '19:00'];

const expectations = [
  { icon: Activity, title: 'Rondleiding', description: 'Een complete tour door onze faciliteiten' },
  { icon: Users, title: 'Proeftraining', description: 'Ervaar een volledige training onder begeleiding' },
  { icon: Award, title: 'Persoonlijk advies', description: 'Bespreek je doelen met onze experts' },
];

export default function Proefdag() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ naam: '', email: '', telefoon: '', opmerkingen: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Bedankt voor je aanmelding! We nemen zo snel mogelijk contact met je op.');
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="relative bg-zinc-900 py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              Gratis Proefdag
            </span>
            <h1 className="font-display text-5xl md:text-7xl text-white mb-6 leading-tight">
              Plan jouw gratis proefdag
            </h1>
            <div className="h-1 w-24 bg-[#7AC943] mb-6" />
            <p className="text-xl text-white/75 max-w-2xl">
              Ervaar Body by Marcel vrijblijvend. Kies een datum en tijd die jou uitkomt.
            </p>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendar */}
            <div className="space-y-6">
              <BookingCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />

              {selectedDate && (
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-zinc-100">
                  <h3 className="font-display text-xl text-zinc-900 mb-3 tracking-wide">
                    Kies een tijdstip
                  </h3>
                  <p className="text-sm text-zinc-500 mb-4">
                    {format(selectedDate, 'EEEE d MMMM yyyy', { locale: nl })}
                  </p>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                          selectedTime === time
                            ? 'bg-[#7AC943] text-white shadow-lg scale-105'
                            : 'bg-white border-2 border-[#7AC943] text-[#7AC943] hover:bg-[#7AC943]/10'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Form */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-zinc-100 sticky top-24">
                <h3 className="font-display text-2xl text-zinc-900 mb-6 tracking-wide">Jouw gegevens</h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: 'naam', label: 'Naam *', type: 'text', placeholder: 'Volledige naam', required: true },
                    { id: 'email', label: 'E-mail *', type: 'email', placeholder: 'jouw@email.nl', required: true },
                    { id: 'telefoon', label: 'Telefoonnummer *', type: 'tel', placeholder: '06-12345678', required: true },
                  ].map((field) => (
                    <div key={field.id}>
                      <label htmlFor={field.id} className="block text-sm font-semibold text-zinc-700 mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.id}
                        required={field.required}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all text-sm"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="opmerkingen" className="block text-sm font-semibold text-zinc-700 mb-2">
                      Opmerkingen (optioneel)
                    </label>
                    <textarea
                      id="opmerkingen"
                      rows={4}
                      value={formData.opmerkingen}
                      onChange={(e) => setFormData({ ...formData, opmerkingen: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border-2 border-zinc-200 focus:border-[#7AC943] focus:ring-4 focus:ring-[#7AC943]/10 outline-none transition-all resize-none text-sm"
                      placeholder="Vertel ons iets over je fitnessdoelen..."
                    />
                  </div>

                  {selectedDate && selectedTime && (
                    <div className="bg-[#7AC943]/10 rounded-xl p-4 border border-[#7AC943]/20">
                      <p className="text-sm font-semibold text-zinc-900 mb-1">Gekozen tijdstip:</p>
                      <p className="text-[#7AC943] font-bold text-sm">
                        {format(selectedDate, 'EEEE d MMMM yyyy', { locale: nl })} om {selectedTime}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!selectedDate || !selectedTime}
                    className={`w-full py-4 rounded-xl font-semibold text-base transition-all duration-200 ${
                      selectedDate && selectedTime
                        ? 'bg-[#7AC943] hover:bg-[#6BB835] text-white hover:scale-105 shadow-lg'
                        : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                    }`}
                  >
                    Proefdag reserveren
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl text-zinc-900 mb-4">
              Wat kun je verwachten?
            </h2>
            <div className="h-1 w-16 bg-[#7AC943] mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {expectations.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#7AC943]/10 rounded-2xl mb-5">
                    <Icon size={34} className="text-[#7AC943]" />
                  </div>
                  <h3 className="font-display text-2xl text-zinc-900 mb-2 tracking-wide">{item.title}</h3>
                  <p className="text-zinc-500 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-14 text-center bg-zinc-50 rounded-2xl p-8">
            <p className="text-zinc-500 text-sm mb-2">
              <strong className="text-zinc-800">Rijksstraatweg 125, 3921AD Elst (U)</strong>
            </p>
            <p className="text-zinc-500 text-sm">
              Vragen? Bel ons op{' '}
              <a href="tel:0642059446" className="text-[#7AC943] font-semibold hover:underline">
                06-42059446
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
