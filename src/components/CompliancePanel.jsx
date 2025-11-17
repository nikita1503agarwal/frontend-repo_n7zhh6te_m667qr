import { ShieldCheck, Landmark, ScrollText } from 'lucide-react'
import Reveal from './Reveal'

export default function CompliancePanel(){
  const items = [
    {
      title: 'NIS2 Alignment',
      icon: ShieldCheck,
      points: [
        '24/7 incident reporting pipeline',
        'Supply-chain risk management',
        'ICS/OT coverage for essential entities'
      ]
    },
    {
      title: 'DORA-Ready',
      icon: Landmark,
      points: [
        'Operational resilience testing',
        'Threat-led penetration (TLPT) paths',
        'Third-party ICT risk controls'
      ]
    },
    {
      title: 'Governance & Legal',
      icon: ScrollText,
      points: [
        'EU data residency + audit trails',
        'Model governance (EU AI Act aware)',
        'Crisis communication workflows'
      ]
    }
  ]

  return (
    <section className="relative bg-[#04070E] text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">EU Compliance Posture</h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, points }, idx) => (
            <Reveal key={title} delay={0.05 * idx}>
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-500/5 p-6">
                <div className="h-10 w-10 rounded-md bg-cyan-500/15 border border-cyan-400/20 grid place-items-center text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <ul className="mt-3 grid gap-2 text-sm text-gray-300">
                  {points.map(p => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
