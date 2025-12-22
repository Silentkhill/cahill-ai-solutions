import { useState } from 'react'
import { Send, Mail, Calendar } from 'lucide-react'
import CalBooking from './CalBooking'

const challenges = [
  'Too much admin work',
  'Struggling with content creation',
  'Need better customer communication',
  'Want to understand AI opportunities',
  'Other',
]

export default function Contact() {
  const [activeTab, setActiveTab] = useState<'form' | 'booking'>('form')
  const [meetingDuration, setMeetingDuration] = useState<'15min' | '30min'>('30min')
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    website: '',
    challenge: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', businessName: '', email: '', website: '', challenge: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-navy-50/30 to-accent-50/20 relative overflow-hidden">
      {/* Final clarity - noise fully resolved */}
      <div className="noise-layer clarity" />
      
      {/* Decorative blobs */}
      <div className="accent-blob accent-blob-1" style={{ top: '10%', right: '10%', opacity: 0.2 }} />
      <div className="accent-blob accent-blob-2" style={{ bottom: '10%', left: '10%', opacity: 0.15 }} />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Enhanced headline */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent-100/80 backdrop-blur-sm rounded-full border border-accent-200/50 mb-6">
              <span className="text-sm font-semibold text-accent-900">Let's Get Started</span>
            </div>
            <h2 className="text-headline text-navy-900 mb-6">
              Get Your Free AI Opportunity Review
            </h2>
            <p className="text-subhead text-navy-600 max-w-2xl mx-auto">
              Let's find out how AI can specifically help your business save time and grow.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex gap-4 mb-8 justify-center">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'form'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300'
              }`}
            >
              <Send size={18} className="inline mr-2" />
              Request Review
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'booking'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300'
              }`}
            >
              <Calendar size={18} className="inline mr-2" />
              Book a Call
            </button>
          </div>

          {/* Form Tab */}
          {activeTab === 'form' && (
            <div className="card-premium p-12 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-500 to-accent-600 opacity-5 rounded-full blur-3xl" />
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-900 mb-2">
                  Name <span className="text-accent-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all bg-white/80 backdrop-blur-sm ${
                    errors.name ? 'border-red-500' : 'border-navy-200 focus:border-accent-500'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="businessName" className="block text-sm font-semibold text-navy-900 mb-2">
                  Business name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all bg-white/80 backdrop-blur-sm"
                  placeholder="Your business name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy-900 mb-2">
                  Email <span className="text-accent-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 transition-all bg-white/80 backdrop-blur-sm ${
                    errors.email ? 'border-red-500' : 'border-navy-200 focus:border-accent-500'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-navy-900 mb-2">
                  Website <span className="text-navy-500 text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all bg-white/80 backdrop-blur-sm"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-semibold text-navy-900 mb-2">
                  Biggest challenge
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all bg-white/80 backdrop-blur-sm"
                >
                  <option value="">Select a challenge...</option>
                  {challenges.map((challenge) => (
                    <option key={challenge} value={challenge}>
                      {challenge}
                    </option>
                  ))}
                </select>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 text-sm font-medium">
                    ✓ Thank you! We've received your request and will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    Something went wrong. Please try again or email us directly.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed glow-accent-hover"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Request Review</span>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-center text-sm text-navy-600">
                <Mail size={14} className="inline mr-1" />
                Your information is never shared.
              </p>
            </form>
          </div>
          )}

          {/* Booking Tab */}
          {activeTab === 'booking' && (
            <div className="space-y-6">
              {/* Duration selector */}
              <div className="flex gap-4 justify-center mb-6">
                <button
                  onClick={() => setMeetingDuration('15min')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    meetingDuration === '15min'
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300'
                  }`}
                >
                  15 Minutes
                </button>
                <button
                  onClick={() => setMeetingDuration('30min')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    meetingDuration === '30min'
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300'
                  }`}
                >
                  30 Minutes
                </button>
              </div>
              
              {/* Cal.com booking widget */}
              <CalBooking
                embedUrl={`https://cal.com/keegan-cahill-qc27lk/${meetingDuration}?embed=true`}
                mode="embed"
                className="w-full"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
