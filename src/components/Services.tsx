import { Check, Sparkles } from 'lucide-react'

const oneTimePackages = [
  {
    name: 'Launch Package',
    price: '$750',
    description: 'Perfect for getting started',
    features: [
      '1-page website or small site refresh',
      'Basic AI tool setup (chatbot, email automation, or content tools)',
      'Team training session (up to 3 people)',
      '30 days of email support',
    ],
  },
  {
    name: 'Growth Package',
    price: '$1,400',
    description: 'For businesses ready to scale',
    features: [
      'Multi-section website or full site refresh',
      'Advanced AI implementation (multiple tools)',
      'Conversion optimization',
      'Extended team training (up to 5 people)',
      '60 days of email support',
    ],
  },
]

const monthlyPlans = [
  {
    name: 'Care Plan Starter',
    price: '$99',
    period: '/month',
    description: 'Essential monthly support',
    features: [
      'Monthly AI insights report',
      '3–5 actionable recommendations',
      'Email support',
      'Small website tweaks',
    ],
  },
  {
    name: 'Care Plan Plus',
    price: '$149',
    period: '/month',
    description: 'More hands-on support',
    features: [
      'Everything in Starter',
      'Priority email support',
      'Monthly content updates',
      'SEO basics implementation',
      'Google Business Profile optimization',
    ],
  },
  {
    name: 'Care Plan Pro',
    price: '$249',
    period: '/month',
    description: 'Comprehensive monthly care',
    features: [
      'Everything in Plus',
      'Advanced analytics review',
      'Conversion optimization',
      'Content strategy support',
      'Quarterly strategy session',
    ],
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
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Services & Packages
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Choose what fits your business. All packages include AI setup and training.
          </p>
        </div>

        {/* One-Time Packages */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-navy-900 mb-8 text-center">
            One-Time Setup & Implementation
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {oneTimePackages.map((pkg, index) => (
              <div
                key={index}
                className="border-2 border-navy-200 rounded-xl p-8 hover:border-accent-400 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-navy-900 mb-2">
                    {pkg.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold text-accent-600">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-navy-600">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-accent-600 mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className="w-full px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors font-medium"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Plans */}
        <div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="text-accent-600" size={24} />
            <h3 className="text-2xl font-semibold text-navy-900">
              Monthly AI Support & Optimization
            </h3>
          </div>
          <p className="text-center text-navy-700 mb-8 max-w-2xl mx-auto">
            Small improvements each month that add up over time. No hourly billing—just consistent value.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {monthlyPlans.map((plan, index) => (
              <div
                key={index}
                className={`border-2 rounded-xl p-6 transition-all duration-300 ${
                  index === 1
                    ? 'border-accent-400 shadow-xl bg-accent-50'
                    : 'border-navy-200 bg-white hover:border-accent-300 hover:shadow-lg'
                }`}
              >
                {index === 1 && (
                  <div className="text-xs font-semibold text-accent-700 bg-accent-200 px-2 py-1 rounded-full inline-block mb-3">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-navy-900 mb-2">
                    {plan.name}
                  </h4>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl font-bold text-accent-600">
                      {plan.price}
                    </span>
                    <span className="text-navy-600">{plan.period}</span>
                  </div>
                  <p className="text-sm text-navy-600">{plan.description}</p>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-accent-600 mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm text-navy-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  className={`w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                    index === 1
                      ? 'bg-accent-600 text-white hover:bg-accent-700'
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

