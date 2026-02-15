import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'

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
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-6">
            <span className="type-caption font-semibold text-accent-900">Investment & Partnership</span>
          </div>
          <h2 className="type-h1 text-navy-900 mb-6">Depth of Partnership</h2>
          <p className="type-body measure-body mx-auto text-navy-600">
            Not tiers and not bloated packages—just how deeply we work together.
          </p>
        </div>

        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="type-h2 text-navy-900 mb-3">AI Foundations</h3>
            <p className="type-body measure-body mx-auto text-navy-700">One-time setup to identify where AI fits and implement it correctly.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnerships.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <article
                  key={index}
                  className={`pricing-card opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out card-premium p-8 relative ${pkg.popular ? 'border-2 border-accent-300 shadow-2xl' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-5 py-2 rounded-bl-xl rounded-tr-xl">
                      <span className="type-caption font-bold uppercase tracking-wider">Most Popular</span>
                    </div>
                  )}

                  <div className={`w-12 h-12 bg-gradient-to-br ${pkg.color} rounded-xl flex items-center justify-center shadow-lg mb-5`}>
                    <Icon className="text-white" size={22} />
                  </div>

                  <p className="type-caption font-bold text-accent-700 uppercase tracking-wider mb-2">{pkg.depth}</p>
                  <h3 className="type-h2 text-navy-900 mb-2">{pkg.level}</h3>
                  <p className="text-4xl font-extrabold text-navy-900 mb-3">{pkg.price} <span className="type-caption font-medium">one-time</span></p>
                  <p className="type-body text-navy-700 mb-2">{pkg.description}</p>
                  <p className="type-caption text-navy-600 italic mb-4">{pkg.relationship}</p>

                  <ul className="list-disc pl-5 space-y-1.5 type-caption text-navy-700 mb-6 measure-body">
                    {pkg.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <button onClick={scrollToContact} className={`btn-primary w-full inline-flex items-center justify-center gap-2 ${pkg.popular ? 'glow-accent-hover' : ''}`}>
                    Get Started
                    <ArrowRight size={18} />
                  </button>
                </article>
              )
            })}
          </div>
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="type-h2 text-navy-900 mb-3">AI Operations</h3>
            <p className="type-body measure-body mx-auto text-navy-700 mb-4">Monthly support with predictable cost and measurable output.</p>
            <p className="type-caption measure-body mx-auto text-navy-600">
              An “AI improvement” can include workflow refinements, content generation, prompt updates, and summary/report automation. Larger projects are scoped separately.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {operations.map((plan, index) => {
              const Icon = plan.icon
              return (
                <article
                  key={index}
                  className={`pricing-card opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out card-premium p-8 relative ${plan.popular ? 'border-2 border-accent-300 shadow-2xl md:scale-105' : ''}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-600 to-accent-700 text-white px-5 py-2 rounded-bl-xl rounded-tr-xl">
                      <span className="type-caption font-bold uppercase tracking-wider">Popular</span>
                    </div>
                  )}

                  <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center shadow-lg mb-5`}>
                    <Icon className="text-white" size={22} />
                  </div>

                  <p className="type-caption font-bold text-navy-600 uppercase tracking-wider mb-2">{plan.depth}</p>
                  <h3 className="type-h2 text-navy-900 mb-2">{plan.level}</h3>
                  <p className="text-4xl font-extrabold text-navy-900 mb-2">{plan.price}<span className="type-caption font-medium">{plan.period}</span></p>
                  <p className="type-caption font-semibold text-navy-900 mb-2">{plan.improvements}</p>
                  <p className="type-caption text-navy-600 italic mb-4">{plan.relationship}</p>

                  <ul className="list-disc pl-5 space-y-1.5 type-caption text-navy-700 mb-5 measure-body">
                    {plan.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <p className="type-caption text-navy-700 mb-5"><span className="font-semibold">Best for:</span> {plan.bestFor}</p>

                  <button
                    onClick={scrollToContact}
                    className={`w-full ${plan.popular ? 'btn-primary glow-accent-hover' : 'btn-secondary'}`}
                  >
                    Get Started
                  </button>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
