import type { MidiaCertificado } from "../models";


export const midiasCertificado: MidiaCertificado[] = [
  {
    id: "a1-sem-midia",
    nome: "A1 - Sem Mídia",
    descricao: "Instalado diretamente no computador",
    icone: "Smartphone",
    adicional: 0,
  },
  {
    id: "a3-sem-midia",
    nome: "A3 - Sem Mídia",
    descricao: "Armazenamento em nuvem, sem dispositivo físico",
    icone: "Shield",
    adicional: 30.0,
  },
  {
    id: "a3-cartao",
    nome: "A3 - Cartão",
    descricao: "Cartão criptográfico com chip",
    icone: "CreditCard",
    adicional: 60.0,
  },
  {
    id: "a3-cartao-leitora",
    nome: "A3 - Cartão com Leitora",
    descricao: "Cartão + leitora USB para computador",
    icone: "CreditCard",
    adicional: 120.0,
  },
  {
    id: "a3-token",
    nome: "A3 - Token",
    descricao: "Dispositivo USB criptográfico",
    icone: "Usb",
    adicional: 100.0,
  },
];
