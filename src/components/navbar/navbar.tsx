import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X, FileCheck } from "lucide-react";
import { companyInfo } from "../../data";
import baregeLogo from "../../assets/baregeLogo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Produtos", path: "/produtos" },
    { name: "Como Funciona", path: "/como-funciona" },
    { name: "Sobre Nós", path: "/sobre-nos" },
    { name: "Contato", path: "/contato" },
    { name: "Parceiros", path: "/parceiros" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={baregeLogo} alt="logo da barege tecnologia" className="h-12 w-auto" />
            <span className="ml-2 text-xl font-bold text-yale-blue">
              {companyInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition ${
                  location.pathname === link.path
                    ? "text-yale-blue border-b-2 border-yale-blue"
                    : "text-gray-600 hover:text-rich-cerulean"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href={companyInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-rich-cerulean hover:text-yale-blue transition"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">WhatsApp</span>
            </a>

            {/* CTA Solicitar Certificado (Desktop) */}
            <Link
              to="/solicitacao"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-yale-blue text-white text-sm font-medium rounded-full hover:bg-rich-cerulean transition shadow-md"
            >
              <FileCheck className="w-4 h-4" />
              Solicitar Certificado
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-yale-blue"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path
                    ? "text-yale-blue"
                    : "text-gray-600 hover:text-rich-cerulean"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* CTA no mobile também */}
            <Link
              to="/solicitacao"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full mt-3 py-3 bg-yale-blue text-white text-sm font-medium rounded-full hover:bg-rich-cerulean transition text-center"
            >
              <span className="flex items-center justify-center gap-2">
                <FileCheck className="w-4 h-4" />
                Solicitar Certificado
              </span>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
