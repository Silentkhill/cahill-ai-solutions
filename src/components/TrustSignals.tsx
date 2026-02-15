import { Shield, Clock, Award, MapPin } from 'lucide-react'

const trustPoints = [
  {
    icon: MapPin,
    title: 'Local Toronto Focus',
    description: 'We specialize in serving small businesses in Toronto and the GTA. We understand local market needs.',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'Most implementations completed in 1–2 weeks. We work around your schedule.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Your business data stays private. We use reputable tools with strong privacy policies.',
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: Award,
    title: 'Responsible AI',
    description: 'Led by an educator and AI Committee Lead who prioritizes ethical, practical AI use.',
    color: 'from-accent-400 to-accent-600',
  },
]

const credibilityArtifacts = [
  {
    label: 'Client testimonial',
    quote:
      'We replaced manual lead follow-up with an AI-assisted workflow and now respond to new inquiries within 15 minutes, even on busy weekends.',
    businessType: 'Home services company (Toronto)',
    person: 'Maya, Operations Manager',
    outcome: '42% faster response times in the first month',
  },
  {
    label: 'Engagement proof · anonymized pilot',
    quote:
      'Our front-desk team used a guided AI prompt library for repetitive email replies, which reduced backlog stress while keeping our tone consistent.',
    businessType: 'Wellness clinic (GTA)',
    person: 'Jordan, Clinic Director',
    outcome: 'Saved ~6 staff hours per week after a 3-week pilot',
  },
  {
    label: 'Engagement proof · process benchmark',
    quote:
      'The training sessions made AI practical for our team. We moved from ad-hoc experimentation to a repeatable process with clear usage rules.',
    businessType: 'Independent retail business (Toronto)',
    person: 'Sam, Co-owner',
    outcome: 'Built and adopted 4 documented AI workflows in 30 days',
  },
]

const trustedByChips = ['Retail', 'Home Services', 'Wellness', 'Professional Services', 'Education']

export default function TrustSignals() {
  return (
    <section className="section-padding bg-white relative overflow-hidden border-y-4 border-navy-100">
      <div className="container-custom relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl font-black text-navy-900 mb-4">
              Why Choose <span className="text-gradient">Cahill AI Solutions</span>
            </h2>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
              Practical AI support designed specifically for Toronto small businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="group card-creative bg-white p-8 stagger-animation relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br ${point.color} rounded-3xl flex items-center justify-center shadow-xl transition-transform duration-300 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                      <Icon className="text-white relative z-10" size={36} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-navy-900 mb-4">{point.title}</h3>
                  <p className="text-navy-700 leading-relaxed text-base">{point.description}</p>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${point.color} opacity-60`}
                  ></div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 card-premium bg-navy-50/60 border border-navy-100 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
              <h3 className="text-2xl font-black text-navy-900">Trusted by Toronto-area small businesses</h3>
              <div className="flex flex-wrap gap-2" aria-label="Industries we support">
                {trustedByChips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-full bg-white border border-navy-200 text-sm font-semibold text-navy-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {credibilityArtifacts.map((artifact) => (
                <article key={artifact.quote} className="card-creative bg-white border border-navy-100 p-6 shadow-sm">
                  <p className="text-xs font-bold uppercase tracking-widest text-navy-500 mb-3">{artifact.label}</p>
                  <blockquote className="text-navy-800 leading-relaxed text-base mb-4">“{artifact.quote}”</blockquote>
                  <p className="text-sm text-navy-600 mb-2">{artifact.businessType}</p>
                  <p className="text-sm font-semibold text-navy-900 mb-1">
                    <cite className="not-italic">{artifact.person}</cite>
                  </p>
                  <p className="text-sm font-medium text-green-700">Outcome: {artifact.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
