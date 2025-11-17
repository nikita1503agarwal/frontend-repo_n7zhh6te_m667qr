import { Menu, Shield, Network, Home, Layers, Map, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'SONAR-X', href: '#sonarx', icon: Shield },
    { name: 'EU Sovereign SOC', href: '#soc', icon: Network },
    { name: 'Praetorian Cyber Garde', href: '#praetorian', icon: Shield },
    { name: 'Architecture', href: '#architecture', icon: Layers },
    { name: 'Contact', href: '#contact', icon: Phone },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent backdrop-blur"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded grid place-items-center bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600/60 shadow-inner">
              <Shield className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-widest text-cyan-300">VisionCyberX</p>
              <p className="text-[10px] text-gray-300">EU CYBER COMMAND // BRUSSELS HQ</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ name, href }) => (
              <a key={name} href={href} className="text-sm text-gray-200 hover:text-cyan-300 transition-colors">{name}</a>
            ))}
          </nav>

          <button className="md:hidden text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-3 md:hidden grid gap-2 border-t border-white/10 pt-3">
            {links.map(({ name, href, icon: Icon }) => (
              <a key={name} href={href} className="flex items-center gap-2 text-gray-200 hover:text-cyan-300">
                <Icon className="h-4 w-4" /> {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
