import { Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cahill AI Solutions</h3>
              <div className="space-y-2 text-sm text-navy-300">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Toronto, Ontario</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a
                    href="mailto:info@cahillaisolutions.com"
                    className="hover:text-white transition-colors"
                  >
                    info@cahillaisolutions.com
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
