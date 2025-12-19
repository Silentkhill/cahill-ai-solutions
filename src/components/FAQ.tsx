import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

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
            <h2 className="text-5xl sm:text-6xl font-black text-navy-900 mb-4">
              Frequently Asked{' '}
              <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-navy-700 max-w-2xl mx-auto font-light">
              Common questions from business owners like you.
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
          
          {/* Creative CTA */}
          <div className="mt-16 text-center">
            <div className="inline-block p-8 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl shadow-2xl text-white">
              <p className="text-xl font-bold mb-4">
                Still have questions?
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy-900 rounded-xl font-bold hover:bg-accent-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <span>Get in Touch</span>
                <ChevronDown size={20} className="rotate-[-90deg]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
