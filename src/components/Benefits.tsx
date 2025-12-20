import { Clock, MessageSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Problem-first storytelling - reframe services as problems solved
const problems = [
  {
    problem: 'Too much repetitive work',
    icon: Clock,
    color: 'from-blue-500 to-blue-600',
    solution: 'AI Workflow Automation',
    description: 'Reduce repetitive work using simple AI systems.',
    examples: [
      'Draft client follow-ups automatically',
      'Summarize emails, notes, or meetings',
      'Create reminders and admin workflows',
    ],
    outcome: 'Less manual work, fewer dropped tasks.',
  },
  {
    problem: 'Content creation feels overwhelming',
    icon: MessageSquare,
    color: 'from-purple-500 to-purple-600',
    solution: 'AI Content & Communication Systems',
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
    problem: 'Not sure what\'s working',
    icon: TrendingUp,
    color: 'from-accent-500 to-accent-600',
    solution: 'Monthly AI Insights & Optimization',
    description: 'Clear direction instead of guessing.',
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
  const [visibleIndex, setVisibleIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = Array.from(entry.target.querySelectorAll('.problem-card'))
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('opacity-100', 'translate-y-0')
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-navy-50/20 to-white relative overflow-hidden" ref={sectionRef}>
      <div className="noise-layer clarity" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced headline */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-6">
              <span className="text-sm font-semibold text-accent-900">What We Actually Do</span>
            </div>
            <h2 className="text-headline text-navy-900 mb-6">
              Problems We Solve
            </h2>
            <p className="text-subhead max-w-3xl mx-auto text-navy-600">
              Not features. Not tools. Just clarity on what's actually bothering you.
            </p>
          </div>

          <div className="space-y-12">
            {problems.map((item, index) => {
              const Icon = item.icon
              
              return (
                <div
                  key={index}
                  className="problem-card opacity-0 translate-y-12 transition-all duration-1000 ease-out"
                >
                  {/* Problem statement with gradient icon */}
                  <div className="mb-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-2">Problem:</p>
                        <h3 className="text-3xl font-bold text-navy-900 mb-3">{item.problem}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Premium solution card */}
                  <div className="card-premium p-10 ml-28 relative overflow-hidden">
                    {/* Decorative gradient */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-3xl`} />
                    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <p className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-3">Solution:</p>
                        <h4 className="text-2xl font-bold text-navy-900 mb-3">{item.solution}</h4>
                        <p className="text-lg text-navy-700 leading-relaxed">{item.description}</p>
                      </div>
                      
                      {/* Examples or monthly includes */}
                      {item.examples && (
                        <div className="mt-8 pt-8 border-t border-navy-100">
                          <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-4">Examples:</p>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {item.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-base text-navy-700">
                                <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                                </div>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {item.monthlyIncludes && (
                        <div className="mt-8 pt-8 border-t border-navy-100">
                          <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-4">Each month you receive:</p>
                          <ul className="grid md:grid-cols-2 gap-3">
                            {item.monthlyIncludes.map((include, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-base text-navy-700">
                                <div className={`w-6 h-6 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                  <span className="text-white text-xs font-bold">{idx + 1}</span>
                                </div>
                                <span>{include}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {/* Outcome - emphasized with gradient */}
                      <div className="mt-8 pt-8 border-t-2 border-accent-200 bg-gradient-to-r from-accent-50/50 to-transparent -mx-10 px-10 py-6 rounded-b-2xl">
                        <p className="text-base font-bold text-navy-900">
                          Outcome: <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-extrabold`}>{item.outcome}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          
          {/* CTA */}
          <div className="mt-20 text-center">
            <button
              onClick={scrollToContact}
              className="btn-primary inline-flex items-center gap-3 group"
            >
              <span>Get Your Free AI Opportunity Review</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
