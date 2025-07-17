import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=120,fit=crop,q=95/A1aPOyMlXXIPRlbw/bc7c8a94-66c3-4dff-9fb5-a469f0a8bbe3-Aq2JoPeqb7IMXQ70.png"
              alt="Santo e Soares Advocacia"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-lawfirm-gold-600">
                Santo e Soares Advocacia
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/inicio"
              className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              to="/sobre"
              className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              to="/contrate-nos"
              className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors"
            >
              Contrate-nos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-lawfirm-gold-600 text-white p-2 rounded-lg hover:bg-lawfirm-gold-700 transition-colors"
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
                className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#contrate-nos"
                className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contrate-nos
              </a>
              <a
                href="#contato"
                className="text-gray-700 hover:text-lawfirm-gold-600 font-medium transition-colors py-2"
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
