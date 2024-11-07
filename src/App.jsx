import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Workflow from './components/Workflow'
import Testimonials from './components/Testimonials'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'



const App = () => {
  return (
    <>
      <Navbar />
            <div className="max-w-7xl mx-auto pt-20 px-6">

      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Testimonials />
      <AboutUs />
        <Footer />
      </div>

    </>
  )
}

export default App
