import { MessageCircle, Shield } from "lucide-react";
import { companyInfo } from "../../data/companyInfo";

function Navbar() {
  return (
    <>
      {/* ===== NAVEGAÇÃO ===== */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-rich-cerulean" />
                <span className="ml-2 text-2xl font-bold text-yale-blue">
                  {companyInfo.name}
                </span>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yale-blue hover:bg-rich-cerulean transition duration-300 ease-in-out"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
