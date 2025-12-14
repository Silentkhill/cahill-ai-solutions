import { Clock, Target, TrendingUp, MessageSquare, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate repetitive tasks and reduce admin work so you can focus on what matters.',
  },
  {
    icon: Target,
    title: 'Clearer Marketing',
    description: 'Get consistent, on-brand messaging that resonates with your local customers.',
  },
  {
    icon: TrendingUp,
    title: 'Better Decisions',
    description: 'Use simple insights from your website and customer data to guide your next steps.',
  },
  {
    icon: MessageSquare,
    title: 'Consistent Responses',
    description: 'Handle customer inquiries faster with AI that understands your business.',
  },
  {
    icon: CheckCircle,
    title: 'No Overwhelm',
    description: 'Practical solutions that fit your workflow, not complex systems you need to learn.',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            What This Does for You
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            Real outcomes for local businesses like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-navy-100 hover:border-accent-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-accent-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-navy-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

