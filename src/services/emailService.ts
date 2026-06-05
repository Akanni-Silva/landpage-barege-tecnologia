// src/services/emailService.ts
import { sendForm, send } from "@emailjs/browser";
import { formatarEndereco, type Endereco } from "../models/enderecoModel";

const EMAILJS_SERVICE_ID = "service_cz0nb06";
const EMAILJS_TEMPLATE_SOLICITACAO = "template_x6ez0py";
const EMAILJS_TEMPLATE_CONFIRMACAO = "template_oyff4mp";
const EMAILJS_PUBLIC_KEY = "XhhLePfa0u9GnE271";

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
  endereco: Endereco; 
}

export const enviarEmailBarege = async (form: HTMLFormElement): Promise<void> => {
  await sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_SOLICITACAO, form, EMAILJS_PUBLIC_KEY);
};

export const enviarEmailConfirmacaoCliente = async (dados: DadosSolicitacao): Promise<void> => {
  await send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_CONFIRMACAO, {
    nome: dados.nome,
    email: dados.email,
    tipo: dados.tipo,
    midia: dados.midia,
    validade: dados.validade,
    preco: dados.preco,
    data_envio: dados.dataEnvio,
    endereco_completo: formatarEndereco(dados.endereco), // ✅ Formatado
    endereco_cep: dados.endereco.cep,
    endereco_rua: dados.endereco.rua,
    endereco_numero: dados.endereco.numero,
    endereco_bairro: dados.endereco.bairro,
    endereco_complemento: dados.endereco.complemento || "—",
  }, EMAILJS_PUBLIC_KEY);
};