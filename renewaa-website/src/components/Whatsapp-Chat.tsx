"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppChat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+94743020154"
    const message = "Hello! I would like to know more about Renewaa services."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping opacity-20"></div>

        {/* WhatsApp icon */}
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />

        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
        </div>
      </button>
    </div>
  )
}
