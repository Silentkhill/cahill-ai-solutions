import { FileText, TrendingUp, MousePointerClick, Users, ArrowRight } from 'lucide-react'

// Transform monthly insights into a visual product - make it feel tangible
export default function MonthlyInsights() {
  return (
    <section id="monthly-insights" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Headline - product-focused */}
          <div className="asymmetric-left mb-12">
            <h2 className="text-headline text-navy-900 mb-4">
              Your Monthly Insight Report
            </h2>
            <p className="text-subhead max-w-2xl">
              Not a dashboard. Not analytics. A clear, actionable report written in plain language.
            </p>
          </div>

          {/* Visual product - make it feel like something you receive */}
          <div className="card-focused p-10 md:p-12 relative overflow-hidden">
            {/* Subtle product-like border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-500"></div>
            
            {/* Report header - feels like a document */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-navy-100">
              <div className="w-14 h-14 bg-accent-100 rounded-lg flex items-center justify-center">
                <FileText className="text-accent-600" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-navy-900">Monthly Insight Report</h3>
                <p className="text-sm text-navy-600">December 2024 • For Your Business</p>
              </div>
            </div>

            {/* Insights as clear sections */}
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="text-blue-600" size={20} />
                  <h4 className="font-semibold text-navy-900">What improved this month</h4>
                </div>
                <p className="text-sm text-navy-700 leading-relaxed">
                  Website visits increased <span className="font-semibold text-green-600">15%</span> this month. Your "Services" page is getting the most attention - consider adding more detail there.
                </p>
              </div>

              <div className="border-l-4 border-accent-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <MousePointerClick className="text-accent-600" size={20} />
                  <h4 className="font-semibold text-navy-900">What slowed things down</h4>
                </div>
                <p className="text-sm text-navy-700 leading-relaxed">
                  Contact form submissions are steady, but many visitors leave before reaching it. Try moving your contact form higher on the page.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="text-green-600" size={20} />
                  <h4 className="font-semibold text-navy-900">Quick wins for next month</h4>
                </div>
                <p className="text-sm text-navy-700 leading-relaxed">
                  Based on search trends in your area, consider creating content about "eco-friendly options" and "same-day service."
                </p>
              </div>
            </div>

            {/* Action items - feels like a checklist */}
            <div className="mt-10 pt-8 border-t-2 border-navy-100">
              <h4 className="font-semibold text-navy-900 mb-4">This month's action items</h4>
              <ol className="space-y-2 text-sm text-navy-700 ml-4">
                <li className="list-decimal">Update Services page with more detail</li>
                <li className="list-decimal">Move contact form higher on mobile</li>
                <li className="list-decimal">Add blog post about eco-friendly options</li>
                <li className="list-decimal">Update Google Business Profile</li>
              </ol>
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-6 border-t border-navy-100">
              <p className="text-xs text-navy-600 italic">
                All insights written in plain language - no technical jargon.
              </p>
            </div>
          </div>

          {/* CTA to see this in action */}
          <div className="mt-10 text-center">
            <button
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="btn-secondary inline-flex items-center gap-2"
            >
              Get your first report
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
