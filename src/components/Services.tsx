import { Check, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

// Pricing as depth of partnership, not tiers
const partnerships = [
  {
    level: 'Foundations',
    depth: 'One-time setup',
    price: '$750',
    description: 'Focused setup (1–2 workflows)',
    relationship: 'We identify where AI fits and set it up properly.',
    icon: Sparkles,
    color: 'from-blue-500 to-blue-600',
    includes: [
      'Business workflow review',
      'Identification of 3–5 AI opportunities',
      'Setup of 1 internal workflow',
      'Setup of 1 external workflow',
      'Simple documentation',
      'Optional training session',
    ],
  },
  {
    level: 'Foundations Plus',
    depth: 'Broader setup',
    price: '$1,400',
    description: 'Broader setup (3–5 workflows + first insight report)',
    relationship: 'More comprehensive setup with ongoing thinking included.',
    icon: Zap,
    color: 'from-accent-500 to-accent-600',
    includes: [
      'Everything in Foundations',
      'Setup of 3–5 AI workflows',
      'First monthly insight report',
      'Extended documentation',
      'Priority support during setup',
    ],
    popular: true,
  },
]

const operations = [
  {
    level: 'Core',
    depth: 'Essential partnership',
    price: '$99',
    period: '/month',
    improvements: '2 improvements per month',
    relationship: 'Regular check-ins and steady improvements.',
    icon: Sparkles,
    color: 'from-green-500 to-green-600',
    includes: [
      'Monthly AI check-in',
      '2 AI improvements per month',
      'Monthly insights summary',
      'Email support',
    ],
    bestFor: 'Solo owners, very small teams',
  },
  {
    level: 'Growth',
    depth: 'Active partnership',
    price: '$149',
    period: '/month',
    improvements: '4 improvements per month',
    relationship: 'More hands-on support as you grow.',
    icon: TrendingUp,
    color: 'from-accent-500 to-accent-600',
    includes: [
      'Everything in Core',
      '4 AI improvements per month',
      'Content or communication support',
      'Priority response',
    ],
    bestFor: 'Growing local businesses',
    popular: true,
  },
  {
    level: 'Partner',
    depth: 'Deep partnership',
    price: '$249',
    period: '/month',
    improvements: '8 improvements per month',
    relationship: 'Ongoing optimization and strategic thinking.',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    includes: [
      'Everything in Growth',
      '8 AI improvements per month',
      'Custom workflows',
      'Ongoing optimization',
    ],
    bestFor: 'Businesses wanting ongoing optimization',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.pricing-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100', 'translate-y-0', 'scale-100')
              }, index * 100)
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
    <section id="pricing" className="section-padding bg-gradient-to-br from-navy-50/40 via-white to-accent-50/20 relative overflow-hidden" ref={sectionRef}>
      <div className="noise-layer clarity" />
      
      <div className="container-custom relative z-10">
        {/* Enhanced headline */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-6">
            <span className="text-sm font-semibold text-accent-900">Investment & Partnership</span>
          </div>
          <h2 className="text-headline text-navy-900 mb-6">
            Depth of Partnership
          </h2>
          <p className="text-subhead max-w-3xl mx-auto text-navy-600">
            Not tiers. Not packages. Just how deeply we work together.
          </p>
        </div>

        {/* AI Foundations - One-time */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-3">AI Foundations</h3>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">One-time setup. We show you where AI fits and set it up properly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnerships.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <div
                  key={index}
                  className={`pricing-card opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out card-premium p-10 relative overflow-hidden ${
                    pkg.popular ? 'border-2 border-accent-300 shadow-2xl' : ''
                  }`}
                >
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-6 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                      <span className="text-xs font-bold uppercase tracking-wider">Most Popular</span>
                    </div>
                  )}
                  
                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${pkg.color} opacity-10 rounded-full blur-3xl`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center shadow-xl mb-6`}>
                      <Icon className="text-white" size={32} />
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm font-bold text-accent-600 uppercase tracking-wider mb-2">{pkg.depth}</div>
                      <h4 className="text-3xl font-bold text-navy-900 mb-4">{pkg.level}</h4>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-5xl font-extrabold text-navy-900">{pkg.price}</span>
                        <span className="text-lg text-navy-600 font-medium">one-time</span>
                      </div>
                      <p className="text-base text-navy-700 mb-3 font-medium">{pkg.description}</p>
                      <p className="text-sm text-navy-600 italic">{pkg.relationship}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 bg-gradient-to-br ${pkg.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                            <Check className="text-white" size={14} />
                          </div>
                          <span className="text-base text-navy-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      onClick={scrollToContact} 
                      className={`btn-primary w-full ${pkg.popular ? 'glow-accent-hover' : ''}`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* AI Operations - Monthly */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy-900 mb-3">AI Operations</h3>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto mb-8">Monthly support. Predictable cost, predictable output.</p>
            
            {/* What is an improvement - enhanced */}
            <div className="card-premium p-8 max-w-3xl mx-auto bg-gradient-to-br from-white to-accent-50/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-navy-900 mb-3">What is an "AI improvement"?</h4>
                  <p className="text-base text-navy-700 mb-3">An improvement can include:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-navy-700">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Updating or refining an AI workflow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Generating or improving content</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Adjusting prompts or automations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-600 mt-1">•</span>
                      <span>Creating summaries, reports, or recommendations</span>
                    </li>
                  </ul>
                  <p className="text-xs text-navy-600 italic mt-4 pt-4 border-t border-navy-100">
                    Large projects are scoped separately.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {operations.map((plan, index) => {
              const Icon = plan.icon
              return (
                <div
                  key={index}
                  className={`pricing-card opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out card-premium p-8 relative overflow-hidden ${
                    plan.popular ? 'border-2 border-accent-300 shadow-2xl md:scale-105' : ''
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-5 py-2 rounded-bl-xl rounded-tr-xl shadow-lg">
                      <span className="text-xs font-bold uppercase tracking-wider">Popular</span>
                    </div>
                  )}
                  
                  {/* Decorative gradient */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${plan.color} opacity-10 rounded-full blur-3xl`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center shadow-lg mb-6`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-2">{plan.depth}</div>
                      <h4 className="text-2xl font-bold text-navy-900 mb-3">{plan.level}</h4>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-4xl font-extrabold text-navy-900">{plan.price}</span>
                        <span className="text-base text-navy-600 font-medium">{plan.period}</span>
                      </div>
                      <div className={`bg-gradient-to-r ${plan.color} bg-opacity-10 rounded-xl px-4 py-2.5 mb-4 border border-accent-200/50`}>
                        <span className="text-sm font-bold text-navy-900">{plan.improvements}</span>
                      </div>
                      <p className="text-sm text-navy-600 italic">{plan.relationship}</p>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {plan.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md`}>
                            <Check className="text-white" size={12} />
                          </div>
                          <span className="text-sm text-navy-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mb-6 pt-4 border-t border-navy-100">
                      <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-1">Best for:</p>
                      <p className="text-sm text-navy-700 font-medium">{plan.bestFor}</p>
                    </div>
                    
                    <button
                      onClick={scrollToContact}
                      className={`w-full ${plan.popular ? 'btn-primary glow-accent-hover' : 'btn-secondary'}`}
                    >
                      Get Started
                    </button>
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
