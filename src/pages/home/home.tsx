/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  BadgeCheck,
  Search,
  ChevronRight,
  CreditCard,
  Shield,
  FileText,
  Stethoscope,
  Heart,
  Building,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  ChevronLeft,
  Info,
} from "lucide-react";
import { formatPrice } from "../../utils/formatPrice";

import { companyInfo, produtosDestaque } from "../../data";
import { ProductModal } from "../../components/modals/productModal";
import type { DadosModalProduto, Produto } from "../../models/productModel";
import { getVisualPorTipo } from "../../services/productService";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dadosModal, setDadosModal] = useState<DadosModalProduto | null>(null);

  const banners = [
    {
      id: 1,
      image: "https://i.postimg.cc/WFb3Hrtm/banner-1-hero-barege.png",
      alt: "Certificado Digital Rápido e Seguro | Barege",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/PprxRZNL/banner-2-produtos-barege.png",
      alt: "Compre seu Certificado Digital Online | Barege",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/MMKTFRXy/banner-3-sobre-barege.png",
      alt: "Especialistas em Certificação Digital | Barege",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const handleOpenModal = (produto: Produto) => {
    const visual = getVisualPorTipo(produto.tipo);
    if (!visual) return;

    setDadosModal({
      titulo: `${produto.nome} - ${produto.tipo}`,
      descricao: `Certificado digital ${produto.nome} no formato ${produto.tipo} com validade de ${produto.duracao}. ${produto.categoria}.`,
      beneficios: produto.caracteristicas,
      imagem: visual.imagem,
      corBorda: visual.corBorda,
      corSombra: visual.corSombra,
    });
    setIsModalOpen(true);
  };

  const categorias = [
    { icon: CreditCard, nome: "e-CPF", desc: "Pessoa Física" },
    { icon: Building, nome: "e-CNPJ / MEI", desc: "Pessoa Jurídica" },
    { icon: FileText, nome: "NFe / NFCe", desc: "Nota Fiscal" },
    { icon: FileText, nome: "CT-e", desc: "Transporte" },
    { icon: Shield, nome: "e-Jurídico", desc: "Advocacia" },
    { icon: Stethoscope, nome: "e-Médico", desc: "Saúde" },
    { icon: Heart, nome: "e-Saúde", desc: "Saúde" },
  ];

  const ProdutoImagem = ({ produto }: { produto: Produto }) => {
    const visual = getVisualPorTipo(produto.tipo);
    if (!visual) return null;

    return (
      <div className="flex flex-col items-center mb-3 mt-2">
        <div
          className={`
            w-24 h-24 rounded-full 
            border-4 ${visual.corBorda} ${visual.corSombra}
            shadow-lg
            bg-linear-to-br from-bright-snow to-white
            flex items-center justify-center
            overflow-hidden
            transition-transform duration-300 hover:scale-110
          `}
        >
          <img
            src={visual.imagem}
            alt={`${produto.nome} ${produto.tipo}`}
            className="w-16 h-16 object-contain"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleOpenModal(produto);
          }}
          className="inline-flex items-center gap-1 mt-2 text-xs text-rich-cerulean hover:text-yale-blue transition font-medium"
        >
          <Info className="w-3.5 h-3.5" />
          Saiba mais
        </button>
      </div>
    );
  };

  return (
    <>
      {/* ===== HERO MOBILE ===== */}
      <section className="block md:hidden bg-linear-to-br from-yale-blue to-rich-cerulean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Certificado Digital Rápido e Sem Burocracia
          </h1>
          <p className="text-lg text-baby-blue-ice mb-8">
            +5.000 clientes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solicitacao"
              className="px-8 py-4 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition shadow-lg"
            >
              Qual o seu certificado ?
            </Link>
            {/* <Link
              to="/produtos"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Qual o seu certificado ?
            </Link> */}
          </div>
        </div>
      </section>

      {/* ===== CARROSSEL DESKTOP ===== */}
      <section className="hidden md:block relative aspect-20/7 overflow-hidden">
        <div className="absolute inset-0">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition backdrop-blur-sm"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition backdrop-blur-sm"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-10" : "bg-white/50 w-2.5 hover:bg-white/70"}`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== BARRA DE CTAs (DESKTOP) ===== */}
      <section className="hidden md:block bg-linear-to-r from-yale-blue to-rich-cerulean py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/solicitacao"
              className="w-full sm:w-auto px-8 py-3 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition shadow-lg text-center flex items-center justify-center gap-2"
            >
              Peça o seu agora
            </Link>
            <Link
              to="/produtos"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition text-center"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUTOS EM DESTAQUE ===== */}
      <section className="py-16 bg-white" id="produtos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Os Mais Pedidos
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Pagamento via Pix, cartão ou à vista
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Card 1: e-CNPJ A3 Cartão */}
            {produtosDestaque.slice(0, 1).map((produto) => (
              <div
                key={produto.id}
                className="relative bg-bright-snow rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-rich-cerulean"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rich-cerulean text-white px-4 py-1 rounded-full text-xs font-semibold uppercase">
                  {produto.nome}
                </div>
                <ProdutoImagem produto={produto} />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-yale-blue">
                    {produto.nome} <br /> {produto.tipo}
                  </h3>
                  <p className="text-sm text-gray-500">{produto.duracao}</p>
                </div>
                <div className="text-center mt-4">
                  <p className="text-3xl font-bold text-yale-blue">
                    {formatPrice(produto.precoOriginal)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Pix, cartão ou à vista
                  </p>
                </div>
                <ul className="space-y-2 my-6 text-sm">
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
            ))}

            {/* Card 2: e-CPF A1 Sem Mídia */}
            {produtosDestaque.slice(1, 2).map((produto) => (
              <div
                key={produto.nome}
                className="relative bg-bright-snow rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-rich-cerulean"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rich-cerulean text-white px-4 py-1 rounded-full text-xs font-semibold uppercase">
                  {produto.nome}
                </div>
                <ProdutoImagem produto={produto} />
                <div className="text-center">
                  <h3 className="text-xl font-bold text-yale-blue">
                    {produto.nome} <br /> {produto.tipo}
                  </h3>
                  <p className="text-sm text-gray-500">{produto.duracao}</p>
                </div>
                <div className="text-center mt-4">
                  <p className="text-3xl font-bold text-yale-blue">
                    {formatPrice(produto.precoOriginal)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Pix, cartão ou à vista
                  </p>
                </div>
                <ul className="space-y-2 my-6 text-sm">
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
            ))}

            {/* Card 3: Escolha seu Certificado */}
            <div className="bg-linear-to-br from-yale-blue to-rich-cerulean rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-rich-cerulean text-white">
              <div className="text-center mb-6">
                <Search className="w-10 h-10 text-baby-blue-ice mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Escolha o Seu Certificado
                </h3>
                <p className="text-sm text-baby-blue-ice">
                  Clique e solicite agora
                </p>
              </div>

              <div className="space-y-2 mb-4">
                {categorias.slice(0, 2).map((cat, i) => (
                  <Link
                    key={i}
                    to={`/solicitacao?categoria=${cat.nome.toLowerCase().replace(/\s/g, "-")}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{cat.nome}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
                <hr className="border-white/20" />
                {categorias.slice(2).map((cat, i) => (
                  <Link
                    key={i}
                    to={`/solicitacao?categoria=${cat.nome.toLowerCase().replace(/\s/g, "-")}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <div className="flex items-center gap-2">
                      <cat.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{cat.nome}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>

              <Link
                to="/solicitacao"
                className="block w-full py-3 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition text-center text-sm"
              >
                Outros Certificados
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            Imagens ilustrativas. Certificados homologados pela ICP-Brasil.
          </p>
        </div>
      </section>

      {/* ===== DIFERENCIAIS ===== */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
            Segurança e Confiança
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            +5.000 certificados emitidos <br /> 98% de clientes satisfeitos
          </p>
          <Link
            to="/como-funciona"
            className="text-rich-cerulean hover:text-yale-blue font-semibold inline-flex items-center gap-1"
          >
            Veja como funciona <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ===== LOCALIZAÇÃO ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Onde Estamos
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Presencial em Osasco/SP ou online por videoconferência
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-bright-snow rounded-2xl p-6 border border-gray-100 shadow-md">
              <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rich-cerulean" />
                Endereço
              </h3>
              <p className="text-gray-600">{companyInfo.address}</p>
              <p className="text-gray-400 text-sm mt-1">Osasco - SP</p>
            </div>
            <div className="bg-bright-snow rounded-2xl p-6 border border-gray-100 shadow-md">
              <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-rich-cerulean" />
                Horário
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex justify-between">
                  <span>Seg a Sex</span>
                  <span className="font-medium">09h às 18h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span className="font-medium">09h às 13h</span>
                </li>
              </ul>
            </div>
            <div className="bg-bright-snow rounded-2xl p-6 border border-gray-100 shadow-md">
              <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-rich-cerulean" />
                Contato
              </h3>
              <div className="space-y-3">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition text-sm font-medium"
                >
                  <MessageCircle className="w-4 h-4" />
                  (11) 99860-6204
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-2 text-rich-cerulean hover:text-yale-blue transition text-sm"
                >
                  <Mail className="w-4 h-4" />
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        midiaVisual={dadosModal}
      />
    </>
  );
}

export default Home;
