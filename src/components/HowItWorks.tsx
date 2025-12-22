export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <h2 className="text-headline text-navy-900 mb-4">
            How It Works
          </h2>
          <p className="text-subhead text-navy-600">
            A simple, practical process: <span className="font-semibold text-navy-900">AI Foundations</span> (one-time)
            <span className="mx-2 text-navy-400">→</span>
            <span className="font-semibold text-navy-900">AI Operations</span> (monthly).
          </p>
        </div>

        {/* Phase labels */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="card-premium p-6">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold text-navy-600 uppercase tracking-wider">Phase 1</p>
                <span className="rounded-full bg-navy-100 px-4 py-1.5 text-xs font-semibold text-navy-700">
                  AI Foundations (one-time)
                </span>
              </div>

              {/* Timeline */}
              <div className="space-y-6">
                <div className="relative pl-10">
                  <div className="absolute left-3 top-2 h-full w-px bg-navy-200" />
                  <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-navy-200 bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">Discover</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-navy-700">
                    <li>Map your workflow and bottlenecks</li>
                    <li>Identify 3–5 high-impact AI opportunities</li>
                    <li>Choose the simplest starting point</li>
                  </ul>
                </div>

                <div className="relative pl-10">
                  <div className="absolute left-3 top-2 h-full w-px bg-navy-200" />
                  <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-navy-200 bg-white">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-500" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900">Implement</h3>
                  <ul className="mt-2 space-y-1.5 text-sm text-navy-700">
                    <li>Set up practical workflows tailored to your business</li>
                    <li>Create reusable templates and simple handoff notes</li>
                    <li>Ensure everything fits how you already work</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card-premium p-6 bg-gradient-to-b from-navy-50/50 to-white">
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm font-semibold text-navy-600 uppercase tracking-wider">Phase 2</p>
                <span className="rounded-full bg-navy-900 px-4 py-1.5 text-xs font-semibold text-white">
                  AI Operations (monthly)
                </span>
              </div>

              <div className="mb-6 rounded-xl border border-navy-200 bg-white p-5">
                <h3 className="text-lg font-bold text-navy-900 mb-3">Improve Monthly</h3>
                <ul className="space-y-1.5 text-sm text-navy-700">
                  <li>Monthly insights summary in plain language</li>
                  <li>Ongoing refinements and new quick wins</li>
                  <li>Small improvements that compound over time</li>
                </ul>
              </div>

              {/* Trust bar */}
              <div className="grid gap-2 rounded-xl border border-navy-200 bg-white p-4 text-sm text-navy-700">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-navy-300" />
                  <span>No long contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-navy-300" />
                  <span>Privacy-first</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-navy-300" />
                  <span>Clear communication at every step</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
