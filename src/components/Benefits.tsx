import { Clock, Target, TrendingUp, MessageSquare, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    description: 'Automate repetitive tasks like appointment confirmations, email responses, and content creation. Reduce admin work by hours each week.',
  },
  {
    icon: Target,
    title: 'Clearer Marketing',
    description: 'Get consistent, on-brand messaging for your website, social media, and emails. Content that speaks to your Toronto customers.',
  },
  {
    icon: TrendingUp,
    title: 'Better Decisions',
    description: 'Monthly reports show you what\'s working: which pages get attention, what converts, and where to focus next. No guesswork.',
  },
  {
    icon: MessageSquare,
    title: 'Consistent Responses',
    description: 'Handle customer inquiries 24/7 with a website chatbot. Answer common questions instantly, even when you\'re busy.',
  },
  {
    icon: CheckCircle,
    title: 'No Overwhelm',
    description: 'We handle setup and training. You get tools that work with your existing workflow—no complex systems to learn or manage.',
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
            Real outcomes for Toronto small businesses. Here's what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-navy-100 hover:border-accent-300 hover:shadow-lg transition-all duration-300 bg-white group"
              >
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-200 group-hover:scale-110 transition-all duration-300">
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

