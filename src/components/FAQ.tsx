import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What exactly do you mean by "AI solutions"?',
    answer: 'We set up practical AI tools that help with everyday tasks: chatbots for your website, email automation, content creation assistance, and simple analytics. We focus on tools that save you time and improve your marketing—not complex systems that require training.',
  },
  {
    question: 'How long does setup take?',
    answer: 'Most one-time setups are completed within 1–2 weeks, depending on the package. We\'ll work around your schedule and make sure your team is comfortable with everything before we finish.',
  },
  {
    question: 'What do I need to provide?',
    answer: 'We\'ll need access to your website (if you have one), your business information, and a clear idea of what you want to improve. We can work with what you have—even if you don\'t have a website yet, we can help build one as part of the setup.',
  },
  {
    question: 'Is my data private and secure?',
    answer: 'Yes. We use reputable AI tools with strong privacy policies, and we never share your business information. We\'ll explain exactly what data is used and how it\'s protected before we set anything up.',
  },
  {
    question: 'Can I cancel the monthly plan anytime?',
    answer: 'Yes. There are no long-term contracts. You can cancel your monthly plan at any time with 30 days notice.',
  },
  {
    question: 'Do you work with businesses outside Toronto?',
    answer: 'We primarily serve Toronto and the Greater Toronto Area (GTA). If you\'re nearby and think we\'d be a good fit, reach out and we can discuss.',
  },
  {
    question: 'What if AI isn\'t right for my business?',
    answer: 'That\'s okay. Even if we decide AI isn\'t the best fit right now, you\'ll still leave our consultation with 2–3 practical suggestions for improving your website or marketing. No pressure.',
  },
  {
    question: 'Do you build websites, or just add AI to existing ones?',
    answer: 'We can do both. If you need a website or a refresh, we can build that as part of your implementation package. AI solutions are our focus, but a good website is often the foundation for effective AI tools.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-navy-700">
              Common questions from business owners like you.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-navy-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-navy-50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-inset"
                >
                  <span className="font-semibold text-navy-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-navy-600 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                    aria-hidden="true"
                  />
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 py-4 bg-navy-50 border-t border-navy-200"
                    role="region"
                  >
                    <p className="text-navy-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

