import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/33049214/pexels-photo-33049214.jpeg"
          alt="Sala de reuniões profissional"
          className="w-full h-full object-cover"
        />
        {/* Green overlay to match the original site */}
        <div className="absolute inset-0 bg-lawfirm-green-600 bg-opacity-75"></div>
        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 lg:h-16"
          >
            <path d="M0 120V0C480 80 960 80 1440 0V120H0Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Advocacia Especializada em Processos
          <br />
          Contra Bancos
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Defendemos seus direitos com excelência e dedicação
        </p>

        {/* Call to Action Button */}
        <button className="inline-flex items-center space-x-3 bg-white text-lawfirm-green-700 px-6 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg">
          <MessageCircle size={24} />
          <span>
            Fale agora com um advogado especialista em Direito Bancário
          </span>
        </button>
      </div>
    </section>
  );
}
