import { X, BadgeCheck, Zap, Shield, Globe, Headphones } from "lucide-react";

interface MidiaVisual {
  imagem: string;
  corBorda: string;
  corSombra: string;
  titulo: string;
  descricao: string;
  beneficios: string[];
}

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  midiaVisual: MidiaVisual | null;
}

export function ProductModal({
  isOpen,
  onClose,
  midiaVisual,
}: ProductModalProps) {
  if (!isOpen || !midiaVisual) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Conteúdo do Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 z-10 animate-fade-in">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Imagem do produto */}
        <div className="flex justify-center mb-6">
          <div
            className={`
              w-32 h-32 rounded-full
              border-4 ${midiaVisual.corBorda} ${midiaVisual.corSombra}
              shadow-xl
              bg-linear-to-br from-bright-snow to-white
              flex items-center justify-center
              overflow-hidden
            `}
          >
            <img
              src={midiaVisual.imagem}
              alt={midiaVisual.titulo}
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Título */}
        <h2 className="text-2xl font-bold text-yale-blue text-center mb-3">
          {midiaVisual.titulo}
        </h2>

        {/* Descrição */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {midiaVisual.descricao}
        </p>

        {/* Benefícios */}
        <div className="bg-bright-snow rounded-xl p-5 mb-6">
          <h3 className="text-sm font-semibold text-yale-blue mb-3 flex items-center gap-2">
            <BadgeCheck className="w-4 h-4" />
            Benefícios
          </h3>
          <ul className="space-y-2">
            {midiaVisual.beneficios.map((beneficio, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <Zap className="w-4 h-4 text-rich-cerulean mt-0.5 shrink-0" />
                {beneficio}
              </li>
            ))}
          </ul>
        </div>

        {/* Diferenciais adicionais */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { icon: Shield, label: "Segurança" },
            { icon: Globe, label: "ICP-Brasil" },
            { icon: Headphones, label: "Suporte 24/7" },
          ].map((item, i) => (
            <div key={i} className="text-center p-3 bg-bright-snow rounded-xl">
              <item.icon className="w-6 h-6 text-rich-cerulean mx-auto mb-1" />
              <p className="text-xs text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Botão CTA */}
        <button
          onClick={onClose}
          className="w-full py-3 bg-yale-blue text-white font-semibold rounded-full hover:bg-rich-cerulean transition"
        >
          Entendi, continuar
        </button>
      </div>
    </div>
  );
}
