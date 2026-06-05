import { Link } from "react-router-dom";
import { Percent } from "lucide-react";
import { companyInfo } from "../../data/companyData";
const baregeLogo = "https://i.imgur.com/nfnWofK.png";

function Footer() {
  return (
    <footer className="bg-yale-blue py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img
                src={baregeLogo}
                alt="logo da barege tecnologia"
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-bright-snow text-sm">
              Tecnologia e confiança em certificação digital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-baby-blue-ice tracking-wider uppercase mb-4">
              Páginas
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-bright-snow hover:text-white transition text-sm"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/como-funciona"
                  className="text-bright-snow hover:text-white transition text-sm"
                >
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-bright-snow hover:text-white transition text-sm"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/parceiros"
                  className="text-bright-snow hover:text-white transition text-sm"
                >
                  Parceiros
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold text-baby-blue-ice tracking-wider uppercase mb-4">
              Contato
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-bright-snow hover:text-white transition text-sm"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bright-snow hover:text-white transition text-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="text-bright-snow text-sm">
                  {companyInfo.instagram}
                </span>
              </li>
            </ul>
          </div>

          {/* Endereço */}
          <div>
            <h3 className="text-sm font-semibold text-baby-blue-ice tracking-wider uppercase mb-4">
              Endereço
            </h3>
            <p className="text-bright-snow text-sm">{companyInfo.address}</p>
            <div className="mt-4 flex gap-2">
              <Percent className="w-5 h-5 text-baby-blue-ice" />
              <span className="text-bright-snow text-sm">Até 15% OFF</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-rich-cerulean pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-bright-snow text-sm">
            © {new Date().getFullYear()} {companyInfo.name}. Todos os direitos
            reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <Link
              to="/politica-privacidade"
              className="text-bright-snow hover:text-white transition text-sm"
            >
              Política de Privacidade
            </Link>
            <span className="mx-2 text-rich-cerulean">|</span>
            <Link
              to="/termos-uso"
              className="text-bright-snow hover:text-white transition text-sm"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
