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
    <section id="how-it-works" className="section-padding bg-white relative">
      <div className="container-custom">
        {/* Asymmetric headline */}
        <div className="asymmetric-right mb-16 max-w-3xl">
          <h2 className="text-headline text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-subhead">
            A simple, practical process: AI Foundations (one-time) → AI Operations (monthly).
          </p>
        </div>

        {/* Steps - clean, not decorative */}
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="fade-in-slow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center mb-5">
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
        
        {/* Important reassurance - not decorative */}
        <div className="max-w-2xl mx-auto">
          <div className="card-focused p-6 bg-navy-50/50">
            <p className="text-base text-navy-700 font-medium text-center">
              No long contracts. No confusing tools. Clear communication at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
