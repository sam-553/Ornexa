import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import EmiCalculator from '../components/Emicalc'




const Home = () => {
    return (
        <div>
          
            <Hero />
            <Services />
            <EmiCalculator/>
            <Testimonials />
           
        </div>
    )
}

export default Home