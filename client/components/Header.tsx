import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-lawfirm-green-600 text-white p-2 rounded-lg">
              <div className="text-xl font-bold tracking-wider">S&S</div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-lawfirm-green-600">
                Santo e Soares Advocacia
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="#areas"
              className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors"
            >
              Áreas de Atuação
            </a>
            <a
              href="#contato"
              className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-lawfirm-green-600 text-white p-2 rounded-lg hover:bg-lawfirm-green-700 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#areas"
                className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Áreas de Atuação
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-lawfirm-green-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
