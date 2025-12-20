import { Search, Wrench, BarChart3, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Discover',
    description: 'We review your business workflow, goals, and pain points.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    number: '2',
    icon: Wrench,
    title: 'Implement',
    description: 'We set up practical AI systems tailored to your business.',
    color: 'from-accent-500 to-accent-600',
    bgColor: 'bg-accent-50',
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'Improve Monthly',
    description: 'We review results, refine systems, and suggest improvements.',
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
          <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-6">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative max-w-5xl mx-auto mb-12">
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
                    </div>
                    
                    <h3 className="text-3xl font-black text-navy-900 mb-5 group-hover:text-gradient transition-colors duration-300 relative z-10">
                      Step {step.number} — {step.title}
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
        
        {/* Important line */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block p-6 bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-navy-100 shadow-xl">
            <p className="text-lg text-navy-700 font-medium">
              No long contracts. No confusing tools. Clear communication at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
