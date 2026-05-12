import { Award, User } from "lucide-react";
import type { Depoimento } from "../../models/depoimentoModel";

interface DepoimentoCardProps {
  depoimento: Depoimento;
}

function DepoimentoCard({ depoimento }: DepoimentoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col">
      {/* Estrelas */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Award
            key={i}
            className={`w-4 h-4 ${
              i < depoimento.estrelas
                ? "text-yale-blue fill-yale-blue"
                : "text-gray-300 fill-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Texto do depoimento */}
      <blockquote className="text-gray-600 text-sm leading-relaxed mb-6 grow italic">
        "{depoimento.texto}"
      </blockquote>

      {/* Informações do autor */}
      <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
        {/* Avatar */}
        <div className="w-10 h-10 bg-baby-blue-ice rounded-full flex items-center justify-center shrink-0">
          {depoimento.foto ? (
            <img
              src={depoimento.foto}
              alt={depoimento.nome}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <User className="w-5 h-5 text-yale-blue" />
          )}
        </div>

        {/* Nome e cargo */}
        <div>
          <p className="font-semibold text-yale-blue text-sm">
            {depoimento.nome}
          </p>
          <p className="text-xs text-gray-400">
            {depoimento.cargo} — {depoimento.empresa}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DepoimentoCard;
