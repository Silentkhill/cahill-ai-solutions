import { Check, Sparkles, Zap, Rocket } from 'lucide-react'

const oneTimePackages = [
  {
    name: 'Launch Package',
    price: '$750',
    description: 'Perfect for getting started',
    icon: Zap,
    features: [
      '1-page website or small site refresh',
      'Basic AI tool setup (chatbot, email automation, or content tools)',
      'Team training session (up to 3 people)',
      '30 days of email support',
    ],
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    name: 'Growth Package',
    price: '$1,400',
    description: 'For businesses ready to scale',
    icon: Rocket,
    features: [
      'Multi-section website or full site refresh',
      'Advanced AI implementation (multiple tools)',
      'Conversion optimization',
      'Extended team training (up to 5 people)',
      '60 days of email support',
    ],
    color: 'from-accent-500 to-accent-600',
    bgColor: 'bg-accent-50',
    popular: true,
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
    color: 'from-green-500 to-green-600',
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
    color: 'from-accent-500 to-accent-600',
    popular: true,
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
    <section id="services" className="section-padding bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[700px] h-[700px] bg-accent-100/10 absolute top-1/4 -right-64"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-blue-100/10 absolute bottom-1/4 -left-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="text-accent-600 w-8 h-8" />
            <span className="text-5xl sm:text-6xl font-black text-navy-900">Services &</span>
            <span className="text-5xl sm:text-6xl font-black text-gradient">Packages</span>
          </div>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
            Choose what fits your business. All packages include AI setup and training.
          </p>
        </div>

        {/* One-Time Packages */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-navy-900 mb-3">
              One-Time Setup & Implementation
            </h3>
            <p className="text-lg text-navy-600">
              Starting at <span className="font-bold text-accent-600">$750</span>. All packages include AI setup, training, and support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {oneTimePackages.map((pkg, index) => {
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

        {/* Monthly Plans */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="text-accent-600 w-7 h-7" />
              <h3 className="text-3xl font-black text-navy-900">
                Monthly AI Support & Optimization
              </h3>
            </div>
            <p className="text-lg text-navy-700 max-w-3xl mx-auto">
              Small improvements each month that add up over time. No hourly billing—just consistent value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {monthlyPlans.map((plan, index) => (
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
                  <p className="text-base text-navy-600 font-medium">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Check className="text-white" size={12} />
                      </div>
                      <span className="text-sm text-navy-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
