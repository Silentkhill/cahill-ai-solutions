export default function WhoThisIsFor() {
  const businessTypes = [
    'Salons & Studios',
    'Clinics & Wellness',
    'Cafés & Restaurants',
    'Trades & Services',
    'Schools & Education',
  ]

  return (
    <section id="who-this-is-for" className="section-padding bg-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
            Who This Is For
          </h2>
          <p className="text-lg text-navy-700 mb-8 leading-relaxed">
            Cahill AI Solutions works best with owner-led local businesses that want practical improvements — not experimental tech.
          </p>
          
          {/* Simple grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="card-simple p-4 text-center"
              >
                <p className="text-navy-900 font-medium">{type}</p>
              </div>
            ))}
          </div>
          
          {/* Bottom line reassurance */}
          <div className="bg-white rounded-lg p-6 border border-navy-100">
            <p className="text-base text-navy-700 leading-relaxed">
              If you are <span className="font-semibold text-navy-900">busy, non-technical, and want simple systems that work</span> — this is for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
