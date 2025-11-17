import Reveal from "../components/Reveal";

export default function SONARX() {
  const modules = [
    {
      name: 'EU-Grade Telemetry Mesh',
      copy: 'Agentless and agent-based telemetry routed through EU-only control planes.'
    },
    {
      name: 'AI-NDR (EU-AI Act Ready)',
      copy: 'Transparent model governance, auditable detections, human-in-the-loop response.'
    },
    {
      name: 'Identity Warfare',
      copy: 'Continuous verification, credential canaries, and anti-impersonation shields.'
    },
  ]

  return (
    <section id="sonarx" className="relative min-h-[70vh] bg-[#06080E] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">SONAR-X Program</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-3xl text-gray-300">
            An EU-sovereign cyber defense stack delivering continuous monitoring, AI-driven network detection,
            identity warfare countermeasures, and OT/ICS resilience. Built for NIS2 and DORA-aligned operations.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <Reveal key={m.name} delay={0.05 * i}>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-[10px] uppercase tracking-widest text-cyan-300">Module</div>
                <h3 className="mt-1 font-semibold">{m.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{m.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
