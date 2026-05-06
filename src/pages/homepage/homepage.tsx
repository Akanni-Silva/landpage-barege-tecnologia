import {
  BadgeCheck,
  ChevronRight,
  FileCheck,
  MessageCircle,
  Phone,
  Shield,
  UserPlus,
  Zap,
  Loader2,
} from "lucide-react";
import { companyInfo } from "../../data/companyInfo";
import { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

function Homepage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    // Usando sendForm - passa o formulário diretamente
    sendForm(
      "service_owuos8i", // ⚠️ Substitua pelo seu Service ID
      "template_omknf2m", // ⚠️ Substitua pelo seu Template ID
      form.current,
      "_FstKZ8T_TaD7uNMf",
    )
      .then(() => {
        setSubmitMessage(
          "✅ Solicitação enviada com sucesso! Entraremos em contato em breve.",
        );
        setMessageType("success");
        form.current?.reset();
      })
      .catch((error) => {
        setSubmitMessage(
          "❌ Erro ao enviar. Por favor, tente novamente ou entre em contato pelo WhatsApp.",
        );
        setMessageType("error");
        console.error("Erro:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-bright-snow font-sans">
      {/* ===== SEÇÃO PRINCIPAL (HERO) ===== */}
      <section className="relative bg-gradient-to-br from-bright-snow to-bright-snow-2 overflow-hidden">
        <div className="max-w-7xl mx-auto pt-20 pb-24 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-0 lg:flex-1">
            <h1 className="text-5xl font-extrabold tracking-tight text-yale-blue sm:text-6xl md:text-7xl">
              <span className="block">Certificado Digital</span>
              <span className="block text-rich-cerulean">
                Rápido e Sem Burocracia
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl">
              Emissão para MEI, empresas e contadores. Com suporte completo e
              atendimento confiável, você garante segurança e agilidade para o
              seu negócio.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-baby-blue-ice rounded-lg">
                  <Zap className="w-6 h-6 text-yale-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-yale-blue">
                    Emissão Rápida
                  </h3>
                  <p className="text-gray-500">
                    Seu certificado pronto com agilidade e eficiência.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-baby-blue-ice rounded-lg">
                  <BadgeCheck className="w-6 h-6 text-yale-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-yale-blue">
                    Suporte Completo
                  </h3>
                  <p className="text-gray-500">
                    Acompanhamento em todas as etapas, antes e depois da
                    emissão.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-baby-blue-ice rounded-lg">
                  <Shield className="w-6 h-6 text-yale-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-yale-blue">
                    Atendimento Confiável
                  </h3>
                  <p className="text-gray-500">
                    Segurança, sigilo e confiança que você pode contar.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-baby-blue-ice rounded-lg">
                  <FileCheck className="w-6 h-6 text-yale-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-yale-blue">
                    Processo Simplificado
                  </h3>
                  <p className="text-gray-500">
                    Menos burocracia, mais praticidade para você.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 lg:ml-10 lg:flex-shrink-0">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto lg:mx-0 border border-gray-100">
              <div className="text-center">
                <Shield className="mx-auto h-16 w-auto text-baby-blue-ice" />
                <h2 className="mt-6 text-2xl font-bold text-yale-blue">
                  Garanta seu Certificado
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Escolha o tipo ideal para você e fale agora com um
                  especialista.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-green-500 hover:bg-green-600 md:text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
                <p className="text-xs text-center text-gray-400 mt-2">
                  {companyInfo.whatsappNumber}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIPOS DE CERTIFICADO (A1 E A3) ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Escolha o Certificado Ideal para Você
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Entenda as diferenças e selecione a melhor opção para sua
              necessidade.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="relative p-8 bg-bright-snow rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="absolute top-0 right-0 mt-4 mr-4 px-3 py-1 bg-baby-blue-ice text-yale-blue rounded-full text-sm font-semibold">
                Mais Praticidade
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow mb-6">
                <Zap className="w-8 h-8 text-rich-cerulean" />
              </div>
              <h3 className="text-2xl font-bold text-yale-blue">
                Certificado A1
              </h3>
              <p className="mt-2 text-gray-500">Arquivo Digital</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-rich-cerulean mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Instalado diretamente no computador.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-rich-cerulean mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Ideal para quem busca praticidade no dia a dia.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-rich-cerulean mr-2 mt-0.5" />
                  <span className="text-gray-600">Validade de 1 ano.</span>
                </li>
              </ul>
            </div>

            <div className="relative p-8 bg-bright-snow rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="absolute top-0 right-0 mt-4 mr-4 px-3 py-1 bg-baby-blue-ice text-yale-blue rounded-full text-sm font-semibold">
                Mais Segurança
              </div>
              <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow mb-6">
                <Shield className="w-8 h-8 text-rich-cerulean" />
              </div>
              <h3 className="text-2xl font-bold text-yale-blue">
                Certificado A3
              </h3>
              <p className="mt-2 text-gray-500">Token USB ou Cartão com Chip</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-rich-cerulean mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Armazenado em mídia física (token ou cartão).
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-rich-cerulean mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Maior segurança e mobilidade.
                  </span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-rich-cerulean mr-2 mt-0.5" />
                  <span className="text-gray-600">
                    Validade maior (até 3 anos).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMULÁRIO DE SOLICITAÇÃO (EMAILJS) ===== */}
      <section className="py-16 bg-white" id="formulario">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
              Solicite seu Certificado Digital
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              rapidamente.
            </p>
          </div>

          <div className="bg-bright-snow rounded-2xl shadow-xl p-8 border border-gray-100">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="data_envio"
                value={new Date().toLocaleDateString("pt-BR")}
              />
              {/* Campo Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold text-yale-blue mb-2"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean focus:border-rich-cerulean transition duration-200 bg-white text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Campo WhatsApp (obrigatório) */}
              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-yale-blue mb-2"
                >
                  WhatsApp <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  placeholder="(11) 99999-9999"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean focus:border-rich-cerulean transition duration-200 bg-white text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Campo CPF ou CNPJ (obrigatório) */}
              <div>
                <label
                  htmlFor="documento"
                  className="block text-sm font-semibold text-yale-blue mb-2"
                >
                  CPF ou CNPJ <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="documento"
                  name="documento"
                  required
                  placeholder="000.000.000-00 ou 00.000.000/0000-00"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean focus:border-rich-cerulean transition duration-200 bg-white text-gray-700 placeholder-gray-400"
                />
              </div>

              {/* Campo Tipo de Certificado (obrigatório) */}
              <div>
                <label
                  htmlFor="tipo-certificado"
                  className="block text-sm font-semibold text-yale-blue mb-2"
                >
                  Tipo de Certificado <span className="text-red-500">*</span>
                </label>
                <select
                  id="tipo-certificado"
                  name="tipo-certificado"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean focus:border-rich-cerulean transition duration-200 bg-white text-gray-700"
                >
                  <option value="" disabled>
                    Selecione o tipo de certificado
                  </option>
                  <optgroup label="Certificado A1">
                    <option value="A1 - Pessoa Jurídica">
                      A1 - Pessoa Jurídica (CNPJ)
                    </option>
                    <option value="A1 - Pessoa Física">
                      A1 - Pessoa Física (CPF)
                    </option>
                  </optgroup>
                  <optgroup label="Certificado A3">
                    <option value="A3 - Token USB">A3 - Token USB</option>
                    <option value="A3 - Cartão com Chip">
                      A3 - Cartão com Chip
                    </option>
                    <option value="A3 - Pessoa Jurídica">
                      A3 - Pessoa Jurídica (CNPJ)
                    </option>
                    <option value="A3 - Pessoa Física">
                      A3 - Pessoa Física (CPF)
                    </option>
                  </optgroup>
                </select>
              </div>

              {/* Mensagem de feedback */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    messageType === "success"
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <p
                    className={`text-sm font-medium ${
                      messageType === "success"
                        ? "text-green-700"
                        : "text-red-700"
                    }`}
                  >
                    {submitMessage}
                  </p>
                </div>
              )}

              {/* Botão de envio */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-yale-blue hover:bg-rich-cerulean transition duration-300 ease-in-out transform hover:scale-105 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FileCheck className="w-5 h-5 mr-2" />
                      Solicitar Certificado Digital
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ===== WHATSAPP CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-rich-cerulean to-yale-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Pronto para emitir seu certificado?
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-baby-blue-ice">
              Fale agora mesmo com nossa equipe e garanta seu certificado
              digital com segurança e rapidez. Atendimento personalizado e sem
              burocracia.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-rich-cerulean bg-white hover:bg-bright-snow md:text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chamar no WhatsApp
              </a>
              <a
                href={`tel:${companyInfo.whatsappNumber}`}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-white text-base font-medium rounded-full text-white hover:bg-white/10 md:text-lg transition duration-300 backdrop-blur-sm"
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEÇÃO PARA CONTADORES ===== */}
      <section className="py-16 bg-bright-snow-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-yale-blue sm:text-4xl">
                Contador, Ganhe Comissão com Seus Clientes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Você indica, nós cuidamos de todo o processo. Receba por cada
                emissão e renovação de certificado digital dos seus clientes.
                Simples e sem complicação.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-yale-blue hover:bg-rich-cerulean transition duration-300 ease-in-out shadow-md"
                >
                  <UserPlus className="w-5 h-5 mr-2" />
                  Quero ser parceiro
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-yale-blue mb-4">
                  Vantagens da Parceria
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-baby-blue-ice rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-yale-blue" />
                    </div>
                    <p className="ml-4 text-gray-600">
                      Comissão por cada certificado emitido e renovado.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-baby-blue-ice rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-yale-blue" />
                    </div>
                    <p className="ml-4 text-gray-600">
                      Nós cuidamos de todo o processo de emissão e suporte.
                    </p>
                  </li>
                  <li className="flex items-center">
                    <div className="flex-shrink-0 w-8 h-8 bg-baby-blue-ice rounded-full flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-yale-blue" />
                    </div>
                    <p className="ml-4 text-gray-600">
                      Atendimento exclusivo e personalizado para você e seus
                      clientes.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
