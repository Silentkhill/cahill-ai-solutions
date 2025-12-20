import { Scissors, Heart, Coffee, Wrench, GraduationCap } from 'lucide-react'

const businessTypes = [
  {
    icon: Scissors,
    name: 'Salons & Studios',
    color: 'from-pink-400 to-pink-600',
  },
  {
    icon: Heart,
    name: 'Clinics & Wellness',
    color: 'from-red-400 to-red-600',
  },
  {
    icon: Coffee,
    name: 'Cafés & Restaurants',
    color: 'from-amber-400 to-amber-600',
  },
  {
    icon: Wrench,
    name: 'Trades & Services',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: GraduationCap,
    name: 'Schools & Education',
    color: 'from-purple-400 to-purple-600',
  },
]

export default function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="section-padding bg-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[500px] h-[500px] bg-accent-100/10 absolute top-20 -left-40"></div>
        <div className="blob-bg w-[400px] h-[400px] bg-navy-100/10 absolute bottom-20 -right-40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-6">
              Who This Is For
            </h2>
            <p className="text-xl text-navy-700 leading-relaxed font-light max-w-3xl mx-auto">
              Cahill AI Solutions works best with owner-led local businesses that want practical improvements — not experimental tech.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {businessTypes.map((business, index) => {
              const Icon = business.icon
              return (
                <div
                  key={index}
                  className="group card-creative bg-white p-6 text-center stagger-animation hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-navy-900 text-sm group-hover:text-gradient transition-colors">
                    {business.name}
                  </h3>
                </div>
              )
            })}
          </div>

          {/* Bottom line */}
          <div className="text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-navy-50 to-accent-50/30 rounded-3xl border-2 border-navy-100 shadow-xl max-w-2xl">
              <p className="text-lg text-navy-700 font-medium leading-relaxed">
                If you are busy, non-technical, and want simple systems that work — <span className="font-bold text-navy-900">this is for you.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

