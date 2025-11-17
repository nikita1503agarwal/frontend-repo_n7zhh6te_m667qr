export default function ValueProposition() {
  const cols = [
    {
      title: 'Sovereignty',
      items: ['No US cloud', 'No foreign data access', 'EU-only infrastructure', 'EU legal control'],
    },
    {
      title: 'Industry Protection',
      items: ['OT/ICS defense grid', 'Energy, transport, healthcare, finance', 'EU industrial backbone protection'],
    },
    {
      title: 'Strategic Dominance',
      items: ['Faster detection', 'EU-grade compliance', 'Full-spectrum cyber superiority'],
    },
  ]

  return (
    <section className="relative bg-[#06080E] text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">EU SOVEREIGNTY FIRST</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cols.map((c) => (
            <div key={c.title} className="bg-white/5 border border-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-gray-300">
                {c.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
