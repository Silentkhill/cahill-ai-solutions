export default function WhoThisIsFor() {
  const businessTypes = [
    'Salons & Studios',
    'Clinics & Wellness',
    'Cafés & Restaurants',
    'Trades & Services',
    'Schools & Education',
    'Retail & Local Shops',
  ]

  return (
    <section id="who-this-is-for" className="section-padding bg-subtle relative">
      {/* Subtle noise layer that clears */}
      <div className="noise-layer clarity" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Asymmetric layout */}
          <div className="asymmetric-left mb-12">
            <h2 className="text-headline text-navy-900 mb-4">
              Who This Is For
            </h2>
            <p className="text-subhead max-w-2xl">
              Cahill AI Solutions works best with owner-led local businesses that want practical improvements, not experimental tech.
            </p>
          </div>
          
          {/* Simple, clean grid - now 6 items for uniform layout */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {businessTypes.map((type, index) => (
              <div
                key={index}
                className="card-focused p-4 text-center fade-in-slow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-navy-900 font-medium">{type}</p>
              </div>
            ))}
          </div>
          
          {/* Bottom line - clear and direct */}
          <div className="card-focused p-6 bg-white">
            <p className="text-base text-navy-700 leading-relaxed">
              If you are <span className="font-semibold text-navy-900">busy, non-technical, and want simple systems that work</span>, this is for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
