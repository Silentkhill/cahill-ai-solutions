import { ArrowRight, Calendar } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-navy-50 to-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            Practical AI Solutions for Toronto Small Businesses
          </h1>
          <p className="text-xl md:text-2xl text-navy-700 mb-10 leading-relaxed">
            Save time, improve marketing clarity, and make better decisions without the overwhelm.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-all duration-200 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Calendar size={20} />
              Book a Free 15-Minute Consult
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-accent-600 border-2 border-accent-600 rounded-lg hover:bg-accent-50 transition-all duration-200 font-semibold text-lg"
            >
              Request Free AI Opportunity Review
            </button>
          </div>
          
          <p className="mt-6 text-sm text-navy-600">
            No pressure. If it's not a fit, you'll still leave with 2–3 helpful suggestions.
          </p>
        </div>
      </div>
    </section>
  )
}

