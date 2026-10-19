# FE COSTA — Landing Page Oficial

Landing page institucional da FE COSTA, criada para apresentar serviços de desenvolvimento de software, comunicar competências e converter visitantes em contatos comerciais.

## Tecnologias

- React 19 e TypeScript
- Vite
- Tailwind CSS 4 e CSS próprio
- Lucide React
- Vitest e Testing Library
- ESLint
- GitHub Actions e GitHub Pages

## Estrutura

```text
src/
├── components/       # Componentes de layout e interface
├── config/           # Contatos e configurações comerciais
├── data/             # Projetos do portfólio
├── sections/         # Seções da landing page
├── styles/           # Estilos globais e responsivos
├── test/             # Configuração dos testes
├── App.test.tsx
├── App.tsx
└── main.tsx
```

## Requisitos

- Node.js 22 LTS ou superior
- npm 10 ou superior

## Instalação e execução

```bash
npm install
npm run dev
```

## Verificações

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

O build de produção é criado em `dist/`.

## Configuração de contatos

Edite `src/config/site.ts` e preencha:

- `whatsapp`: número com código do país e DDD, somente dígitos (ex.: `5511999999999`);
- `email`;
- `instagram`;
- `linkedin`;
- `repository`, quando existir.

Enquanto um contato não estiver configurado, o site não apresenta links fictícios. O CTA do WhatsApp leva à seção de contato e mostra uma indicação de configuração pendente.

A fotografia da seção Sobre fica em `public/images/andre-felipe.jpg` e pode ser substituída mantendo o mesmo nome de arquivo.

## Portfólio

Edite `src/data/projects.ts` e adicione objetos seguindo o tipo `Project`. Use apenas projetos reais e autorizados. Screenshots podem ser colocados em `public/projects/` e referenciados respeitando o base path.

## GitHub Pages

O Vite usa `/fecosta-website/` como base local padrão. O workflow `.github/workflows/deploy.yml` define automaticamente o caminho a partir do nome real do repositório.

Para domínio personalizado ou repositório especial `USUARIO.github.io`, defina `VITE_BASE_PATH=/` no workflow. Para desenvolvimento local, copie `.env.example` para `.env.local` e ajuste `VITE_BASE_PATH` se necessário.

### Publicação

1. Crie um repositório no GitHub e envie este projeto para a branch `main`.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions**.
4. Execute o workflow manualmente ou faça um push na `main`.
5. Confirme a URL informada pelo job `deploy` antes de divulgar.

O workflow instala dependências com `npm ci`, executa lint, typecheck, testes e build, e só então publica `dist/` usando as actions oficiais do GitHub Pages.

## SEO

Metadados básicos, Open Graph, URL canônica, favicon, sitemap e `robots.txt` estão configurados para `https://fecosta290.github.io/fecosta-website/`.
