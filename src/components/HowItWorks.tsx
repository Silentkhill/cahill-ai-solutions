import { Search, Wrench, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'We Review Your Needs',
    description: 'We start with a free 15-minute conversation to understand your business, your goals, and where AI can help most.',
  },
  {
    number: '2',
    icon: Wrench,
    title: 'We Set It Up',
    description: 'We implement the right AI tools for your business, train your team, and make sure everything works smoothly.',
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'We Keep Improving',
    description: 'Each month, we review your results, share insights, and make small improvements that add up over time.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-white via-navy-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-navy-100/20 rounded-full blur-3xl"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-900 mb-5">
            How It Works
          </h2>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
            A simple, practical process designed for busy business owners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative group">
                <div className="text-center">
                  {/* Premium icon container */}
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-700 text-white rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon size={32} />
                    </div>
                    {/* Step number background */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 -z-10">
                      <span className="text-7xl font-black text-navy-100 opacity-40 group-hover:opacity-60 transition-opacity">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-accent-700 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed text-lg">
                    {step.description}
                  </p>
                  
                  {/* Connecting line (not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-accent-200 to-transparent transform translate-x-6"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

