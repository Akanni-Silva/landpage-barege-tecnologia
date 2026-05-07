import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  BadgeCheck,
  Building,
  User,
  X,
  SlidersHorizontal,
} from "lucide-react";
import { todosProdutos } from "../../data";
import { formatPrice } from "../../utils";

// Categorias disponíveis
const categorias = [
  { id: "todas", nome: "Todas", icon: null },
  { id: "Pessoa Física", nome: "Pessoa Física", icon: User },
  { id: "Pessoa Jurídica", nome: "Pessoa Jurídica", icon: Building },
];

// Tipos de mídia
// Tipos de mídia - IDs corrigidos para bater com os dados
const tiposMidia = [
  { id: "todos", nome: "Todos" },
  { id: "A1 - Sem Mídia", nome: "A1 - Sem Mídia" },
  { id: "A3 - Cartão", nome: "A3 - Cartão" },
  { id: "A3 - Token USB", nome: "A3 - Token" },
  { id: "A3 - Cartão com Leitora", nome: "A3 - Cartão com Leitora" },
];

// Validades (sem 3 anos)
const validades = [
  { id: "todas", nome: "Todas" },
  { id: "1 Ano", nome: "1 Ano" },
  { id: "2 Anos", nome: "2 Anos" },
];

function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("todas");
  const [midiaAtiva, setMidiaAtiva] = useState("todos");
  const [validadeAtiva, setValidadeAtiva] = useState("todas");
  const [busca, setBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState("relevancia");
  const [mostrarFiltrosMobile, setMostrarFiltrosMobile] = useState(false);

  // Filtrar e ordenar produtos
  const produtosFiltrados = useMemo(() => {
    let filtrados = [...todosProdutos];

    // Filtro por categoria
    if (categoriaAtiva !== "todas") {
      filtrados = filtrados.filter((p) => p.categoria === categoriaAtiva);
    }

    // Filtro por mídia
    if (midiaAtiva !== "todos") {
      filtrados = filtrados.filter((p) => p.tipo === midiaAtiva);
    }

    // Filtro por validade
    if (validadeAtiva !== "todas") {
      filtrados = filtrados.filter((p) => p.duracao === validadeAtiva);
    }

    // Busca por nome
    if (busca.trim()) {
      const termo = busca.toLowerCase();
      filtrados = filtrados.filter(
        (p) =>
          p.nome.toLowerCase().includes(termo) ||
          p.tipo.toLowerCase().includes(termo) ||
          p.categoria.toLowerCase().includes(termo) ||
          p.duracao.toLowerCase().includes(termo),
      );
    }

    // Ordenação
    switch (ordenacao) {
      case "menor-preco":
        filtrados.sort((a, b) => a.precoDesconto - b.precoDesconto);
        break;
      case "maior-preco":
        filtrados.sort((a, b) => b.precoDesconto - a.precoDesconto);
        break;
      case "maior-desconto":
        filtrados.sort((a, b) => b.desconto - a.desconto);
        break;
      case "nome-az":
        filtrados.sort((a, b) => a.nome.localeCompare(b.nome));
        break;
      default:
        // Relevância: populares primeiro
        filtrados.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return filtrados;
  }, [categoriaAtiva, midiaAtiva, validadeAtiva, busca, ordenacao]);

  const limparFiltros = () => {
    setCategoriaAtiva("todas");
    setMidiaAtiva("todos");
    setValidadeAtiva("todas");
    setBusca("");
  };

  const filtrosAtivos =
    categoriaAtiva !== "todas" ||
    midiaAtiva !== "todos" ||
    validadeAtiva !== "todas" ||
    busca.trim() !== "";

  // ✅ Texto de resultado corrigido
  const textoResultado =
    produtosFiltrados.length === 1
      ? "1 produto encontrado"
      : `${produtosFiltrados.length} produtos encontrados`;

  return (
    <div className="bg-bright-snow min-h-screen">
      {/* Banner */}
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Nossos Produtos
          </h1>
          <p className="text-xl text-baby-blue-ice max-w-3xl mx-auto">
            Encontre o certificado digital ideal para você com até 15% de
            desconto
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barra de busca e filtros */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Campo de busca */}
            <div className="relative grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar certificado..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean focus:border-transparent transition bg-white text-gray-700"
              />
              {busca && (
                <button
                  onClick={() => setBusca("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Ordenação */}
            <select
              value={ordenacao}
              onChange={(e) => setOrdenacao(e.target.value)}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white text-gray-700"
            >
              <option value="relevancia">Mais Relevantes</option>
              <option value="menor-preco">Menor Preço</option>
              <option value="maior-preco">Maior Preço</option>
              <option value="maior-desconto">Maior Desconto</option>
              <option value="nome-az">Nome A-Z</option>
            </select>

            {/* Botão filtros mobile */}
            <button
              onClick={() => setMostrarFiltrosMobile(!mostrarFiltrosMobile)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filtros
              {filtrosAtivos && (
                <span className="bg-yale-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  !
                </span>
              )}
            </button>
          </div>

          {/* Filtros */}
          <div
            className={`mt-4 space-y-4 ${mostrarFiltrosMobile ? "block" : "hidden lg:block"}`}
          >
            {/* Categorias */}
            <div>
              <p className="text-sm font-semibold text-yale-blue mb-2">
                Categoria
              </p>
              <div className="flex flex-wrap gap-2">
                {categorias.map((cat) => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCategoriaAtiva(cat.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition flex items-center gap-2 ${
                        categoriaAtiva === cat.id
                          ? "bg-yale-blue text-white"
                          : "bg-bright-snow text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {cat.nome}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tipo de Mídia */}
            <div>
              <p className="text-sm font-semibold text-yale-blue mb-2">
                Mídia / Armazenamento
              </p>
              <div className="flex flex-wrap gap-2">
                {tiposMidia.map((midia) => (
                  <button
                    key={midia.id}
                    onClick={() => setMidiaAtiva(midia.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      midiaAtiva === midia.id
                        ? "bg-yale-blue text-white"
                        : "bg-bright-snow text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {midia.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* Validade */}
            <div>
              <p className="text-sm font-semibold text-yale-blue mb-2">
                Validade
              </p>
              <div className="flex flex-wrap gap-2">
                {validades.map((val) => (
                  <button
                    key={val.id}
                    onClick={() => setValidadeAtiva(val.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      validadeAtiva === val.id
                        ? "bg-yale-blue text-white"
                        : "bg-bright-snow text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {val.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* Limpar filtros */}
            {filtrosAtivos && (
              <button
                onClick={limparFiltros}
                className="text-sm text-red-500 hover:text-red-700 transition flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Limpar todos os filtros
              </button>
            )}
          </div>
        </div>

        {/* ✅ Contador de resultados (corrigido) */}
        <div className="mb-4">
          <p className="text-sm text-gray-500">{textoResultado}</p>
        </div>

        {/* ✅ Lógica de exibição corrigida */}
        {produtosFiltrados.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-yale-blue mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-gray-500 mb-6">
              Tente ajustar os filtros ou limpar a busca
            </p>
            <button
              onClick={limparFiltros}
              className="px-6 py-3 bg-yale-blue text-white rounded-full hover:bg-rich-cerulean transition"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
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
                  <div className="flex justify-center mb-2">
                    {produto.categoria === "Pessoa Física" ? (
                      <User className="w-10 h-10 text-rich-cerulean" />
                    ) : (
                      <Building className="w-10 h-10 text-rich-cerulean" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-yale-blue">
                    {produto.nome}
                  </h3>
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
                  <p className="text-sm text-gray-400 line-through">
                    {formatPrice(produto.precoOriginal)}
                  </p>
                  <p className="text-3xl font-bold text-yale-blue">
                    {formatPrice(produto.precoDesconto)}
                  </p>
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full mt-1">
                    {produto.desconto}% OFF
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {produto.parcelamento}
                  </p>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  {produto.caracteristicas.slice(0, 4).map((feature, index) => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Produtos;
