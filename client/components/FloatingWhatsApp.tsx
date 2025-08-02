import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    // O href do link já vai funcionar, apenas logamos para debug
    console.log("Clique no WhatsApp detectado");
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      <a
        href="https://api.whatsapp.com/send/?phone=5531981077321&text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20advogado%20especialista%20em%20direito%20banc%C3%A1rio."
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-br from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 text-white rounded-full p-4 sm:p-5 shadow-2xl hover:shadow-lawfirm-gold-500/30 transition-all duration-500 transform hover:scale-105 border-2 border-lawfirm-gold-400/30 backdrop-blur-sm cursor-pointer inline-block"
        aria-label="Falar no WhatsApp"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-lawfirm-gold-400 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-500"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-lawfirm-gold-300/20 to-lawfirm-gold-600/20 rounded-full"></div>

        {/* WhatsApp Icon */}
        <div className="relative z-10">
          <MessageCircle
            size={28}
            className="sm:hidden drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"
          />
          <MessageCircle
            size={32}
            className="hidden sm:block drop-shadow-lg group-hover:rotate-12 transition-transform duration-500"
          />
        </div>

        {/* Notification dot */}
        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-lawfirm-gold-300 to-lawfirm-gold-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
        </div>

        {/* Tooltip */}
        <div
          className={`absolute right-full mr-3 sm:mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 hidden sm:block ${
            isHovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-r from-lawfirm-dark-900/98 to-lawfirm-dark-800/98 backdrop-blur-md text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-2xl border-2 border-lawfirm-gold-400/30 whitespace-nowrap">
            <span className="text-sm sm:text-base font-semibold text-lawfirm-gold-200">
              Profissionais Especializados
            </span>
            <div className="text-xs text-gray-300 mt-1">Direito Bancário</div>
            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-l-8 sm:border-l-10 border-l-lawfirm-dark-900/98 border-t-4 sm:border-t-5 border-t-transparent border-b-4 sm:border-b-5 border-b-transparent"></div>
            </div>
          </div>
        </div>
      </a>

      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full border-2 border-lawfirm-gold-400/40 animate-ping"></div>
      <div className="absolute inset-0 rounded-full border-2 border-lawfirm-gold-300/30 animate-ping animation-delay-75"></div>
    </div>
  );
}
