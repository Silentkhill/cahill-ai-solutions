import { Mail, MapPin, Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Creative background */}
      <div className="absolute inset-0">
        <div className="blob-bg w-[600px] h-[600px] bg-accent-500/5 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="blob-bg w-[400px] h-[400px] bg-blue-500/5 absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container-custom py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-accent-500 w-6 h-6" />
                <h3 className="text-2xl font-black">Cahill AI Solutions</h3>
              </div>
              <div className="space-y-2 text-sm text-navy-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-accent-400" />
                  </div>
                  <span>Toronto, Ontario</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent-500/20 rounded-lg flex items-center justify-center">
                    <Mail size={16} className="text-accent-400" />
                  </div>
                  <a
                    href="mailto:info@cahillaisolutions.com"
                    className="hover:text-accent-400 transition-colors"
                  >
                    info@cahillaisolutions.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-navy-300 hover:text-accent-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-navy-300 hover:text-accent-400 transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="border-t border-navy-800 pt-8 text-center">
            <p className="text-navy-400 text-sm">
              © {new Date().getFullYear()} Cahill AI Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
