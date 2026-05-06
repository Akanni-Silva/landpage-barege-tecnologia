import { companyInfo } from "../../data/companyInfo";
import { Shield } from "lucide-react";

function Footer() {
  return (
    <>
      {/* ===== RODAPÉ ===== */}
      <footer className="bg-yale-blue border-t border-rich-cerulean">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center">
                <Shield className="h-8 w-8 text-baby-blue-ice" />
                <span className="ml-2 text-xl font-bold text-white">
                  {companyInfo.name}
                </span>
              </div>
              <p className="mt-2 text-bright-snow text-sm">
                Tecnologia e confiança em certificação digital.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-baby-blue-ice tracking-wider uppercase">
                Contato
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-bright-snow hover:text-white transition"
                  >
                    {companyInfo.email}
                  </a>
                </li>
                <li>
                  <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-bright-snow hover:text-white transition"
                  >
                    {companyInfo.whatsappNumber}
                  </a>
                </li>
                <li>
                  <span className="text-bright-snow">
                    {companyInfo.instagram}
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-baby-blue-ice tracking-wider uppercase">
                Endereço
              </h3>
              <p className="mt-4 text-bright-snow text-sm">
                {companyInfo.address}
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-rich-cerulean pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-bright-snow text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. Todos os direitos
              reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-bright-snow hover:text-white transition text-sm"
              >
                Política de Privacidade
              </a>
              <span className="mx-2 text-rich-cerulean">|</span>
              <a
                href="#"
                className="text-bright-snow hover:text-white transition text-sm"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
