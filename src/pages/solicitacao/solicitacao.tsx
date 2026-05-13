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
  Info,
} from "lucide-react";
import { formatPrice, validarDocumento, validarTelefone } from "../../utils";
import { ProductModal } from "../../components/modals/productModal";
import { getMidiaPorId, getVisualPorTipo } from "../../services/productService";
import type { FormErrors } from "../../models/ErrosModel";
import {
  midiasCertificado,
  tiposCertificado,
  validadesCertificado,
} from "../../data";
import type { DadosModalProduto } from "../../models/productModel";

// ============================================================
// CONFIGURAÇÃO
// ============================================================
const WHATSAPP_NUMERO = "5511998606204"; // Número da Barege (DDI+DDD+Número)

// ============================================================
// MAPEAMENTO DE ÍCONES
// ============================================================
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

// ============================================================
// HELPER: Determinar valores iniciais a partir do ID do produto
// ============================================================
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
  else if (produtoSelecionado.includes("a3-cartao-leitora"))
    midia = "a3-cartao-leitora";
  else if (produtoSelecionado.includes("a3-cartao")) midia = "a3-cartao";
  else if (produtoSelecionado.includes("a3")) midia = "a3-sem-midia";

  validade = "1-ano";

  return { tipo, midia, validade };
};

// ============================================================
// VALIDAÇÃO DE TIPO DE DOCUMENTO VS TIPO DE CERTIFICADO
// ============================================================
const validarTipoDocumento = (
  tipoCertificado: string,
  documento: string,
): boolean => {
  const numeros = documento.replace(/[^\d]/g, "");

  if (tipoCertificado === "ecpf") {
    return numeros.length === 11;
  } else if (tipoCertificado === "ecnpj") {
    return numeros.length === 14;
  }

  return true;
};

const getMensagemErroTipo = (tipoCertificado: string): string => {
  if (tipoCertificado === "ecpf") {
    return "Para e-CPF é necessário informar um CPF (11 dígitos)";
  } else if (tipoCertificado === "ecnpj") {
    return "Para e-CNPJ é necessário informar um CNPJ (14 dígitos)";
  }
  return "Documento inválido";
};

