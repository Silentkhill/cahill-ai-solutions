import { User } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-navy-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-full mb-6">
              <User className="text-accent-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              About Cahill AI Solutions
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-10 md:p-14 border border-navy-100/50 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-accent-100/20 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-navy-100/20 to-transparent rounded-tl-full"></div>
            <div className="relative space-y-6">
              <p className="text-xl text-navy-700 leading-relaxed font-light">
                I'm a teacher and an AI Committee Lead at a school, which means I spend my days translating complex ideas into clear, practical steps. I prioritize responsible AI use and helping people understand how technology can genuinely help—without the hype.
              </p>
              <p className="text-xl text-navy-700 leading-relaxed font-light">
                When I work with small businesses in Toronto, I bring that same approach: clear communication, practical solutions, and a focus on what actually works for your day-to-day operations.
              </p>
              <p className="text-xl text-navy-700 leading-relaxed font-light">
                My goal is to help local businesses save time, improve their marketing clarity, and make better decisions—all without adding complexity to your already busy schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

