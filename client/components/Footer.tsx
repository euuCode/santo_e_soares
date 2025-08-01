import { Phone, Mail, MapPin, MessageCircle, Clock, Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-lawfirm-dark-900 via-lawfirm-dark-800 to-lawfirm-dark-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgba(202, 138, 4, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(202, 138, 4, 0.08) 0%, transparent 50%)`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=120,fit=crop,q=95/A1aPOyMlXXIPRlbw/bc7c8a94-66c3-4dff-9fb5-a469f0a8bbe3-Aq2JoPeqb7IMXQ70.png"
                  alt="Santo e Soares Advocacia"
                  className="h-14 w-14 object-contain drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-lawfirm-gold-400/10 rounded-full blur-xl"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-lawfirm-gold-400 tracking-wide">
                  Santo & Soares
                </h3>
                <p className="text-lawfirm-gold-300/80 text-sm font-light tracking-widest uppercase">
                  Advocacia
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-lawfirm-gold-400" size={18} />
                <span className="text-gray-300 text-sm">
                  espiritosantoadvmg@gmail.com
                </span>
              </div>
              <p className="text-gray-300/90 leading-relaxed max-w-md text-sm">
                Escritório especializado em Direito Bancário, defendendo seus
                direitos com
                <span className="text-lawfirm-gold-300 font-semibold">
                  {" "}
                  excelência
                </span>{" "}
                e
                <span className="text-lawfirm-gold-300 font-semibold">
                  {" "}
                  dedicação
                </span>
                .
              </p>
            </div>

            <a
              href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 group"
            >
              <MessageCircle
                size={20}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              <span className="bg-gradient-to-r from-lawfirm-gold-400 to-lawfirm-gold-500 bg-clip-text text-transparent">
                Contato
              </span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <div className="bg-lawfirm-gold-100/10 p-2 rounded-lg">
                  <Phone className="text-lawfirm-gold-400" size={18} />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">(31) 98107-7321</p>
                  <p className="text-gray-400 text-xs">WhatsApp disponível</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <div className="bg-lawfirm-gold-100/10 p-2 rounded-lg">
                  <Clock className="text-lawfirm-gold-400" size={18} />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Seg - Sex: 8h às 18h</p>
                  <p className="text-gray-400 text-xs">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & Legal */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white mb-6 relative">
              <span className="bg-gradient-to-r from-lawfirm-gold-400 to-lawfirm-gold-500 bg-clip-text text-transparent">
                Localização
              </span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <div className="bg-lawfirm-gold-100/10 p-2 rounded-lg">
                  <MapPin className="text-lawfirm-gold-400 mt-0.5" size={18} />
                </div>
                <div className="text-gray-300 text-sm leading-relaxed">
                  <p className="font-medium">Avenida Brasília, 972</p>
                  <p>Loja 7 - São Benedito</p>
                  <p>Santa Luzia - MG</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
                <div className="bg-lawfirm-gold-100/10 p-2 rounded-lg">
                  <Scale className="text-lawfirm-gold-400 mt-0.5" size={18} />
                </div>
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Direito Bancário</p>
                  <p className="text-gray-400 text-xs">Especialização OAB/MG</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Santo & Soares Advocacia. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Registro OAB/MG - Direito Bancário
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-gold-400 text-sm transition-colors duration-300 hover:underline"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-gold-400 text-sm transition-colors duration-300 hover:underline"
              >
                Termos de Uso
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-gold-400 text-sm transition-colors duration-300 hover:underline"
              >
                Código de Ética
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
