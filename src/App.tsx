import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import MonthlyInsights from './components/MonthlyInsights'
import UseCases from './components/UseCases'
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
      <Navigation />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Services />
        <MonthlyInsights />
        <UseCases />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {showBackToTop && <BackToTop />}
    </div>
  )
}

export default App

