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
  const [formStep, setFormStep] = useState<1 | 2>(1)
  const [showBooking, setShowBooking] = useState(false)
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

  const validateStepOne = () => {
    const stepErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      stepErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      stepErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      stepErrors.email = 'Please enter a valid email address'
    }

    setErrors((prev) => ({ ...prev, ...stepErrors }))
    return Object.keys(stepErrors).length === 0
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
      setShowBooking(false)
      setFormStep(1)
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
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
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
          <div className="flex items-center justify-center mb-8">
            <div className="inline-flex items-center rounded-full bg-white border border-navy-200 p-1.5">
              <div
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  formStep === 1 ? 'bg-accent-600 text-white shadow-md' : 'text-navy-500'
                }`}
              >
                Step 1: Basics
              </div>
              <div
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  formStep === 2 ? 'bg-accent-600 text-white shadow-md' : 'text-navy-500'
                }`}
              >
                Step 2: Business Context
              </div>
            </div>
          </div>

          <div className="card-focused p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {formStep === 1 && (
                <>
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

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (validateStepOne()) {
                      setFormStep(2)
                    }
                  }}
                  className="btn-primary min-h-[52px] px-8 inline-flex items-center gap-3"
                >
                  Continue to Business Context
                </button>
              </div>
                </>
              )}

              {formStep === 2 && (
                <>

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

              <div className="p-4 bg-navy-50 border border-navy-200 rounded-xl text-sm text-navy-700 space-y-1">
                <p><strong>No pressure:</strong> this is a free review request, not a sales trap.</p>
                <p><strong>Expected response:</strong> usually within 1 business day.</p>
                <p><strong>Privacy:</strong> your details stay private and are never shared.</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                <button
                  type="button"
                  onClick={() => setFormStep(1)}
                  className="min-h-[52px] px-6 py-3 rounded-xl font-semibold bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300 transition-all"
                >
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary min-h-[52px] px-8 flex-1 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed glow-accent-hover"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Free AI Opportunity Review</span>
                      <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-sm text-navy-600">
                <Mail size={14} className="inline mr-1" />
                We only use your details to follow up on your review request.
              </p>
                </>
              )}
            </form>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-6 space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm font-medium">
                  ✓ Thank you! We've received your request and will get back to you soon.
                </p>
                <p className="text-green-800 text-sm mt-2">
                  Want to speed things up? You can optionally book a call now.
                </p>
              </div>

              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={() => setShowBooking((prev) => !prev)}
                  className="min-h-[52px] px-6 py-3 rounded-xl font-semibold bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300 transition-all"
                >
                  <Calendar size={18} className="inline mr-2" />
                  {showBooking ? 'Hide Booking Options' : 'Optional: Book a Follow-up Call'}
                </button>
              </div>

              {showBooking && (
                <div className="space-y-6">
              {/* Duration selector */}
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <button
                  onClick={() => setMeetingDuration('15min')}
                  className={`min-h-[52px] px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    meetingDuration === '15min'
                      ? 'bg-accent-600 text-white shadow-lg'
                      : 'bg-white text-navy-700 border-2 border-navy-200 hover:border-accent-300'
                  }`}
                >
                  15 Minutes
                </button>
                <button
                  onClick={() => setMeetingDuration('30min')}
                  className={`min-h-[52px] px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
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
          )}
        </div>
      </div>
    </section>
  )
}
