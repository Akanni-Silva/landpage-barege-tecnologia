export interface TipoCertificado {
  id: string;
  nome: string;
  descricao: string;
  icone: string; // Nome do ícone do lucide-react
  precoBase: number;
}

export interface MidiaCertificado {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  adicional: number;
}

export interface ValidadeCertificado {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  multiplicador: number;
  desconto: number;
}

export interface EscolhasCertificado {
  tipo: string;
  midia: string;
  validade: string;
}
