import { useState, useEffect, useRef } from 'react'
import { Search, Wrench, BarChart3, Check } from 'lucide-react'

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="how-it-works" className="section-padding bg-gradient-to-br from-white via-navy-50/20 to-white relative overflow-hidden" ref={sectionRef}>
      <div className={`noise-layer ${noiseClass}`} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced headline - centered like other sections */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-6">
              <span className="text-sm font-semibold text-accent-900">Our Process</span>
            </div>
            <h2 className="text-headline text-navy-900 mb-6">
              How It Works
            </h2>
            <p className="text-subhead max-w-3xl mx-auto text-navy-600">
              A simple, practical process: <span className="font-semibold text-navy-900">AI Foundations</span> (one-time)
              <span className="mx-2 text-navy-400">→</span>
              <span className="font-semibold text-navy-900">AI Operations</span> (monthly).
            </p>
          </div>

          {/* Two-phase layout with consistent styling */}
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Phase 1: AI Foundations */}
            <div className="lg:col-span-7">
              <div className="card-premium p-8 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500 to-blue-600 opacity-5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                        <Search className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-wider">Phase 1</p>
                        <p className="text-sm font-semibold text-navy-900">AI Foundations</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold text-blue-900">
                      One-time
                    </span>
                  </div>

                  {/* Timeline steps */}
                  <div className="space-y-8">
                    <div className="relative pl-12">
                      <div className="absolute left-4 top-3 h-full w-0.5 bg-gradient-to-b from-blue-200 to-blue-300" />
                      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg border-2 border-white">
                        <span className="h-3 w-3 rounded-full bg-white" />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Discover</h3>
                      <ul className="space-y-2 text-base text-navy-700">
                        <li className="flex items-start gap-2">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>Map your workflow and bottlenecks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>Identify 3–5 high-impact AI opportunities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>Choose the simplest starting point</span>
                        </li>
                      </ul>
                    </div>

                    <div className="relative pl-12">
                      <div className="absolute left-4 top-3 h-full w-0.5 bg-gradient-to-b from-blue-200 to-blue-300" />
                      <div className="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg border-2 border-white">
                        <Wrench className="text-white" size={16} />
                      </div>
                      <h3 className="text-xl font-bold text-navy-900 mb-3">Implement</h3>
                      <ul className="space-y-2 text-base text-navy-700">
                        <li className="flex items-start gap-2">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>Set up practical workflows tailored to your business</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>Create reusable templates and simple handoff notes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                          <span>Ensure everything fits how you already work</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: AI Operations */}
            <div className="lg:col-span-5">
              <div className="card-premium p-8 relative overflow-hidden h-full">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent-500 to-accent-600 opacity-5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                        <BarChart3 className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-navy-600 uppercase tracking-wider">Phase 2</p>
                        <p className="text-sm font-semibold text-navy-900">AI Operations</p>
                      </div>
                    </div>
                    <span className="rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold text-accent-900">
                      Monthly
                    </span>
                  </div>

                  <div className="mb-8 rounded-xl border border-navy-100 bg-gradient-to-br from-accent-50/30 to-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="text-white" size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-navy-900">Improve Monthly</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-navy-700">
                      <li className="flex items-start gap-2">
                        <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>Monthly insights summary in plain language</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>Ongoing refinements and new quick wins</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="text-accent-600 flex-shrink-0 mt-0.5" size={16} />
                        <span>Small improvements that compound over time</span>
                      </li>
                    </ul>
                  </div>

                  {/* Trust indicators */}
                  <div className="rounded-xl border border-navy-100 bg-white/80 backdrop-blur-sm p-5 space-y-3">
                    <p className="text-xs font-bold text-navy-600 uppercase tracking-wider mb-2">Trust & Transparency</p>
                    <div className="space-y-2 text-sm text-navy-700">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-500" />
                        <span>No long contracts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-500" />
                        <span>Privacy-first</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-500" />
                        <span>Clear communication at every step</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
