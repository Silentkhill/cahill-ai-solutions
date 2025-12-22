import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/Logo.png" 
                  alt="Cahill AI Solutions" 
                  className="h-10 w-auto"
                />
                <h3 className="text-xl font-bold">Cahill AI Solutions</h3>
              </div>
              <div className="space-y-2 text-sm text-navy-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Toronto, Ontario</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:cahillaisolutions@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    cahillaisolutions@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="#privacy"
                className="text-navy-300 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-navy-300 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
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
