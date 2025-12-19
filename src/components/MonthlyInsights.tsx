import { FileText, TrendingUp, Users, MousePointerClick, Sparkles } from 'lucide-react'

export default function MonthlyInsights() {
  return (
    <section id="monthly-insights" className="section-padding bg-gradient-to-b from-navy-50 via-white to-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[600px] h-[600px] bg-accent-200/15 absolute top-1/4 -right-64"></div>
        <div className="blob-bg w-[500px] h-[500px] bg-blue-100/10 absolute bottom-1/4 -left-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="text-accent-600 w-8 h-8" />
              <span className="text-5xl sm:text-6xl font-black text-navy-900">Monthly AI</span>
              <span className="text-5xl sm:text-6xl font-black text-gradient">Insights</span>
            </div>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
              Simple reports that help you make better decisions.
            </p>
          </div>

          {/* Creative report card */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 mb-12 border-2 border-navy-100/50 relative overflow-hidden card-creative">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-accent-100/30 to-transparent rounded-bl-full blur-2xl"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent-200/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              {/* Header */}
              <div className="flex items-center gap-5 mb-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center shadow-2xl">
                  <FileText className="text-accent-700" size={36} />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-navy-900 mb-1">
                    Sample Monthly Report
                  </h3>
                  <p className="text-navy-600 text-sm">December 2024</p>
                </div>
              </div>

              {/* Insights */}
              <div className="space-y-6 mb-10">
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50/50 to-transparent rounded-r-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <h4 className="font-black text-navy-900 text-xl">Traffic Trends</h4>
                  </div>
                  <p className="text-navy-700 text-base leading-relaxed ml-16">
                    Website visits increased <span className="font-bold text-green-600">15%</span> this month. Your "Services" page is getting the most attention—consider adding more detail there.
                  </p>
                </div>

                <div className="border-l-4 border-accent-500 pl-6 py-4 bg-gradient-to-r from-accent-50/50 to-transparent rounded-r-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                      <MousePointerClick className="text-white" size={24} />
                    </div>
                    <h4 className="font-black text-navy-900 text-xl">Conversion Opportunities</h4>
                  </div>
                  <p className="text-navy-700 text-base leading-relaxed ml-16">
                    Contact form submissions are steady, but many visitors leave before reaching it. Try moving your contact form higher on the page.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-gradient-to-r from-purple-50/50 to-transparent rounded-r-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Users className="text-white" size={24} />
                    </div>
                    <h4 className="font-black text-navy-900 text-xl">Content Ideas</h4>
                  </div>
                  <p className="text-navy-700 text-base leading-relaxed ml-16">
                    Based on search trends in your area, consider creating content about "eco-friendly options" and "same-day service."
                  </p>
                </div>
              </div>

              {/* Action items */}
              <div className="bg-gradient-to-br from-navy-50 to-accent-50/30 rounded-2xl p-6 border-2 border-navy-100">
                <h4 className="font-black text-navy-900 mb-4 text-xl flex items-center gap-2">
                  <span className="w-8 h-8 bg-accent-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">✓</span>
                  This Month's Action Items
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-base text-navy-700 ml-2">
                  <li>Update Services page with more detail about your process</li>
                  <li>Move contact form to appear earlier on mobile devices</li>
                  <li>Add a blog post about eco-friendly options</li>
                  <li>Update Google Business Profile with recent customer photos</li>
                  <li>Test a new call-to-action button colour</li>
                </ol>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 border-2 border-navy-100 shadow-xl">
            <h4 className="font-black text-navy-900 mb-4 text-2xl">How It Works</h4>
            <p className="text-navy-700 text-lg leading-relaxed mb-4">
              We track simple website signals like traffic trends, popular pages, conversions (when available), form submissions, and call clicks. We summarize everything in a clear monthly report with 3–5 actionable recommendations.
            </p>
            <p className="text-navy-600 text-base italic bg-navy-50/50 p-4 rounded-xl border border-navy-100">
              Note: The insights we can provide depend on what tracking is installed and what platforms your business uses. We'll work with what you have and suggest improvements over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
