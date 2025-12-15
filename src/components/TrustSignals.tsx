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
                  className="text-center p-6 rounded-lg bg-navy-50/50 hover:bg-navy-50 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent-100 rounded-full mb-4">
                    <Icon className="text-accent-600" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-navy-700 leading-relaxed">
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

