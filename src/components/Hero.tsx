import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-navy-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-8">
              <Sparkles className="text-accent-600" size={16} />
              <span className="text-sm font-semibold text-accent-900">Practical AI for Local Businesses</span>
            </div>

            <h1 className="text-display text-navy-900 mb-6 leading-none">
              <span className="block">Practical AI</span>
              <span className="block text-gradient mt-2">Solutions</span>
              <span className="block text-navy-700 text-5xl sm:text-6xl md:text-7xl mt-4 font-light">for Local Small Businesses</span>
            </h1>

            <p className="text-subhead max-w-3xl mb-10 text-navy-600">
              Save time, improve marketing, and make smarter decisions without hype or technical overwhelm.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
              <button
                onClick={scrollToContact}
                className="btn-primary inline-flex items-center gap-3 group"
              >
                <span>Get a Free AI Opportunity Review</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="pt-2">
                <p className="text-sm text-navy-600 font-medium">
                  No pressure. If it's not a fit, you'll still get 2–3 helpful suggestions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mt-12">
              {[
                { icon: Zap, text: 'Reduce admin work and manual tasks' },
                { icon: Sparkles, text: 'Create better content in less time' },
                { icon: TrendingUp, text: 'Get monthly AI insights you can use' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-navy-200"
                  >
                    <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-navy-900">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-navy-200">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span className="font-semibold text-navy-900">Serving Toronto & GTA</span>
              </div>
              <span className="text-navy-400">•</span>
              <span className="text-navy-600">No long-term contracts</span>
              <span className="text-navy-400">•</span>
              <span className="text-navy-600">30-day notice</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}
