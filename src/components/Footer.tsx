import { Mail, MapPin, Sparkles, ArrowUp } from 'lucide-react'

const footerLinks = [
  { label: 'What This Does', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Examples', href: '#use-cases' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[600px] h-[600px] bg-accent-500/5 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="blob-bg w-[400px] h-[400px] bg-blue-500/5 absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container-custom py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-accent-500 w-6 h-6" />
              <h3 className="text-2xl font-black">Cahill AI Solutions</h3>
            </div>
            <p className="text-navy-300 mb-6 leading-relaxed">
              Practical AI solutions for Toronto small businesses.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-accent-400" />
                </div>
                <span className="text-navy-300">Toronto, Ontario</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                  <Mail size={16} className="text-accent-400" />
                </div>
                <a
                  href="mailto:info@cahillaisolutions.com"
                  className="text-navy-300 hover:text-accent-400 transition-colors"
                >
                  info@cahillaisolutions.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-navy-300 hover:text-accent-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Serving</h4>
            <p className="text-navy-300 text-sm mb-6 leading-relaxed">
              Toronto and the Greater Toronto Area (GTA)
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-3 bg-accent-500/20 hover:bg-accent-500/30 rounded-xl transition-all duration-300 text-sm font-semibold group"
              aria-label="Back to top"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            © {new Date().getFullYear()} Cahill AI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-navy-400">
            <span>Made with</span>
            <span className="text-accent-500">♥</span>
            <span>in Toronto</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
