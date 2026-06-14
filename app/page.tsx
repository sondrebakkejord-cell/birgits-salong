export default function Home() {
  return (
    <div className="min-h-screen text-stone-900" style={{ backgroundColor: "#faf6f1" }}>
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-40 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <div className="text-stone-50 font-display text-3xl italic" style={{ letterSpacing: "-0.02em" }}>
              Birgits Salong
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-stone-300 -mt-0.5">Stokmarknes · Siden 1995</div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm text-stone-50">
            <a href="#tjenester" className="hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">Tjenester</a>
            <a href="#team" className="hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">Team</a>
            <a href="#besok" className="hover:text-stone-300 transition-colors uppercase tracking-widest text-xs">Besøk oss</a>
            <a href="tel:+4776151132" className="px-5 py-2.5 border border-stone-50 text-stone-50 hover:bg-stone-50 hover:text-stone-900 transition-colors uppercase tracking-widest text-xs">
              Bestill time
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen min-h-[660px] flex items-end overflow-hidden bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2400&q=85"
          alt="Lyst og varmt salong-interiør hos Birgits Salong i Stokmarknes"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/30 to-stone-950/50" />
        <div className="relative max-w-7xl mx-auto px-6 pb-28 text-stone-50 w-full animate-fade-up">
          <p className="text-xs uppercase tracking-[0.5em] text-stone-300 mb-8">— Markedsgata, Stokmarknes —</p>
          <h1 className="font-display font-light mb-8 max-w-4xl" style={{ fontSize: "clamp(3rem, 7vw, 6.5rem)", letterSpacing: "-0.02em", lineHeight: 0.98 }}>
            Birgit har klippet hår<br />
            <em className="italic">på Stokmarknes siden 1995.</em>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-xl mb-10 leading-relaxed">
            Klipp, farge, negler og solarium — alt under ett tak i Markedsgata.
            Personlig service og 30 års erfaring bak stolen.
          </p>
          <a
            href="tel:+4776151132"
            className="inline-block px-10 py-4 bg-stone-50 text-stone-900 hover:bg-stone-200 transition-colors uppercase tracking-[0.3em] text-xs font-medium"
          >
            Ring for time
          </a>
        </div>
      </section>

      {/* Velkomst */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-6">— Velkommen —</p>
          <h2 className="font-display font-light mb-10 leading-tight" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", letterSpacing: "-0.015em" }}>
            Salongen i sentrum av Hadsel.
          </h2>
          <div className="space-y-5 text-lg text-stone-700 leading-relaxed">
            <p>
              Birgits Salong har holdt til i Markedsgata på Stokmarknes siden 1995. Tre tiår,
              samme lokaler — og kunder som kommer tilbake år etter år.
            </p>
            <p>
              Vi er et lite team som tar oss tid til håndverket. Klipp, farge, negler og
              solarium. Vi gjør ikke alt nytt og hipt, men det vi gjør, gjør vi skikkelig.
            </p>
          </div>
        </div>
      </section>

      {/* Galleri */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              {
                src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
                alt: "Klipp og styling hos Birgits Salong i Stokmarknes",
              },
              {
                src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80",
                alt: "Negler og gellakk hos Birgits Salong",
              },
              {
                src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=80",
                alt: "Salong-interiør i Markedsgata på Stokmarknes",
              },
              {
                src: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
                alt: "Farge og behandling hos Birgits Salong",
              },
            ].map((img, i) => (
              <div key={i} className="aspect-[3/4] overflow-hidden bg-stone-200">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-24 px-6" style={{ backgroundColor: "#f1ebe1" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-4">— Tjenester —</p>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", letterSpacing: "-0.015em" }}>
              Tjenester &amp; priser
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            <div>
              <h3 className="font-medium mb-6 uppercase tracking-widest text-sm text-stone-800">Klipp</h3>
              <div className="space-y-4">
                {[
                  ["Dameklipp", "650"],
                  ["Herreklipp", "450"],
                  ["Barneklipp (under 12)", "350"],
                  ["Studentklipp", "490"],
                  ["Pensjonist", "490"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-400/30 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-6 uppercase tracking-widest text-sm text-stone-800">Farge</h3>
              <div className="space-y-4">
                {[
                  ["Fullfarge", "fra 1 290"],
                  ["Striper / balayage", "fra 1 690"],
                  ["Lugger", "fra 890"],
                  ["Toning", "490"],
                  ["MyDentity (Guy Tang)", "fra 1 490"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-400/30 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-6 uppercase tracking-widest text-sm text-stone-800">Negler</h3>
              <div className="space-y-4">
                {[
                  ["Gellakk", "490"],
                  ["Fyll", "590"],
                  ["Nye negler", "790"],
                  ["Fjerning", "190"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-400/30 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-6 uppercase tracking-widest text-sm text-stone-800">Solarium</h3>
              <div className="space-y-4">
                {[
                  ["10 minutter", "60"],
                  ["20 minutter", "110"],
                  ["30 minutter", "150"],
                  ["Klippekort 5x20 min", "490"],
                ].map(([item, p]) => (
                  <div key={item} className="flex items-baseline justify-between border-b border-stone-400/30 pb-3">
                    <span className="text-stone-800">{item}</span>
                    <span className="text-stone-900 font-medium">{p} kr</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center mt-16 text-sm text-stone-600 italic max-w-xl mx-auto">
            Prisene er veiledende. Vi gir deg alltid en pris-prat før vi starter, slik at du
            vet hva du betaler for.
          </p>
        </div>
      </section>

      {/* Stylistene */}
      <section id="team" className="py-32 px-6 bg-stone-900 text-stone-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-6">— Stylistene —</p>
          <h2 className="font-display font-light mb-10 leading-tight" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", letterSpacing: "-0.015em" }}>
            30 års håndverk, fortsatt med lyst.
          </h2>
          <div className="space-y-5 text-lg text-stone-300 leading-relaxed">
            <p>
              Birgit har drevet salongen siden 1995, og Sara har vært med på laget en god
              stund. Sammen tar de hånd om kundene som kommer tilbake år etter år —
              trofaste gjennom tre tiår i Stokmarknes.
            </p>
            <p>
              Vi vet at folk vil ha mer enn bare en klipp — de vil ha en time som funker for
              dem, en pris som er rett, og en samtale som er hyggelig. Det er det vi leverer
              hver dag.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-20 text-left max-w-2xl mx-auto">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Klipp &amp; farge</p>
              <p className="text-sm text-stone-300 leading-relaxed">
                Klassisk og moderne, dame og herre. Vi tilpasser etter ditt hår.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Negler</p>
              <p className="text-sm text-stone-300 leading-relaxed">
                Gellakk, fyll, nye negler. Vi tar tid til detaljene.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Solarium</p>
              <p className="text-sm text-stone-300 leading-relaxed">
                Drop-in eller klippekort. God pris, ren maskin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Merker */}
      <section className="py-20 px-6 border-t border-stone-300/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-8">— Vi jobber med —</p>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-stone-600">
            <span className="font-display italic text-3xl">Joico</span>
            <span className="font-display italic text-3xl">KMS</span>
            <span className="font-display italic text-3xl">MyDentity</span>
          </div>
          <p className="text-sm text-stone-500 mt-8 max-w-xl mx-auto italic">
            Premium-merker vi har valgt fordi vi selv bruker dem bak stolen — og fordi de tar
            håret ditt på alvor.
          </p>
        </div>
      </section>

      {/* Besøk */}
      <section id="besok" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-stone-500 mb-4">— Besøk oss —</p>
            <h2 className="font-display font-light" style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", letterSpacing: "-0.015em" }}>
              Du finner oss i Markedsgata.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Adresse</p>
              <p className="text-lg text-stone-900">Markedsgata 13</p>
              <p className="text-lg text-stone-900">8450 Stokmarknes</p>
              <a
                href="https://maps.google.com/?q=Markedsgata+13+Stokmarknes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest text-stone-600 hover:text-stone-900 transition-colors mt-2 inline-block underline underline-offset-4"
              >
                Vis i kart →
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Åpningstider</p>
              <p className="text-sm text-stone-700 leading-relaxed">
                Se Facebook for åpningstider<br />
                eller ring oss
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone-500 mb-3">Kontakt</p>
              <a
                href="tel:+4776151132"
                className="block text-lg text-stone-900 hover:text-stone-700 transition-colors"
              >
                76 15 11 32
              </a>
              <p className="text-sm text-stone-600 mt-2">Ring eller send oss melding.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-stone-900 text-stone-50 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-6">— Bestill time —</p>
          <h2 className="font-display font-light mb-8" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Vi sees i salongen.
          </h2>
          <p className="text-lg text-stone-300 mb-12 leading-relaxed">
            Ring oss for å avtale time. Du kan også stikke innom for en prat om hva du har lyst på.
          </p>
          <a
            href="tel:+4776151132"
            className="inline-block px-12 py-4 bg-stone-50 text-stone-900 hover:bg-stone-200 transition-colors uppercase tracking-[0.3em] text-xs font-medium"
          >
            Ring 76 15 11 32
          </a>
        </div>
      </section>

      <footer className="bg-stone-950 text-stone-400 py-10 px-6 text-center text-xs">
        <p className="uppercase tracking-widest mb-2">Birgits Salong</p>
        <p>Markedsgata 13 · 8450 Stokmarknes · 76 15 11 32</p>
        <p className="mt-3 opacity-60">© {new Date().getFullYear()} Birgits Salong</p>
      </footer>
    </div>
  );
}
