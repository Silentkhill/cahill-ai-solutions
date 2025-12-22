import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'

interface VoiceAgentProps {
  /**
   * Your ElevenLabs agent ID or widget URL
   * You can find this in your ElevenLabs dashboard under Agents > Integration
   */
  agentId?: string
  /**
   * Widget URL if using iframe embed method
   * Format: https://elevenlabs.io/convai/agent/{agent-id}
   */
  widgetUrl?: string
  /**
   * Position of the voice agent button
   */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  /**
   * Custom styling
   */
  className?: string
}

export default function VoiceAgent({
  agentId,
  widgetUrl,
  position = 'bottom-right',
  className = '',
}: VoiceAgentProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scriptLoadedRef = useRef(false)

  useEffect(() => {
    // Method 1: Using ElevenLabs Widget Script (if you have agentId)
    if (agentId && !scriptLoadedRef.current) {
      const script = document.createElement('script')
      script.src = `https://elevenlabs.io/convai-widget/index.js`
      script.setAttribute('data-agent-id', agentId)
      script.async = true
      
      script.onload = () => {
        scriptLoadedRef.current = true
      }
      
      document.body.appendChild(script)
      
      return () => {
        // Cleanup script on unmount
        const existingScript = document.querySelector(`script[data-agent-id="${agentId}"]`)
        if (existingScript) {
          document.body.removeChild(existingScript)
        }
      }
    }
  }, [agentId])

  // Method 2: Using iframe embed (if you have widgetUrl)
  if (widgetUrl) {
    const positionClasses = {
      'bottom-right': 'bottom-6 right-6',
      'bottom-left': 'bottom-6 left-6',
      'top-right': 'top-6 right-6',
      'top-left': 'top-6 left-6',
    }

    return (
      <div
        ref={containerRef}
        className={`fixed ${positionClasses[position]} z-50 ${className}`}
      >
        <div className="relative">
          {/* Voice Agent Button */}
          <button
            onClick={() => {
              const iframe = document.getElementById('elevenlabs-voice-agent')
              if (iframe) {
                const isHidden = iframe.style.display === 'none'
                iframe.style.display = isHidden ? 'block' : 'none'
              } else {
                // Create iframe if it doesn't exist
                const newIframe = document.createElement('iframe')
                newIframe.id = 'elevenlabs-voice-agent'
                newIframe.src = widgetUrl
                newIframe.style.width = '400px'
                newIframe.style.height = '600px'
                newIframe.style.border = 'none'
                newIframe.style.borderRadius = '16px'
                newIframe.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                newIframe.style.position = 'fixed'
                newIframe.style.bottom = '100px'
                newIframe.style.right = '24px'
                newIframe.style.zIndex = '9999'
                document.body.appendChild(newIframe)
              }
            }}
            className="w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:scale-110 group"
            aria-label="Open voice agent"
          >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    )
  }

  // Method 1: Widget script will handle the button automatically
  // But we can add a custom trigger button if needed
  return null
}

