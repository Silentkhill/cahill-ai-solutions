import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'What This Does', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services', href: '#services' },
  { label: 'Examples', href: '#use-cases' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="text-xl font-bold text-navy-900 hover:text-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded"
            aria-label="Cahill AI Solutions - Home"
          >
            Cahill AI Solutions
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-navy-700 hover:text-accent-600 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            >
              Book Consult
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-navy-700 hover:text-accent-600 transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors text-center font-medium mt-4"
            >
              Book Consult
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

