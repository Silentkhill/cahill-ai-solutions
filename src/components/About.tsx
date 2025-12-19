import { User, Heart, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-creative relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[700px] h-[700px] bg-accent-200/15 absolute top-1/4 -left-64"></div>
        <div className="blob-bg w-[600px] h-[600px] bg-navy-100/10 absolute bottom-1/4 -right-64"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-accent-100 to-accent-200 rounded-3xl mb-8 shadow-2xl animate-float">
              <User className="text-accent-700" size={40} />
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-navy-900 mb-4">
              About{' '}
              <span className="text-gradient">Cahill AI Solutions</span>
            </h2>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 md:p-16 border-2 border-navy-100/50 relative overflow-hidden card-creative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent-100/30 to-transparent rounded-br-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-navy-100/20 to-transparent rounded-tl-full blur-2xl"></div>
            
            <div className="relative space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Lightbulb className="text-blue-600" size={24} />
                </div>
                <p className="text-xl md:text-2xl text-navy-700 leading-relaxed font-light">
                  I'm a teacher and an AI Committee Lead at a school, which means I spend my days translating complex ideas into clear, practical steps. I prioritize responsible AI use and helping people understand how technology can genuinely help—without the hype.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-100 to-accent-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="text-accent-600" size={24} />
                </div>
                <p className="text-xl md:text-2xl text-navy-700 leading-relaxed font-light">
                  When I work with small businesses in Toronto, I bring that same approach: clear communication, practical solutions, and a focus on what actually works for your day-to-day operations.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <User className="text-green-600" size={24} />
                </div>
                <p className="text-xl md:text-2xl text-navy-700 leading-relaxed font-light">
                  My goal is to help local businesses save time, improve their marketing clarity, and make better decisions—all without adding complexity to your already busy schedule.
                </p>
              </div>
            </div>
          </div>
          
          {/* Creative trust indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-navy-100 shadow-lg">
              <div className="text-4xl font-black text-gradient mb-2">10+</div>
              <div className="text-navy-700 font-semibold">Years Teaching</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-navy-100 shadow-lg">
              <div className="text-4xl font-black text-gradient mb-2">100%</div>
              <div className="text-navy-700 font-semibold">Responsible AI</div>
            </div>
            <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-navy-100 shadow-lg">
              <div className="text-4xl font-black text-gradient mb-2">Toronto</div>
              <div className="text-navy-700 font-semibold">Local Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
