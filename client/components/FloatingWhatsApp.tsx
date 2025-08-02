import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário.";
    console.log('Redirecionando para:', url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-br from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 text-white rounded-full p-5 shadow-2xl hover:shadow-lawfirm-gold-500/30 transition-all duration-500 transform hover:scale-105 border-2 border-lawfirm-gold-400/30 backdrop-blur-sm cursor-pointer"
        aria-label="Falar no WhatsApp"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-lawfirm-gold-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-lawfirm-gold-300/20 to-lawfirm-gold-600/20 rounded-full"></div>

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <MessageCircle
            size={32}
            className="drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"
          />
        </div>

        {/* Notification dot */}
        <div className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-br from-lawfirm-gold-300 to-lawfirm-gold-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-r from-lawfirm-dark-900/98 to-lawfirm-dark-800/98 backdrop-blur-md text-white px-6 py-3 rounded-xl shadow-2xl border-2 border-lawfirm-gold-400/30 whitespace-nowrap">
            <span className="text-base font-semibold text-lawfirm-gold-200">
              Profissionais Especializados
            </span>
            <div className="text-xs text-gray-300 mt-1">
              Direito Bancário
            </div>
            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-l-10 border-l-lawfirm-dark-900/98 border-t-5 border-t-transparent border-b-5 border-b-transparent"></div>
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
