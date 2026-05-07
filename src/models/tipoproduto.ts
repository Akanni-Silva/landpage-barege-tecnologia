export interface Produto {
  id: string;
  nome: string;
  tipo: string;
  categoria: string;
  duracao: string;
  precoOriginal: number;
  precoDesconto: number;
  desconto: number;
  parcelamento: string;
  caracteristicas: string[];
  popular?: boolean;
}
