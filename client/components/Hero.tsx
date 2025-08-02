import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-start sm:items-center justify-center overflow-hidden pt-12 sm:pt-0">
      {/* High-Quality Background Image with Dark Overlay */}
      <div className="absolute inset-0 flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F66795490fc724754a8ef2a4f1f432f41?format=webp&width=1920&quality=95"
          alt="Escritório Santo e Soares Advocacia"
          className="w-full h-full object-cover"
          style={{
            backgroundColor: "rgba(5, 2, 2, 0)",
            boxShadow: "1px 1px 3px 0 rgba(0, 0, 0, 1)",
          }}
        />

        {/* Premium Dark overlay for maximum text readability and impact */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>

        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 lg:h-16 text-white"
          />
        </div>
      </div>

      {/* Content with Professional Animations - Mobile Optimized */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="mb-8 sm:mb-10 leading-tight relative text-white drop-shadow-lg">
            {/* Mobile: Layout vertical compacto e elegante */}
            <div className="flex flex-col items-center space-y-2 sm:space-y-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light opacity-90 tracking-[0.2em] uppercase">
                Advocacia Especializada em
              </span>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-lawfirm-gold-300 font-black leading-none tracking-tight text-center px-2 sm:px-0">
                Processos contra Bancos
              </span>
            </div>
            {/* Elegant underline */}
            <div className="absolute -bottom-3 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-lawfirm-gold-400 to-lawfirm-gold-500 rounded-full"></div>
          </h1>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-base sm:text-xl lg:text-2xl text-white/95 mb-10 sm:mb-12 max-w-xs sm:max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg px-4 sm:px-0">
            Defendemos seus direitos com&nbsp;
            <span className="text-lawfirm-gold-300 font-semibold">
              excelência
            </span>
            &nbsp;e&nbsp;
            <span className="text-lawfirm-gold-300 font-semibold">
              dedicação
            </span>
          </p>
        </div>

        {/* Professional CTA Button - Mobile First Design */}
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="flex flex-col items-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full max-w-xs sm:w-auto sm:max-w-none inline-flex items-center justify-center space-x-3 sm:space-x-4 bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 text-white px-6 py-4 sm:px-10 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 transition-all duration-300 shadow-2xl hover:shadow-2xl cursor-pointer hover:scale-105 border-2 border-lawfirm-gold-400/30 backdrop-blur-sm"
            >
              <div className="bg-white/25 p-2 sm:p-2.5 rounded-xl group-hover:bg-white/40 transition-all duration-300 shadow-lg">
                <MessageCircle
                  size={20}
                  className="sm:hidden group-hover:rotate-12 transition-transform duration-300"
                />
                <MessageCircle
                  size={24}
                  className="hidden sm:block group-hover:rotate-12 transition-transform duration-300"
                />
              </div>
              <span className="font-black tracking-wide text-center">
                <span className="block sm:hidden">Consulta Especializada</span>
                <span className="hidden sm:block">
                  Falar com profissionais especializados
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
