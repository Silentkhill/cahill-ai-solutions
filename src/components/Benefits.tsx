import { Clock, Target, TrendingUp, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: 'Save Hours Each Week',
    description: 'Automate repetitive tasks like appointment confirmations, email responses, and content creation. Get your evenings back.',
    color: 'from-blue-100 to-blue-200',
    iconColor: 'text-blue-600',
  },
  {
    icon: Target,
    title: 'Marketing That Actually Works',
    description: 'Get consistent, on-brand messaging for your website, social media, and emails. Content that speaks to your Toronto customers.',
    color: 'from-purple-100 to-purple-200',
    iconColor: 'text-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Decisions Based on Data',
    description: 'Monthly reports show you what\'s working: which pages get attention, what converts, and where to focus next. No guesswork.',
    color: 'from-green-100 to-green-200',
    iconColor: 'text-green-600',
  },
  {
    icon: MessageSquare,
    title: '24/7 Customer Support',
    description: 'Handle customer inquiries around the clock with a website chatbot. Answer common questions instantly, even when you\'re busy.',
    color: 'from-accent-100 to-accent-200',
    iconColor: 'text-accent-600',
  },
  {
    icon: CheckCircle,
    title: 'No Learning Curve',
    description: 'We handle setup and training. You get tools that work with your existing workflow—no complex systems to learn or manage.',
    color: 'from-indigo-100 to-indigo-200',
    iconColor: 'text-indigo-600',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      {/* Creative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="blob-bg w-96 h-96 bg-accent-100/20 absolute -top-48 -right-48"></div>
        <div className="blob-bg w-80 h-80 bg-navy-100/10 absolute bottom-20 -left-40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-6xl font-black text-gradient">What This Does</span>
            <span className="block text-3xl font-light text-navy-600 mt-2">for You</span>
          </div>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
            Real outcomes for Toronto small businesses. Here's what you can expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className={`group card-creative p-8 stagger-animation`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Creative icon container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
                    <Icon className={`${benefit.iconColor} relative z-10`} size={36} />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${benefit.color} rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="text-2xl font-black text-navy-900 mb-4 group-hover:text-gradient transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-navy-700 leading-relaxed text-base mb-4">
                  {benefit.description}
                </p>
                
                {/* Creative arrow indicator */}
                <div className="flex items-center gap-2 text-sm font-semibold text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            )
          })}
        </div>
        
        {/* Creative CTA at bottom */}
        <div className="mt-16 text-center">
          <p className="text-lg text-navy-600 mb-6">
            Ready to see how this works for your business?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-xl font-bold hover:bg-navy-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span>Get Started</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