function Solicitacao() {
  // ============================================================
  // URL PARAMS & DADOS INICIAIS
  // ============================================================
  const [searchParams] = useSearchParams();
  const produtoSelecionado = searchParams.get("produto") || "";
  const valoresIniciais = getValoresIniciais(produtoSelecionado);

  // ============================================================
  // ESTADOS DO FORMULÁRIO
  // ============================================================
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  // ============================================================
  // DADOS DERIVADOS
  // ============================================================
  const midia = getMidiaPorId(midiaEscolhida);
  const midiaVisual = midia ? getVisualPorTipo(midia.infoTitulo) : null;

  const tipo = tiposCertificado.find((t) => t.id === tipoEscolhido);
  const validade = validadesCertificado.find((v) => v.id === validadeEscolhida);

  // ============================================================
  // DADOS PARA O MODAL
  // ============================================================
  const dadosModal: DadosModalProduto | null = (() => {
    if (!midia || !midiaVisual) return null;

    return {
      titulo: midia.infoTitulo,
      descricao: midia.infoDescricao,
      beneficios: midia.infoBeneficios,
      imagem: midiaVisual.imagem,
      corBorda: midiaVisual.corBorda,
      corSombra: midiaVisual.corSombra,
    };
  })();

  // ============================================================
  // HELPERS DE RENDERIZAÇÃO
  // ============================================================
  const renderIcon = (
    iconeNome: string,
    className = "w-8 h-8 text-rich-cerulean",
  ) => {
    const IconComponent = iconeMap[iconeNome];
    if (!IconComponent) return <Shield className={className} />;
    return <IconComponent className={className} />;
  };

  // ============================================================
  // CÁLCULO DE PREÇO
  // ============================================================
  const calcularPreco = (): number => {
    if (!tipo || !midia || !validade) return 0;

    const precoBase = tipo.precoBase + midia.adicional;
    const precoTotal = precoBase * validade.multiplicador;
    const comDesconto = precoTotal * (1 - validade.desconto / 100);

    return Math.round(comDesconto * 100) / 100;
  };

  const precoFinal = calcularPreco();

  // ============================================================
  // MONTAR MENSAGEM PARA WHATSAPP (enviada pelo próprio cliente)
  // ============================================================
  const montarMensagemWhatsApp = (
    nome: string,
    email: string,
    whatsapp: string,
    documento: string,
  ): string => {
    return (
      `Olá! Gostaria de solicitar meu Certificado Digital.%0A%0A` +
      `*Meus dados:*%0A` +
      `👤 Nome: ${nome}%0A` +
      `📧 E-mail: ${email}%0A` +
      `📱 WhatsApp: ${whatsapp}%0A` +
      `📄 Documento: ${documento}%0A%0A` +
      `*Produto escolhido:*%0A` +
      `🔒 Tipo: ${tipo?.nome || "—"}%0A` +
      `💾 Mídia: ${midia?.nome || "—"}%0A` +
      `📅 Validade: ${validade?.nome || "—"}%0A` +
      `💰 Total: ${formatPrice(precoFinal)}%0A%0A` +
      `Aguardo contato para prosseguir com a emissão. Obrigado! 🙏`
    );
  };
  // ============================================================
  // SUBMISSÃO DO FORMULÁRIO (EMAIL + WHATSAPP)
  // ============================================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const nome = formData.get("nome")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const whatsapp = formData.get("whatsapp")?.toString().trim() || "";
    const documento = formData.get("documento")?.toString().trim() || "";

    // ============================================================
    // VALIDAÇÃO
    // ============================================================
    const newErrors: FormErrors = {};

    if (nome.length < 3) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!email || !email.includes("@")) {
      newErrors.email = "E-mail inválido";
    }

    if (!whatsapp) {
      newErrors.whatsapp = "WhatsApp é obrigatório";
    } else if (!validarTelefone(whatsapp)) {
      newErrors.whatsapp = "WhatsApp inválido. Use (11) 99999-9999";
    }

    if (!documento) {
      newErrors.documento = "CPF ou CNPJ é obrigatório";
    } else if (!validarDocumento(documento)) {
      newErrors.documento = "CPF ou CNPJ inválido";
    } else if (!validarTipoDocumento(tipoEscolhido, documento)) {
      newErrors.documento = getMensagemErroTipo(tipoEscolhido);
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // ============================================================
    // PREPARAR CAMPOS HIDDEN (PARA EMAIL)
    // ============================================================
    const oldTipo = form.current.querySelector(
      'input[name="tipo-certificado"]',
    );
    const oldData = form.current.querySelector('input[name="data_envio"]');
    if (oldTipo) oldTipo.remove();
    if (oldData) oldData.remove();

    const inputTipo = document.createElement("input");
    inputTipo.type = "hidden";
    inputTipo.name = "tipo-certificado";
    inputTipo.value = `${tipo?.nome || ""} - ${midia?.nome || ""} - ${validade?.nome || ""} - Total: ${formatPrice(precoFinal)}`;
    form.current.appendChild(inputTipo);

    const inputData = document.createElement("input");
    inputData.type = "hidden";
    inputData.name = "data_envio";
    inputData.value = new Date().toLocaleDateString("pt-BR");
    form.current.appendChild(inputData);

    // ============================================================
    // ENVIO
    // ============================================================
    setErrors({});
    setIsSubmitting(true);

    try {
      // ✅ 1. Enviar por EmailJS
      await sendForm(
        "service_owuos8i",
        "template_omknf2m",
        form.current,
        "_FstKZ8T_TaD7uNMf",
      );

      // ✅ 2. Abrir WhatsApp em segunda aba
      const mensagemWpp = montarMensagemWhatsApp(
        nome,
        email,
        whatsapp,
        documento,
      );
      window.open(
        `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagemWpp}`,
        "_blank",
      );

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
    } catch (error) {
      setSubmitMessage("❌ Erro ao enviar. Tente novamente.");
      setMessageType("error");
      console.error("Erro:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div className="bg-bright-snow">
      {/* Banner */}
      <section className="bg-gradient-to-br from-yale-blue to-rich-cerulean py-16">
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
          {/* ============================================================ */}
          {/* COLUNA PRINCIPAL - ETAPAS DO FORMULÁRIO                       */}
          {/* ============================================================ */}
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
                    {midiasCertificado.map((m) => {
                      const visual = getVisualPorTipo(m.infoTitulo);
                      return (
                        <button
                          key={m.id}
                          onClick={() => {
                            setMidiaEscolhida(m.id);
                            setStep(3);
                          }}
                          className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition ${
                            midiaEscolhida === m.id
                              ? `${visual?.corBorda || "border-yale-blue"} bg-blue-50`
                              : "border-gray-200 hover:border-rich-cerulean"
                          }`}
                        >
                          {renderIcon(
                            m.icone,
                            "w-8 h-8 text-rich-cerulean flex-shrink-0",
                          )}
                          <div className="grow">
                            <h3 className="font-bold text-yale-blue">
                              {m.nome}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {m.descricao}
                            </p>
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
                      );
                    })}
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
                    {/* Nome */}
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

                    {/* E-mail e WhatsApp lado a lado */}
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
                          WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="whatsapp"
                          placeholder="(11) 99999-9999"
                          className={`w-full px-4 py-3 rounded-lg border ${errors.whatsapp ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                          onChange={() =>
                            setErrors((prev) => ({ ...prev, whatsapp: "" }))
                          }
                        />
                        {errors.whatsapp && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.whatsapp}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Documento */}
                    <div>
                      <label className="block text-sm font-semibold text-yale-blue mb-1">
                        {tipoEscolhido === "ecpf"
                          ? "CPF"
                          : tipoEscolhido === "ecnpj"
                            ? "CNPJ"
                            : "CPF ou CNPJ"}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="documento"
                        placeholder={
                          tipoEscolhido === "ecpf"
                            ? "000.000.000-00"
                            : tipoEscolhido === "ecnpj"
                              ? "00.000.000/0000-00"
                              : "000.000.000-00 ou 00.000.000/0000-00"
                        }
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
                      <p className="mt-1 text-xs text-gray-400">
                        {tipoEscolhido === "ecpf"
                          ? "Informe apenas CPF (11 dígitos)"
                          : tipoEscolhido === "ecnpj"
                            ? "Informe apenas CNPJ (14 dígitos)"
                            : "Selecione o tipo de certificado primeiro"}
                      </p>
                    </div>

                    {/* Botão de envio */}
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

          {/* ============================================================ */}
          {/* COLUNA LATERAL                                                   */}
          {/* ============================================================ */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-yale-blue mb-4">
                <Wallet className="w-5 h-5 inline mr-2" />
                Resumo do Pedido
              </h3>

              {midiaVisual && (
                <div className="relative flex justify-center mb-6">
                  <div
                    className={`relative w-40 h-40 sm:w-44 sm:h-44 rounded-full border-4 ${midiaVisual.corBorda} ${midiaVisual.corSombra} shadow-xl animate-pulse-borda transition-all duration-700 ease-in-out bg-gradient-to-br from-bright-snow to-white flex items-center justify-center overflow-hidden`}
                  >
                    <img
                      src={midiaVisual.imagem}
                      alt={midia?.nome || "Produto"}
                      className="w-28 h-28 sm:w-32 sm:h-32 object-contain animate-fade-in"
                    />
                    <div
                      className={`absolute inset-0 rounded-full border-2 ${midiaVisual.corBorda.replace("border-", "border-")}/30 animate-spin-slow`}
                    />
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="absolute -bottom-1 -right-1 w-10 h-10 bg-yale-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-rich-cerulean transition transform hover:scale-110"
                    title="Saiba mais sobre este produto"
                  >
                    <Info className="w-5 h-5" />
                  </button>
                </div>
              )}

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
                        -{" "}
                        {formatPrice(
                          (tipo.precoBase + midia.adicional) *
                            validade.multiplicador *
                            (validade.desconto / 100),
                        )}
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

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        midiaVisual={dadosModal}
      />
    </div>
  );
}

export default Solicitacao;
