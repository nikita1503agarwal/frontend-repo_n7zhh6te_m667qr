import { Link, useLocation } from 'react-router-dom'

const items = [
  { label: 'Home', to: '/' },
  { label: 'SONAR-X', to: '/sonarx' },
  { label: 'EU Sovereign SOC', to: '/soc' },
  { label: 'Praetorian Cyber Garde', to: '/praetorian' },
  { label: 'Architecture', to: '/architecture' },
  { label: 'Contact', to: '/contact' },
]

export default function NavLinkSet({ className = '' }){
  const { pathname } = useLocation()
  return (
    <nav className={className}>
      <ul className="flex items-center gap-6">
        {items.map(({ label, to }) => {
          const active = pathname === to
          return (
            <li key={to}>
              <Link to={to} className={`text-sm transition-colors ${active ? 'text-cyan-300' : 'text-gray-200 hover:text-cyan-300'}`}>{label}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
