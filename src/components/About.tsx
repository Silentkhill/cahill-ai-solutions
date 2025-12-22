import { Lightbulb, Heart, Shield } from 'lucide-react'

// Philosophy-driven About - focus on approach and thinking, not credentials
const philosophy = [
  {
    icon: Lightbulb,
    principle: 'Clarity over complexity',
    explanation: 'I translate complex ideas into clear, practical steps. No jargon. No overwhelm.',
  },
  {
    icon: Heart,
    principle: 'People over technology',
    explanation: 'AI supports people - it doesn\'t replace them. Every solution starts with understanding your actual needs.',
  },
  {
    icon: Shield,
    principle: 'Responsible use',
    explanation: 'I prioritize ethical AI use and privacy. You\'ll always know what data is used and how it\'s protected.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-subtle relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Philosophy-first headline */}
          <div className="asymmetric-right mb-16">
            <h2 className="text-headline text-navy-900 mb-4">
              How I Think About This Work
            </h2>
            <p className="text-subhead max-w-2xl">
              Not credentials. Not tools. Just the principles that guide how I help businesses.
            </p>
          </div>

          {/* Philosophy principles */}
          <div className="space-y-8 mb-12">
            {philosophy.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="card-focused p-8 fade-in-slow"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-accent-600" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy-900 mb-2">
                        {item.principle}
                      </h3>
                      <p className="text-base text-navy-700 leading-relaxed">
                        {item.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Personal note - human, not promotional */}
          <div className="card-focused p-8 bg-navy-50/50">
            <p className="text-base text-navy-700 leading-relaxed">
              I'm a teacher and AI Committee Lead, which means I spend my days helping people understand and use AI responsibly. When I work with small businesses in Toronto, I bring that same clarity-first approach: practical solutions that genuinely save time and reduce stress.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
