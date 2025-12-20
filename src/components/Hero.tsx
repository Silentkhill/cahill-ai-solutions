import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline - Clear and direct */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-navy-900 mb-6 leading-tight">
            Practical AI Solutions for Local Small Businesses
          </h1>
          
          {/* Subheadline - Outcome-focused */}
          <p className="text-xl sm:text-2xl text-navy-700 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            Save time, improve marketing, and make smarter decisions — without hype or technical overwhelm.
          </p>
          
          {/* Primary CTA - Clear and prominent */}
          <div className="mb-12">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-10 py-5 mb-4 inline-flex items-center gap-2"
            >
              Get a Free AI Opportunity Review
              <ArrowRight size={20} />
            </button>
            <p className="text-sm text-navy-600">
              No pressure. If it's not a fit, you'll still get 2–3 helpful suggestions.
            </p>
          </div>
          
          {/* 3 Value Bullets - Distinct and outcome-focused */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-accent-600 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-navy-900">Reduce admin work</h3>
              </div>
              <p className="text-sm text-navy-600 ml-7">Automate repetitive tasks and manual work</p>
            </div>
            
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-accent-600 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-navy-900">Create better content</h3>
              </div>
              <p className="text-sm text-navy-600 ml-7">Generate consistent content in less time</p>
            </div>
            
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="text-accent-600 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-navy-900">Get monthly insights</h3>
              </div>
              <p className="text-sm text-navy-600 ml-7">Clear recommendations you can actually use</p>
            </div>
          </div>
          
          {/* Trust indicator - Simple and clear */}
          <div className="mt-12 pt-8 border-t border-navy-100">
            <p className="text-sm text-navy-600">
              <span className="font-semibold text-navy-900">Serving Toronto & GTA</span> • No long-term contracts • 30-day notice
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
