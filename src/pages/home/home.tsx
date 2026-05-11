import { Link } from "react-router-dom";
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
  Navigation,
  Clock,
  Phone,
  MessageCircle,
  Mail,
  ChevronLeft,
} from "lucide-react";
import { companyInfo, produtosDestaque } from "../../data";
import { formatPrice } from "../../utils";

import banner1 from "../../assets/banner-1-hero-barege.png";
import banner2 from "../../assets/banner-2-produtos-barege.png";
import banner3 from "../../assets/banner-3-sobre-barege.png";
import { useEffect, useState } from "react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    { id: 1, image: banner1, alt: "Banner Hero Barege" },
    { id: 2, image: banner2, alt: "Banner Produtos Barege" },
    { id: 3, image: banner3, alt: "Banner Sobre Barege" },
  ];

  // Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const categorias = [
    { icon: CreditCard, nome: "e-CPF", desc: "Pessoa Física" },
    { icon: Building, nome: "e-CNPJ", desc: "Pessoa Jurídica" },
    { icon: FileText, nome: "NFe / NFCe", desc: "Nota Fiscal Eletrônica" },
    { icon: FileText, nome: "CT-e", desc: "Conhecimento de Transporte" },
    { icon: Shield, nome: "e-Jurídico", desc: "Para advogados e escritórios" },
    {
      icon: Stethoscope,
      nome: "e-Médico",
      desc: "Para profissionais da saúde",
    },
    { icon: Heart, nome: "e-Saúde", desc: "Área da saúde" },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      {/* Versão Mobile/Tablet - Gradiente com CTA simples */}
      <section className="block md:hidden bg-gradient-to-br from-yale-blue to-rich-cerulean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Certificado Digital
          </h1>
          <p className="text-lg text-baby-blue-ice max-w-2xl mx-auto mb-8">
            Compre e use o seu agora
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solicitacao"
              className="px-8 py-4 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition shadow-lg"
            >
              Solicitar Agora
            </Link>
            <Link
              to="/produtos"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Versão Desktop - Carrossel de banners */}
      <section className="hidden md:block relative h-[600px] overflow-hidden">
        {/* Slides */}
        <div className="absolute inset-0">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={banner.image}
                alt={banner.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Overlay sutil para as setas ficarem visíveis */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Setas de navegação */}
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

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white w-10"
                  : "bg-white/50 w-2.5 hover:bg-white/70"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ===== BARRA DE CTAs (apenas no desktop) ===== */}
      <section className="hidden md:block bg-gradient-to-r from-yale-blue to-rich-cerulean py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/solicitacao"
              className="w-full sm:w-auto px-8 py-3 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition shadow-lg text-center flex items-center justify-center gap-2"
            >
              Solicitar Certificado
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/produtos"
              className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition text-center"
            >
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PRODUTOS EM DESTAQUE ===== */}
      <section className="py-16 bg-white" id="produtos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Certificados Digitais Mais Vendidos
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Adquira seu certificado com até 15% OFF, em até 12x no cartão de
              crédito
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {/* Card 1: e-CNPJ A3 Cartão */}
            {produtosDestaque.slice(0, 1).map((produto) => (
              <div
                key={produto.id}
                className="relative bg-bright-snow rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-rich-cerulean"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-rich-cerulean text-white px-4 py-1 rounded-full text-xs font-semibold">
                  MAIS VENDIDO
                </div>
                <div className="text-center mb-4 mt-2">
                  <h3 className="text-xl font-bold text-yale-blue">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-gray-500">{produto.tipo}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {produto.duracao}
                  </p>
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
                  {produto.caracteristicas.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-rich-cerulean mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* ✅ Link usa o ID real do produto dos dados */}
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
                key={produto.id}
                className="relative bg-bright-snow rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-center mb-4 mt-2">
                  <h3 className="text-xl font-bold text-yale-blue">
                    {produto.nome}
                  </h3>
                  <p className="text-sm text-gray-500">{produto.tipo}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {produto.duracao}
                  </p>
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
                  {produto.caracteristicas.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-rich-cerulean mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* ✅ Link usa o ID real do produto dos dados */}
                <Link
                  to={`/solicitacao?produto=${produto.id}`}
                  className="block w-full py-3 bg-yale-blue text-white font-semibold rounded-full hover:bg-rich-cerulean transition text-center"
                >
                  Comprar Agora
                </Link>
              </div>
            ))}

            {/* CARD 3 */}

            <div className="bg-gradient-to-br from-yale-blue to-rich-cerulean rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-rich-cerulean text-white">
              <div className="text-center mb-6">
                <Search className="w-10 h-10 text-baby-blue-ice mx-auto mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Escolha Abaixo o Seu Certificado Digital
                </h3>
                <p className="text-sm text-baby-blue-ice">
                  Clique no tipo desejado e solicite agora mesmo
                </p>
              </div>

              <div className="space-y-2 mb-4">
                {categorias.slice(0, 2).map((cat, i) => (
                  <Link
                    key={i}
                    to={`/solicitacao?categoria=${cat.nome
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
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
                    to={`/solicitacao?categoria=${cat.nome
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
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
            As imagens dos certificados, cartões, leitoras e tokens são
            meramente ilustrativas
          </p>
        </div>
      </section>

      {/* ===== DIFERENCIAIS ===== */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
            Seu Certificado Digital com Segurança
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            A {companyInfo.name} possui atendimento em todo Brasil, presencial e
            online
          </p>
          <Link
            to="/como-funciona"
            className="text-rich-cerulean hover:text-yale-blue font-semibold inline-flex items-center gap-1"
          >
            Saiba como funciona
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* COMO CHEGAR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Onde Estamos
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Venha nos visitar ou faça sua emissão por videoconferência
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cards de informação */}
            <div className="space-y-6">
              <div className="bg-bright-snow rounded-2xl p-6 border border-gray-100 shadow-md">
                <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-rich-cerulean" />
                  Endereço
                </h3>
                <p className="text-gray-600">{companyInfo.address}</p>
                <p className="text-gray-400 text-sm mt-1">Osasco - SP</p>
                <a
                  href="https://maps.app.goo.gl/?q=Av.+dos+Autonomistas,+2561+-+Osasco+-+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-rich-cerulean hover:text-yale-blue text-sm font-medium transition"
                >
                  <Navigation className="w-4 h-4" />
                  Como chegar
                </a>
              </div>

              <div className="bg-bright-snow rounded-2xl p-6 border border-gray-100 shadow-md">
                <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-rich-cerulean" />
                  Horário de Atendimento
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex justify-between">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium">09:00 às 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-medium">09:00 às 13:00</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bright-snow rounded-2xl p-6 border border-gray-100 shadow-md">
                <h3 className="text-lg font-bold text-yale-blue mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-rich-cerulean" />
                  Contato Rápido
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

            {/* Mapa */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full min-h-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122857672406!2d-46.79169468440715!3d-23.52858468470034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff095c5e5b8d%3A0x9e4e4e4e4e4e4e4e!2sAv.%20dos%20Autonomistas%2C%202561%20-%20Vila%20Osasco%2C%20Osasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1625000000000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Barege Tecnologia"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
