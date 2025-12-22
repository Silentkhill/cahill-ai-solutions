import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need to understand AI?',
    answer: 'No. I handle the systems, you get the results.',
  },
  {
    question: 'Will this replace my staff?',
    answer: 'No. AI supports people - it does not replace them.',
  },
  {
    question: 'Can you work with my existing website or tools?',
    answer: 'Yes. No rebuild required.',
  },
  {
    question: 'Is this a long-term commitment?',
    answer: 'No. Monthly plans are flexible.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-subtle relative">
      {/* Noise layer clears as you reach FAQ */}
      <div className="noise-layer clarity" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Asymmetric headline */}
          <div className="asymmetric-left mb-12">
            <h2 className="text-headline text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-subhead max-w-2xl">
              Common questions from business owners like you.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card-focused overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'border-accent-200' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-navy-50 transition-colors duration-300"
                >
                  <span className="font-semibold text-navy-900 pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`text-navy-600 flex-shrink-0 transition-transform duration-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  role="region"
                >
                  <div className="px-6 py-5 bg-navy-50 border-t border-navy-100">
                    <p className="text-sm text-navy-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
