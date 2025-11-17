import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#04060A] text-white">
      <Navbar />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  )
}

export default App
