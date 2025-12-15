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
          <h3 className="text-2xl font-semibold text-navy-900 mb-3 text-center">
            One-Time Setup & Implementation
          </h3>
          <p className="text-center text-navy-600 mb-8 text-sm">
            Starting at $750. All packages include AI setup, training, and support.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {oneTimePackages.map((pkg, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-10 hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden group ${
                  index === 1
                    ? 'border-2 border-accent-400 shadow-xl ring-4 ring-accent-100'
                    : 'border-2 border-navy-200 hover:border-accent-300 shadow-lg'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-transparent rounded-bl-full"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-accent-50/0 group-hover:via-accent-50/30 transition-all duration-500"></div>
                <div className="relative mb-8">
                  {index === 1 && (
                    <div className="text-xs font-bold text-accent-700 bg-gradient-to-r from-accent-100 to-accent-200 px-4 py-1.5 rounded-full inline-block mb-4 shadow-md">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <h4 className="text-3xl font-bold text-navy-900 mb-3">
                    {pkg.name}
                  </h4>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-5xl font-extrabold text-gradient">
                      {pkg.price}
                    </span>
                    <span className="text-navy-600 text-base font-medium">one-time</span>
                  </div>
                  <p className="text-lg text-navy-600 font-medium">{pkg.description}</p>
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
                  className="relative w-full px-6 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden group/btn"
                >
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
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
                className={`relative rounded-2xl p-8 transition-all duration-500 overflow-hidden group ${
                  index === 1
                    ? 'border-2 border-accent-400 shadow-2xl bg-gradient-to-br from-accent-50 to-white ring-4 ring-accent-100 scale-105'
                    : 'border-2 border-navy-200 bg-white hover:border-accent-300 hover:shadow-xl card-premium'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent-400/30 to-transparent rounded-bl-full"></div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white to-accent-50/0 transition-all duration-500 ${
                  index === 1 ? 'via-accent-50/50' : 'group-hover:via-accent-50/30'
                }`}></div>
                <div className="relative">
                  {index === 1 && (
                    <div className="text-xs font-bold text-accent-700 bg-gradient-to-r from-accent-200 to-accent-300 px-3 py-1.5 rounded-full inline-block mb-4 shadow-md">
                      ⭐ MOST POPULAR
                    </div>
                  )}
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-navy-900 mb-3">
                      {plan.name}
                    </h4>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-4xl font-extrabold text-gradient">
                        {plan.price}
                      </span>
                      <span className="text-navy-600 font-medium">{plan.period}</span>
                    </div>
                    <p className="text-base text-navy-600 font-medium">{plan.description}</p>
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
                  className={`relative w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 overflow-hidden group/btn ${
                    index === 1
                      ? 'bg-gradient-to-r from-accent-600 to-accent-700 text-white hover:from-accent-700 hover:to-accent-800'
                      : 'bg-navy-100 text-navy-900 hover:bg-navy-200'
                  }`}
                >
                  <span className="relative z-10">Get Started</span>
                  {index === 1 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                  )}
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

