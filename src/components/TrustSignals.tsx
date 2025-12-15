import { Shield, Users, Clock, Award } from 'lucide-react'

const trustPoints = [
  {
    icon: Users,
    title: 'Local Toronto Focus',
    description: 'We specialize in serving small businesses in Toronto and the GTA. We understand local market needs.',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Most implementations completed in 1–2 weeks. We work around your schedule.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your business data stays private. We use reputable tools with strong privacy policies.',
  },
  {
    icon: Award,
    title: 'Responsible AI',
    description: 'Led by an educator and AI Committee Lead who prioritizes ethical, practical AI use.',
  },
]

export default function TrustSignals() {
  return (
    <section className="section-padding bg-white border-y border-navy-100">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
              Why Choose Cahill AI Solutions
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto">
              Practical AI support designed specifically for Toronto small businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="group relative text-center p-8 rounded-2xl bg-white border border-navy-100/50 hover:border-accent-200 card-premium overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-accent-50/0 group-hover:via-accent-50/40 transition-all duration-500"></div>
                  
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <Icon className="text-accent-700" size={30} />
                    </div>
                  </div>
                  
                  <h3 className="relative text-xl font-bold text-navy-900 mb-3 group-hover:text-accent-700 transition-colors">
                    {point.title}
                  </h3>
                  <p className="relative text-sm text-navy-700 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Testimonials placeholder - add when available */}
          <div className="mt-16 text-center">
            <p className="text-sm text-navy-600 italic">
              Client testimonials coming soon. Book a consultation to see how we can help your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

