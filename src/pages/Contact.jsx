export default function Contact() {
  return (
    <section id="contact" className="relative min-h-[70vh] bg-black text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact EU Command</h1>
        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <input className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Full Name" />
          <input className="bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Organization" />
          <input className="md:col-span-2 bg-white/5 border border-white/10 rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50" type="email" placeholder="EU Email" />
          <textarea className="md:col-span-2 bg-white/5 border border-white/10 rounded px-4 py-3 h-32 outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Mission Brief / Request"></textarea>
          <button className="md:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition">Submit Secure Request</button>
        </form>
      </div>
    </section>
  )
}
