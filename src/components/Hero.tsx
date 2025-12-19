import { Calendar, ArrowRight, Sparkles, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-accent-50/20">
      {/* Creative animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Organic blob shapes */}
        <div 
          className="blob-bg w-[600px] h-[600px] bg-accent-300/30 absolute -top-40 -left-40"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="blob-bg w-[500px] h-[500px] bg-navy-200/20 absolute bottom-20 right-20 animate-float-reverse"
          style={{ 
            transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div className="blob-bg w-[400px] h-[400px] bg-accent-200/25 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
        
        {/* Creative grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 42, 67, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 42, 67, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Creative badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full text-sm font-semibold text-navy-700 mb-10 animate-fade-in-scale">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-600"></span>
            </span>
            <Sparkles size={16} className="text-accent-600" />
            <span>Toronto & GTA • Small Business Focus</span>
          </div>
          
          {/* Creative headline with mixed typography */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-navy-900 mb-8 leading-[0.95] tracking-tight">
            <span className="block mb-2">
              <span className="text-gradient">AI</span> That Actually
            </span>
            <span className="block">
              <span className="inline-block transform -rotate-2 hover:rotate-2 transition-transform duration-300">Works</span>
              {' '}for Your{' '}
              <span className="inline-block transform rotate-2 hover:-rotate-2 transition-transform duration-300 underline-creative">Business</span>
            </span>
          </h1>
          
          {/* Creative subheadline */}
          <div className="max-w-3xl mb-12 space-y-4">
            <p className="text-2xl sm:text-3xl md:text-4xl text-navy-700 leading-tight font-light">
              We set up practical AI tools, then keep improving them every month.
            </p>
            <p className="text-lg sm:text-xl text-navy-600 leading-relaxed">
              No hype. No overwhelm. Just tools that save you time and help you make better decisions.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-accent-100/50 rounded-full text-sm font-medium text-accent-900 border border-accent-200">
                Salons
              </span>
              <span className="px-4 py-2 bg-accent-100/50 rounded-full text-sm font-medium text-accent-900 border border-accent-200">
                Cafés
              </span>
              <span className="px-4 py-2 bg-accent-100/50 rounded-full text-sm font-medium text-accent-900 border border-accent-200">
                Fitness Studios
              </span>
              <span className="px-4 py-2 bg-accent-100/50 rounded-full text-sm font-medium text-accent-900 border border-accent-200">
                Local Services
              </span>
            </div>
          </div>
          
          {/* Creative CTA section */}
          <div className="flex flex-col sm:flex-row gap-5 mb-16">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-6 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 bg-[length:200%_100%] text-white rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-accent-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300 overflow-hidden shine tilt-on-hover"
              style={{ animation: 'gradientShift 3s ease infinite' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Zap size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Book Free 15-Min Consult</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-6 bg-white text-accent-600 border-3 border-accent-600 rounded-2xl hover:bg-accent-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300 tilt-on-hover"
            >
              Get Free AI Opportunity Review
            </button>
          </div>
          
          {/* Creative trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-bold text-navy-900">No Contracts</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-bold text-navy-900">30-Day Notice</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-3 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-navy-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-bold text-navy-900">2–3 Free Suggestions</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Creative scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-navy-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-accent-600 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
