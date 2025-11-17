import { useState } from 'react'
import Reveal from '../components/Reveal'

function emailIsEU(value){
  if(!value) return false
  const trimmed = value.trim().toLowerCase()
  const basic = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
  if(!basic) return false
  // Simple EU domain heuristic: allow common EU ccTLDs and .eu; not authoritative
  const euTlds = ['.eu','.be','.nl','.de','.fr','.it','.es','.pt','.ie','.pl','.cz','.sk','.at','.se','.fi','.dk','.ee','.lv','.lt','.ro','.bg','.hu','.si','.hr','.gr','\.europa\.eu']
  return euTlds.some(t => new RegExp(`${t}$`).test(trimmed.split('@')[1]))
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', org: '', email: '', message: '', honeypot: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function validate(){
    const next = {}
    if(!form.name.trim()) next.name = 'Required'
    if(!form.org.trim()) next.org = 'Required'
    if(!emailIsEU(form.email)) next.email = 'EU email required (.eu or EU member-state TLD)'
    if(form.message.trim().length < 20) next.message = 'Please provide at least 20 characters'
    if(form.honeypot) next.honeypot = 'Spam detected'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e){
    e.preventDefault()
    if(!validate()) return
    try{
      setStatus('sending')
      // Placeholder: simulate secure submission
      await new Promise(res => setTimeout(res, 900))
      setStatus('success')
      setForm({ name: '', org: '', email: '', message: '', honeypot: '' })
      setErrors({})
    }catch(err){
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative min-h-[70vh] bg-black text-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact EU Command</h1>
        </Reveal>
        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {/* Honeypot field for spam bots */}
          <input name="honeypot" value={form.honeypot} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="flex flex-col">
            <input name="name" value={form.name} onChange={handleChange} className={`bg-white/5 border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50 ${errors.name ? 'border-red-500/60' : 'border-white/10'}`} placeholder="Full Name" />
            {errors.name && <span className="mt-1 text-xs text-red-300">{errors.name}</span>}
          </div>

          <div className="flex flex-col">
            <input name="org" value={form.org} onChange={handleChange} className={`bg-white/5 border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50 ${errors.org ? 'border-red-500/60' : 'border-white/10'}`} placeholder="Organization" />
            {errors.org && <span className="mt-1 text-xs text-red-300">{errors.org}</span>}
          </div>

          <div className="md:col-span-2 flex flex-col">
            <input name="email" type="email" value={form.email} onChange={handleChange} className={`bg-white/5 border rounded px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/50 ${errors.email ? 'border-red-500/60' : 'border-white/10'}`} placeholder="EU Email" />
            {errors.email && <span className="mt-1 text-xs text-red-300">{errors.email}</span>}
          </div>

          <div className="md:col-span-2 flex flex-col">
            <textarea name="message" value={form.message} onChange={handleChange} className={`bg-white/5 border rounded px-4 py-3 h-32 outline-none focus:ring-2 focus:ring-cyan-400/50 ${errors.message ? 'border-red-500/60' : 'border-white/10'}`} placeholder="Mission Brief / Request"></textarea>
            {errors.message && <span className="mt-1 text-xs text-red-300">{errors.message}</span>}
          </div>

          <button disabled={status==='sending'} className="md:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-md bg-cyan-500/90 hover:bg-cyan-400 disabled:opacity-60 text-black font-semibold shadow-[0_0_20px_rgba(34,211,238,0.35)] transition">
            {status==='sending' ? 'Transmitting…' : status==='success' ? 'Received. Officer will respond.' : 'Submit Secure Request'}
          </button>
        </form>
      </div>
    </section>
  )
}
