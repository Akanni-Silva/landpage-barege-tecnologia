import { useState, useEffect } from "react";
import { Shield, X } from "lucide-react";

function CookieModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookiesAceitos = localStorage.getItem("barege-cookies-aceitos");
    if (!cookiesAceitos) {
      // Pequeno delay para não aparecer junto com o carregamento da página
      const timer = setTimeout(() => setIsOpen(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const aceitarCookies = () => {
    localStorage.setItem("barege-cookies-aceitos", "true");
    setIsOpen(false);
  };

  const recusarCookies = () => {
    localStorage.setItem("barege-cookies-aceitos", "false");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 z-10 animate-fade-in border border-gray-100">
        {/* Botão fechar */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ícone */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-baby-blue-ice rounded-full flex items-center justify-center">
            <Shield className="w-7 h-7 text-yale-blue" />
          </div>
        </div>

        {/* Título */}
        <h3 className="text-lg font-bold text-yale-blue text-center mb-2">
          Cookies e Privacidade
        </h3>

        {/* Texto */}
        <p className="text-sm text-gray-500 text-center mb-6 leading-relaxed">
          Usamos cookies para melhorar sua experiência, analisar o tráfego e
          personalizar o conteúdo. Ao continuar, você concorda com nossa{" "}
          <a
            href="/politica-privacidade"
            className="text-rich-cerulean hover:text-yale-blue underline transition"
          >
            Política de Privacidade
          </a>
          .
        </p>

        {/* Botões */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={recusarCookies}
            className="w-full py-3 border-2 border-gray-300 text-gray-600 font-semibold rounded-full hover:bg-gray-50 transition text-sm"
          >
            Apenas Necessários
          </button>
          <button
            onClick={aceitarCookies}
            className="w-full py-3 bg-yale-blue text-white font-semibold rounded-full hover:bg-rich-cerulean transition shadow-md text-sm"
          >
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieModal;