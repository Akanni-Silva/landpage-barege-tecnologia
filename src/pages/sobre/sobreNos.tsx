import {
  Shield,
  Zap,
  Users,
  TrendingUp,
  Target,
  Heart,
  BarChart3,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { companyInfo } from "../../data";
import DepoimentoCard from "../../components/cards/depoimentosCard";
import { depoimentosData } from "../../data/depoimentoData";

const baregeLogo = "https://i.postimg.cc/cCZh3krn/barege-Logo.png";

function SobreNos() {
  const diferenciais = [
    {
      icon: Shield,
      title: "Certificação Digital",
      desc: "Segurança e validade jurídica para suas transações.",
    },
    {
      icon: BarChart3,
      title: "Gestão Inteligente",
      desc: "Dados centralizados para decisões rápidas e assertivas.",
    },
    {
      icon: Target,
      title: "Foco no Seu Negócio",
      desc: "Cuidamos da tecnologia. Você cuida da estratégia.",
    },
  ];

  const valores = [
    {
      icon: Heart,
      title: "Compromisso",
      desc: "Trabalhamos pelo seu sucesso.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      desc: "Sua empresa sempre um passo à frente.",
    },
    {
      icon: Users,
      title: "Pessoas",
      desc: "Parcerias baseadas em confiança.",
    },
    {
      icon: Zap,
      title: "Inovação",
      desc: "Tecnologia de ponta para simplificar.",
    },
  ];

  const numeros = [
    { valor: "+5.000", label: "Emitidos" },
    { valor: "+500", label: "Clientes" },
    { valor: "98%", label: "Satisfação" },
    { valor: "24/7", label: "Suporte" },
  ];

  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Tecnologia que impulsiona seu negócio
          </h1>
          <p className="text-xl text-baby-blue-ice max-w-2xl mx-auto">
            Especialistas em certificação digital. Zero burocracia.
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-6">
                Quem Somos
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Na{" "}
                  <strong className="text-yale-blue">{companyInfo.name}</strong>
                  , acreditamos que tecnologia deve ser{" "}
                  <strong>ponte, não barreira</strong>. Transformamos
                  complexidade em vantagem estratégica para nossos clientes.
                </p>
                <p>
                  Entregamos <strong>liberdade</strong>. Liberdade para você
                  focar no que importa:{" "}
                  <strong>estratégia, crescimento e seus clientes</strong>.
                </p>
              </div>
              <Link
                to="/solicitacao"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-yale-blue text-white font-semibold rounded-full hover:bg-rich-cerulean transition shadow-md"
              >
                Solicitar Certificado
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square bg-linear-to-br from-baby-blue-ice to-rich-cerulean rounded-2xl flex items-center justify-center">
                <img
                  src={baregeLogo}
                  alt="Barege Tecnologia"
                  className="w-40"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yale-blue text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold">+5.000</p>
                <p className="text-sm text-baby-blue-ice">Emitidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {numeros.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-extrabold text-yale-blue">
                  {item.valor}
                </p>
                <p className="text-sm text-gray-500 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
              Nossos Diferenciais
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Eficiência nasce da centralização. Ferramentas que conectam sua
              operação.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="bg-bright-snow rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-baby-blue-ice rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-yale-blue" />
                </div>
                <h3 className="text-lg font-bold text-yale-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
              Quem Conhece, Confia
            </h2>
            <p className="text-lg text-gray-500">
              A palavra de quem já trabalha conosco
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentosData.slice(0, 3).map((dep) => (
              <DepoimentoCard key={dep.id} depoimento={dep} />
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
              Nossos Valores
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-baby-blue-ice rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-yale-blue" />
                </div>
                <h3 className="text-lg font-bold text-yale-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-16 bg-linear-to-r from-rich-cerulean to-yale-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 text-baby-blue-ice mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Conectamos Pessoas com Tecnologia
          </h2>
          <p className="text-xl text-baby-blue-ice mb-10">
            Parcerias duradouras. Confiança. Inovação. Seu crescimento é nossa
            conquista.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/solicitacao"
              className="px-8 py-4 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition shadow-lg"
            >
              Solicitar Certificado
            </Link>
            <Link
              to="/contato"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreNos;
