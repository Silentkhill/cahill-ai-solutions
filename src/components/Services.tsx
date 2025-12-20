import { Check, Sparkles, Building2, Settings } from 'lucide-react'

const aiFoundations = [
  {
    name: 'AI Foundations',
    price: '$750',
    description: 'Focused setup (1–2 workflows)',
    icon: Building2,
    features: [
      'Business workflow review (admin, marketing, communication)',
      'Identification of 3–5 AI opportunities',
      'Setup of 1 internal workflow (admin or communication)',
      'Setup of 1 external workflow (content, reviews, website copy)',
      'Simple documentation or walkthrough',
      'Optional: short training session (recorded or live)',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'AI Foundations Plus',
    price: '$1,400',
    description: 'Broader setup (3–5 workflows + first insight report)',
    icon: Building2,
    features: [
      'Everything in AI Foundations',
      'Setup of 3–5 AI workflows (internal + external)',
      'First monthly insight report included',
      'Extended documentation and training',
      'Priority support during setup',
    ],
    color: 'from-accent-500 to-accent-600',
    bgColor: 'bg-accent-50',
    popular: true,
  },
]

const aiOperations = [
  {
    name: 'AI Operations – Core',
    price: '$99',
    period: '/month',
    description: 'Essential monthly improvements',
    improvements: '2 AI-related improvements per month',
    features: [
      'Monthly AI check-in',
      '2 AI-related improvements per month',
      'Monthly plain-language insights summary',
      'Email support',
    ],
    bestFor: 'Solo owners, very small teams',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'AI Operations – Growth',
    price: '$149',
    period: '/month',
    description: 'More hands-on support',
    improvements: '4 AI-related improvements per month',
    features: [
      'Everything in Core',
      '4 AI-related improvements per month',
      'Content or communication support',
      'Priority response',
    ],
    bestFor: 'Growing local businesses, owners who want consistency',
    color: 'from-accent-500 to-accent-600',
    popular: true,
  },
  {
    name: 'AI Operations – Partner',
    price: '$249',
    period: '/month',
    description: 'Comprehensive monthly care',
    improvements: '8 AI-related improvements per month',
    features: [
      'Everything in Growth',
      '8 AI-related improvements per month',
      'Custom workflows',
      'Monthly planning support',
    ],
    bestFor: 'Businesses that want ongoing optimization, long-term partners',
    color: 'from-purple-500 to-purple-600',
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
    <section id="pricing" className="section-padding bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[700px] h-[700px] bg-accent-100/10 absolute top-1/4 -right-64"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-blue-100/10 absolute bottom-1/4 -left-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-accent-600 w-8 h-8" />
            <span className="text-5xl sm:text-6xl font-black text-navy-900">Two Simple</span>
            <span className="text-5xl sm:text-6xl font-black text-gradient">Offerings</span>
          </div>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
            We help businesses set up AI properly, then continuously improve how it supports their work.
          </p>
        </div>

        {/* AI Foundations (One-Time) */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-navy-900 mb-4">
              AI Foundations
            </h3>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light mb-2">
              Your entry point. A structured AI onboarding for your business.
            </p>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              We show you where AI fits in your business and set it up properly.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {aiFoundations.map((pkg, index) => {
              const Icon = pkg.icon
              return (
                <div
                  key={index}
                  className={`relative group card-creative ${pkg.bgColor} p-10 stagger-animation ${
                    pkg.popular ? 'md:scale-105 md:-translate-y-4' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-sm font-bold shadow-xl">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <h4 className="text-4xl font-black text-navy-900 mb-3 group-hover:text-gradient transition-colors">
                    {pkg.name}
                  </h4>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-6xl font-black text-gradient">
                      {pkg.price}
                    </span>
                    <span className="text-navy-600 text-lg font-medium">one-time</span>
                  </div>
                  
                  <p className="text-xl text-navy-700 font-medium mb-8">{pkg.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-6 h-6 bg-gradient-to-br ${pkg.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="text-white" size={16} />
                        </div>
                        <span className="text-navy-700 text-base leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={scrollToContact}
                    className={`w-full px-6 py-4 bg-gradient-to-r ${pkg.color} text-white rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group/btn relative`}
                  >
                    <span className="relative z-10">Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* AI Operations (Monthly) */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Settings className="text-accent-600 w-8 h-8" />
              <h3 className="text-4xl font-black text-navy-900">
                AI Operations
              </h3>
            </div>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light mb-4">
              This is where we fix things the most. Instead of vague "support", we sell capacity.
            </p>
            <p className="text-lg text-navy-600 max-w-2xl mx-auto">
              Predictable cost. Predictable output. Ongoing thinking, not just setup.
            </p>
          </div>
          
          {/* What is an "AI-related improvement" */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 border-2 border-navy-100 shadow-xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-black text-navy-900 mb-4">What is an "AI-related improvement"?</h4>
            <p className="text-navy-700 text-base leading-relaxed mb-4">
              An improvement can include:
            </p>
            <ul className="space-y-2 text-navy-700">
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold mt-1">•</span>
                <span>Updating or refining an AI workflow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold mt-1">•</span>
                <span>Generating or improving content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold mt-1">•</span>
                <span>Adjusting prompts or automations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-600 font-bold mt-1">•</span>
                <span>Creating summaries, reports, or recommendations</span>
              </li>
            </ul>
            <p className="text-navy-600 text-sm italic mt-4 pt-4 border-t border-navy-100">
              Large projects are scoped separately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {aiOperations.map((plan, index) => (
              <div
                key={index}
                className={`relative group card-creative bg-white p-8 stagger-animation ${
                  plan.popular ? 'md:scale-105 md:-translate-y-4 border-2 border-accent-400' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-full text-xs font-bold shadow-lg">
                    ⭐ POPULAR
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-2xl font-black text-navy-900 mb-3 group-hover:text-gradient transition-colors">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-black text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-navy-600 font-medium">{plan.period}</span>
                  </div>
                  <div className="mb-3">
                    <div className="inline-block px-4 py-2 bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg border border-accent-200">
                      <span className="text-sm font-bold text-accent-900">{plan.improvements}</span>
                    </div>
                  </div>
                  <p className="text-base text-navy-600 font-medium">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-sm text-navy-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6 pt-4 border-t border-navy-100">
                  <p className="text-xs text-navy-600 font-medium mb-1">Best for:</p>
                  <p className="text-sm text-navy-700">{plan.bestFor}</p>
                </div>
                
                <button
                  onClick={scrollToContact}
                  className={`w-full px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl`
                      : 'bg-navy-100 text-navy-900 hover:bg-navy-200'
                  }`}
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
