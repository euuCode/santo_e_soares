import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-lawfirm-green-600 text-white p-2 rounded-lg">
                <div className="text-xl font-bold tracking-wider">L&A</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-lawfirm-green-400">
                  Lima André Advogados
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Escritório especializado em Direito Bancário, defendendo seus
              direitos com excelência e dedicação há mais de 10 anos.
            </p>
            <button className="inline-flex items-center space-x-2 bg-lawfirm-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lawfirm-green-700 transition-colors">
              <MessageCircle size={20} />
              <span>Fale Conosco</span>
            </button>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-lawfirm-green-400" size={20} />
                <span className="text-gray-300">(11) 3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="text-lawfirm-green-400" size={20} />
                <span className="text-gray-300">(11) 98765-4321</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-lawfirm-green-400" size={20} />
                <span className="text-gray-300">contato@limaandre.adv.br</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Localização</h4>
            <div className="flex items-start space-x-3">
              <MapPin className="text-lawfirm-green-400 mt-1" size={20} />
              <div className="text-gray-300">
                <p>Av. Paulista, 1234</p>
                <p>Conjunto 567</p>
                <p>São Paulo - SP</p>
                <p>CEP: 01310-100</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Lima André Advogados. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-green-400 text-sm transition-colors"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lawfirm-green-400 text-sm transition-colors"
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
