import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F1564bbb3f4a24c80bb308de19336e863?format=webp&width=800"
          alt="Escritório Santo e Soares Advocacia"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
        />
        {/* Multi-layered Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lawfirm-dark-900/90 via-lawfirm-dark-800/85 to-lawfirm-dark-700/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-lawfirm-dark-900/95 via-transparent to-transparent"></div>
        <div
          className="absolute inset-0 professional-gradient backdrop-blur-[1px]"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2Fc16bc0ce86b448b68286b275e5d13eb6)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.4",
          }}
        ></div>
        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 lg:h-16"
          />
        </div>
      </div>

      {/* Content with Professional Animations */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight relative">
            <span
              className="block text-white text-glow drop-shadow-2xl"
              style={{
                textShadow:
                  "0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.4), 0 4px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              Advocacia Especializada em
            </span>
            <span
              className="block mt-4 text-white glow-effect drop-shadow-2xl"
              style={{
                textShadow:
                  "0 0 40px rgba(255, 255, 255, 0.9), 0 0 80px rgba(202, 138, 4, 0.6), 0 4px 30px rgba(0, 0, 0, 0.7)",
              }}
            >
              Processos contra Bancos
            </span>
            {/* Enhanced glow effects */}
            <div className="absolute inset-0 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight pointer-events-none opacity-20">
              <span className="block text-lawfirm-gold-300 blur-xl">
                Advocacia Especializada em
              </span>
              <span className="block mt-4 text-lawfirm-gold-300 blur-xl">
                Processos contra Bancos
              </span>
            </div>
          </h1>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl sm:text-2xl text-white/95 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Defendemos seus direitos com{" "}
            <span className="text-lawfirm-gold-300 font-semibold">
              excelência
            </span>{" "}
            e{" "}
            <span className="text-lawfirm-gold-300 font-semibold">
              dedicação
            </span>
          </p>
        </div>

        {/* Premium Interactive CTA Button */}
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="relative group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lawfirm-gold-400 via-lawfirm-gold-300 to-lawfirm-gold-400 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>

            {/* Floating Particles Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <div
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-ping"
                style={{ top: "20%", left: "15%", animationDelay: "0s" }}
              ></div>
              <div
                className="absolute w-1 h-1 bg-lawfirm-gold-200/50 rounded-full animate-ping"
                style={{ top: "60%", right: "20%", animationDelay: "1s" }}
              ></div>
              <div
                className="absolute w-1.5 h-1.5 bg-white/20 rounded-full animate-ping"
                style={{ bottom: "25%", left: "25%", animationDelay: "2s" }}
              ></div>
            </div>

            {/* Main Button */}
            <a
              href="https://api.whatsapp.com/send/?phone=5531981077321&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center space-x-6 bg-gradient-to-br from-lawfirm-gold-600 via-lawfirm-gold-500 to-lawfirm-gold-700 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-400 hover:to-lawfirm-gold-600 transition-all duration-500 shadow-2xl hover:shadow-lawfirm-gold-400/40 cursor-pointer hover:scale-110 transform-gpu overflow-hidden"
              style={{
                boxShadow:
                  "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 50px rgba(202, 138, 4, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-white/20 transition-all duration-500"></div>

              {/* WhatsApp Icon with Advanced Effects */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <MessageCircle
                    size={32}
                    className="drop-shadow-lg filter group-hover:drop-shadow-2xl transition-all duration-300"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 text-left">
                <div className="font-extrabold text-xl leading-tight tracking-wide group-hover:text-shadow-lg">
                  Fale agora com um advogado especialista
                </div>
                <div className="flex items-center space-x-2 mt-2 text-sm font-semibold opacity-95 group-hover:opacity-100">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Consulta gratuita • Disponível agora</span>
                </div>
                <div className="text-xs font-medium opacity-80 mt-1">
                  Direito Bancário • Resposta imediata
                </div>
              </div>

              {/* Subtle Arrow Indicator */}
              <div className="relative z-10 group-hover:translate-x-2 transition-transform duration-300">
                <div className="w-0 h-0 border-l-8 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent opacity-80 group-hover:opacity-100"></div>
              </div>

              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/10 transition-all duration-700"></div>
            </a>

            {/* Success Stories Floating Labels */}
            <div className="absolute -top-6 -right-4 bg-green-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-bold animate-bounce opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
              95% de sucesso
            </div>
            <div className="absolute -bottom-4 -left-6 bg-lawfirm-gold-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500 delay-500">
              R$ 2M+ recuperados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
