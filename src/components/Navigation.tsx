import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Offer', href: '#services' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#services')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => ({ href: item.href, element: document.querySelector(item.href) }))
      .filter((item): item is { href: string; element: Element } => item.element !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          const href = `#${visibleSections[0].target.id}`
          setActiveSection(href)
        }
      },
      {
        threshold: [0.2, 0.4, 0.6],
        rootMargin: '-25% 0px -45% 0px',
      }
    )

    sections.forEach(({ element }) => observer.observe(element))

    return () => observer.disconnect()
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-navy-100/50 py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
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
            className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label="Cahill AI Solutions - Home"
          >
            <img 
              src="/Logo.png" 
              alt="Cahill AI Solutions" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-extrabold text-navy-900 bg-gradient-to-r from-navy-900 to-navy-700 bg-clip-text text-transparent hover:from-accent-600 hover:to-accent-700 transition-all hidden sm:inline-block">
              Cahill AI Solutions
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={activeSection === item.href ? 'page' : undefined}
                className={`text-sm font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 rounded-lg px-3 py-2 ${
                  activeSection === item.href
                    ? 'text-accent-700 bg-accent-50'
                    : 'text-navy-700 hover:text-accent-600'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2.5 bg-accent-600 text-white rounded-xl hover:bg-accent-700 transition-colors duration-200 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
            >
              Get Your Free AI Opportunity Review
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy-900 hover:bg-navy-100 rounded-xl transition-all duration-300 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-fadeInScale">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                aria-current={activeSection === item.href ? 'page' : undefined}
                className={`block px-4 py-3 rounded-xl transition-colors duration-200 font-medium ${
                  activeSection === item.href
                    ? 'text-accent-700 bg-accent-50'
                    : 'text-navy-700 hover:text-accent-600 hover:bg-accent-50'
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block px-4 py-3 bg-accent-600 hover:bg-accent-700 transition-colors duration-200 text-white rounded-xl text-center font-bold mt-2"
            >
              Get Your Free AI Opportunity Review
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
