import { useState } from 'react'
import { Send, Calendar, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
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
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
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

    // Placeholder endpoint - replace with your actual endpoint
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      // In production, replace with:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', business: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const mailtoLink = `mailto:info@cahillaisolutions.com?subject=Consultation Request&body=Name: ${encodeURIComponent(formData.name || '')}%0AEmail: ${encodeURIComponent(formData.email || '')}%0APhone: ${encodeURIComponent(formData.phone || '')}%0ABusiness: ${encodeURIComponent(formData.business || '')}%0AMessage: ${encodeURIComponent(formData.message || '')}`

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white to-navy-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Let's Talk
            </h2>
            <p className="text-lg text-navy-700">
              Book a free 15-minute consultation or request your free AI opportunity review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-navy-100/50 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-accent-50/0 group-hover:via-accent-50/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="text-accent-700" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">
                    Book a Consultation
                  </h3>
                </div>
                <p className="text-navy-700 mb-7 text-lg leading-relaxed">
                  Schedule a 15-minute call to discuss your business needs and see if AI solutions are right for you.
                </p>
                <a
                  href="https://calendly.com/themister_7/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar size={20} />
                  View Available Times
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-all duration-300 border border-navy-100/50 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-accent-50/0 group-hover:via-accent-50/20 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="text-navy-700" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">
                    Send Us a Message
                  </h3>
                </div>
                <p className="text-navy-700 mb-7 text-lg leading-relaxed">
                  Prefer email? Fill out the form or send us a message directly.
                </p>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy-100 text-navy-900 rounded-xl hover:bg-navy-200 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Mail size={20} />
                  Email Us Directly
                </a>
                <p className="text-sm text-navy-600 mt-4">
                  <Phone size={16} className="inline mr-1" />
                  Or call: (416) 555-0123
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-navy-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent-100/10 to-transparent rounded-bl-full"></div>
            <h3 className="text-xl font-semibold text-navy-900 mb-6">
              Contact Form
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-900 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                      errors.name ? 'border-red-500' : 'border-navy-300'
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
                  <label htmlFor="email" className="block text-sm font-medium text-navy-900 mb-2">
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                      errors.email ? 'border-red-500' : 'border-navy-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-navy-900 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="(416) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-navy-900 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-navy-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500"
                    placeholder="Your business name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-900 mb-2">
                  Message <span className="text-accent-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 ${
                    errors.message ? 'border-red-500' : 'border-navy-300'
                  }`}
                  placeholder="Tell us about your business and what you'd like to improve..."
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">
                    Thank you! We've received your message and will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    Something went wrong. Please try again or email us directly using the link above.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-sm text-navy-600 text-center">
                No pressure. If it's not a fit, you'll still leave with 2–3 helpful suggestions.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

