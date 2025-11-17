import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#04060A]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#04060A] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
        <div className="text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-cyan-300">
            <span>Clearance: Level Omega-EU</span>
            <span className="text-gray-400">// Eyes-Only</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.9 }} className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-100">
            SONAR-X // EU SOVEREIGN CYBER DEFENSE SYSTEM
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.9 }} className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            The First Pan-European SOC Under Full EU Sovereignty
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#deployment" className="group inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition">
              Deploy SONAR-X
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-cyan-400/50 text-cyan-300 hover:bg-white/5 transition">
              Request EU Threat Assessment
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
