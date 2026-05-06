# Barege Tecnologia - Landing Page

Landing page institucional da Barege Tecnologia para captação de solicitações de certificado digital. O projeto apresenta os certificados A1 e A3, oferece chamadas diretas para WhatsApp, possui formulário de contato integrado ao EmailJS e uma seção voltada para parceria com contadores.

## Tecnologias

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- EmailJS
- Lucide React

## Funcionalidades

- Página inicial responsiva para divulgação de certificados digitais.
- CTA para atendimento via WhatsApp.
- Comparativo entre certificado A1 e A3.
- Formulário de solicitação com envio por EmailJS.
- Feedback visual de envio, carregamento e erro.
- Seção de parceria para contadores.
- Dados de contato centralizados em um único arquivo.

## Pré-requisitos

Antes de começar, tenha instalado:

- Node.js
- npm

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Como executar

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse a URL exibida no terminal, normalmente:

```text
http://localhost:5173
```

## Scripts disponíveis

```bash
npm run dev
```

Executa o projeto em modo de desenvolvimento com hot reload.

```bash
npm run build
```

Gera a versão de produção em `dist/`, executando antes a checagem do TypeScript.

```bash
npm run preview
```

Executa uma prévia local da versão gerada para produção.

```bash
npm run lint
```

Executa o ESLint no projeto.

## Estrutura do projeto

```text
src/
  components/
    footer/
      footer.tsx
    navbar/
      navbar.tsx
  data/
    companyInfo.ts
  pages/
    homepage/
      homepage.tsx
  App.tsx
  main.tsx
  index.css
public/
  favicon.svg
  icons.svg
```

## Personalização dos dados da empresa

As principais informações de contato ficam em:

```text
src/data/companyInfo.ts
```

Nesse arquivo é possível alterar:

- Nome da empresa
- Endereço
- E-mail
- Instagram
- Número do WhatsApp
- Link de atendimento pelo WhatsApp

## Configuração do formulário

O formulário de solicitação usa o EmailJS por meio da função `sendForm`, configurada em:

```text
src/pages/homepage/homepage.tsx
```

Para usar outra conta ou template do EmailJS, altere os valores:

- Service ID
- Template ID
- Public Key

Os campos enviados atualmente pelo formulário são:

- Nome completo
- WhatsApp
- CPF ou CNPJ
- Tipo de certificado
- Data de envio

## Estilos

O projeto usa Tailwind CSS 4. As cores principais da identidade visual estão definidas em:

```text
src/index.css
```

Cores configuradas:

- `baby-blue-ice`
- `rich-cerulean`
- `yale-blue`
- `bright-snow`
- `bright-snow-2`

## Build para produção

Para gerar os arquivos finais:

```bash
npm run build
```

O resultado será criado na pasta:

```text
dist/
```

## Contato

Barege Tecnologia  
E-mail: baregetecnologia@gmail.com  
WhatsApp: (11) 9 9860-6204  
Instagram: @baregetecnologia  
Endereço: Av. dos Autonomistas, 2561 - Osasco
