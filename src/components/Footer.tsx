import { Mail, MapPin } from 'lucide-react'

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

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Cahill AI Solutions</h3>
            <p className="text-navy-300 mb-4">
              Practical AI solutions for Toronto small businesses.
            </p>
            <div className="space-y-2 text-sm text-navy-300">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Toronto, Ontario</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:info@cahillaisolutions.com"
                  className="hover:text-white transition-colors"
                >
                  info@cahillaisolutions.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-navy-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serving</h4>
            <p className="text-navy-300 text-sm mb-4">
              Toronto and the Greater Toronto Area (GTA)
            </p>
            <p className="text-navy-400 text-xs">
              © {new Date().getFullYear()} Cahill AI Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

