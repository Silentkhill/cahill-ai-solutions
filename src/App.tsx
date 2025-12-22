import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhoThisIsFor from './components/WhoThisIsFor'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import MonthlyInsights from './components/MonthlyInsights'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-300"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <WhoThisIsFor />
        <Benefits />
        <HowItWorks />
        <Services />
        <MonthlyInsights />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {showBackToTop && <BackToTop />}
      {/* ElevenLabs Voice Agent - Script loaded in index.html */}
    </div>
  )
}

export default App
