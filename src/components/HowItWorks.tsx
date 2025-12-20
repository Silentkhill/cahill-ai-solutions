import { Search, Wrench, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'We Review Your Needs',
    description: 'We start with a free 15-minute conversation to understand your business, your goals, and where AI can help most.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'AI Foundations Setup',
    description: 'We implement the right AI workflows for your business—identifying opportunities, setting up internal and external workflows, and providing training.',
    color: 'from-accent-500 to-accent-600',
    bgColor: 'bg-accent-50',
  },
  {
    number: '03',
    icon: BarChart3,
    title: 'AI Operations (Monthly)',
    description: 'Each month, we make predictable improvements, share insights, and continuously optimize how AI supports your work. No hourly billing—just consistent value.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-creative relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[800px] h-[800px] bg-accent-200/15 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-navy-100/10 absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-5xl sm:text-6xl font-black text-navy-900 block">How It</span>
            <span className="text-5xl sm:text-6xl font-black text-gradient block">Works</span>
          </div>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light mt-4">
            A simple, practical process: AI Foundations (one-time) → AI Operations (monthly).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Creative connecting line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-accent-200 to-purple-200 opacity-30"></div>
          
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={index} 
                className="relative group stagger-animation"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative">
                  {/* Creative card with tilt */}
                  <div className={`${step.bgColor} rounded-3xl p-10 card-creative tilt-on-hover relative overflow-hidden`}>
                    {/* Large number background */}
                    <div className="absolute top-4 right-4 opacity-5">
                      <span className="text-9xl font-black text-navy-900">{step.number}</span>
                    </div>
                    
                    {/* Icon container */}
                    <div className="relative mb-8">
                      <div className={`w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                        <Icon className="text-white relative z-10" size={40} />
                      </div>
                      {/* Floating decorative elements */}
                      <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${step.color} rounded-full blur-sm animate-pulse-creative`}></div>
                      <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br ${step.color} rounded-full blur-sm animate-pulse-creative`} style={{ animationDelay: '1s' }}></div>
                    </div>
                    
                    <h3 className="text-3xl font-black text-navy-900 mb-5 group-hover:text-gradient transition-colors duration-300 relative z-10">
                      {step.title}
                    </h3>
                    <p className="text-navy-700 leading-relaxed text-lg relative z-10">
                      {step.description}
                    </p>
                    
                    {/* Creative arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 z-20">
                        <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-accent-200 group-hover:border-accent-400 transition-colors">
                          <ArrowRight className="text-accent-600 group-hover:translate-x-1 transition-transform" size={20} />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white`}>
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Creative CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border-2 border-navy-100">
            <p className="text-xl font-bold text-navy-900 mb-4">
              Ready to get started?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl font-bold hover:from-accent-700 hover:to-accent-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Book Your Free Consult</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
