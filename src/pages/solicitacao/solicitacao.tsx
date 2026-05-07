/* eslint-disable no-useless-assignment */
// src/pages/Solicitacao.tsx
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sendForm } from "@emailjs/browser";
import {
  FileCheck,
  Loader2,
  AlertCircle,
  CreditCard,
  Calendar,
  UserCheck,
  Video,
  ChevronLeft,
  Check,
  Wallet,
  User,
  Building,
  Smartphone,
  Shield,
  CreditCardIcon,
  Usb,
  Clock,
} from "lucide-react";
import {
  midiasCertificado,
  tiposCertificado,
  validadesCertificado,
} from "../../data";
import type { FormErrors } from "../../models";
import { formatPrice, validarDocumento, validarTelefone } from "../../utils";

const iconeMap: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Building,
  Smartphone,
  Shield,
  CreditCard,
  CreditCardIcon,
  Usb,
  Clock,
  Calendar,
};

const getValoresIniciais = (produtoSelecionado: string | null) => {
  if (!produtoSelecionado) {
    return { tipo: "", midia: "", validade: "" };
  }

  let tipo = "";
  let midia = "";
  let validade = "";

  if (produtoSelecionado.startsWith("ecpf")) tipo = "ecpf";
  else if (produtoSelecionado.startsWith("ecnpj")) tipo = "ecnpj";

  if (produtoSelecionado.includes("a1")) midia = "a1-sem-midia";
  else if (produtoSelecionado.includes("a3-token")) midia = "a3-token";
  else if (produtoSelecionado.includes("a3-cartao")) midia = "a3-cartao";
  else if (produtoSelecionado.includes("a3")) midia = "a3-sem-midia";

  validade = "1-ano";

  return { tipo, midia, validade };
};

