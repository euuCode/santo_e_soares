import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(202, 138, 4, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(202, 138, 4, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 50% 50%, rgba(202, 138, 4, 0.08) 0%, transparent 70%)`
        }}></div>
      </div>

      {/* High-Quality Background Image with Subtle Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full relative">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2Fbfe4f2cdd6584acf80ad13b469cbb83e?format=webp&width=1920&quality=90"
            alt="Escritório Santo e Soares Advocacia"
            className="w-full h-full object-cover opacity-20 scale-105 transition-transform duration-700 hover:scale-110"
          />
          {/* Light Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-gray-50/70 to-white/60 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-lawfirm-gold-100/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-lawfirm-gold-200/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      {/* Content with Professional Animations */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-800 relative">
            <span className="block bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">
              Advocacia Especializada em
            </span>
            <span className="block mt-4 bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-600 bg-clip-text text-transparent font-extrabold">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-4 bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105 elevated-card"
            >
              <div className="bg-white/20 p-2 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                <MessageCircle size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span>Fale com um advogado especialista</span>
            </a>
            
            <div className="text-center sm:text-left">
              <div className="text-sm text-gray-600 font-medium">
                ✓ Consulta gratuita  •  ✓ Atendimento imediato
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
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-lawfirm-gold-600 mb-2">+10</div>
              <div className="text-gray-700 font-medium">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-lawfirm-gold-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Transparência</div>
            </div>
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-lawfirm-gold-600 mb-2">24h</div>
              <div className="text-gray-700 font-medium">Resposta Rápida</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
