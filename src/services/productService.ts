// ============================================================
// service
// ============================================================

import { midiasCertificado, tiposCertificado, tipoVisualMap, todosProdutos, validadesCertificado } from "../data";
import type { MidiaCertificado, Produto, TipoCertificado, TipoVisual, ValidadeCertificado } from "../models/productModel";


export const getProdutoPorId = (id: string): Produto | null => {
  return todosProdutos.find((p) => p.id === id) || null;
};

export const getVisualPorTipo = (tipo: string): TipoVisual | null => {
  return tipoVisualMap[tipo] || null;
};

export const getMidiaPorId = (id: string): MidiaCertificado | null => {
  return midiasCertificado.find((m) => m.id === id) || null;
};

export const getTipoPorId = (id: string): TipoCertificado | null => {
  return tiposCertificado.find((t) => t.id === id) || null;
};

export const getValidadePorId = (id: string): ValidadeCertificado | null => {
  return validadesCertificado.find((v) => v.id === id) || null;
};