export default function About() {
  return (
    <section className="py-24 md:py-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Marcel - Personal Trainer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#7AC943] rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-[#7AC943]/10 text-[#7AC943] rounded-full text-sm font-semibold mb-6">
              Over Body by Marcel
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-zinc-900 mb-6 leading-tight">
              Persoonlijke aandacht,
              <br />
              professionele begeleiding
            </h2>
            <div className="h-1 w-16 bg-[#7AC943] mb-8" />

            <div className="space-y-5 text-zinc-600 leading-relaxed">
              <p>
                Met een achtergrond in <strong className="text-zinc-900">Taekwon-do</strong> en jarenlange ervaring
                in de fitnessindustrie, begrijp ik als geen ander het belang van balans. Balans tussen
                kracht en rust, tussen intensiteit en herstel, tussen training en voeding.
              </p>
              <p>
                Bij Body by Marcel draait alles om jou. Of je nu aan je eerste fitness reis begint,
                een specifiek doel voor ogen hebt, of gewoon in vorm wilt blijven – ik begeleid je
                met persoonlijke aandacht en een op maat gemaakt programma.
              </p>
              <p>
                Welkom in een <strong className="text-zinc-900">gemeenschap</strong> waar iedereen zich
                thuis voelt, waar hard werken hand in hand gaat met een warme sfeer, en waar jouw
                gezondheid en welzijn centraal staan.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {['Taekwon-do expertise', 'Persoonlijke begeleiding', 'Holistische aanpak'].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#7AC943] rounded-full flex-shrink-0" />
                  <span className="text-zinc-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
