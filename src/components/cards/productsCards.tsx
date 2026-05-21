import { useState } from "react";
import { Link } from "react-router-dom";
import { BadgeCheck, Info } from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";
import { ProductModal } from "../modals/productModal";
import type { Produto } from "../../models/productModel";
import { getVisualPorTipo } from "../../services/productService";

interface ProductCardProps {
  produto: Produto;
}

export function ProductCard({ produto }: ProductCardProps) {
  const visual = getVisualPorTipo(produto.tipo);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dadosModal = visual
    ? {
        titulo: `${produto.nome} - ${produto.tipo}`,
        descricao: `Certificado digital ${produto.nome} • ${produto.tipo} • ${produto.duracao}`,
        beneficios: produto.caracteristicas,
        imagem: visual.imagem,
        corBorda: visual.corBorda,
        corSombra: visual.corSombra,
      }
    : null;

  return (
    <>
      <div
        className={`relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border ${
          produto.popular ? "border-rich-cerulean" : "border-gray-100"
        }`}
      >
        {produto.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rich-cerulean text-white px-4 py-1 rounded-full text-xs font-semibold">
            MAIS VENDIDO
          </div>
        )}

        <div className="text-center mb-4 mt-2">
          {/* Imagem do produto */}
          <div className="relative flex justify-center mb-3">
            {visual ? (
              <div
                className={`
                  relative w-20 h-20 rounded-full 
                  border-2 ${visual.corBorda} ${visual.corSombra}
                  shadow-md
                  bg-linear-to-br from-bright-snow to-white
                  flex items-center justify-center
                  overflow-hidden
                  transition-transform duration-300 hover:scale-110
                `}
              >
                <img
                  src={visual.imagem}
                  alt={`${produto.nome} ${produto.tipo}`}
                  className="w-14 h-14 object-contain"
                />
              </div>
            ) : (
              <div className="relative w-20 h-20 rounded-full bg-baby-blue-ice flex items-center justify-center">
                <BadgeCheck className="w-10 h-10 text-yale-blue" />
              </div>
            )}
          </div>

          {/* Botão Saiba mais */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-1 text-xs text-rich-cerulean hover:text-yale-blue transition font-medium mb-1"
          >
            <Info className="w-3 h-3" />
            Saiba mais
          </button>

          <h3 className="text-xl font-bold text-yale-blue">{produto.nome}</h3>
          <p className="text-sm text-gray-500">{produto.tipo}</p>
          <div className="flex justify-center gap-2 mt-1">
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {produto.categoria}
            </span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {produto.duracao}
            </span>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="text-3xl font-bold text-yale-blue">
            {formatPrice(produto.precoOriginal)}
          </p>
          <p className="text-xs text-gray-400 mt-1">Pix, cartão ou à vista</p>
        </div>

        <ul className="space-y-2 mb-6 text-sm">
          {produto.caracteristicas.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <BadgeCheck className="w-4 h-4 text-rich-cerulean mt-0.5 shrink-0" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          to={`/solicitacao?produto=${produto.id}`}
          className="block w-full py-3 bg-yale-blue text-white font-semibold rounded-full hover:bg-rich-cerulean transition text-center"
        >
          Comprar Agora
        </Link>
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        midiaVisual={dadosModal}
      />
    </>
  );
}
