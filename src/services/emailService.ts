import { sendForm, send } from "@emailjs/browser";

// ============================================================
// CONFIGURAÇÃO DO EMAILJS
// ============================================================
const EMAILJS_SERVICE_ID = "service_cz0nb06";
const EMAILJS_TEMPLATE_SOLICITACAO = "template_x6ez0py"; // Para Barege
const EMAILJS_TEMPLATE_CONFIRMACAO = "template_oyff4mp"; // Para Cliente
const EMAILJS_PUBLIC_KEY = "XhhLePfa0u9GnE271";

// ============================================================
// TIPOS
// ============================================================
export interface DadosSolicitacao {
  nome: string;
  email: string;
  whatsapp: string;
  documento: string;
  tipo: string;
  midia: string;
  validade: string;
  preco: string;
  dataEnvio: string;
  endereco?: string; // ✅ Novo campo — endereço completo do cliente
}

// ============================================================
// ENVIAR E-MAIL PARA A BAREGE (com dados do formulário)
// ============================================================
export const enviarEmailBarege = async (
  form: HTMLFormElement,
): Promise<void> => {
  // ✅ O campo endereco_completo já é adicionado como hidden no form
  // antes de chamar esta função, então ele será enviado automaticamente
  await sendForm(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_SOLICITACAO,
    form,
    EMAILJS_PUBLIC_KEY,
  );
};

// ============================================================
// ENVIAR E-MAIL DE CONFIRMAÇÃO PARA O CLIENTE
// ============================================================
export const enviarEmailConfirmacaoCliente = async (
  dados: DadosSolicitacao,
): Promise<void> => {
  await send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_CONFIRMACAO,
    {
      nome: dados.nome,
      email: dados.email,
      tipo: dados.tipo,
      midia: dados.midia,
      validade: dados.validade,
      preco: dados.preco,
      data_envio: dados.dataEnvio,
      endereco_completo: dados.endereco || "—", // ✅ Novo campo
    },
    EMAILJS_PUBLIC_KEY,
  );
};
