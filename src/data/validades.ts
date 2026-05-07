import type { ValidadeCertificado } from "../models";

export const validadesCertificado: ValidadeCertificado[] = [
  {
    id: "1-ano",
    nome: "1 Ano",
    descricao: "Validade de 12 meses",
    icone: "Clock",
    multiplicador: 1,
    desconto: 0,
  },
  {
    id: "2-anos",
    nome: "2 Anos",
    descricao: "Validade de 24 meses - Melhor custo-benefício",
    icone: "Calendar",
    multiplicador: 1.8,
    desconto: 10,
  },
];
