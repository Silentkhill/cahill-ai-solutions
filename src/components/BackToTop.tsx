import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-4 sm:right-8 z-40 w-12 h-12 bg-accent-600 text-white rounded-full shadow-lg hover:bg-accent-700 transition-all duration-200 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent-300"
      aria-label="Back to top"
    >
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  )
}

