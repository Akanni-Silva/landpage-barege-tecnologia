/* eslint-disable no-useless-assignment */
// src/pages/Solicitacao.tsx
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import {
  formatPrice,
  validarDocumento,
  validarTelefone,
  validarCEP,
  formatarCEP,
} from "../../utils";
import { ProductModal } from "../../components/modals/productModal";
import { getMidiaPorId, getVisualPorTipo } from "../../services/productService";
import {
  enviarEmailBarege,
  enviarEmailConfirmacaoCliente,
} from "../../services";
import type { FormErrors } from "../../models/ErrosModel";
import {
  midiasCertificado,
  tiposCertificado,
  validadesCertificado,
  todosProdutos,
} from "../../data";

import {
  abrirWhatsApp,
  montarMensagemWhatsApp,
} from "../../services/wppService";
import { buscarEnderecoPorCEP } from "../../services/cepService";
import { formatarEndereco, type Endereco } from "../../models/enderecoModel";
import type { DadosModalProduto } from "../../models/productModel";

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
// MAPEAMENTO DE ID DE MÍDIA → TIPO DO PRODUTO NO CATÁLOGO
// ============================================================
const midiaIdParaTipo: Record<string, string> = {
  "a1-sem-midia": "A1 - Sem Mídia",
  "a3-sem-midia": "A3 - Sem Mídia",
  "a3-cartao": "A3 - Cartão",
  "a3-cartao-leitora": "A3 - Cartão com Leitora",
  "a3-token": "A3 - Token USB",
};

