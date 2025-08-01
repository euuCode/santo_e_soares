import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-12 leading-tight relative text-white premium-text-shadow tracking-tight">
            <span className="block font-light text-gray-100 text-2xl sm:text-3xl lg:text-4xl mb-4 tracking-[0.2em] uppercase opacity-90">Advocacia Especializada em</span>
            <span className="block mt-2 text-lawfirm-gold-200 font-black executive-glow tracking-tight text-5xl sm:text-7xl lg:text-9xl">
              Processos contra Bancos
            </span>
            {/* Luxury underline with glow effect */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-lawfirm-gold-400 to-transparent rounded-full luxury-border executive-glow"></div>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-lawfirm-gold-500 to-lawfirm-gold-300 rounded-full opacity-60"></div>
          </h1>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white/90 mb-16 max-w-5xl mx-auto font-light leading-relaxed premium-text-shadow tracking-wide">
            Defendemos seus direitos com&nbsp;
            <span className="text-lawfirm-gold-200 font-bold executive-glow tracking-wider">
              excelência
            </span>
            &nbsp;e&nbsp;
            <span className="text-lawfirm-gold-200 font-bold executive-glow tracking-wider">
              dedicação
            </span>
            <span className="block mt-6 text-lg sm:text-xl lg:text-2xl text-gray-200/80 font-extralight tracking-[0.1em] uppercase">
              Escritório Premium de Direito Bancário
            </span>
          </p>
        </div>

        {/* Centered CTA Button */}
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-6 bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 text-white px-12 py-6 rounded-3xl font-bold text-xl hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 transition-all duration-500 diamond-shadow hover:scale-110 cursor-pointer luxury-border executive-glow tracking-wide uppercase"
          >
            <div className="bg-white/25 p-3 rounded-2xl group-hover:bg-white/40 transition-all duration-500 diamond-shadow">
              <MessageCircle
                size={28}
                className="group-hover:rotate-12 transition-transform duration-500 executive-glow"
              />
            </div>
            <span className="tracking-wider font-black">Consulta Premium</span>
          </a>
        </div>
      </div>
    </section>
  );
}
