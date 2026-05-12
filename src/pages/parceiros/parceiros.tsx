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
      title: "Comissão por Emissão",
      desc: "Receba comissão por cada certificado emitido e renovado dos seus clientes.",
    },
    {
      icon: Shield,
      title: "Processo Completo",
      desc: "Nós cuidamos de todo o processo de emissão, suporte e renovação.",
    },
    {
      icon: Users,
      title: "Atendimento Exclusivo",
      desc: "Atendimento personalizado para você e seus clientes.",
    },
    {
      icon: TrendingUp,
      title: "Renda Recorrente",
      desc: "Ganhe todos os anos com as renovações dos certificados.",
    },
  ];

  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-gradient-to-br from-yale-blue to-rich-cerulean py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Building2 className="w-16 h-16 text-baby-blue-ice mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Seja um Parceiro
          </h1>
          <p className="text-xl text-baby-blue-ice max-w-3xl mx-auto">
            Contador, ganhe comissão com seus clientes. Você indica e nós
            cuidamos de todo o processo.
          </p>
        </div>
      </section>

      {/* Como funciona a parceria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Como Funciona a Parceria
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Simples, rápido e lucrativo para você
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

      {/* Vantagens detalhadas */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl mb-6">
                Por que ser nosso parceiro?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                A {companyInfo.name} oferece uma das melhores oportunidades de
                parceria do mercado. Você aumenta sua receita oferecendo um
                serviço essencial para seus clientes, sem se preocupar com a
                operação.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Comissão por cada certificado emitido e renovado",
                  "Suporte completo para você e seus clientes",
                  "Ampla rede de atendimento presencial e online",
                  "Emissão rápida e sem burocracia",
                  "Materiais de divulgação personalizados",
                  "Acompanhamento de todas as etapas do processo",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-baby-blue-ice rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                  Preencha seus dados e fale conosco
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-yale-blue mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="Digite seu nome"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-yale-blue mb-1">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-yale-blue mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-yale-blue mb-1">
                      CRC ou CNPJ
                    </label>
                    <input
                      type="text"
                      placeholder="Seu registro profissional"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                    />
                  </div>
                  <a
                    href={companyInfo.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition text-center mt-6"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Enviar pelo WhatsApp
                    </span>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-rich-cerulean to-yale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Comece a Ganhar Hoje
          </h2>
          <p className="text-lg text-baby-blue-ice mb-8">
            Entre em contato e descubra como aumentar sua receita com
            certificados digitais
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
