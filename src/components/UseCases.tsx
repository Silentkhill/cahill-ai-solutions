import { Scissors, Coffee, Dumbbell, Wrench } from 'lucide-react'

const useCases = [
  {
    icon: Scissors,
    title: 'Salon & Spa',
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
    <section id="use-cases" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
            Examples for Your Industry
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto">
            See how AI can help businesses like yours save time and improve results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <div
                key={index}
                className="border border-navy-200 rounded-xl p-6 hover:border-accent-300 hover:shadow-lg transition-all duration-300 bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-accent-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">
                    {useCase.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-navy-700">
                      <span className="text-accent-600 mt-1.5">•</span>
                      <span className="text-sm">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

