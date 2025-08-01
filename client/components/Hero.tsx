import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* High-Quality Background Image with Light Theme */}
      <div className="absolute inset-0 flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F66795490fc724754a8ef2a4f1f432f41?format=webp&width=1920&quality=95"
          alt="Escritório Santo e Soares Advocacia"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
        />
        {/* Light Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-gray-50/80 to-white/75 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent"></div>

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(202, 138, 4, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(202, 138, 4, 0.08) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 lg:h-16 text-white"
          >
            <path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Content with Professional Animations */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight relative">
            <span className="block text-gray-800 drop-shadow-sm">
              Advocacia Especializada em
            </span>
            <span className="block mt-4 bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent font-extrabold drop-shadow-sm">
              Processos contra Bancos
            </span>
            {/* Elegant underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-lawfirm-gold-500 to-lawfirm-gold-600 rounded-full"></div>
          </h1>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            Defendemos seus direitos com{" "}
            <span className="text-lawfirm-gold-600 font-semibold">
              excelência
            </span>{" "}
            e{" "}
            <span className="text-lawfirm-gold-600 font-semibold">
              dedicação
            </span>
          </p>
        </div>

        {/* Professional CTA Button */}
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-4 bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 elevated-card"
            >
              <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                <MessageCircle
                  size={24}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <span>Fale com um advogado especialista</span>
            </a>

            <div className="text-center sm:text-left">
              <div className="text-sm text-gray-600 font-medium">
                ✓ Consulta gratuita • ✓ Atendimento imediato
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Direito Bancário • Mais de 10 anos de experiência
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="slide-up mt-16" style={{ animationDelay: "0.9s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 elevated-card">
              <div className="text-3xl font-bold text-lawfirm-gold-600 mb-2">
                +10
              </div>
              <div className="text-gray-700 font-medium">
                Anos de Experiência
              </div>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 elevated-card">
              <div className="text-3xl font-bold text-lawfirm-gold-600 mb-2">
                100%
              </div>
              <div className="text-gray-700 font-medium">Transparência</div>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300 elevated-card">
              <div className="text-3xl font-bold text-lawfirm-gold-600 mb-2">
                24h
              </div>
              <div className="text-gray-700 font-medium">Resposta Rápida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
