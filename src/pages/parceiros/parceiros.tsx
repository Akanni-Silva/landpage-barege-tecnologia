import {
  Building2,
  ChevronRight,
  MessageCircle,
  Percent,
  Users,
  Shield,
  TrendingUp,
} from "lucide-react";
import { companyInfo } from "../../data/companyData";

function Parceiros() {
  const vantagens = [
    {
      icon: Percent,
      title: "15% de Desconto",
      desc: "Em cada certificado emitido e renovado dos seus clientes.",
    },
    {
      icon: Shield,
      title: "Nós Cuidamos de Tudo",
      desc: "Emissão, suporte e renovação por nossa conta.",
    },
    {
      icon: Users,
      title: "Atendimento VIP",
      desc: "Canal exclusivo para você e seus clientes.",
    },
    {
      icon: TrendingUp,
      title: "Renda Todo Ano",
      desc: "Ganhe em cada renovação. Sempre.",
    },
  ];

  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 text-baby-blue-ice mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Seja Parceiro e Garanta 15% OFF
          </h1>
          <p className="text-xl text-baby-blue-ice max-w-2xl mx-auto">
            Indique clientes, receba desconto. Simples assim.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Como Funciona
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Você indica. Nós fazemos. Você ganha.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {vantagens.map((item, index) => (
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
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens + Formulário */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:justify-between gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-6">
                Por que ser parceiro?
              </h2>

              <ul className="space-y-4 mb-8">
                {[
                  "Comissão em cada certificado emitido e renovado",
                  "Suporte completo para você e seus clientes",
                  "Atendimento presencial e online em todo Brasil",
                  "Emissão rápida e sem burocracia",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-baby-blue-ice rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-4 h-4 text-yale-blue" />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-yale-blue hover:bg-rich-cerulean transition shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero ser parceiro
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-yale-blue mb-6">
                  Cadastre-se e garanta 15% OFF
                </h3>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome completo"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (11) 99999-9999"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                  />
                  <input
                    type="text"
                    placeholder="CRC ou CNPJ"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                  />
                  <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition text-center mt-6"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Quero ser parceiro
                    </span>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-linear-to-r from-rich-cerulean to-yale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Garanta 15% OFF Agora
          </h2>
          <p className="text-lg text-baby-blue-ice mb-8">
            Aumente sua renda com certificados digitais
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-yale-blue font-semibold rounded-full hover:bg-bright-snow transition shadow-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

export default Parceiros;