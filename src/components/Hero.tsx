import { ArrowRight, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      <div className="accent-blob accent-blob-1" />
      <div className="accent-blob accent-blob-2" />

      <div
        className={`noise-layer ${scrollProgress > 0.1 ? 'clarity' : ''}`}
        style={{ opacity: 0.45 - (scrollProgress * 0.3) }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="asymmetric-left mb-16 motion-core">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-8">
              <Sparkles className="text-accent-600" size={16} />
              <span className="type-caption font-semibold text-accent-900">Practical AI for Local Businesses</span>
            </div>

            <h1 className="type-display text-navy-900 mb-8">
              <span className="block">Practical AI Solutions</span>
              <span className="block text-navy-700 font-semibold mt-3">for Local Small Businesses</span>
            </h1>

            <p className="type-body measure-body mb-12 text-navy-600">
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
              <p className="type-caption measure-body pt-2 font-medium text-navy-600">
                No pressure. If it's not a fit, you'll still get 2–3 helpful suggestions.
              </p>
            </div>

            <ul className="grid md:grid-cols-3 gap-5 max-w-5xl mt-14">
              {[
                'Reduce admin work and manual tasks',
                'Create better content in less time',
                'Get monthly AI insights you can use',
              ].map((item) => (
                <li
                  key={item}
                  className="p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-navy-100/50"
                >
                  <p className="type-body text-base font-semibold text-navy-900">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="asymmetric-right mt-20 pt-8 border-t border-navy-200/50">
            <div className="flex flex-wrap items-center gap-4 type-caption">
              <span className="font-semibold text-navy-900">Serving Toronto & GTA</span>
              <span className="text-navy-400">•</span>
              <span className="text-navy-600">No long-term contracts</span>
              <span className="text-navy-400">•</span>
              <span className="text-navy-600">30-day notice</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}
