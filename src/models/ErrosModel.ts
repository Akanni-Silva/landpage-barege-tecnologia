// src/models/ErrosModel.ts
export interface FormErrors {
  nome?: string;
  email?: string;       // ✅ Adicionado
  whatsapp?: string;
  documento?: string;
}