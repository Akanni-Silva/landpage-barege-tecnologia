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


function SobreNos() {
  // Diferenciais
  const diferenciais = [
    {
      icon: Shield,
      title: "Certificação Digital",
      desc: "Segurança e validade jurídica para o mundo digital, garantindo que suas transações sejam ágeis e protegidas.",
    },
    {
      icon: BarChart3,
      title: "Gestão Inteligente",
      desc: "Nosso ecossistema integra e centraliza informações cruciais — é a inteligência de dados ao seu alcance.",
    },
    {
      icon: Target,
      title: "Foco no Seu Negócio",
      desc: "Removemos o peso da gestão de TI da sua rotina, permitindo que sua equipe atue de forma 100% estratégica.",
    },
  ];

  // Valores
  const valores = [
    {
      icon: Heart,
      title: "Compromisso",
      desc: "Trabalhamos pelo sucesso do seu negócio de ponta a ponta.",
    },
    {
      icon: TrendingUp,
      title: "Crescimento",
      desc: "Otimizamos a eficiência para sua empresa estar sempre um passo à frente.",
    },
    {
      icon: Users,
      title: "Pessoas",
      desc: "Mais do que sistemas, construímos parcerias baseadas em confiança.",
    },
    {
      icon: Zap,
      title: "Inovação",
      desc: "Tecnologia de ponta para simplificar sua gestão diária.",
    },
  ];

  // Números (prova social)
  const numeros = [
    { valor: "+5.000", label: "Certificados Emitidos" },
    { valor: "+500", label: "Clientes Atendidos" },
    { valor: "98%", label: "Satisfação" },
    { valor: "24/7", label: "Suporte" },
  ];

  

  return (
    <div className="bg-bright-snow">
      {/* ===== BANNER ===== */}
      <section className="bg-gradient-to-br from-yale-blue to-rich-cerulean py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Tecnologia que impulsiona o seu negócio e simplifica sua gestão.
          </h1>
          <p className="text-xl text-baby-blue-ice max-w-3xl mx-auto">
            Especialistas em certificação digital e soluções de gestão,
            transformamos complexidade em vantagem estratégica.
          </p>
        </div>
      </section>

      {/* ===== QUEM SOMOS ===== */}
      <section className="py-20 bg-white">
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
                  , acreditamos que a tecnologia deve ser uma{" "}
                  <strong>ponte, não uma barreira</strong>. Especialistas em
                  certificação digital e soluções de gestão, nascemos com o
                  propósito de transformar a complexidade tecnológica em
                  vantagem estratégica para nossos clientes.
                </p>
                <p>
                  Não entregamos apenas certificados; entregamos{" "}
                  <strong>liberdade</strong>. Liberdade para que escritórios
                  contábeis e empresas de diversos setores deixem de se
                  preocupar com a infraestrutura técnica e passem a focar no que
                  realmente importa:
                  <strong>
                    estratégia, crescimento e o cuidado com seus próprios
                    clientes
                  </strong>
                  .
                </p>
                <p>
                  Somos movidos pelo desafio de simplificar o complexo. Cada
                  certificado emitido, cada cliente atendido, é uma prova do
                  nosso compromisso com a excelência e a inovação constante.
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
              <div className="aspect-square bg-gradient-to-br from-baby-blue-ice to-rich-cerulean rounded-2xl flex items-center justify-center">
                <Shield className="w-32 h-32 text-white opacity-80" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-yale-blue text-white rounded-2xl p-6 shadow-xl">
                <p className="text-3xl font-bold">+5.000</p>
                <p className="text-sm text-baby-blue-ice">
                  Certificados Emitidos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NÚMEROS ===== */}
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

      {/* ===== NOSSO DIFERENCIAL ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
              Nosso Diferencial: Soluções Integradas
            </h2>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Acreditamos que a eficiência nasce da centralização. Por isso,
              oferecemos ferramentas avançadas que conectam todos os pontos da
              sua operação.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((item, index) => (
              <div
                key={index}
                className="bg-bright-snow rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-baby-blue-ice rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-yale-blue" />
                </div>
                <h3 className="text-xl font-bold text-yale-blue mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* ===== DEPOIMENTOS ===== */}
      <section className="py-20 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-lg text-gray-500">
              A confiança de quem já trabalha conosco
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {depoimentosData.map((dep) => (
              <DepoimentoCard key={dep.id} depoimento={dep} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALORES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-4">
              Por que nos escolher?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              "Será um prazer trabalhar pelo sucesso do seu negócio. Somos
              comprometidos com o seu crescimento de ponta a ponta."
            </p>
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

      {/* ===== MANIFESTO / FECHAMENTO ===== */}
      <section className="py-20 bg-gradient-to-r from-rich-cerulean to-yale-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 text-baby-blue-ice mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            Conectamos Pessoas com Tecnologias
          </h2>
          <p className="text-xl text-baby-blue-ice mb-10 leading-relaxed">
            Mais do que sistemas, construímos{" "}
            <strong className="text-white">parcerias duradouras</strong>
            baseadas em confiança e inovação constante. Seu crescimento é a
            nossa maior conquista.
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
