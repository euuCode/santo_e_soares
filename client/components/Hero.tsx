import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
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

      {/* Content with Professional Animations */}
      <div className="relative z-10 text-center px-6 sm:px-8 lg:px-12 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight relative text-white drop-shadow-lg">
            <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium mb-2 sm:mb-3">
              Advocacia Especializada em
            </span>
            <span className="block text-lawfirm-gold-300 font-extrabold leading-tight">
              Processos contra Bancos
            </span>
            {/* Elegant underline */}
            <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-lawfirm-gold-400 to-lawfirm-gold-500 rounded-full"></div>
          </h1>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto font-light leading-relaxed drop-shadow-lg px-2 sm:px-0">
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

        {/* Centered CTA Button */}
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 sm:space-x-3 md:space-x-4 bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:scale-105"
          >
            <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg sm:rounded-xl group-hover:bg-white/30 transition-all duration-300">
              <MessageCircle
                size={20}
                className="sm:hidden group-hover:rotate-12 transition-transform duration-300"
              />
              <MessageCircle
                size={24}
                className="hidden sm:block group-hover:rotate-12 transition-transform duration-300"
              />
            </div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
              <span className="block sm:hidden">Fale conosco</span>
              <span className="hidden sm:block">
                Fale com um advogado especialista
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
