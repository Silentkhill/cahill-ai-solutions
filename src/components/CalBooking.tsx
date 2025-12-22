import { Calendar, ExternalLink } from 'lucide-react'

interface CalBookingProps {
  /**
   * Your Cal.com username or booking link
   * Format: https://cal.com/your-username or just "your-username"
   */
  calLink?: string
  /**
   * Full Cal.com embed URL (if using embed method)
   * Format: https://cal.com/your-username/30min?embed=true
   */
  embedUrl?: string
  /**
   * Whether to show as embed or button link
   */
  mode?: 'embed' | 'button' | 'inline'
  /**
   * Button text
   */
  buttonText?: string
  /**
   * Custom styling
   */
  className?: string
}

export default function CalBooking({
  calLink,
  embedUrl,
  mode = 'button',
  buttonText = 'Book a Free Consultation',
  className = '',
}: CalBookingProps) {
  // Generate Cal.com URL
  const getCalUrl = () => {
    if (embedUrl) return embedUrl
    if (calLink) {
      // If it's already a full URL, use it
      if (calLink.startsWith('http')) {
        return calLink
      }
      // Otherwise, construct the URL
      return `https://cal.com/${calLink.replace(/^\/+|\/+$/g, '')}`
    }
    return null
  }

  const calUrl = getCalUrl()
  const embedCalUrl = embedUrl || (calLink ? `${getCalUrl()}?embed=true` : null)

  if (!calUrl) {
    console.warn('CalBooking: Please provide either calLink or embedUrl prop')
    return null
  }

  // Embed mode - shows Cal.com widget inline
  if (mode === 'embed' && embedCalUrl) {
    return (
      <div className={`w-full ${className}`}>
        <div className="card-premium p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-500 to-accent-600 opacity-5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-900">Book Your Free Consultation</h3>
                <p className="text-sm text-navy-600">Choose a time that works for you</p>
              </div>
            </div>
            <div className="mt-6">
              <iframe
                src={embedCalUrl}
                style={{
                  width: '100%',
                  height: '700px',
                  border: 'none',
                  borderRadius: '12px',
                }}
                title="Cal.com Booking"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Inline mode - shows button that opens Cal.com in new tab
  if (mode === 'inline') {
    return (
      <div className={`w-full ${className}`}>
        <a
          href={calUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full flex items-center justify-center gap-3 group"
        >
          <Calendar size={20} />
          <span>{buttonText}</span>
          <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    )
  }

  // Button mode (default) - floating or inline button
  return (
    <a
      href={calUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-primary inline-flex items-center gap-3 group ${className}`}
    >
      <Calendar size={20} />
      <span>{buttonText}</span>
      <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
    </a>
  )
}

