# Barege Tecnologia - Site Institucional

Este projeto é um site institucional completo para a Barege Tecnologia. Apesar do nome original `landpage-barege`, a aplicação evoluiu para um site com múltiplas páginas, navegação interna e conteúdo completo sobre produtos, serviços e contato.

---

## 1. Visão geral

Esta aplicação React + TypeScript é um site corporativo destinado a promover os serviços de certificação digital da Barege Tecnologia. O projeto inclui:

- Página inicial responsiva com carrossel de banners e CTA claros
- Seção de produtos / serviços de certificação digital
- Fluxo de solicitação de certificado com cálculo de preço
- Formulário avançado com validações para CPF/CNPJ e WhatsApp
- Envio de solicitações por EmailJS
- Abertura automática do WhatsApp para contato imediato
- Seção de contato, parceiros, política de privacidade e termos de uso

---

## 2. Tecnologias utilizadas

- React 19
- TypeScript 6
- Vite
- Tailwind CSS 4
- React Router DOM
- EmailJS Browser
- Lucide React
- Phosphor Icons React
- ESLint

---

## 3. Funcionalidades principais

- Navegação por rotas internas com `react-router-dom`
- Banner em carrossel com navegação automática e manual
- Seleção de tipos de certificado, mídia e validade
- Cálculo dinâmico de preço com desconto e adicionais
- Formulário em etapas com validações de campos
- Envio de pedido por EmailJS e redirecionamento para WhatsApp
- Seções de contato e informações da empresa com link direto para WhatsApp
- Layout responsivo para desktop, tablet e mobile

---

## 4. Estrutura principal do projeto

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    navbar/navbar.tsx
    footer/footer.tsx
    modals/productModal.tsx
    cards/
      depoimentosCard.tsx
      productsCards.tsx
  data/
    companyData.ts
    productsData.ts
    depoimentoData.ts
    index.ts
  models/
    companyModel.ts
    depoimentoModel.ts
    productModel.ts
    ErrosModel.ts
  pages/
    home/home.tsx
    produtos/produtos.tsx
    solicitacao/solicitacao.tsx
    contato/contato.tsx
    comoFunciona/comoFunciona.tsx
    parceiros/parceiros.tsx
    sobre/sobreNos.tsx
    politicaPriv/politicaPrivacidade.tsx
    termosUso/termosUso.tsx
  services/
    productService.ts
  utils/
    formatPrice.ts
    validators.ts
    index.ts
```

---

## 5. Rotas disponíveis

- `/` - Página inicial
- `/produtos` - Lista de produtos e certificados
- `/solicitacao` - Formulário de solicitação de certificado
- `/como-funciona` - Funcionamento do serviço
- `/contato` - Informações de contato e localização
- `/parceiros` - Seção dedicada a parcerias
- `/sobre-nos` - Sobre a empresa
- `/politica-privacidade` - Política de privacidade
- `/termos-uso` - Termos de uso

---

## 6. Instalação

### Requisitos

- Node.js (recomendado 18+)
- npm

### Passos

```bash
git clone <URL_DO_REPOSITÓRIO>
cd landpage-barege-tecnologia
npm install
```

---

## 7. Execução em ambiente de desenvolvimento

```bash
npm run dev
```

Em seguida, abra no navegador o endereço exibido pelo Vite, geralmente `http://localhost:5173`.

---

## 8. Build de produção

```bash
npm run build
```

O output final é emitido em `dist/`.

### Pre visualizar a build

```bash
npm run preview
```

---

## 9. Lint e qualidade de código

```bash
npm run lint
```

Este comando executa o ESLint em todo o projeto.

---

## 10. Configuração de dados da empresa

Os dados de contato e links principais estão centralizados em:

- `src/data/companyData.ts`

Neste arquivo você pode alterar:

- `name`
- `address`
- `email`
- `instagram`
- `whatsappNumber`
- `whatsappLink`

---

## 11. Configuração do formulário de solicitação

O formulário principal de solicitação está em:

- `src/pages/solicitacao/solicitacao.tsx`

Ele utiliza:

- Validação customizada para CPF/CNPJ
- Validação de telefone
- Cálculo de preço com base em tipo de certificado, mídia e validade
- Envio para EmailJS via `sendForm`

### Serviço EmailJS configurado

Os valores atuais estão definidos diretamente no código em `solicitacao.tsx`:

- Service ID: `service_owuos8i`
- Template ID: `template_omknf2m`
- Public Key: `_FstKZ8T_TaD7uNMf`

> Recomenda-se mover essas chaves para variáveis de ambiente em produção.

---

## 12. Personalização de produtos e catálogos

Os dados de produtos e certificados estão em:

- `src/data/productsData.ts`

O serviço de suporte a visualização e seleção está em:

- `src/services/productService.ts`

Use esses arquivos para ajustar nomes, preços, descrições e ícones dos certificados.

---

## 13. Estilização

A estilização é feita em Tailwind CSS e o arquivo principal de estilo global é:

- `src/index.css`

As classes personalizadas e o tema de cores são usados em todo o app para manter a identidade visual.

---

## 14. Observações importantes

- O projeto é configurado como `private: true` em `package.json`, portanto não está planejado para publicação como pacote npm.
- A arquitetura é orientada a componentes, com foco em reutilização e manutenção.
- As principais interações do usuário são via WhatsApp e formulário de solicitação.

---

## 15. Contato do projeto

Barege Tecnologia

- E-mail: `baregetecnologia@gmail.com`
- WhatsApp: `https://wa.me/5511998606204`
- Instagram: `https://instagram.com/baregetecnologia`
- Endereço: Av. dos Autonomistas, 2561 - Osasco, SP
