import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'

import TermsConditions from './pages/TermConditions'

import BecomePartner from './pages/BecomePartner'
import SideButton from './components/SideButton'

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

   
      <Navbar />
         <SideButton/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
       
        <Route path="/becomepartner" element={<BecomePartner />} />
        

      </Routes>

      <Footer />
    </>
  )
}
<Route path="/becomepartner" element={<BecomePartner />} />
export default App
