import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export function ProfessionalWhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const whatsappNumber = "5531981077321";
  const message =
    "Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário.";
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    console.log("Abrindo WhatsApp...");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main Button */}
      <div className="relative">
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 via-green-600 to-green-700 hover:from-green-400 hover:via-green-500 hover:to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-110 border-3 border-white/20 backdrop-blur-sm cursor-pointer flex items-center justify-center"
          aria-label="Falar no WhatsApp"
          style={{ touchAction: "manipulation" }}
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

          {/* WhatsApp Icon */}
          <div className="relative z-10">
            <MessageCircle
              size={24}
              className="sm:hidden drop-shadow-lg group-hover:rotate-12 transition-transform duration-300"
            />
            <MessageCircle
              size={28}
              className="hidden sm:block lg:hidden drop-shadow-lg group-hover:rotate-12 transition-transform duration-300"
            />
            <MessageCircle
              size={32}
              className="hidden lg:block drop-shadow-lg group-hover:rotate-12 transition-transform duration-300"
            />
          </div>

          {/* Online Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full border-2 border-white shadow-lg animate-pulse">
            <div className="w-full h-full bg-green-500 rounded-full"></div>
          </div>
        </button>

        {/* Pulse Rings */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-ping"></div>
        <div
          className="absolute inset-0 rounded-full border-2 border-green-300/20 animate-ping"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Professional Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 transform -translate-y-1/2 transition-all duration-300 hidden sm:block ${
            isHovered
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-3 scale-95 pointer-events-none"
          }`}
        >
          <div className="bg-white text-gray-800 px-4 py-3 rounded-xl shadow-2xl border border-gray-200 whitespace-nowrap max-w-xs">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-lawfirm-gold-500 to-lawfirm-gold-600 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Atendimento Especializado
                </p>
                <p className="text-xs text-gray-600">Clique para conversar</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
              <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Floating Label */}
      <div className="sm:hidden absolute -top-12 left-1/2 transform -translate-x-1/2">
        <div
          className={`bg-white text-gray-800 px-3 py-1.5 rounded-lg shadow-lg text-xs font-medium transition-all duration-300 whitespace-nowrap ${
            isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          💬 Fale Conosco
        </div>
      </div>
    </div>
  );
}
