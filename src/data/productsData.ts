import type {
  MidiaCertificado,
  Produto,
  TipoCertificado,
  TipoVisual,
  ValidadeCertificado,
} from "../models/productModel";

// ============================================================
// TABELAS DE ESCOLHA
// ============================================================

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

export const midiasCertificado: MidiaCertificado[] = [
  {
    id: "a1-sem-midia",
    nome: "A1 - Sem Mídia",
    descricao: "Instalado diretamente no computador",
    icone: "Smartphone",
    adicional: 0,
    infoTitulo: "A1 - Sem Mídia",
    infoDescricao:
      "O Certificado A1 é um arquivo digital instalado diretamente no seu computador. É a opção mais prática e econômica para quem busca agilidade no dia a dia.",
    infoBeneficios: [
      "Instalação rápida no computador",
      "Ideal para uso em um único dispositivo",
      "Sem necessidade de hardware adicional",
      "Perfeito para MEI e uso pessoal",
      "Validade de 1 ano com renovação simples",
      "Emissão 100% online por videoconferência",
    ],
  },
  {
    id: "a3-sem-midia",
    nome: "A3 - Sem Mídia",
    descricao: "Armazenamento em nuvem, sem dispositivo físico",
    icone: "Shield",
    adicional: 30.0,
    infoTitulo: "A3 - Sem Mídia",
    infoDescricao:
      "O Certificado A3 sem mídia física oferece segurança avançada com armazenamento em nuvem. Ideal para quem precisa de mobilidade sem carregar dispositivos.",
    infoBeneficios: [
      "Armazenamento seguro em nuvem",
      "Acesso de qualquer dispositivo",
      "Sem risco de perda física",
      "Validade estendida de até 2 anos",
      "Alta segurança criptográfica",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "a3-cartao",
    nome: "A3 - Cartão",
    descricao: "Cartão criptográfico com chip",
    icone: "CreditCard",
    adicional: 60.0,
    infoTitulo: "A3 - Cartão",
    infoDescricao:
      "O Certificado A3 em cartão criptográfico é a escolha ideal para empresas que precisam de segurança física e validade jurídica para transações fiscais.",
    infoBeneficios: [
      "Cartão criptográfico com chip de segurança",
      "Homologado pela ICP-Brasil",
      "Ideal para emissão de NF-e e CT-e",
      "Validade de 1 ou 2 anos",
      "Portátil e fácil de transportar",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "a3-cartao-leitora",
    nome: "A3 - Cartão com Leitora",
    descricao: "Cartão + leitora USB para computador",
    icone: "CreditCard",
    adicional: 120.0,
    infoTitulo: "A3 - Cartão com Leitora",
    infoDescricao:
      "Kit completo com cartão criptográfico e leitora USB. A solução mais completa para empresas que precisam de máxima compatibilidade e segurança.",
    infoBeneficios: [
      "Kit completo: cartão + leitora USB",
      "Compatibilidade com qualquer computador",
      "Não requer entrada para smart card",
      "Segurança máxima para transações",
      "Ideal para escritórios contábeis",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "a3-token",
    nome: "A3 - Token",
    descricao: "Dispositivo USB criptográfico",
    icone: "Usb",
    adicional: 100.0,
    infoTitulo: "A3 - Token USB",
    infoDescricao:
      "O Token USB é um dispositivo criptográfico portátil que oferece o mais alto nível de segurança. Conecte e assine documentos digitais com máxima proteção.",
    infoBeneficios: [
      "Dispositivo USB plug-and-play",
      "Máxima segurança criptográfica",
      "Portátil - cabe no chaveiro",
      "Compatível com Windows e Mac",
      "Ideal para múltiplos certificados",
      "Emissão presencial ou videoconferência",
    ],
  },
];

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

// ============================================================
// MAPEAMENTO DE IMAGENS POR TIPO DE MÍDIA
// ============================================================

export const tipoVisualMap: Record<string, TipoVisual> = {
  "A1 - Sem Mídia": {
    imagem:
      "https://i.postimg.cc/3ymxQXvq/e-cpf-a1-sem-midia-1-ano-barege1-161279647778.png",
    corBorda: "border-green-400",
    corSombra: "shadow-green-200",
  },
  "A3 - Sem Mídia": {
    imagem:
      "https://i.postimg.cc/3ymxQXvq/e-cpf-a1-sem-midia-1-ano-barege1-161279647778.png",
    corBorda: "border-blue-400",
    corSombra: "shadow-blue-200",
  },
  "A3 - Cartão": {
    imagem:
      "https://i.postimg.cc/rdxw21rn/e-cnpj-a3-cartao-1-ano-barege1-161279485263-removebg-preview.png",
    corBorda: "border-yale-blue",
    corSombra: "shadow-blue-300",
  },
  "A3 - Cartão com Leitora": {
    imagem:
      "https://i.postimg.cc/HJXk1wy6/e-cpf-a3-token-1-ano-certbank-1-161274464487.png",
    corBorda: "border-purple-400",
    corSombra: "shadow-purple-200",
  },
  "A3 - Token": {
    imagem:
      "https://i.postimg.cc/HJXk1wy6/e-cpf-a3-token-1-ano-certbank-1-161274464487.png",
    corBorda: "border-amber-400",
    corSombra: "shadow-amber-200",
  },
  "A3 - Token USB": {
    imagem:
      "https://i.postimg.cc/HJXk1wy6/e-cpf-a3-token-1-ano-certbank-1-161274464487.png",
    corBorda: "border-amber-400",
    corSombra: "shadow-amber-200",
  },
};

// ============================================================
// CATÁLOGO DE PRODUTOS
// ============================================================

export const produtosDestaque: Produto[] = [
  {
    id: "ecnpj-a3-card",
    nome: "e-CNPJ",
    tipo: "A3 - Cartão",
    categoria: "Pessoa Jurídica",
    duracao: "1 Ano",
    precoOriginal: 289.0,
    precoDesconto: 245.65,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Mídia criptográfica em cartão",
      "Ideal para empresas",
      "Emissão presencial ou videoconferência",
    ],
    popular: true,
  },
  {
    id: "ecpf-a1",
    nome: "e-CPF",
    tipo: "A1 - Sem Mídia",
    categoria: "Pessoa Física",
    duracao: "1 Ano",
    precoOriginal: 155.0,
    precoDesconto: 131.75,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Instalado no computador",
      "Mais praticidade",
      "Emissão por videoconferência",
    ],
    popular: true,
  },
];

export const todosProdutos: Produto[] = [
  ...produtosDestaque,
  // Adicionar ao array todosProdutos:

  // ✅ e-CPF A3 - Sem Mídia - 1 Ano
  {
    id: "ecpf-a3-sem-midia-1ano",
    nome: "e-CPF",
    tipo: "A3 - Sem Mídia",
    categoria: "Pessoa Física",
    duracao: "1 Ano",
    precoOriginal: 168.0,
    precoDesconto: 142.8,
    desconto: 15,
    caracteristicas: [
      "Validade de 1 ano",
      "Armazenamento seguro em nuvem",
      "Acesso de qualquer dispositivo",
      "Emissão presencial ou videoconferência",
    ],
  },

  // ✅ e-CPF A3 - Sem Mídia - 2 Anos
  {
    id: "ecpf-a3-sem-midia-2anos",
    nome: "e-CPF",
    tipo: "A3 - Sem Mídia",
    categoria: "Pessoa Física",
    duracao: "2 Anos",
    precoOriginal: 252.0,
    precoDesconto: 214.2,
    desconto: 15,
    caracteristicas: [
      "Validade de 2 anos",
      "Armazenamento seguro em nuvem",
      "Melhor custo-benefício",
      "Emissão presencial ou videoconferência",
    ],
  },

  // ✅ e-CNPJ A3 - Sem Mídia - 1 Ano
  {
    id: "ecnpj-a3-sem-midia-1ano",
    nome: "e-CNPJ",
    tipo: "A3 - Sem Mídia",
    categoria: "Pessoa Jurídica",
    duracao: "1 Ano",
    precoOriginal: 252.0,
    precoDesconto: 214.2,
    desconto: 15,
    caracteristicas: [
      "Validade de 1 ano",
      "Armazenamento seguro em nuvem",
      "Ideal para empresas",
      "Emissão presencial ou videoconferência",
    ],
  },

  // ✅ e-CNPJ A3 - Sem Mídia - 2 Anos
  {
    id: "ecnpj-a3-sem-midia-2anos",
    nome: "e-CNPJ",
    tipo: "A3 - Sem Mídia",
    categoria: "Pessoa Jurídica",
    duracao: "2 Anos",
    precoOriginal: 339.0,
    precoDesconto: 288.15,
    desconto: 15,
    caracteristicas: [
      "Validade de 2 anos",
      "Armazenamento seguro em nuvem",
      "Melhor custo-benefício",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecnpj-a3-token",
    nome: "e-CNPJ",
    tipo: "A3 - Token USB",
    categoria: "Pessoa Jurídica",
    duracao: "1 Ano",
    precoOriginal: 329.0,
    precoDesconto: 279.65,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Token USB incluso",
      "Maior segurança",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecpf-a3-cartao",
    nome: "e-CPF",
    tipo: "A3 - Cartão",
    categoria: "Pessoa Física",
    duracao: "1 Ano",
    precoOriginal: 199.0,
    precoDesconto: 169.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Mídia criptográfica em cartão",
      "Mobilidade e segurança",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecpf-a3-token",
    nome: "e-CPF",
    tipo: "A3 - Token USB",
    categoria: "Pessoa Física",
    duracao: "1 Ano",
    precoOriginal: 239.0,
    precoDesconto: 203.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Token USB incluso",
      "Máxima proteção",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecnpj-a1",
    nome: "e-CNPJ",
    tipo: "A1 - Sem Mídia",
    categoria: "Pessoa Jurídica",
    duracao: "1 Ano",
    precoOriginal: 229.0,
    precoDesconto: 194.65,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Instalado no computador",
      "Ideal para MEI",
      "Emissão por videoconferência",
    ],
  },
  {
    id: "ecnpj-a3-cartao-leitora-1ano",
    nome: "e-CNPJ",
    tipo: "A3 - Cartão com Leitora",
    categoria: "Pessoa Jurídica",
    duracao: "1 Ano",
    precoOriginal: 379.0,
    precoDesconto: 322.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Cartão criptográfico + leitora USB",
      "Solução completa para empresas",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecpf-a3-cartao-leitora-1ano",
    nome: "e-CPF",
    tipo: "A3 - Cartão com Leitora",
    categoria: "Pessoa Física",
    duracao: "1 Ano",
    precoOriginal: 289.0,
    precoDesconto: 245.65,
    desconto: 15,

    caracteristicas: [
      "Validade de 1 ano",
      "Cartão criptográfico + leitora USB",
      "Solução completa para pessoa física",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecnpj-a3-cartao-leitora-2anos",
    nome: "e-CNPJ",
    tipo: "A3 - Cartão com Leitora",
    categoria: "Pessoa Jurídica",
    duracao: "2 Anos",
    precoOriginal: 499.0,
    precoDesconto: 424.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 2 anos",
      "Cartão criptográfico + leitora USB",
      "Melhor custo-benefício para empresas",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecpf-a3-cartao-leitora-2anos",
    nome: "e-CPF",
    tipo: "A3 - Cartão com Leitora",
    categoria: "Pessoa Física",
    duracao: "2 Anos",
    precoOriginal: 399.0,
    precoDesconto: 339.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 2 anos",
      "Cartão criptográfico + leitora USB",
      "Melhor custo-benefício para pessoa física",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecnpj-a3-card-2anos",
    nome: "e-CNPJ",
    tipo: "A3 - Cartão",
    categoria: "Pessoa Jurídica",
    duracao: "2 Anos",
    precoOriginal: 399.0,
    precoDesconto: 339.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 2 anos",
      "Mídia criptográfica em cartão",
      "Ótimo custo-benefício",
      "Emissão presencial ou videoconferência",
    ],
  },
  {
    id: "ecpf-a3-card-2anos",
    nome: "e-CPF",
    tipo: "A3 - Cartão",
    categoria: "Pessoa Física",
    duracao: "2 Anos",
    precoOriginal: 299.0,
    precoDesconto: 254.15,
    desconto: 15,

    caracteristicas: [
      "Validade de 2 anos",
      "Mídia criptográfica em cartão",
      "Ótimo custo-benefício",
      "Emissão presencial ou videoconferência",
    ],
  },
];