function Solicitacao() {
  const [searchParams] = useSearchParams();
  const produtoSelecionado = searchParams.get("produto") || "";

  const valoresIniciais = getValoresIniciais(produtoSelecionado);

  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const [step, setStep] = useState(produtoSelecionado ? 4 : 1);
  const [tipoEscolhido, setTipoEscolhido] = useState<string>(
    valoresIniciais.tipo,
  );
  const [midiaEscolhida, setMidiaEscolhida] = useState<string>(
    valoresIniciais.midia,
  );
  const [validadeEscolhida, setValidadeEscolhida] = useState<string>(
    valoresIniciais.validade,
  );

  const renderIcon = (
    iconeNome: string,
    className: string = "w-8 h-8 text-rich-cerulean",
  ) => {
    const IconComponent = iconeMap[iconeNome];
    if (!IconComponent) return <Shield className={className} />;
    return <IconComponent className={className} />;
  };

  const calcularPreco = (): number => {
    const tipo = tiposCertificado.find((t) => t.id === tipoEscolhido);
    const midia = midiasCertificado.find((m) => m.id === midiaEscolhida);
    const validade = validadesCertificado.find(
      (v) => v.id === validadeEscolhida,
    );

    if (!tipo || !midia || !validade) return 0;

    const precoBase = tipo.precoBase + midia.adicional;
    const precoTotal = precoBase * validade.multiplicador;
    const comDesconto = precoTotal * (1 - validade.desconto / 100);

    return Math.round(comDesconto * 100) / 100;
  };

  const precoFinal = calcularPreco();
  const tipo = tiposCertificado.find((t) => t.id === tipoEscolhido);
  const midia = midiasCertificado.find((m) => m.id === midiaEscolhida);
  const validade = validadesCertificado.find((v) => v.id === validadeEscolhida);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const nome = formData.get("nome")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const telefone = formData.get("telefone")?.toString().trim() || "";
    const documento = formData.get("documento")?.toString().trim() || "";

    const newErrors: FormErrors = {};

    if (nome.length < 3)
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
    if (!email || !email.includes("@")) newErrors.email = "E-mail inválido";
    if (!telefone) newErrors.telefone = "Telefone é obrigatório";
    else if (!validarTelefone(telefone))
      newErrors.telefone = "Telefone inválido";
    if (!documento) newErrors.documento = "CPF ou CNPJ é obrigatório";
    else if (!validarDocumento(documento))
      newErrors.documento = "Documento inválido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    sendForm(
      "service_owuos8i",
      "template_omknf2m",
      form.current,
      "_FstKZ8T_TaD7uNMf",
    )
      .then(() => {
        setSubmitMessage(
          "✅ Solicitação enviada com sucesso! Entraremos em contato em breve.",
        );
        setMessageType("success");
        form.current?.reset();
        setStep(1);
        setTipoEscolhido("");
        setMidiaEscolhida("");
        setValidadeEscolhida("");
        setErrors({});
      })
      .catch((error) => {
        setSubmitMessage("❌ Erro ao enviar. Tente novamente.");
        setMessageType("error");
        console.error("Erro:", error);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-linear-to-br from-yale-blue to-rich-cerulean py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Solicite seu Certificado Digital
          </h1>
          <p className="text-xl text-baby-blue-ice">
            Escolha o tipo, mídia e validade para calcular o valor
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna principal */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              {/* Barra de progresso */}
              <div className="flex items-center justify-center mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step >= s
                          ? "bg-yale-blue text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step > s ? <Check className="w-4 h-4" /> : s}
                    </div>
                    {s < 4 && (
                      <div
                        className={`w-12 h-0.5 ${step > s ? "bg-yale-blue" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {submitMessage && messageType === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-sm font-medium text-green-700">
                    {submitMessage}
                  </p>
                </div>
              )}

              {/* ETAPA 1: Tipo */}
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-yale-blue mb-6">
                    1. Escolha o Tipo de Certificado
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {tiposCertificado.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setTipoEscolhido(t.id);
                          setStep(2);
                        }}
                        className={`p-6 rounded-2xl border-2 text-left transition ${
                          tipoEscolhido === t.id
                            ? "border-yale-blue bg-blue-50"
                            : "border-gray-200 hover:border-rich-cerulean"
                        }`}
                      >
                        {renderIcon(
                          t.icone,
                          "w-10 h-10 text-rich-cerulean mb-3",
                        )}
                        <h3 className="text-lg font-bold text-yale-blue">
                          {t.nome}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {t.descricao}
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          A partir de {formatPrice(t.precoBase)}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ETAPA 2: Mídia */}
              {step === 2 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <button
                      onClick={() => setStep(1)}
                      className="text-gray-400 hover:text-yale-blue"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold text-yale-blue">
                      2. Mídia e Armazenamento
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {midiasCertificado.map((m) => (
                      <button
                        key={m.id}
                        onClick={() => {
                          setMidiaEscolhida(m.id);
                          setStep(3);
                        }}
                        className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition ${
                          midiaEscolhida === m.id
                            ? "border-yale-blue bg-blue-50"
                            : "border-gray-200 hover:border-rich-cerulean"
                        }`}
                      >
                        {renderIcon(
                          m.icone,
                          "w-8 h-8 text-rich-cerulean flex-shrink-0",
                        )}
                        <div className="grow">
                          <h3 className="font-bold text-yale-blue">{m.nome}</h3>
                          <p className="text-sm text-gray-500">{m.descricao}</p>
                        </div>
                        <div className="text-right shrink-0">
                          {m.adicional > 0 ? (
                            <span className="text-sm font-semibold text-yale-blue">
                              + {formatPrice(m.adicional)}
                            </span>
                          ) : (
                            <span className="text-sm text-green-600 font-semibold">
                              Incluso
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ETAPA 3: Validade */}
              {step === 3 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <button
                      onClick={() => setStep(2)}
                      className="text-gray-400 hover:text-yale-blue"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold text-yale-blue">
                      3. Validade
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {validadesCertificado.map((v) => (
                      <button
                        key={v.id}
                        onClick={() => {
                          setValidadeEscolhida(v.id);
                          setStep(4);
                        }}
                        className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition ${
                          validadeEscolhida === v.id
                            ? "border-yale-blue bg-blue-50"
                            : "border-gray-200 hover:border-rich-cerulean"
                        }`}
                      >
                        {renderIcon(
                          v.icone,
                          "w-8 h-8 text-rich-cerulean flex-shrink-0",
                        )}
                        <div className="grow">
                          <h3 className="font-bold text-yale-blue">{v.nome}</h3>
                          <p className="text-sm text-gray-500">{v.descricao}</p>
                        </div>
                        <div className="text-right shrink-0">
                          {v.desconto > 0 && (
                            <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                              {v.desconto}% OFF
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ETAPA 4: Dados */}
              {step === 4 && (
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <button
                      onClick={() => setStep(3)}
                      className="text-gray-400 hover:text-yale-blue"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h2 className="text-2xl font-bold text-yale-blue">
                      4. Seus Dados
                    </h2>
                  </div>

                  <div className="bg-bright-snow rounded-xl p-4 mb-6">
                    <h3 className="text-sm font-semibold text-yale-blue mb-2">
                      Resumo do Pedido
                    </h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>
                        📋 Tipo: <strong>{tipo?.nome}</strong>
                      </p>
                      <p>
                        💾 Mídia: <strong>{midia?.nome}</strong>
                      </p>
                      <p>
                        📅 Validade: <strong>{validade?.nome}</strong>
                      </p>
                    </div>
                  </div>

                  <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <input
                      type="hidden"
                      name="pedido"
                      value={`${tipo?.nome} | ${midia?.nome} | ${validade?.nome} | ${formatPrice(precoFinal)}`}
                    />
                    <input
                      type="hidden"
                      name="data_envio"
                      value={new Date().toLocaleDateString("pt-BR")}
                    />

                    <div>
                      <label className="block text-sm font-semibold text-yale-blue mb-1">
                        Nome Completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome completo"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.nome ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                        onChange={() =>
                          setErrors((prev) => ({ ...prev, nome: "" }))
                        }
                      />
                      {errors.nome && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-yale-blue mb-1">
                          E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="seu@email.com"
                          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                          onChange={() =>
                            setErrors((prev) => ({ ...prev, email: "" }))
                          }
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-yale-blue mb-1">
                          Telefone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="telefone"
                          placeholder="(11) 99999-9999"
                          className={`w-full px-4 py-3 rounded-lg border ${errors.telefone ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                          onChange={() =>
                            setErrors((prev) => ({ ...prev, telefone: "" }))
                          }
                        />
                        {errors.telefone && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.telefone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-yale-blue mb-1">
                        CPF ou CNPJ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="documento"
                        placeholder="000.000.000-00 ou 00.000.000/0000-00"
                        className={`w-full px-4 py-3 rounded-lg border ${errors.documento ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                        onChange={() =>
                          setErrors((prev) => ({ ...prev, documento: "" }))
                        }
                      />
                      {errors.documento && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.documento}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-yale-blue text-white font-semibold rounded-full hover:bg-rich-cerulean transition shadow-lg disabled:opacity-70 mt-6"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <FileCheck className="w-5 h-5" />
                          Solicitar Certificado Digital
                        </span>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Coluna lateral - Preço */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-yale-blue mb-4">
                <Wallet className="w-5 h-5 inline mr-2" />
                Resumo do Pedido
              </h3>
              {tipo && midia && validade ? (
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{tipo.nome}</span>
                    <span className="text-gray-700">
                      {formatPrice(tipo.precoBase)}
                    </span>
                  </div>
                  {midia.adicional > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">{midia.nome}</span>
                      <span className="text-gray-700">
                        + {formatPrice(midia.adicional)}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">{validade.nome}</span>
                    <span className="text-gray-700">
                      x{validade.multiplicador}
                    </span>
                  </div>
                  <hr className="border-gray-200" />
                  {validade.desconto > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-green-600">
                        Desconto {validade.desconto}%
                      </span>
                      <span className="text-green-600">
                        - {formatPrice(precoFinal * (validade.desconto / 100))}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-yale-blue">Total</span>
                    <span className="text-yale-blue">
                      {formatPrice(precoFinal)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    em até 12x no cartão de crédito
                  </p>
                </div>
              ) : (
                <div className="text-center py-6">
                  <p className="text-sm text-gray-400">
                    Selecione as opções ao lado para calcular o valor
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-yale-blue mb-4">
                Como Funciona
              </h3>
              <div className="space-y-3">
                {[
                  { icon: CreditCard, text: "Escolha e pague em até 12x" },
                  { icon: Calendar, text: "Agende sua emissão" },
                  { icon: UserCheck, text: "Apresente os documentos" },
                  { icon: Video, text: "Emita presencial ou online" },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <step.icon className="w-5 h-5 text-rich-cerulean" />
                    <span className="text-sm text-gray-600">{step.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solicitacao;
