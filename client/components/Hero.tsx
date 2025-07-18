import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 flex flex-col">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2F1564bbb3f4a24c80bb308de19336e863?format=webp&width=800"
          alt="Escritório Santo e Soares Advocacia"
          className="w-full h-full object-cover"
        />
        {/* Golden overlay to match the new branding */}
        <div
          className="absolute inset-0 bg-lawfirm-dark-800 bg-opacity-80 max-sm:bg-lawfirm-dark-900 mx-auto"
          style={{
            backgroundImage:
              "url(https://cdn.builder.io/api/v1/image/assets%2Ff4640e8889504e459e0229464c3c7d21%2Fc16bc0ce86b448b68286b275e5d13eb6)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: "0.5",
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

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          <p>Advocacia Especializada em Processos contra bancos</p>
        </h1>

        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Defendemos seus direitos com excelência e dedicação
        </p>

        {/* Call to Action Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=5531981077321&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 bg-lawfirm-gold-600 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-lawfirm-gold-700 transition-colors shadow-lg cursor-pointer"
        >
          <MessageCircle size={24} />
          <div>Fale agora com um advogado especialista em Direito Bancário</div>
        </a>
      </div>
    </section>
  );
}
