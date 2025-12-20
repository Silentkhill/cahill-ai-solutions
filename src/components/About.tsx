import { Shield, MessageCircle, User, MapPin } from 'lucide-react'

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
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Human-First AI, Explained Clearly
            </h2>
          </div>

          <div className="card-simple p-8 mb-10">
            <p className="text-lg text-navy-700 leading-relaxed">
              I am a teacher and AI Committee Lead, focused on helping people understand and use AI responsibly and effectively. I bring that same clarity-first approach to helping small businesses use AI in ways that genuinely save time and reduce stress.
            </p>
          </div>
          
          {/* Trust bullets */}
          <div className="grid sm:grid-cols-2 gap-4">
            {trustBullets.map((bullet, index) => {
              const Icon = bullet.icon
              return (
                <div
                  key={index}
                  className="card-simple p-6 text-center"
                >
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="text-accent-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-navy-900 text-sm">{bullet.title}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
