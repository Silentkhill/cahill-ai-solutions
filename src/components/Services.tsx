import { Check, ArrowRight } from 'lucide-react'

// Pricing as depth of partnership, not tiers
const partnerships = [
  {
    level: 'Foundations',
    depth: 'One-time setup',
    price: '$750',
    description: 'Focused setup (1–2 workflows)',
    relationship: 'We identify where AI fits and set it up properly.',
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
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="pricing" className="section-padding bg-subtle relative">
      <div className="container-custom">
        {/* Headline - partnership focused */}
        <div className="asymmetric-right mb-16 max-w-3xl">
          <h2 className="text-headline text-navy-900 mb-4">
            Depth of Partnership
          </h2>
          <p className="text-subhead">
            Not tiers. Not packages. Just how deeply we work together.
          </p>
        </div>

        {/* AI Foundations - One-time */}
        <div className="mb-20">
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">AI Foundations</h3>
            <p className="text-base text-navy-700">One-time setup. We show you where AI fits and set it up properly.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {partnerships.map((pkg, index) => (
              <div
                key={index}
                className={`card-focused p-8 ${pkg.popular ? 'border-2 border-accent-200' : ''}`}
              >
                {pkg.popular && (
                  <div className="text-xs font-semibold text-accent-600 mb-3">MOST POPULAR</div>
                )}
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-navy-600 mb-1">{pkg.depth}</div>
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">{pkg.level}</h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-4xl font-bold text-navy-900">{pkg.price}</span>
                    <span className="text-navy-600">one-time</span>
                  </div>
                  <p className="text-base text-navy-700 mb-4">{pkg.description}</p>
                  <p className="text-sm text-navy-600 italic">{pkg.relationship}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button onClick={scrollToContact} className="btn-primary w-full">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Operations - Monthly */}
        <div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-navy-900 mb-2">AI Operations</h3>
            <p className="text-base text-navy-700 mb-4">Monthly support. Predictable cost, predictable output.</p>
            
            {/* What is an improvement */}
            <div className="bg-white rounded-lg p-6 border border-navy-100 max-w-2xl">
              <h4 className="text-sm font-semibold text-navy-900 mb-2">What is an "AI improvement"?</h4>
              <p className="text-sm text-navy-700 mb-2">An improvement can include:</p>
              <ul className="text-sm text-navy-700 space-y-1 ml-4">
                <li>• Updating or refining an AI workflow</li>
                <li>• Generating or improving content</li>
                <li>• Adjusting prompts or automations</li>
                <li>• Creating summaries, reports, or recommendations</li>
              </ul>
              <p className="text-xs text-navy-600 italic mt-3 pt-3 border-t border-navy-100">
                Large projects are scoped separately.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
            {operations.map((plan, index) => (
              <div
                key={index}
                className={`card-focused p-6 ${plan.popular ? 'border-2 border-accent-200' : ''}`}
              >
                {plan.popular && (
                  <div className="text-xs font-semibold text-accent-600 mb-2">POPULAR</div>
                )}
                
                <div className="mb-6">
                  <div className="text-xs font-medium text-navy-600 mb-1">{plan.depth}</div>
                  <h4 className="text-xl font-bold text-navy-900 mb-2">{plan.level}</h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-bold text-navy-900">{plan.price}</span>
                    <span className="text-navy-600 text-sm">{plan.period}</span>
                  </div>
                  <div className="bg-accent-50 rounded px-3 py-1.5 mb-3 inline-block">
                    <span className="text-sm font-semibold text-accent-900">{plan.improvements}</span>
                  </div>
                  <p className="text-sm text-navy-600 italic">{plan.relationship}</p>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-navy-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 pt-4 border-t border-navy-100">
                  <p className="text-xs text-navy-600 mb-1">Best for:</p>
                  <p className="text-sm text-navy-700">{plan.bestFor}</p>
                </div>
                
                <button
                  onClick={scrollToContact}
                  className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
