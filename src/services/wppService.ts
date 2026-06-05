// ============================================================
// CONFIGURAÇÃO
// ============================================================
const WHATSAPP_NUMERO = "5511998606204";

// ============================================================
// TIPOS
// ============================================================
export interface DadosWhatsApp {
  nome: string;
  email: string;
  whatsapp: string;
  documento: string;
  tipo: string;
  midia: string;
  validade: string;
  preco: string;
  endereco?: string;
}

// ============================================================
// MONTAR MENSAGEM PARA WHATSAPP (enviada pelo próprio cliente)
// ============================================================
export const montarMensagemWhatsApp = (dados: DadosWhatsApp): string => {
  let mensagem =
    `Ola! Gostaria de solicitar meu Certificado Digital.%0A%0A` +
    `*Meus dados:*%0A` +
    `Nome: ${dados.nome}%0A` +
    `E-mail: ${dados.email}%0A` +
    `WhatsApp: ${dados.whatsapp}%0A` +
    `Documento: ${dados.documento}%0A`;

  // Endereço (se fornecido)
  if (dados.endereco) {
    mensagem += `Endereco: ${dados.endereco}%0A`;
  }

  mensagem +=
    `%0A` +
    `*Produto escolhido:*%0A` +
    `Tipo: ${dados.tipo}%0A` +
    `Midia: ${dados.midia}%0A` +
    `Validade: ${dados.validade}%0A` +
    `Total: ${dados.preco}%0A%0A` +
    `Aguardo contato para prosseguir com a emissao. Obrigado!`;

  return mensagem;
};

// ============================================================
// ABRIR WHATSAPP EM NOVA ABA
// ============================================================
export const abrirWhatsApp = (mensagem: string): void => {
  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
};