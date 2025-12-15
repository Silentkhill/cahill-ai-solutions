import { FileText, TrendingUp, Users, MousePointerClick } from 'lucide-react'

export default function MonthlyInsights() {
  return (
    <section id="monthly-insights" className="section-padding bg-navy-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Monthly AI Insights
            </h2>
            <p className="text-lg text-navy-700">
              Simple reports that help you make better decisions.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-14 mb-10 border border-navy-100/50 overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-100/30 to-transparent rounded-bl-full"></div>
            <div className="relative flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="text-accent-700" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-navy-900">
                Sample Monthly Report
              </h3>
            </div>

            <div className="relative space-y-6 mb-8">
              <div className="border-l-4 border-accent-500 pl-6 py-3 bg-gradient-to-r from-accent-50/50 to-transparent rounded-r-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-accent-700" size={20} />
                  </div>
                  <h4 className="font-bold text-navy-900 text-lg">Traffic Trends</h4>
                </div>
                <p className="text-navy-700 text-base ml-13">
                  Website visits increased 15% this month. Your "Services" page is getting the most attention—consider adding more detail there.
                </p>
              </div>

              <div className="border-l-4 border-accent-500 pl-6 py-3 bg-gradient-to-r from-accent-50/50 to-transparent rounded-r-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <MousePointerClick className="text-accent-700" size={20} />
                  </div>
                  <h4 className="font-bold text-navy-900 text-lg">Conversion Opportunities</h4>
                </div>
                <p className="text-navy-700 text-base ml-13">
                  Contact form submissions are steady, but many visitors leave before reaching it. Try moving your contact form higher on the page.
                </p>
              </div>

              <div className="border-l-4 border-accent-500 pl-6 py-3 bg-gradient-to-r from-accent-50/50 to-transparent rounded-r-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                    <Users className="text-accent-700" size={20} />
                  </div>
                  <h4 className="font-bold text-navy-900 text-lg">Content Ideas</h4>
                </div>
                <p className="text-navy-700 text-base ml-13">
                  Based on search trends in your area, consider creating content about "eco-friendly options" and "same-day service."
                </p>
              </div>
            </div>

            <div className="bg-navy-50 rounded-lg p-4">
              <h4 className="font-semibold text-navy-900 mb-2">This Month's Action Items</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm text-navy-700">
                <li>Update Services page with more detail about your process</li>
                <li>Move contact form to appear earlier on mobile devices</li>
                <li>Add a blog post about eco-friendly options</li>
                <li>Update Google Business Profile with recent customer photos</li>
                <li>Test a new call-to-action button colour</li>
              </ol>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-navy-200">
            <h4 className="font-semibold text-navy-900 mb-3">How It Works</h4>
            <p className="text-navy-700 text-sm leading-relaxed mb-3">
              We track simple website signals like traffic trends, popular pages, conversions (when available), form submissions, and call clicks. We summarize everything in a clear monthly report with 3–5 actionable recommendations.
            </p>
            <p className="text-navy-600 text-sm italic">
              Note: The insights we can provide depend on what tracking is installed and what platforms your business uses. We'll work with what you have and suggest improvements over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

