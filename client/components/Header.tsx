import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-lawfirm-dark-900/95 backdrop-blur-md border-b border-lawfirm-gold-400/20 shadow-2xl relative z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            {/* ...seu logo aqui... */}
            <span className="text-xl font-bold text-white">Santo & Soares</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 bg-lawfirm-dark-800/40 backdrop-blur-sm rounded-full px-6 py-3 border border-lawfirm-gold-400/10">
            <Link
              to="/Home"
              className="relative text-gray-300 hover:text-lawfirm-gold-300 font-medium transition-all duration-300 px-5 py-3 rounded-full hover:bg-lawfirm-gold-400/10 group"
            >
              <span className="relative z-10">Home</span>
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
            className="lg:hidden bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 text-white p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-sm border border-lawfirm-gold-400/20 flex items-center justify-center"
          >
            {isMenuOpen ? (
              <X size={20} className="sm:hidden" />
            ) : (
              <Menu size={20} className="sm:hidden" />
            )}
            {isMenuOpen ? (
              <X size={24} className="hidden sm:block" />
            ) : (
              <Menu size={24} className="hidden sm:block" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 sm:py-6 border-t border-lawfirm-gold-400/20 bg-lawfirm-dark-800/50 backdrop-blur-md">
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link
                to="/Home"
                className="text-gray-300 hover:text-lawfirm-gold-300 font-medium transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-lawfirm-gold-400/10 block border border-transparent hover:border-lawfirm-gold-400/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/sobre"
                className="text-gray-300 hover:text-lawfirm-gold-300 font-medium transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:bg-lawfirm-gold-400/10 block border border-transparent hover:border-lawfirm-gold-400/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                to="/contrate-nos"
                className="text-white font-medium transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-lawfirm-gold-600 to-lawfirm-gold-700 hover:from-lawfirm-gold-500 hover:to-lawfirm-gold-600 block shadow-lg text-center"
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
