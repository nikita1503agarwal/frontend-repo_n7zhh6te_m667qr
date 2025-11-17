import { Menu, Shield } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', to: '/' },
    { name: 'SONAR-X', to: '/sonarx' },
    { name: 'EU Sovereign SOC', to: '/soc' },
    { name: 'Praetorian Cyber Garde', to: '/praetorian' },
    { name: 'Architecture', to: '/architecture' },
    { name: 'Contact', to: '/contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent backdrop-blur"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded grid place-items-center bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600/60 shadow-inner">
              <Shield className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="leading-tight">
              <p className="text-xs uppercase tracking-widest text-cyan-300">VisionCyberX</p>
              <p className="text-[10px] text-gray-300">EU CYBER COMMAND // BRUSSELS HQ</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                className={({ isActive }) => `text-sm transition-colors ${isActive ? 'text-cyan-300' : 'text-gray-200 hover:text-cyan-300'}`}
              >
                {name}
              </NavLink>
            ))}
          </nav>

          <button className="md:hidden text-gray-200" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="mt-3 md:hidden grid gap-2 border-t border-white/10 pt-3">
            {links.map(({ name, to }) => (
              <NavLink
                key={name}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `flex items-center gap-2 ${isActive ? 'text-cyan-300' : 'text-gray-200 hover:text-cyan-300'}`}
              >
                {name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
