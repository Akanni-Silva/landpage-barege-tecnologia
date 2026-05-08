export interface Depoimento {
  id: string;
  nome: string;
  cargo: string;
  empresa: string;
  texto: string;
  estrelas: number;
  foto?: string; // URL da foto (opcional)
}