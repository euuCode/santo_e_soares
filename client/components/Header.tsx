import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-lawfirm-dark-900/98 via-black/95 to-lawfirm-dark-900/98 backdrop-blur-xl border-b-2 border-lawfirm-gold-400/30 diamond-shadow relative z-50 sticky top-0 luxury-border">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-3 lg:py-4">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 sm:space-x-3 lg:space-x-4 bg-gradient-to-r from-lawfirm-dark-800/60 via-black/50 to-lawfirm-dark-800/60 px-4 py-3 sm:px-5 sm:py-4 lg:px-8 lg:py-5 rounded-xl sm:rounded-2xl hover:from-lawfirm-dark-700/80 hover:via-lawfirm-dark-600/60 hover:to-lawfirm-dark-700/80 transition-all duration-500 backdrop-blur-md luxury-border hover:border-lawfirm-gold-400/50 diamond-shadow hover:scale-105 executive-glow"
          >
            <div className="relative">
              <img
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=120,fit=crop,q=95/A1aPOyMlXXIPRlbw/bc7c8a94-66c3-4dff-9fb5-a469f0a8bbe3-Aq2JoPeqb7IMXQ70.png"
                alt="Santo e Soares Advocacia"
                className="h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 object-contain executive-glow group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-lawfirm-gold-400/20 rounded-full blur-2xl group-hover:bg-lawfirm-gold-400/40 transition-all duration-500 executive-glow"></div>
            </div>
            <div className="flex flex-col min-w-0">
              <h1
                className="text-xl sm:text-2xl lg:text-3xl font-black text-lawfirm-gold-200 group-hover:text-white transition-colors duration-500 tracking-tight whitespace-nowrap executive-glow"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Santo &amp; Soares
              </h1>
              <span className="text-sm sm:text-base text-lawfirm-gold-400/90 font-medium tracking-[0.3em] uppercase whitespace-nowrap premium-text-shadow">
                Advocacia Premium
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-lawfirm-dark-800/60 via-black/40 to-lawfirm-dark-800/60 backdrop-blur-xl rounded-full px-8 py-4 luxury-border diamond-shadow">
            <Link
              to="/"
              className="relative text-gray-200 hover:text-lawfirm-gold-200 font-semibold transition-all duration-500 px-6 py-4 rounded-full hover:bg-lawfirm-gold-400/20 group executive-glow tracking-wide"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lawfirm-gold-400/0 to-lawfirm-gold-400/0 group-hover:from-lawfirm-gold-400/15 group-hover:to-lawfirm-gold-400/25 rounded-full transition-all duration-500 luxury-border"></div>
            </Link>
            <Link
              to="/sobre"
              className="relative text-gray-200 hover:text-lawfirm-gold-200 font-semibold transition-all duration-500 px-6 py-4 rounded-full hover:bg-lawfirm-gold-400/20 group executive-glow tracking-wide"
            >
              <span className="relative z-10">Sobre Nós</span>
              <div className="absolute inset-0 bg-gradient-to-r from-lawfirm-gold-400/0 to-lawfirm-gold-400/0 group-hover:from-lawfirm-gold-400/15 group-hover:to-lawfirm-gold-400/25 rounded-full transition-all duration-500 luxury-border"></div>
            </Link>
            <Link
              to="/contrate-nos"
              className="relative text-white hover:text-white font-bold transition-all duration-500 px-8 py-4 rounded-full bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 diamond-shadow hover:scale-105 group executive-glow luxury-border tracking-wider uppercase"
            >
              <span className="relative z-10">Contrate-nos</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden bg-gradient-to-r from-lawfirm-gold-600 via-lawfirm-gold-700 to-lawfirm-gold-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:from-lawfirm-gold-500 hover:via-lawfirm-gold-600 hover:to-lawfirm-gold-500 transition-all duration-500 diamond-shadow hover:scale-110 backdrop-blur-md luxury-border flex items-center justify-center executive-glow"
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
                to="/"
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
