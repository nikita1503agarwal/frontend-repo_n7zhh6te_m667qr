export default function OperationalTiers() {
  const levels = [
    { lvl: 'EU-Level I', name: 'MONITOR', badge: 'Blue Badge', desc: 'Baseline protection' },
    { lvl: 'EU-Level II', name: 'DETECT', badge: 'Silver Badge', desc: 'Active threat detection' },
    { lvl: 'EU-Level III', name: 'DEFEND', badge: 'Gold Badge', desc: 'Counter-intrusion & response' },
    { lvl: 'EU-Level IV', name: 'SOVEREIGN', badge: 'Black Badge, glowing blue', desc: 'Praetorian Protocols – highest EU cyber authority' },
  ]

  return (
    <section className="relative bg-[#06080E] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">EU OPERATIONAL TIERS</h2>
        <div className="relative border-l-2 border-cyan-500/40 ml-2">
          {levels.map((l, idx) => (
            <div key={l.lvl} className="relative pl-6 pb-10">
              <div className="absolute -left-2 top-1.5 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
              <div className="bg-white/5 border border-white/10 rounded p-4">
                <div className="text-[10px] uppercase tracking-widest text-cyan-300">{l.lvl}</div>
                <div className="mt-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{l.name}</h3>
                  <span className="text-xs text-gray-300">{l.badge}</span>
                </div>
                <p className="mt-1 text-sm text-gray-300">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-[11px] uppercase tracking-widest text-gray-400">FOR EU-AUTHORIZED ENTITIES ONLY // LEVEL OMEGA-EU</div>
      </div>
    </section>
  )
}
