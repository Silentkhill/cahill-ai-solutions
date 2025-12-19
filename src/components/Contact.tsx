import { useState } from 'react'
import { Send, Calendar, Mail, Phone, MessageCircle } from 'lucide-react'

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

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
    <section id="contact" className="section-padding bg-gradient-creative relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[700px] h-[700px] bg-accent-200/15 absolute top-1/4 -right-64"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-blue-100/10 absolute bottom-1/4 -left-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-5xl sm:text-6xl font-black text-navy-900 block">Let's</span>
              <span className="text-5xl sm:text-6xl font-black text-gradient block">Talk</span>
            </div>
            <p className="text-xl text-navy-700 max-w-3xl mx-auto font-light">
              Book a free 15-minute consultation or request your free AI opportunity review.
            </p>
          </div>

          {/* Creative contact options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-creative bg-white p-10 tilt-on-hover relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-accent-50/0 group-hover:via-accent-50/30 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Calendar className="text-accent-700" size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-navy-900">
                    Book a Consultation
                  </h3>
                </div>
                <p className="text-navy-700 mb-8 text-lg leading-relaxed">
                  Schedule a 15-minute call to discuss your business needs and see if AI solutions are right for you.
                </p>
                <a
                  href="https://calendly.com/themister_7/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Calendar size={22} />
                  <span>View Available Times</span>
                </a>
              </div>
            </div>

            <div className="card-creative bg-white p-10 tilt-on-hover relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-navy-50/0 group-hover:via-navy-50/30 transition-all duration-500"></div>
              <div className="relative">
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-100 to-navy-200 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Mail className="text-navy-700" size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-navy-900">
                    Send Us a Message
                  </h3>
                </div>
                <p className="text-navy-700 mb-8 text-lg leading-relaxed">
                  Prefer email? Fill out the form or send us a message directly.
                </p>
                <a
                  href={mailtoLink}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-navy-100 text-navy-900 rounded-xl hover:bg-navy-200 transition-all duration-300 font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Mail size={22} />
                  <span>Email Us Directly</span>
                </a>
                <p className="text-sm text-navy-600 mt-6 flex items-center gap-2">
                  <Phone size={18} />
                  <span>Or call: (416) 555-0123</span>
                </p>
              </div>
            </div>
          </div>

          {/* Creative form */}
          <div className="card-creative bg-white p-12 md:p-16 border-2 border-navy-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-100/20 to-transparent rounded-bl-full blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center shadow-xl">
                  <MessageCircle className="text-accent-700" size={32} />
                </div>
                <h3 className="text-4xl font-black text-navy-900">
                  Contact Form
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-navy-900 mb-2">
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
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 transition-all ${
                        errors.name ? 'border-red-500' : 'border-navy-200 focus:border-accent-500'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-navy-900 mb-2">
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
                      className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 transition-all ${
                        errors.email ? 'border-red-500' : 'border-navy-200 focus:border-accent-500'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-navy-900 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 focus:border-accent-500 transition-all"
                      placeholder="(416) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-bold text-navy-900 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      value={formData.business}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 focus:border-accent-500 transition-all"
                      placeholder="Your business name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-navy-900 mb-2">
                    Message <span className="text-accent-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-navy-200 focus:border-accent-500'
                    }`}
                    placeholder="Tell us about your business and what you'd like to improve..."
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-2 text-sm text-red-600 font-medium" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitStatus === 'success' && (
                  <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl">
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! We've received your message and will get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-5 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-800 font-semibold">
                      Something went wrong. Please try again or email us directly using the link above.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-accent-500/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden group/btn relative"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                      <span>Send Message</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                </button>

                <p className="text-center text-navy-600 text-sm font-medium">
                  No pressure. If it's not a fit, you'll still leave with 2–3 helpful suggestions.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
