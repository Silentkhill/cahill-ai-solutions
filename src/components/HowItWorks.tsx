import { useState, useEffect, useRef } from 'react'
import { Search, BarChart3 } from 'lucide-react'

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null)
  const [noiseClass, setNoiseClass] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNoiseClass('clarity')
        } else {
          setNoiseClass('')
        }
      },
      { threshold: 0.1 }
    )

    const currentSection = sectionRef.current
    if (currentSection) {
      observer.observe(currentSection)
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection)
      }
    }
  }, [])

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-white via-navy-50/20 to-white relative overflow-hidden" ref={sectionRef}>
      <div className={`noise-layer ${noiseClass}`} />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-6">
              <span className="type-caption font-semibold text-accent-900">Our Process</span>
            </div>
            <h2 className="type-h1 text-navy-900 mb-4">How It Works</h2>
            <p className="type-body measure-body mx-auto text-navy-600">A simple, practical process that starts small and improves monthly.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <article className="card-premium p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Search className="text-white" size={22} />
                  </div>
                  <h3 className="type-h2 text-navy-900">Phase 1: AI Foundations</h3>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 type-caption font-semibold text-blue-900">One-time</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 type-body text-navy-700 measure-body">
                <li>Map your workflow and identify bottlenecks.</li>
                <li>Prioritize 3–5 high-impact AI opportunities.</li>
                <li>Set up practical workflows and reusable templates.</li>
                <li>Document the setup so your team can use it confidently.</li>
              </ul>
            </article>

            <article className="card-premium p-8">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                    <BarChart3 className="text-white" size={22} />
                  </div>
                  <h3 className="type-h2 text-navy-900">Phase 2: AI Operations</h3>
                </div>
                <span className="rounded-full bg-accent-100 px-3 py-1 type-caption font-semibold text-accent-900">Monthly</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 type-body text-navy-700 measure-body">
                <li>Review results in plain language each month.</li>
                <li>Apply small improvements that compound over time.</li>
                <li>Refine prompts, automations, and workflows as needs change.</li>
                <li>No long contracts, with privacy-first implementation.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
