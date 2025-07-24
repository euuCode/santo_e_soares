import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=120,fit=crop,q=95/A1aPOyMlXXIPRlbw/bc7c8a94-66c3-4dff-9fb5-a469f0a8bbe3-Aq2JoPeqb7IMXQ70.png"
                alt="Santo e Soares Advocacia"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-lawfirm-gold-400">
                  Santo e Soares Advocacia
                </h3>
              </div>
            </div>
            <span className="text-gray-300">espiritosantoadvmg@gmail.com</span>
            <p className="text-gray-300 mb-6 max-w-md">
              Escritório especializado em Direito Bancário, defendendo seus
              direitos com excelência e dedicação há mais de 10 anos.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5531981077321&text=Olá! Vim pelo site e gostaria de falar com um advogado especialista em direito bancário."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-lawfirm-gold-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lawfirm-gold-700 transition-colors cursor-pointer"
            >
              <MessageCircle size={20} />
              <span>Fale Conosco</span>
            </a>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-lawfirm-gold-400" size={20} />
                <span className="text-gray-300">(31) 98107-7321</span>
              </div>
              <div className="flex flex-row">
                <div className="flex items-center space-x-3 mt-5"></div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Localização</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="text-lawfirm-gold-400 mt-1" size={20} />
              <div className="text-gray-300">
                <p>Avenida Brasília, 972</p>
                <p>Loja 7 - São Benedito</p>
                <p>Santa Luzia - MG</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Santo e Soares Advocacia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-gold-400 text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-gold-400 text-sm transition-colors"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
