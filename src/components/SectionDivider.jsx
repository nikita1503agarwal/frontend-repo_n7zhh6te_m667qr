export default function SectionDivider({ label = "// SECTION" }){
  return (
    <div className="relative my-12">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-300 bg-black/40 px-3 py-1 rounded border border-cyan-400/30">{label}</span>
      </div>
    </div>
  )
}
