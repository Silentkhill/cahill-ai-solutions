import { Check, Building2, Settings } from 'lucide-react'

const aiFoundations = [
  {
    name: 'AI Foundations',
    price: '$750',
    description: 'Focused setup (1–2 workflows)',
    features: [
      'Business workflow review',
      'Identification of 3–5 AI opportunities',
      'Setup of 1 internal workflow',
      'Setup of 1 external workflow',
      'Simple documentation or walkthrough',
      'Optional training session',
    ],
  },
  {
    name: 'AI Foundations Plus',
    price: '$1,400',
    description: 'Broader setup (3–5 workflows + first insight report)',
    features: [
      'Everything in AI Foundations',
      'Setup of 3–5 AI workflows',
      'First monthly insight report included',
      'Extended documentation and training',
      'Priority support during setup',
    ],
    popular: true,
  },
]

const aiOperations = [
  {
    name: 'AI Operations – Core',
    price: '$99',
    period: '/month',
    improvements: '2 improvements per month',
    features: [
      'Monthly AI check-in',
      '2 AI improvements per month',
      'Monthly insights summary',
      'Email support',
    ],
    bestFor: 'Solo owners, very small teams',
  },
  {
    name: 'AI Operations – Growth',
    price: '$149',
    period: '/month',
    improvements: '4 improvements per month',
    features: [
      'Everything in Core',
      '4 AI improvements per month',
      'Content or communication support',
      'Priority response',
    ],
    bestFor: 'Growing local businesses',
    popular: true,
  },
  {
    name: 'AI Operations – Partner',
    price: '$249',
    period: '/month',
    improvements: '8 improvements per month',
    features: [
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
    <section id="pricing" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Pricing
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Two simple offerings: one-time setup, then monthly support.
          </p>
        </div>

        {/* AI Foundations (One-Time) */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Building2 className="text-accent-600" size={24} />
              <h3 className="text-2xl font-bold text-navy-900">
                AI Foundations
              </h3>
            </div>
            <p className="text-base text-navy-700 max-w-2xl mx-auto">
              One-time setup. We show you where AI fits and set it up properly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {aiFoundations.map((pkg, index) => (
              <div
                key={index}
                className={`card-simple p-8 ${pkg.popular ? 'border-2 border-accent-200' : ''}`}
              >
                {pkg.popular && (
                  <div className="text-xs font-semibold text-accent-600 mb-3">
                    MOST POPULAR
                  </div>
                )}
                
                <h4 className="text-2xl font-bold text-navy-900 mb-2">
                  {pkg.name}
                </h4>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold text-navy-900">
                    {pkg.price}
                  </span>
                  <span className="text-navy-600">one-time</span>
                </div>
                
                <p className="text-base text-navy-700 mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={scrollToContact}
                  className="btn-primary w-full"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* AI Operations (Monthly) */}
        <div>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Settings className="text-accent-600" size={24} />
              <h3 className="text-2xl font-bold text-navy-900">
                AI Operations
              </h3>
            </div>
            <p className="text-base text-navy-700 max-w-2xl mx-auto mb-4">
              Monthly support. Predictable cost, predictable output.
            </p>
          </div>
          
          {/* What is an "AI improvement" */}
          <div className="bg-navy-50 rounded-lg p-6 mb-8 max-w-3xl mx-auto border border-navy-100">
            <h4 className="text-lg font-semibold text-navy-900 mb-3">What is an "AI improvement"?</h4>
            <p className="text-sm text-navy-700 mb-3">
              An improvement can include:
            </p>
            <ul className="space-y-1 text-sm text-navy-700 ml-4">
              <li>• Updating or refining an AI workflow</li>
              <li>• Generating or improving content</li>
              <li>• Adjusting prompts or automations</li>
              <li>• Creating summaries, reports, or recommendations</li>
            </ul>
            <p className="text-xs text-navy-600 italic mt-3 pt-3 border-t border-navy-200">
              Large projects are scoped separately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {aiOperations.map((plan, index) => (
              <div
                key={index}
                className={`card-simple p-6 ${plan.popular ? 'border-2 border-accent-200' : ''}`}
              >
                {plan.popular && (
                  <div className="text-xs font-semibold text-accent-600 mb-2">
                    POPULAR
                  </div>
                )}
                
                <h4 className="text-xl font-bold text-navy-900 mb-2">
                  {plan.name}
                </h4>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-3xl font-bold text-navy-900">
                    {plan.price}
                  </span>
                  <span className="text-navy-600 text-sm">{plan.period}</span>
                </div>
                <div className="bg-accent-50 rounded px-3 py-1.5 mb-4 inline-block">
                  <span className="text-sm font-semibold text-accent-900">{plan.improvements}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-navy-700">{feature}</span>
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
