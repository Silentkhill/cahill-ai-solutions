import { Calendar, ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-32 pb-24 md:pt-44 md:pb-32 relative overflow-hidden bg-gradient-to-br from-navy-50 via-white to-accent-50/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-navy-200/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent-100/10 to-navy-100/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(16, 42, 67, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 42, 67, 0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          {/* Premium trust badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-medium text-navy-700 mb-8 shadow-lg border border-white/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-600"></span>
            </span>
            Serving Toronto & GTA small businesses
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 mb-8 leading-[1.1] tracking-tight">
            <span className="block">AI Setup & Monthly Support</span>
            <span className="block mt-2 text-gradient">for Toronto Small Businesses</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-navy-700 mb-6 leading-relaxed max-w-4xl mx-auto font-light">
            We set up practical AI tools, then provide monthly insights and improvements.
          </p>
          
          <p className="text-lg sm:text-xl text-navy-600 mb-12 max-w-3xl mx-auto">
            Save time, improve marketing clarity, and make better decisions—without the overwhelm.
            <span className="block mt-2 text-base text-navy-500">Perfect for salons, cafés, fitness studios, and local service businesses.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
            <button
              onClick={scrollToContact}
              className="group relative px-10 py-5 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl font-semibold text-lg flex items-center gap-3 shadow-2xl hover:shadow-accent-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent-300 overflow-hidden shine"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <Calendar size={22} className="relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">Book a Free 15-Minute Consult</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={scrollToContact}
              className="px-10 py-5 bg-white text-accent-600 border-2 border-accent-600 rounded-xl hover:bg-accent-50 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-accent-300"
            >
              Request Free AI Opportunity Review
            </button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-navy-600">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-navy-100">
              <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">No long-term contracts</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-navy-100">
              <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">30-day cancellation notice</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-lg border border-navy-100">
              <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">2–3 helpful suggestions guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

