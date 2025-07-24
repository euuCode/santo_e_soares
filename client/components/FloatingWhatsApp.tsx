import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário.",
      "_blank",
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <MessageCircle size={28} className="drop-shadow-lg" />
        </div>

        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="bg-lawfirm-dark-800/95 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-xl border border-lawfirm-gold-400/20 whitespace-nowrap">
            <span className="text-sm font-medium">
              Fale conosco no WhatsApp
            </span>
            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-l-8 border-l-lawfirm-dark-800/95 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping"></div>
      <a
        href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-ping animation-delay-75 cursor-pointer flex"
      />
    </div>
  );
}
