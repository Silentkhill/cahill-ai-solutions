import { Zap, MessageSquare, TrendingUp } from 'lucide-react'

const coreServices = [
  {
    icon: Zap,
    title: 'AI Workflow Automation',
    description: 'Reduce repetitive work using simple AI systems.',
    examples: [
      'Draft client follow-ups automatically',
      'Summarize emails, notes, or meetings',
      'Create reminders and admin workflows',
    ],
    outcome: 'Less manual work, fewer dropped tasks.',
  },
  {
    icon: MessageSquare,
    title: 'AI Content & Communication Systems',
    description: 'Create consistent content without extra effort.',
    examples: [
      'Social media post drafts',
      'Google review responses',
      'Email newsletters',
      'Website copy updates',
    ],
    outcome: 'Better online presence, less stress.',
  },
  {
    icon: TrendingUp,
    title: 'Monthly AI Insights & Optimization',
    description: 'This is your differentiator.',
    monthlyIncludes: [
      'What is working',
      'What could improve',
      'Simple recommendations for next steps',
      'Optional content or automation suggestions',
    ],
    outcome: 'Clear direction instead of guessing.',
  },
]

export default function Benefits() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            What We Actually Do
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Core services designed to save you time and reduce stress.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {coreServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="card-simple p-8"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-accent-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-base text-navy-700">{service.description}</p>
                  </div>
                </div>
                
                {/* Examples */}
                {service.examples && (
                  <div className="mb-6 ml-16">
                    <h4 className="text-sm font-semibold text-navy-900 mb-3">Examples:</h4>
                    <ul className="space-y-2">
                      {service.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-navy-700">
                          <span className="text-accent-600 mt-1">•</span>
                          <span className="text-sm">{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Monthly Includes */}
                {service.monthlyIncludes && (
                  <div className="mb-6 ml-16">
                    <h4 className="text-sm font-semibold text-navy-900 mb-3">Each month you receive:</h4>
                    <ul className="space-y-2">
                      {service.monthlyIncludes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-navy-700">
                          <span className="text-accent-600 mt-1">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Outcome */}
                <div className="ml-16 pt-4 border-t border-navy-100">
                  <p className="text-sm font-semibold text-navy-900">
                    Outcome: <span className="text-accent-600 font-normal">{service.outcome}</span>
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
