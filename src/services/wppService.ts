import type { Endereco } from "../models/enderecoModel";

const WHATSAPP_NUMERO = "5511998606204";

export interface DadosWhatsApp {
  nome: string;
  email: string;
  whatsapp: string;
  documento: string;
  tipo: string;
  midia: string;
  validade: string;
  preco: string;
  endereco: Endereco; 
}

export const montarMensagemWhatsApp = (dados: DadosWhatsApp): string => {
  const mensagem =
    `Ola! Gostaria de solicitar meu Certificado Digital.%0A%0A` +
    `*Meus dados:*%0A` +
    `Nome: ${dados.nome}%0A` +
    `E-mail: ${dados.email}%0A` +
    `WhatsApp: ${dados.whatsapp}%0A` +
    `Documento: ${dados.documento}%0A` +
    `%0A` +
    `*Endereco:*%0A` +
    `CEP: ${dados.endereco.cep}%0A` +
    `Rua: ${dados.endereco.rua}, ${dados.endereco.numero}%0A` +
    `Bairro: ${dados.endereco.bairro}%0A` +
    (dados.endereco.complemento ? `Complemento: ${dados.endereco.complemento}%0A` : "") +
    `%0A` +
    `*Produto escolhido:*%0A` +
    `Tipo: ${dados.tipo}%0A` +
    `Midia: ${dados.midia}%0A` +
    `Validade: ${dados.validade}%0A` +
    `Total: ${dados.preco}%0A%0A` +
    `Aguardo contato para prosseguir com a emissao. Obrigado!`;

  return mensagem;
};

export const abrirWhatsApp = (mensagem: string): void => {
  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`, "_blank");
};