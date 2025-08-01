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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-br from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 text-white rounded-full p-3 sm:p-4 lg:p-5 shadow-2xl hover:shadow-lawfirm-gold-500/30 transition-all duration-500 transform hover:scale-105 border-2 border-lawfirm-gold-400/30 backdrop-blur-sm"
        aria-label="Falar no WhatsApp"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-lawfirm-gold-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-lawfirm-gold-300/20 to-lawfirm-gold-600/20 rounded-full"></div>

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <MessageCircle
            size={24}
            className="sm:hidden drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"
          />
          <MessageCircle
            size={28}
            className="hidden sm:block lg:hidden drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"
          />
          <MessageCircle
            size={32}
            className="hidden lg:block drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"
          />
        </div>

        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-lawfirm-gold-300 to-lawfirm-gold-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-2 sm:mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 hidden sm:block ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-r from-lawfirm-dark-900/98 to-lawfirm-dark-800/98 backdrop-blur-md text-white px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-2xl border-2 border-lawfirm-gold-400/30 whitespace-nowrap">
            <span className="text-sm sm:text-base font-semibold text-lawfirm-gold-200">
              <span className="hidden lg:block">Consultoria Especializada</span>
              <span className="lg:hidden">Fale Conosco</span>
            </span>
            <div className="text-xs text-gray-300 mt-1 hidden lg:block">
              Direito Bancário Premium
            </div>
            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-l-8 sm:border-l-10 border-l-lawfirm-dark-900/98 border-t-4 sm:border-t-5 border-t-transparent border-b-4 sm:border-b-5 border-b-transparent"></div>
            </div>
          </div>
        </div>
      </button>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border-2 border-lawfirm-gold-400/40 animate-ping"></div>
      <div className="absolute inset-0 rounded-full border-2 border-lawfirm-gold-300/30 animate-ping animation-delay-75"></div>
    </div>
  );
}
