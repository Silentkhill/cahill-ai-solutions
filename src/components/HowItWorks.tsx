import { Search, Wrench, BarChart3 } from 'lucide-react'

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'Discover',
    description: 'We review your business workflow, goals, and pain points.',
  },
  {
    number: '2',
    icon: Wrench,
    title: 'Implement',
    description: 'We set up practical AI systems tailored to your business.',
  },
  {
    number: '3',
    icon: BarChart3,
    title: 'Improve Monthly',
    description: 'We review results, refine systems, and suggest improvements.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-subtle">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            A simple, practical process: AI Foundations (one-time) → AI Operations (monthly).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent-600" size={28} />
                </div>
                <div className="text-sm font-semibold text-accent-600 mb-2">
                  Step {step.number}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-navy-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
        
        {/* Important line */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 border border-navy-100">
            <p className="text-base text-navy-700 font-medium">
              No long contracts. No confusing tools. Clear communication at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
