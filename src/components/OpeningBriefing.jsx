export default function OpeningBriefing() {
  return (
    <section className="relative bg-[#080B12] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-6">
          <div className="aspect-video rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900 to-black relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_40%)]" />
            <div className="absolute inset-0 grid place-items-center text-sm text-gray-400">
              EU Command Room Visual
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">EU Cyber Defense Mandate</h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            SONAR-X is the backbone of EU cyber defense. VisionCyberX operates as the EU Sovereign Cyber Command.
            De Praetoriaanse Cyber Garde vormt de elitecohort (LEVEL V) binnen onze verdediging.
          </p>

          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            {[
              'PRAETORIAN WATCH ACTIVE',
              'EU SOVEREIGN DATA ZONE',
              'DIRECTIVE: CRITICAL INFRASTRUCTURE PROTECTION',
            ].map((label) => (
              <div key={label} className="text-[11px] uppercase tracking-widest text-cyan-300/90 border border-cyan-500/30 bg-cyan-500/5 rounded px-3 py-2">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
