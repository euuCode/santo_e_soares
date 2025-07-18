import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-lawfirm-dark-900/95 backdrop-blur-md border-b border-lawfirm-gold-400/20 shadow-2xl relative z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-4 bg-gradient-to-r from-lawfirm-dark-800/50 to-lawfirm-dark-700/50 px-6 py-4 rounded-xl hover:from-lawfirm-dark-700/60 hover:to-lawfirm-dark-600/60 transition-all duration-300 backdrop-blur-sm border border-lawfirm-gold-400/10 hover:border-lawfirm-gold-400/30 shadow-lg hover:shadow-xl"
          >
            <div className="relative">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=120,fit=crop,q=95/A1aPOyMlXXIPRlbw/bc7c8a94-66c3-4dff-9fb5-a469f0a8bbe3-Aq2JoPeqb7IMXQ70.png"
                alt="Santo e Soares Advocacia"
                className="h-14 w-14 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-lawfirm-gold-400/10 rounded-full blur-xl group-hover:bg-lawfirm-gold-400/20 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <h1
                className="text-2xl font-semibold text-lawfirm-gold-400 group-hover:text-lawfirm-gold-300 transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Santo e Soares
              </h1>
              <span className="text-sm text-lawfirm-gold-500/80 font-light tracking-widest uppercase">
                Advocacia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 bg-lawfirm-dark-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-lawfirm-gold-400/10">
            <Link
              to="/inicio"
              className="relative text-gray-300 hover:text-lawfirm-gold-300 font-medium transition-all duration-300 px-5 py-3 rounded-full hover:bg-lawfirm-gold-400/10 group"
            >
              <span className="relative z-10">Início</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lawfirm-gold-400/0 to-lawfirm-gold-400/0 group-hover:from-lawfirm-gold-400/5 group-hover:to-lawfirm-gold-400/10 rounded-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/sobre"
              className="relative text-gray-300 hover:text-lawfirm-gold-300 font-medium transition-all duration-300 px-5 py-3 rounded-full hover:bg-lawfirm-gold-400/10 group"
            >
              <span className="relative z-10">Sobre Nós</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lawfirm-gold-400/0 to-lawfirm-gold-400/0 group-hover:from-lawfirm-gold-400/5 group-hover:to-lawfirm-gold-400/10 rounded-full transition-all duration-300"></div>
            </Link>
            <Link
              to="/contrate-nos"
              className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 px-5 py-3 rounded-full bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 shadow-lg hover:shadow-xl group"
            >
              <span className="relative z-10">Contrate-nos</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white p-3 rounded-xl hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-lawfirm-gold-400/20"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-lawfirm-dark-700">
            <div className="flex flex-col space-y-4">
              <Link
                to="/inicio"
                className="text-gray-300 hover:text-lawfirm-gold-400 font-medium transition-colors py-3 px-3 rounded-md hover:bg-lawfirm-dark-700 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                to="/sobre"
                className="text-gray-300 hover:text-lawfirm-gold-400 font-medium transition-colors py-3 px-3 rounded-md hover:bg-lawfirm-dark-700 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                to="/contrate-nos"
                className="text-gray-300 hover:text-lawfirm-gold-400 font-medium transition-colors py-3 px-3 rounded-md hover:bg-lawfirm-dark-700 block"
                onClick={() => setIsMenuOpen(false)}
              >
                Contrate-nos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
