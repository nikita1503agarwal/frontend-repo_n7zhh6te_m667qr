export default function FinalCTA() {
  return (
    <section id="contact" className="relative bg-black text-gray-100 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(34,211,238,0.15), transparent 50%)' }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-[11px] uppercase tracking-widest text-cyan-300">VISIONCYBERX // EU SOVEREIGN CYBER DEFENSE.</div>
        <h2 className="mt-4 text-3xl md:text-4xl font-extrabold">Stand up a Sovereign EU Defense Perimeter</h2>
        <p className="mt-3 text-gray-300">Deep black background with faint EU sonar rings.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#deployment" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition">Request Deployment Briefing</a>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-cyan-400/50 text-cyan-300 hover:bg-white/5 transition">Speak to EU Command Officer</a>
        </div>
        <div className="mt-10 text-xs text-gray-400 flex items-center justify-center gap-4">
          <a href="#privacy" className="hover:text-gray-200">Privacy</a>
          <a href="#legal" className="hover:text-gray-200">Legal</a>
          <a href="#notices" className="hover:text-gray-200">EU Security Notices</a>
          <span>© VisionCyberX</span>
        </div>
      </div>
    </section>
  )
}
