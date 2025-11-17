export default function Footer(){
  return (
    <footer className="bg-black/60 border-t border-white/10 py-8 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>© VisionCyberX — EU Sovereign Cyber Defense</div>
        <nav className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-gray-200">Privacy</a>
          <a href="#legal" className="hover:text-gray-200">Legal</a>
          <a href="#notices" className="hover:text-gray-200">EU Security Notices</a>
        </nav>
      </div>
    </footer>
  )
}
