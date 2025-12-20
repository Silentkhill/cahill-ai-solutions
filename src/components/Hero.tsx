import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Signal Through Noise - visual noise that resolves as you scroll */}
      <div 
        className={`noise-layer ${scrollProgress > 0.1 ? 'clarity' : ''}`}
        style={{ opacity: 0.4 - (scrollProgress * 0.3) }}
      />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Asymmetric headline - breaks standard center alignment */}
          <div className="asymmetric-left mb-12 fade-in-slow">
            <h1 className="text-display text-navy-900 mb-6">
              Practical AI Solutions
              <span className="block mt-2 text-gradient">for Local Small Businesses</span>
            </h1>
            
            <p className="text-subhead max-w-2xl mb-10">
              Save time, improve marketing, and make smarter decisions — without hype or technical overwhelm.
            </p>
            
            {/* Single, clear CTA */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={scrollToContact}
                className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2"
              >
                Get a Free AI Opportunity Review
                <ArrowRight size={20} />
              </button>
              <p className="text-sm text-navy-600 pt-2">
                No pressure. If it's not a fit, you'll still get 2–3 helpful suggestions.
              </p>
            </div>
          </div>
          
          {/* Trust indicators - subtle, not promotional */}
          <div className="asymmetric-right mt-16 pt-8 border-t border-navy-100">
            <p className="text-sm text-navy-600">
              <span className="font-medium text-navy-900">Serving Toronto & GTA</span> • No long-term contracts • 30-day notice
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
