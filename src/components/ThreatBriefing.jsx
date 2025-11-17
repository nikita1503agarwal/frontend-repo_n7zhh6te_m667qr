export default function ThreatBriefing() {
  const sidePoints = [
    'Asymmetric cyberwar',
    'ICS sabotage attempts',
    'Identity warfare',
    'Cross-border digital incursions',
  ]

  const locations = [
    { name: 'Brussels (HQ)', x: '52%', y: '42%' },
    { name: 'Luxembourg (EU Secure Data Corridor)', x: '55%', y: '48%' },
    { name: 'Frankfurt (Critical Backbone)', x: '58%', y: '44%' },
    { name: 'Vienna', x: '64%', y: '48%' },
    { name: 'Paris', x: '46%', y: '45%' },
    { name: 'Tallin', x: '72%', y: '28%' },
  ]

  return (
    <section className="relative bg-[#06080E] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">THE EUROPEAN THREAT THEATER</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-white/10 bg-gradient-to-b from-[#0B1220] to-[#05070C]">
              <img src="https://images.unsplash.com/photo-1589262804704-c5aa9e6def89?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFVSUyME1hcHxlbnwwfDB8fHwxNzYzMzg2MTMxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="EU Map" className="absolute inset-0 w-full h-full object-cover opacity-30" />
              {locations.map((loc) => (
                <div key={loc.name} className="absolute" style={{ left: loc.x, top: loc.y }}>
                  <div className="relative">
                    <span className="absolute -inset-2 rounded-full bg-cyan-400/20 blur-md" />
                    <span className="block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['Red: state actors', 'Yellow: OT threats', 'Blue: identity attacks'].map((t) => (
                <span key={t} className="text-[11px] uppercase tracking-widest text-gray-300/90 border border-white/10 rounded px-3 py-1">{t}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            {sidePoints.map((p) => (
              <div key={p} className="border border-white/10 rounded px-4 py-3 bg-white/5 text-sm">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
