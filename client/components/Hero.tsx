import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Advanced Overlay */}
      <div className="absolute inset-0 flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F1564bbb3f4a24c80bb308de19336e863?format=webp&width=800"
          alt="Escritório Santo e Soares Advocacia"
          className="w-full h-full object-cover object-top scale-105 transition-transform duration-700 hover:scale-110"
        />
        {/* Multi-layered Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-lawfirm-dark-900/90 via-lawfirm-dark-800/85 to-lawfirm-dark-700/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-lawfirm-dark-900/95 via-transparent to-transparent"></div>
        <div
          className="absolute inset-0 professional-gradient backdrop-blur-[1px]"
          style={{
            backgroundImage:
              "url (https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F1564bbb3f4a24c80bb308de19336e863?format=webp&width=800)",
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
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-white">
            <span className="block">Advocacia Especializada em</span>
            <span className="block mt-4">Processos contra Bancos</span>
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
          <a
            href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105"
          >
            <MessageCircle size={24} />
            <span>Fale com um advogado especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
