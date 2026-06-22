// src/models/produtoModel.ts

// ============================================================
// TIPOS/TABELAS DE ESCOLHA
// ============================================================

export interface TipoCertificado {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  precoBase: number;
}

export interface MidiaCertificado {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  adicional: number;
  // Informações para o modal de detalhes
  infoTitulo: string;
  infoDescricao: string;
  infoBeneficios: string[];
  // ✅ Tipo real do produto (ex: "A3 - Token USB")
  tipoProduto?: string;
}

export interface ValidadeCertificado {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  multiplicador: number;
  desconto: number;
}

// ============================================================
// VISUAL DO PRODUTO (imagem + cores da borda)
// ============================================================

export interface TipoVisual {
  imagem: string;
  corBorda: string;
  corSombra: string;
}

// ============================================================
// PRODUTO DO CATÁLOGO
// ============================================================

export interface Produto {
  id: string;
  nome: string;
  tipo: string;
  categoria: string;
  duracao: string;
  precoOriginal: number;
  precoDesconto: number;
  desconto: number;
  caracteristicas: string[];
  popular?: boolean;
}

// ============================================================
// ESCOLHAS DO USUÁRIO NO FORMULÁRIO
// ============================================================

export interface EscolhasCertificado {
  tipo: string;
  midia: string;
  validade: string;
}

// ============================================================
// DADOS PARA O MODAL DE INFORMAÇÕES
// ============================================================

export interface DadosModalProduto {
  titulo: string;
  descricao: string;
  beneficios: string[];
  imagem: string;
  corBorda: string;
  corSombra: string;
}
