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
            Real outcomes for Toronto small businesses. Here\'s what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl card-premium bg-white border border-navy-100/50 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient accent on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-50/0 to-accent-100/0 group-hover:from-accent-50/50 group-hover:to-accent-100/30 transition-all duration-500"></div>
                
                {/* Icon container with premium styling */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Icon className="text-accent-700" size={28} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500/10 rounded-full blur-sm group-hover:bg-accent-500/20 transition-all duration-500"></div>
                </div>
                
                <h3 className="relative text-2xl font-bold text-navy-900 mb-3 group-hover:text-accent-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="relative text-navy-700 leading-relaxed text-base">
                  {benefit.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

