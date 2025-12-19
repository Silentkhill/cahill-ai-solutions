import { Shield, Users, Clock, Award, MapPin } from 'lucide-react'

const trustPoints = [
  {
    icon: MapPin,
    title: 'Local Toronto Focus',
    description: 'We specialize in serving small businesses in Toronto and the GTA. We understand local market needs.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Most implementations completed in 1–2 weeks. We work around your schedule.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your business data stays private. We use reputable tools with strong privacy policies.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Award,
    title: 'Responsible AI',
    description: 'Led by an educator and AI Committee Lead who prioritizes ethical, practical AI use.',
    color: 'from-accent-400 to-accent-600',
  },
]

export default function TrustSignals() {
  return (
    <section className="section-padding bg-white relative overflow-hidden border-y-4 border-navy-100">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[500px] h-[500px] bg-accent-100/10 absolute top-0 left-1/4"></div>
        <div className="blob-bg w-[400px] h-[400px] bg-navy-100/10 absolute bottom-0 right-1/4"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-navy-900 mb-4">
              Why Choose{' '}
              <span className="text-gradient">Cahill AI Solutions</span>
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
              Practical AI support designed specifically for Toronto small businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="group card-creative bg-white p-8 stagger-animation tilt-on-hover relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${point.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                      <Icon className="text-white relative z-10" size={36} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-gradient transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-navy-700 leading-relaxed text-base">
                    {point.description}
                  </p>
                  
                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${point.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              )
            })}
          </div>

          {/* Testimonials placeholder */}
          <div className="mt-20 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-navy-50 to-accent-50/30 rounded-3xl border-2 border-navy-100 shadow-xl">
              <p className="text-lg text-navy-700 font-medium mb-2">
                Client testimonials coming soon.
              </p>
              <p className="text-base text-navy-600">
                Book a consultation to see how we can help your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
