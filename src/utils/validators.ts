/* eslint-disable prefer-const */
export const validarTelefone = (valor: string): boolean => {
  const numeros = valor.replace(/[^\d]/g, "");
  return numeros.length >= 10 && numeros.length <= 11;
};

export const validarCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]/g, "");
  if (cpf.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
  let resto = 11 - (soma % 11);
  if (resto > 9) resto = 0;
  if (parseInt(cpf.charAt(9)) !== resto) return false;

  soma = 0;
  for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
  resto = 11 - (soma % 11);
  if (resto > 9) resto = 0;

  return parseInt(cpf.charAt(10)) === resto;
};

export const validarCNPJ = (cnpj: string): boolean => {
  cnpj = cnpj.replace(/[^\d]/g, "");
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  const pesos1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const pesos2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  let soma = 0;
  for (let i = 0; i < 12; i++) soma += parseInt(cnpj.charAt(i)) * pesos1[i];
  let resto = soma % 11;
  let digito1 = resto < 2 ? 0 : 11 - resto;
  if (parseInt(cnpj.charAt(12)) !== digito1) return false;

  soma = 0;
  for (let i = 0; i < 13; i++) soma += parseInt(cnpj.charAt(i)) * pesos2[i];
  resto = soma % 11;
  let digito2 = resto < 2 ? 0 : 11 - resto;

  return parseInt(cnpj.charAt(13)) === digito2;
};

export const validarDocumento = (valor: string): boolean => {
  const numeros = valor.replace(/[^\d]/g, "");
  if (numeros.length === 11) return validarCPF(valor);
  if (numeros.length === 14) return validarCNPJ(valor);
  return false;
};


export const validarCEP = (cep: string): boolean => {
  const cepLimpo = cep.replace(/[^\d]/g, "");
  return cepLimpo.length === 8;
};

export const formatarCEP = (cep: string): string => {
  const cepLimpo = cep.replace(/[^\d]/g, "");
  if (cepLimpo.length <= 5) return cepLimpo;
  return `${cepLimpo.slice(0, 5)}-${cepLimpo.slice(5, 8)}`;
};
