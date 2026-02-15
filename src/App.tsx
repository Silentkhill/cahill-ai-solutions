import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import MonthlyInsights from './components/MonthlyInsights'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'


const businessTypes = [
  'Salons & Studios',
  'Clinics & Wellness',
  'Cafés & Restaurants',
  'Trades & Services',
  'Schools & Education',
  'Retail & Local Shops',
]

const trustPoints = [
  'Owner-led, practical implementation for busy local businesses',
  'Serving Toronto & GTA with clear communication and no jargon',
  'No long-term contracts (month-to-month with 30-day notice)',
]

const offerGroups = [
  {
    title: 'What we help with',
    items: [
      'Reduce repetitive admin and follow-up work',
      'Create better content and customer communication',
      'Turn business data into simple monthly decisions',
    ],
  },
  {
    title: 'How engagement works',
    items: [
      'Start with a focused AI opportunity review',
      'Set up the highest-impact workflows first',
      'Improve monthly with clear priorities and outcomes',
    ],
  },
]

const pricingHighlights = [
  'Foundations setup from $750 one-time',
  'Foundations Plus from $1,400 one-time',
  'Monthly support from $99/month',
]

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-600 focus:text-white focus:rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-300"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
        <Hero />

        <section id="proof" className="section-padding bg-subtle relative">
          <div className="noise-layer clarity" />
          <div className="container-custom relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-headline text-navy-900 mb-4">Who this is for + proof</h2>
              <p className="text-subhead max-w-3xl mx-auto text-navy-600">
                Built for owner-led local businesses that want practical wins quickly, not complex tech projects.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {businessTypes.map((type) => (
                <div key={type} className="card-focused p-4 text-center bg-white">
                  <p className="text-navy-900 font-medium">{type}</p>
                </div>
              ))}
            </div>

            <div className="card-focused p-8 bg-white">
              <h3 className="text-2xl font-bold text-navy-900 mb-4">Proof for cautious business owners</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent-600 mt-1" size={18} />
                    <p className="text-navy-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="offer" className="section-padding bg-white relative overflow-hidden">
          <div className="noise-layer clarity" />
          <div className="container-custom relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-headline text-navy-900 mb-4">Offer: clarity, setup, and steady improvement</h2>
              <p className="text-subhead max-w-3xl mx-auto text-navy-600">
                Everything needed to understand value quickly, without forcing you through long pages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {offerGroups.map((group) => (
                <article key={group.title} className="card-focused p-6 bg-white">
                  <h3 className="text-xl font-bold text-navy-900 mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-navy-700">
                        <CheckCircle2 className="text-accent-600 mt-1" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div id="pricing" className="card-focused p-6 bg-navy-50/50">
              <h3 className="text-xl font-bold text-navy-900 mb-3">Pricing essentials</h3>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {pricingHighlights.map((item) => (
                  <p key={item} className="text-sm font-semibold text-navy-800 bg-white rounded-lg px-4 py-3 border border-navy-100">
                    {item}
                  </p>
                ))}
              </div>
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Start with a free AI review <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <Contact />

        <section className="section-padding bg-subtle relative">
          <div className="container-custom max-w-5xl mx-auto space-y-4">
            <details className="card-focused bg-white p-6">
              <summary className="cursor-pointer text-lg font-bold text-navy-900">See detailed process and full pricing</summary>
              <div className="mt-6 space-y-8">
                <HowItWorks />
                <Services />
              </div>
            </details>

            <details className="card-focused bg-white p-6">
              <summary className="cursor-pointer text-lg font-bold text-navy-900">See monthly report sample and deeper context</summary>
              <div className="mt-6 space-y-8">
                <MonthlyInsights />
                <About />
              </div>
            </details>

            <details className="card-focused bg-white p-6">
              <summary className="cursor-pointer text-lg font-bold text-navy-900">Read frequently asked questions</summary>
              <div className="mt-6">
                <FAQ />
              </div>
            </details>
          </div>
        </section>
      </main>
      <Footer />
      {showBackToTop && <BackToTop />}
      {/* ElevenLabs Voice Agent - Script loaded in index.html */}
    </div>
  )
}

export default App
