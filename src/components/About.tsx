import { User, Shield, MessageCircle, MapPin } from 'lucide-react'

const trustBullets = [
  {
    icon: Shield,
    title: 'Practical, not experimental',
  },
  {
    icon: MessageCircle,
    title: 'Ethical and privacy-conscious',
  },
  {
    icon: User,
    title: 'Clear communication',
  },
  {
    icon: MapPin,
    title: 'Local and relationship-driven',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-creative relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[700px] h-[700px] bg-accent-200/15 absolute top-1/4 -left-64"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-navy-100/10 absolute bottom-1/4 -right-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-6">
              Human-First AI, Explained Clearly
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border-2 border-navy-100/50 relative overflow-hidden card-creative mb-12">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent-100/30 to-transparent rounded-br-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-navy-100/20 to-transparent rounded-tl-full blur-2xl"></div>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-navy-700 leading-relaxed font-light">
                I am a teacher and AI Committee Lead, focused on helping people understand and use AI responsibly and effectively. I bring that same clarity-first approach to helping small businesses use AI in ways that genuinely save time and reduce stress.
              </p>
            </div>
          </div>
          
          {/* Trust bullets */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBullets.map((bullet, index) => {
              const Icon = bullet.icon
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-navy-100 shadow-lg stagger-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Icon className="text-accent-700" size={28} />
                  </div>
                  <h3 className="font-bold text-navy-900">{bullet.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
