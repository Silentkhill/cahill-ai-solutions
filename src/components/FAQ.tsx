import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Do I need to understand AI?',
    answer: 'No. I handle the systems, you get the results.',
  },
  {
    question: 'Will this replace my staff?',
    answer: 'No. AI supports people — it does not replace them.',
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
    <section id="faq" className="section-padding bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[500px] h-[500px] bg-accent-100/10 absolute top-20 -left-40"></div>
        <div className="blob-bg w-[400px] h-[400px] bg-navy-100/10 absolute bottom-20 -right-40"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl mb-6 shadow-2xl">
              <HelpCircle className="text-accent-700" size={40} />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-navy-700 max-w-2xl mx-auto font-light">
              Objection removal — common questions from business owners like you.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`card-creative bg-white overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'shadow-2xl border-2 border-accent-200' : 'shadow-lg border border-navy-100'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-accent-50/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-10 h-10 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform ${
                      openIndex === index ? 'from-accent-400 to-accent-600' : ''
                    }`}>
                      <span className="text-accent-700 font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="font-bold text-lg text-navy-900 group-hover:text-accent-700 transition-colors pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`text-navy-600 flex-shrink-0 transition-all duration-300 ${
                      openIndex === index ? 'rotate-180 text-accent-600' : ''
                    }`}
                    size={24}
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
                  <div className="px-8 py-6 bg-gradient-to-br from-accent-50/50 to-white border-t-2 border-accent-100">
                    <p className="text-navy-700 leading-relaxed text-base pl-14">{faq.answer}</p>
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
