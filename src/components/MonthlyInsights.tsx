import { FileText, TrendingUp, MousePointerClick, Users } from 'lucide-react'

export default function MonthlyInsights() {
  return (
    <section id="monthly-insights" className="section-padding bg-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Example Monthly Insights
            </h2>
            <p className="text-base text-navy-700 max-w-2xl mx-auto">
              Simple reports that help you make better decisions. All insights are written in plain language — no technical jargon.
            </p>
          </div>

          {/* Sample report card */}
          <div className="card-simple p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center">
                <FileText className="text-accent-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900">
                  Sample Monthly Report
                </h3>
                <p className="text-sm text-navy-600">December 2024</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="text-blue-600" size={20} />
                  <h4 className="font-semibold text-navy-900">What improved this month</h4>
                </div>
                <p className="text-sm text-navy-700">
                  Website visits increased 15% this month. Your "Services" page is getting the most attention—consider adding more detail there.
                </p>
              </div>

              <div className="border-l-4 border-accent-500 pl-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <MousePointerClick className="text-accent-600" size={20} />
                  <h4 className="font-semibold text-navy-900">What slowed things down</h4>
                </div>
                <p className="text-sm text-navy-700">
                  Contact form submissions are steady, but many visitors leave before reaching it. Try moving your contact form higher on the page.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="text-green-600" size={20} />
                  <h4 className="font-semibold text-navy-900">Quick wins for next month</h4>
                </div>
                <p className="text-sm text-navy-700">
                  Based on search trends in your area, consider creating content about "eco-friendly options" and "same-day service."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
