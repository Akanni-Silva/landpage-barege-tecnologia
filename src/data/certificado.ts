import type { TipoCertificado } from "../models";

export const tiposCertificado: TipoCertificado[] = [
  {
    id: "ecpf",
    nome: "e-CPF",
    descricao: "Certificado para Pessoa Física",
    icone: "User",
    precoBase: 155.0,
  },
  {
    id: "ecnpj",
    nome: "e-CNPJ",
    descricao: "Certificado para Pessoa Jurídica",
    icone: "Building",
    precoBase: 229.0,
  },
];
