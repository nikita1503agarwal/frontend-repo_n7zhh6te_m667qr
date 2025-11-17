import { Shield, Brain, BadgeCheck, Factory } from 'lucide-react'

export default function Architecture() {
  const cards = [
    {
      title: 'EDR Recon',
      label: 'EU-Compliant Endpoint Reconnaissance',
      icon: Shield,
    },
    {
      title: 'AI-NDR Counter-Intel',
      label: 'EU-AI Act Compliant Network Detection & Response',
      icon: Brain,
    },
    {
      title: 'Identity Warfare Module',
      label: 'Aligned with EU Digital Identity Framework',
      icon: BadgeCheck,
    },
    {
      title: 'OT/ICS Defense Grid',
      label: 'Protecting Europe’s Industrial Base',
      icon: Factory,
    },
  ]

  return (
    <section id="architecture" className="relative bg-[#080B12] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">SONAR-X ARCHITECTURE (EU-GRADE)</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ title, label, icon: Icon }) => (
            <div key={title} className="relative rounded-lg border border-white/10 bg-white/5 p-5 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
              <div className="relative">
                <div className="h-10 w-10 rounded-md bg-cyan-500/15 border border-cyan-400/20 grid place-items-center text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-300">{label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 relative rounded-lg overflow-hidden border border-white/10">
          <img src="https://images.unsplash.com/photo-1761141535640-c78744c4f369?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFVSUyMFNPQyUyMENvbW1hbmQlMjBSb29tfGVufDB8MHx8fDE3NjMzODYxMzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="EU SOC Command Room" className="w-full h-64 object-cover opacity-60" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-cyan-300 bg-black/40 backdrop-blur px-4 py-2 rounded border border-cyan-400/30">
              EU-SOVEREIGN OPS // CONTINUOUS MONITORING ACTIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
