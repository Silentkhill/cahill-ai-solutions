import { Scissors, Coffee, Dumbbell, Wrench, ArrowRight } from 'lucide-react'

const useCases = [
  {
    icon: Scissors,
    title: 'Salon & Spa',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
    examples: [
      'Automated appointment confirmations and reminders',
      'Social media content ideas based on seasonal trends',
      'Customer review response templates',
      'Website chatbot for common questions',
    ],
  },
  {
    icon: Coffee,
    title: 'Café & Restaurant',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
    examples: [
      'Menu descriptions that highlight local ingredients',
      'Email marketing for special events and promotions',
      'Social media captions that match your brand voice',
      'Customer feedback analysis and response suggestions',
    ],
  },
  {
    icon: Dumbbell,
    title: 'Fitness Studio',
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    examples: [
      'Class descriptions and marketing copy',
      'Member onboarding email sequences',
      'Social media content calendar ideas',
      'Website copy that converts visitors to trial members',
    ],
  },
  {
    icon: Wrench,
    title: 'Trades & Services',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    examples: [
      'Clear service descriptions for your website',
      'Quote follow-up automation',
      'Google Business Profile optimization',
      'Customer communication templates',
    ],
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="section-padding bg-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[600px] h-[600px] bg-accent-100/10 absolute top-20 -left-40"></div>
        <div className="blob-bg w-[500px] h-[500px] bg-navy-100/10 absolute bottom-20 -right-40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-5xl sm:text-6xl font-black text-navy-900 block">Examples for</span>
            <span className="text-5xl sm:text-6xl font-black text-gradient block">Your Industry</span>
          </div>
          <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
            See how AI can help businesses like yours save time and improve results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className={`group card-creative ${useCase.bgColor} p-10 stagger-animation tilt-on-hover relative overflow-hidden`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Creative icon header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className={`w-20 h-20 bg-gradient-to-br ${useCase.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                    <Icon className="text-white relative z-10" size={36} />
                  </div>
                  <h3 className="text-3xl font-black text-navy-900 group-hover:text-gradient transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                
                {/* Examples list */}
                <ul className="space-y-4 mb-6">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-4 group/item">
                      <div className={`w-8 h-8 bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-navy-700 text-base leading-relaxed pt-1">{example}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Creative CTA */}
                <div className="flex items-center gap-2 text-sm font-bold text-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>See how this works</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            )
          })}
        </div>
        
        {/* Creative CTA section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-10 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl shadow-2xl text-white">
            <p className="text-2xl font-bold mb-6">
              Don't see your industry? We work with all types of local businesses.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-900 rounded-xl font-bold hover:bg-accent-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <span>Let's Talk About Your Business</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
