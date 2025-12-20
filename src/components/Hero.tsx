import { Calendar, ArrowRight, Sparkles, Zap, Clock, Target, TrendingUp } from 'lucide-react'
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

  const scrollToServices = () => {
    const element = document.querySelector('#services')
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
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-navy-900 mb-8 leading-[1.1] tracking-tight">
            <span className="block mb-2">
              Practical <span className="text-gradient">AI Solutions</span>
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              for Local Small Businesses
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl sm:text-3xl text-navy-700 leading-relaxed mb-12 font-light max-w-4xl">
            Save time, improve marketing, and make smarter decisions — without hype or technical overwhelm.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-12">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-6 bg-gradient-to-r from-accent-600 via-accent-500 to-accent-600 bg-[length:200%_100%] text-white rounded-2xl font-bold text-lg flex items-center gap-3 shadow-2xl hover:shadow-accent-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300 overflow-hidden shine tilt-on-hover mb-4"
              style={{ animation: 'gradientShift 3s ease infinite' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Zap size={24} className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Get a Free AI Opportunity Review</span>
              <ArrowRight size={22} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            {/* Secondary CTA */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollToServices}
                className="text-lg text-navy-700 hover:text-accent-600 font-medium underline-creative transition-colors"
              >
                See What We Do
              </button>
              <ArrowRight size={18} className="text-navy-600" />
            </div>
          </div>
          
          {/* 3 Value Bullets */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-navy-100">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">Reduce admin work</h3>
                <p className="text-sm text-navy-700">Reduce admin work and manual tasks</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-navy-100">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="text-purple-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">Create better content</h3>
                <p className="text-sm text-navy-700">Create better content in less time</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-navy-100">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-navy-900 mb-1">Get monthly insights</h3>
                <p className="text-sm text-navy-700">Get monthly AI insights you can actually use</p>
              </div>
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
