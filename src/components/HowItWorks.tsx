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
    <section id="how-it-works" className="section-padding bg-gradient-to-b from-navy-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            A simple, practical process designed for busy business owners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-600 text-white rounded-full mb-6 relative z-10">
                    <Icon size={28} />
                  </div>
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -z-0">
                    <span className="text-6xl font-bold text-navy-200 opacity-30">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

