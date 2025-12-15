import { Calendar, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy-50 via-white to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-navy-200 rounded-full text-sm text-navy-700 mb-6">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
            Serving Toronto & GTA small businesses
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            AI Setup & Monthly Support for Toronto Small Businesses
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-navy-700 mb-4 leading-relaxed max-w-3xl mx-auto">
            We set up practical AI tools, then provide monthly insights and improvements. Save time, improve marketing clarity, and make better decisions—without the overwhelm.
          </p>
          
          <p className="text-base sm:text-lg text-navy-600 mb-10 max-w-2xl mx-auto">
            Perfect for salons, cafés, fitness studios, and local service businesses in Toronto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-accent-300"
            >
              <Calendar size={20} className="group-hover:scale-110 transition-transform" />
              Book a Free 15-Minute Consult
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-accent-600 border-2 border-accent-600 rounded-lg hover:bg-accent-50 transition-all duration-200 font-semibold text-lg focus:outline-none focus:ring-4 focus:ring-accent-300"
            >
              Request Free AI Opportunity Review
            </button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-navy-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>30-day cancellation notice</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>2–3 helpful suggestions guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

