import { Zap, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'

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
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
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
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
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
    color: 'from-accent-500 to-accent-600',
    bgColor: 'bg-accent-50',
  },
]

export default function Benefits() {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-96 h-96 bg-accent-100/20 absolute -top-48 -right-48"></div>
        <div className="blob-bg w-80 h-80 bg-navy-100/10 absolute bottom-20 -left-40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-6">
            What We Actually Do
          </h2>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
            Core services designed to save you time and reduce stress.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto">
          {coreServices.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group card-creative ${service.bgColor} p-10 stagger-animation`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Header */}
                <div className="flex items-start gap-6 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 flex-shrink-0`}>
                    <Icon className="text-white" size={36} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-black text-navy-900 mb-2 group-hover:text-gradient transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-lg text-navy-700 font-medium">{service.description}</p>
                  </div>
                </div>
                
                {/* Examples */}
                {service.examples && (
                  <div className="mb-6 ml-28">
                    <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wide">Examples:</h4>
                    <ul className="space-y-2">
                      {service.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-navy-700">
                          <span className="text-accent-600 font-bold mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Monthly Includes */}
                {service.monthlyIncludes && (
                  <div className="mb-6 ml-28">
                    <h4 className="text-sm font-bold text-navy-900 mb-3 uppercase tracking-wide">Each month you receive:</h4>
                    <ul className="space-y-2">
                      {service.monthlyIncludes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-navy-700">
                          <span className="text-accent-600 font-bold mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Outcome */}
                <div className="ml-28 pt-4 border-t-2 border-navy-100">
                  <p className="text-base font-bold text-navy-900">
                    Outcome: <span className="text-accent-600">{service.outcome}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Creative CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-bold hover:bg-navy-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
