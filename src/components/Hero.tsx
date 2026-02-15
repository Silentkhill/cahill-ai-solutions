import { ArrowRight, Sparkles, Zap, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const demoScenarios = [
  {
    label: 'Appointment follow-up',
    before: {
      title: 'Manual process',
      time: '~45 min',
      steps: ['Export yesterday\'s bookings', 'Write each reminder by hand', 'Send and log replies in a spreadsheet'],
    },
    after: {
      title: 'AI-assisted process',
      time: '~10 min',
      steps: ['Auto-pull appointment list', 'Generate personalized reminder drafts', 'Review once and send with one click'],
    },
    kpi: '~45 min task reduced to ~10 min',
  },
  {
    label: 'Social post drafting',
    before: {
      title: 'Manual process',
      time: '~50 min',
      steps: ['Brainstorm post ideas', 'Write, edit, and rewrite captions', 'Choose CTA and hashtags manually'],
    },
    after: {
      title: 'AI-assisted process',
      time: '~15 min',
      steps: ['Pick promotion goal', 'Generate 3 brand-aligned caption options', 'Approve best draft and schedule'],
    },
    kpi: '~50 min task reduced to ~15 min',
  },
  {
    label: 'Monthly insights summary',
    before: {
      title: 'Manual process',
      time: '~60 min',
      steps: ['Collect POS and ad channel exports', 'Build a monthly summary in docs', 'Manually list next actions for staff'],
    },
    after: {
      title: 'AI-assisted process',
      time: '~20 min',
      steps: ['Combine sales + campaign data automatically', 'Generate plain-language highlights', 'Share prioritized actions with the team'],
    },
    kpi: '~60 min task reduced to ~20 min',
  },
]

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeScenario, setActiveScenario] = useState(0)
  const [isAfterState, setIsAfterState] = useState(true)

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
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
    }
  }

  const scenario = demoScenarios[activeScenario]
  const processState = isAfterState ? scenario.after : scenario.before

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background kept calmer so attention stays on demo */}
      <div className="accent-blob accent-blob-1 opacity-70" />
      <div className="accent-blob accent-blob-2 opacity-60" />

      <div className={`noise-layer ${scrollProgress > 0.1 ? 'clarity' : ''}`} style={{ opacity: 0.5 - scrollProgress * 0.4 }} />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="asymmetric-left mb-16 fade-in-slow">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-8 fade-in-scale"
              style={{ animationDelay: '0.2s' }}
            >
              <Sparkles className="text-accent-600" size={16} />
              <span className="text-sm font-semibold text-accent-900">Practical AI for Local Businesses</span>
            </div>

            <h1 className="text-display text-navy-900 mb-8 leading-none">
              <span className="block">Practical AI</span>
              <span className="block text-gradient mt-2">Solutions</span>
              <span className="block text-navy-700 text-5xl sm:text-6xl md:text-7xl mt-4 font-light">for Local Small Businesses</span>
            </h1>

            <p className="text-subhead max-w-3xl mb-12 text-navy-600">
              Save time, improve marketing, and make smarter decisions without hype or technical overwhelm.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
              <button onClick={scrollToContact} className="btn-primary inline-flex items-center gap-3 group glow-accent-hover">
                <span>Get a Free AI Opportunity Review</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="pt-2">
                <p className="text-sm text-navy-600 font-medium">
                  No pressure. If it's not a fit, you'll still get 2–3 helpful suggestions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mt-16">
              {[
                { icon: Zap, text: 'Reduce admin work and manual tasks' },
                { icon: TrendingUp, text: 'Get monthly AI insights you can use' },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-navy-100/50 fade-in-scale"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="text-sm font-semibold text-navy-900">{item.text}</p>
                  </div>
                )
              })}

              <div
                className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-accent-200/60 shadow-lg fade-in-scale"
                style={{ animationDelay: '0.6s' }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-navy-600 mb-3">Interactive demo</p>

                <div className="flex flex-wrap gap-2 mb-4" role="tablist" aria-label="Business task scenarios">
                  {demoScenarios.map((item, index) => (
                    <button
                      key={item.label}
                      role="tab"
                      type="button"
                      aria-selected={activeScenario === index}
                      aria-controls="hero-demo-panel"
                      onClick={() => setActiveScenario(index)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors motion-reduce:transition-none ${
                        activeScenario === index
                          ? 'bg-accent-600 border-accent-600 text-white'
                          : 'bg-white border-navy-200 text-navy-700 hover:border-accent-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="text-xs font-semibold text-navy-700">Before</span>
                  <input
                    aria-label="Toggle between before and after process"
                    type="range"
                    min={0}
                    max={1}
                    step={1}
                    value={isAfterState ? 1 : 0}
                    onChange={(event) => setIsAfterState(event.target.value === '1')}
                    className="w-28 accent-accent-600"
                  />
                  <span className="text-xs font-semibold text-accent-700">After</span>
                </div>

                <div id="hero-demo-panel" role="tabpanel" aria-live="polite" className="rounded-lg border border-navy-100 bg-white p-3">
                  <div
                    key={`${activeScenario}-${isAfterState ? 'after' : 'before'}`}
                    className="transition-all duration-300 ease-out motion-reduce:transition-none"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-semibold text-navy-900">{processState.title}</p>
                      <p className="text-sm font-semibold text-accent-700">{processState.time}</p>
                    </div>
                    <ul className="space-y-1.5">
                      {processState.steps.map((step) => (
                        <li key={step} className="text-xs text-navy-700 leading-relaxed">
                          • {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-xs font-semibold text-navy-800 mt-3">{scenario.kpi}</p>
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="mt-2 text-sm font-semibold text-accent-700 hover:text-accent-800 underline underline-offset-2"
                >
                  Book a walkthrough for this exact workflow →
                </button>
              </div>
            </div>
          </div>

          <div className="asymmetric-right mt-20 pt-8 border-t border-navy-200/50">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                <span className="font-semibold text-navy-900">Serving Toronto & GTA</span>
              </div>
              <span className="text-navy-400">•</span>
              <span className="text-navy-600">No long-term contracts</span>
              <span className="text-navy-400">•</span>
              <span className="text-navy-600">Built to deliver week-one time savings like the demo above</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 motion-reduce:hidden">
        <div className="w-6 h-10 border-2 border-navy-300 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-accent-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