// ============================================================
// HELPER: Buscar preço exato na tabela de produtos
// ============================================================
const buscarPrecoProduto = (
  tipoId: string,
  midiaId: string,
  validadeId: string,
): number => {
  const tipoNome = tipoId === "ecpf" ? "e-CPF" : "e-CNPJ";
  const midiaTipo = midiaIdParaTipo[midiaId] || "";
  const validadeNome = validadeId === "1-ano" ? "1 Ano" : "2 Anos";

  const produto = todosProdutos.find(
    (p) =>
      p.nome === tipoNome && p.tipo === midiaTipo && p.duracao === validadeNome,
  );

  return produto?.precoOriginal || 0;
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

  if (produtoSelecionado.includes("2anos")) validade = "2-anos";
  else validade = "1-ano";

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

  // Estados para endereço
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [buscandoCEP, setBuscandoCEP] = useState(false);

  // ============================================================
  // DADOS DERIVADOS
  // ============================================================
  const midia = getMidiaPorId(midiaEscolhida);
  const midiaVisual = midia ? getVisualPorTipo(midia.infoTitulo) : null;
  const tipo = tiposCertificado.find((t) => t.id === tipoEscolhido);
  const validade = validadesCertificado.find((v) => v.id === validadeEscolhida);
  const precoFinal = buscarPrecoProduto(
    tipoEscolhido,
    midiaEscolhida,
    validadeEscolhida,
  );

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
  // BUSCA DE CEP
  // ============================================================
  const handleBuscarCEP = async (cepValue: string) => {
    const cepFormatado = formatarCEP(cepValue);
    setCep(cepFormatado);
    setErrors((prev) => ({ ...prev, cep: "" }));
    const cepLimpo = cepValue.replace(/[^\d]/g, "");
    if (cepLimpo.length === 8) {
      setBuscandoCEP(true);
      const endereco = await buscarEnderecoPorCEP(cepValue);
      if (endereco) {
        setRua(endereco.logradouro);
        setBairro(endereco.bairro);
        setErrors((prev) => ({ ...prev, rua: "", bairro: "" }));
      }
      setBuscandoCEP(false);
    }
  };

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
  // SUBMISSÃO DO FORMULÁRIO
  // ============================================================
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const nome = formData.get("nome")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const whatsapp = formData.get("whatsapp")?.toString().trim() || "";
    const documento = formData.get("documento")?.toString().trim() || "";
    const cepValue = formData.get("cep")?.toString().trim() || "";
    const ruaValue = formData.get("rua")?.toString().trim() || "";
    const numeroValue = formData.get("numero")?.toString().trim() || "";
    const bairroValue = formData.get("bairro")?.toString().trim() || "";
    const complementoValue =
      formData.get("complemento")?.toString().trim() || "";

    const newErrors: FormErrors = {};
    if (nome.length < 3)
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
    if (!email || !email.includes("@")) newErrors.email = "E-mail inválido";
    if (!whatsapp) newErrors.whatsapp = "WhatsApp é obrigatório";
    else if (!validarTelefone(whatsapp))
      newErrors.whatsapp = "WhatsApp inválido. Use (11) 99999-9999";
    if (!documento) newErrors.documento = "CPF ou CNPJ é obrigatório";
    else if (!validarDocumento(documento))
      newErrors.documento = "CPF ou CNPJ inválido";
    else if (!validarTipoDocumento(tipoEscolhido, documento))
      newErrors.documento = getMensagemErroTipo(tipoEscolhido);
    if (!cepValue || !validarCEP(cepValue))
      newErrors.cep = "CEP inválido. Use o formato 00000-000";
    if (!ruaValue) newErrors.rua = "Rua é obrigatória";
    if (!numeroValue) newErrors.numero = "Número é obrigatório";
    if (!bairroValue) newErrors.bairro = "Bairro é obrigatório";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const enderecoObj: Endereco = {
      cep: cepValue,
      rua: ruaValue,
      numero: numeroValue,
      bairro: bairroValue,
      complemento: complementoValue || undefined,
    };
    const enderecoCompleto = formatarEndereco(enderecoObj);

    const camposRemover = [
      "tipo-certificado",
      "data_envio",
      "endereco_completo",
    ];
    camposRemover.forEach((name) => {
      const old = form.current!.querySelector(`input[name="${name}"]`);
      if (old) old.remove();
    });

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

    const inputEndereco = document.createElement("input");
    inputEndereco.type = "hidden";
    inputEndereco.name = "endereco_completo";
    inputEndereco.value = enderecoCompleto;
    form.current.appendChild(inputEndereco);

    setErrors({});
    setIsSubmitting(true);
    try {
      await enviarEmailBarege(form.current);
      await enviarEmailConfirmacaoCliente({
        nome,
        email,
        whatsapp,
        documento,
        tipo: tipo?.nome || "—",
        midia: midia?.nome || "—",
        validade: validade?.nome || "—",
        preco: formatPrice(precoFinal),
        dataEnvio: new Date().toLocaleDateString("pt-BR"),
        endereco: enderecoObj,
      });
      const mensagemWpp = montarMensagemWhatsApp({
        nome,
        email,
        whatsapp,
        documento,
        tipo: tipo?.nome || "—",
        midia: midia?.nome || "—",
        validade: validade?.nome || "—",
        preco: formatPrice(precoFinal),
        endereco: enderecoObj,
      });
      abrirWhatsApp(mensagemWpp);
      setSubmitMessage(
        "✅ Solicitação enviada com sucesso! Um e-mail de confirmação foi enviado para você.",
      );
      setMessageType("success");
      form.current?.reset();
      setStep(1);
      setTipoEscolhido("");
      setMidiaEscolhida("");
      setValidadeEscolhida("");
      setCep("");
      setRua("");
      setNumero("");
      setBairro("");
      setComplemento("");
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
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-center mb-8">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= s ? "bg-yale-blue text-white" : "bg-gray-200 text-gray-500"}`}
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
                        className={`p-6 rounded-2xl border-2 text-left transition ${tipoEscolhido === t.id ? "border-yale-blue bg-blue-50" : "border-gray-200 hover:border-rich-cerulean"}`}
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
                      const precoComMidia =
                        (tipo?.precoBase || 0) + m.adicional;
                      return (
                        <button
                          key={m.id}
                          onClick={() => {
                            setMidiaEscolhida(m.id);
                            setStep(3);
                          }}
                          className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition ${midiaEscolhida === m.id ? `${visual?.corBorda || "border-yale-blue"} bg-blue-50` : "border-gray-200 hover:border-rich-cerulean"}`}
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
                            {tipo && (
                              <span className="text-sm font-semibold text-yale-blue">
                                {formatPrice(precoComMidia)}
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
                    {validadesCertificado
                      .filter(
                        (v) =>
                          buscarPrecoProduto(
                            tipoEscolhido,
                            midiaEscolhida,
                            v.id,
                          ) > 0,
                      )
                      .map((v) => {
                        const precoValidade = buscarPrecoProduto(
                          tipoEscolhido,
                          midiaEscolhida,
                          v.id,
                        );
                        return (
                          <button
                            key={v.id}
                            onClick={() => {
                              setValidadeEscolhida(v.id);
                              setStep(4);
                            }}
                            className={`w-full p-4 rounded-2xl border-2 text-left flex items-center gap-4 transition ${validadeEscolhida === v.id ? "border-yale-blue bg-blue-50" : "border-gray-200 hover:border-rich-cerulean"}`}
                          >
                            {renderIcon(
                              v.icone,
                              "w-8 h-8 text-rich-cerulean flex-shrink-0",
                            )}
                            <div className="grow">
                              <h3 className="font-bold text-yale-blue">
                                {v.nome}
                              </h3>
                              <p className="text-sm text-gray-500">
                                {v.descricao}
                              </p>
                            </div>
                            <div className="text-right shrink-0">
                              {precoValidade > 0 && (
                                <span className="text-sm font-semibold text-yale-blue">
                                  {formatPrice(precoValidade)}
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
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

                    {/* Endereço */}
                    <div className="bg-bright-snow rounded-xl p-4">
                      <h3 className="text-sm font-semibold text-yale-blue mb-3">
                        Endereço de Cobrança
                      </h3>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-yale-blue mb-1">
                          CEP <span className="text-red-500">*</span>
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            name="cep"
                            placeholder="00000-000"
                            value={cep}
                            onChange={(e) => handleBuscarCEP(e.target.value)}
                            maxLength={9}
                            className={`flex-1 px-4 py-3 rounded-lg border ${errors.cep ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                          />
                          {buscandoCEP && (
                            <span className="flex items-center text-sm text-gray-400">
                              <Loader2 className="w-4 h-4 animate-spin mr-1" />
                              Buscando...
                            </span>
                          )}
                        </div>
                        {errors.cep && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.cep}
                          </p>
                        )}
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-semibold text-yale-blue mb-1">
                          Rua <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="rua"
                          placeholder="Nome da rua"
                          value={rua}
                          onChange={(e) => {
                            setRua(e.target.value);
                            setErrors((prev) => ({ ...prev, rua: "" }));
                          }}
                          className={`w-full px-4 py-3 rounded-lg border ${errors.rua ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                        />
                        {errors.rua && (
                          <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.rua}
                          </p>
                        )}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-semibold text-yale-blue mb-1">
                            Número <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="numero"
                            placeholder="Nº"
                            value={numero}
                            onChange={(e) => {
                              setNumero(e.target.value);
                              setErrors((prev) => ({ ...prev, numero: "" }));
                            }}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.numero ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                          />
                          {errors.numero && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.numero}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-yale-blue mb-1">
                            Bairro <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="bairro"
                            placeholder="Bairro"
                            value={bairro}
                            onChange={(e) => {
                              setBairro(e.target.value);
                              setErrors((prev) => ({ ...prev, bairro: "" }));
                            }}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.bairro ? "border-red-400" : "border-gray-300"} focus:ring-2 focus:ring-rich-cerulean transition bg-white`}
                          />
                          {errors.bairro && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              {errors.bairro}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-yale-blue mb-1">
                          Complemento{" "}
                          <span className="text-gray-400 text-xs">
                            (opcional)
                          </span>
                        </label>
                        <input
                          type="text"
                          name="complemento"
                          placeholder="Apto, Bloco, Sala..."
                          value={complemento}
                          onChange={(e) => setComplemento(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rich-cerulean transition bg-white"
                        />
                      </div>
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

          {/* COLUNA LATERAL */}
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
                  <div className="flex justify-center text-sm">
                    <span className="text-gray-500">{tipo.nome}</span>
                  </div>
                  <div className="flex justify-center text-sm">
                    <span className="text-gray-500">{midia.nome}</span>
                  </div>
                  <div className="flex justify-center text-sm">
                    <span className="text-gray-500">{validade.nome}</span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-yale-blue">Total</span>
                    <span className="text-yale-blue">
                      {formatPrice(precoFinal)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">
                    Aceitamos pagamentos à vista, Cartão e Pix
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
                  { icon: CreditCard, text: "Pague à Vista, Cartão ou Pix" },
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
