import { Clock, MessageSquare, TrendingUp } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Problem-first storytelling - reframe services as problems solved
const problems = [
  {
    problem: 'Too much repetitive work',
    icon: Clock,
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
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reveal problems one by one as user scrolls
            const index = Array.from(entry.target.children).indexOf(entry.target)
            setVisibleIndex(index)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      Array.from(sectionRef.current.children).forEach((child) => {
        observer.observe(child)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Problem-first headline */}
          <div className="asymmetric-left mb-16">
            <h2 className="text-headline text-navy-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-subhead max-w-2xl">
              Not features. Not tools. Just clarity on what's actually bothering you.
            </p>
          </div>

          <div ref={sectionRef} className="space-y-16">
            {problems.map((item, index) => {
              const Icon = item.icon
              const isVisible = visibleIndex >= index
              
              return (
                <div
                  key={index}
                  className={`transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Problem statement - bold, human */}
                  <div className="mb-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="text-navy-700" size={24} />
                      </div>
                      <div>
                        <p className="text-lg font-medium text-navy-600 mb-1">Problem:</p>
                        <h3 className="text-2xl font-bold text-navy-900">{item.problem}</h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Solution - clear and direct */}
                  <div className="card-focused p-8 ml-16">
                    <div className="mb-4">
                      <p className="text-sm font-medium text-accent-600 mb-2">Solution:</p>
                      <h4 className="text-xl font-bold text-navy-900 mb-2">{item.solution}</h4>
                      <p className="text-base text-navy-700">{item.description}</p>
                    </div>
                    
                    {/* Examples or monthly includes */}
                    {item.examples && (
                      <div className="mt-6 pt-6 border-t border-navy-100">
                        <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-3">Examples:</p>
                        <ul className="space-y-2">
                          {item.examples.map((example, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-navy-700">
                              <span className="text-accent-600 mt-1">•</span>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.monthlyIncludes && (
                      <div className="mt-6 pt-6 border-t border-navy-100">
                        <p className="text-xs font-semibold text-navy-600 uppercase tracking-wide mb-3">Each month you receive:</p>
                        <ul className="space-y-2">
                          {item.monthlyIncludes.map((include, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-navy-700">
                              <span className="text-accent-600 mt-1">•</span>
                              <span>{include}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Outcome - emphasized */}
                    <div className="mt-6 pt-6 border-t-2 border-accent-100">
                      <p className="text-sm font-semibold text-navy-900">
                        Outcome: <span className="text-accent-600 font-normal">{item.outcome}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
