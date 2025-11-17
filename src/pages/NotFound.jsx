import { Link } from 'react-router-dom'

export default function NotFound(){
  return (
    <section className="min-h-[70vh] grid place-items-center bg-[#06080E] text-gray-100 px-6">
      <div className="text-center">
        <h1 className="text-6xl font-black tracking-tight">404</h1>
        <p className="mt-2 text-gray-300">This route is classified or does not exist.</p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 rounded-md bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold">Return to Command</Link>
      </div>
    </section>
  )
}
