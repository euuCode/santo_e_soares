import { MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Imagem de fundo com overlay claro */}
      <div className="absolute inset-0 flex flex-col">
        <img
          src="https://i.ibb.co/bjVVp84T/999e9261-1497-4d0f-a06f-87bed5c4196b.jpg"
          alt="Escritório Santo e Soares Advocacia"
          className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
        />
        {/* Overlay branco translúcido para suavizar o fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent"></div>
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co/bjVVp84T/999e9261-1497-4d0f-a06f-87bed5c4196b.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.1,
          }}
        ></div>
        {/* Curva inferior */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 sm:h-12 lg:h-16"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight text-gray-900">
            <span className="block">Advocacia Especializada em</span>
            <span className="block mt-4">Processos contra Bancos</span>
          </h1>
        </div>

        <div className="slide-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Defendemos seus direitos com{" "}
            <span className="text-lawfirm-gold-700 font-semibold">
              excelência
            </span>{" "}
            e{" "}
            <span className="text-lawfirm-gold-700 font-semibold">
              dedicação
            </span>
          </p>
        </div>

        {/* Botão CTA com texto escuro e fundo claro-dourado */}
        <div className="slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 bg-gradient-to-r from-lawfirm-gold-100 to-lawfirm-gold-200 text-lawfirm-gold-900 px-8 py-4 rounded-xl font-semibold text-lg hover:from-lawfirm-gold-200 hover:to-lawfirm-gold-300 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 border border-lawfirm-gold-400"
          >
            <MessageCircle size={24} />
            <span>Fale com um advogado especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
