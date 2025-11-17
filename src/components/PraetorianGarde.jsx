export default function PraetorianGarde() {
  const points = [
    'Europa’s hoogste cyberdefensie-eenheid',
    'LEVEL V clearance',
    'Counter-intrusion deep ops',
    'Bescherming van EU-leiders, EU-instellingen en kritieke infrastructuur',
    'Digital successor to the Roman Praetorians',
    'Opererend vanuit VisionCyberX EU Command',
  ]

  return (
    <section id="praetorian" className="relative bg-[#080B12] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-5">
          <div className="aspect-square rounded-full border border-white/10 bg-gradient-to-br from-gray-900 to-black grid place-items-center">
            <div className="h-40 w-40 rounded-full border border-cyan-400/30 bg-cyan-500/10 grid place-items-center shadow-[0_0_30px_rgba(34,211,238,0.15)]">
              <div className="text-center text-cyan-300 text-sm uppercase tracking-widest">Praetorian Crest</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">PRAETORIAANSE CYBER GARDE</h2>
          <ul className="mt-4 grid gap-3">
            {points.map((p) => (
              <li key={p} className="text-sm text-gray-300 bg-white/5 border border-white/10 rounded px-4 py-2">{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
