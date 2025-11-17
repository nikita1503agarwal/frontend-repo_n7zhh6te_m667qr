import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './pages/Layout'
import Home from './pages/Home'
import SONARX from './pages/SONARX'
import EUSOC from './pages/EUSOC'
import Architecture from './pages/Architecture'
import Praetorian from './pages/Praetorian'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="/sonarx" element={<SONARX />} />
          <Route path="/soc" element={<EUSOC />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/praetorian" element={<Praetorian />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
