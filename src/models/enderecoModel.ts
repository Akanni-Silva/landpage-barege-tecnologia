export interface Endereco {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  complemento?: string;
}

export const formatarEndereco = (endereco: Endereco): string => {
  const complementoStr = endereco.complemento ? ` - ${endereco.complemento}` : "";
  return `${endereco.rua}, ${endereco.numero}${complementoStr} - ${endereco.bairro} - CEP: ${endereco.cep}`;
};