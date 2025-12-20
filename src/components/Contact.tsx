import { useState } from 'react'
import { Send, Mail } from 'lucide-react'

const challenges = [
  'Too much admin work',
  'Struggling with content creation',
  'Need better customer communication',
  'Want to understand AI opportunities',
  'Other',
]

export default function Contact() {
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
    <section id="contact" className="section-padding bg-gradient-creative relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[700px] h-[700px] bg-accent-200/15 absolute top-1/4 -right-64"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-blue-100/10 absolute bottom-1/4 -left-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-navy-900 mb-4">
              Get Your Free AI Opportunity Review
            </h2>
          </div>

          {/* Contact form */}
          <div className="card-creative bg-white p-12 md:p-16 border-2 border-navy-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-100/20 to-transparent rounded-bl-full blur-2xl"></div>
            
            <div className="relative">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
                  <label htmlFor="businessName" className="block text-sm font-bold text-navy-900 mb-2">
                    Business name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 focus:border-accent-500 transition-all"
                    placeholder="Your business name"
                  />
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

                <div>
                  <label htmlFor="website" className="block text-sm font-bold text-navy-900 mb-2">
                    Website <span className="text-navy-500 text-xs font-normal">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 focus:border-accent-500 transition-all"
                    placeholder="https://yourwebsite.com"
                  />
                </div>

                <div>
                  <label htmlFor="challenge" className="block text-sm font-bold text-navy-900 mb-2">
                    Biggest challenge
                  </label>
                  <select
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-navy-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-accent-300 focus:border-accent-500 transition-all bg-white"
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
                  <div className="p-5 bg-green-50 border-2 border-green-200 rounded-xl">
                    <p className="text-green-800 font-semibold">
                      ✓ Thank you! We've received your request and will get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-5 bg-red-50 border-2 border-red-200 rounded-xl">
                    <p className="text-red-800 font-semibold">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-accent-600 to-accent-700 text-white rounded-xl hover:from-accent-700 hover:to-accent-800 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-accent-500/50 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden group/btn relative"
                >
                  {isSubmitting ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send size={24} className="group-hover/btn:translate-x-1 transition-transform" />
                      <span>Request Review</span>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></div>
                </button>

                <p className="text-center text-navy-600 text-sm font-medium">
                  <Mail size={16} className="inline mr-1" />
                  Your information is never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
