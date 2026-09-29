# Landing pages de info produtos

Monorepo (pnpm) com Astro 7. Cada LP é um site estático, sem JavaScript de framework, hospedado na Vercel.

```
packages/ui/                 design system compartilhado (@lp/ui)
  src/styles/base.css        tokens (cores, sombras, tipografia) e reset
  src/components/            CtaButton, ImageSlot, Icon, SectionHeader
  src/sections/              seções reutilizáveis (Hero, Pricing, Faq...)
  src/layouts/BaseLayout     <head>, SEO, fonte, repasse de UTMs ao checkout
landing-pages/
  moto-usada/                Guia Visual da Moto Usada
    src/data/content.ts      copy da página
    src/data/images.ts       todas as imagens (placeholders até receber as reais)
    src/data/site.ts         domínio e links de checkout
    src/pages/index.astro    ordem das seções
```

## Rodar localmente

```bash
pnpm install
pnpm dev:moto          # http://localhost:4321
pnpm build:moto        # gera landing-pages/moto-usada/dist
```

Use **pnpm** (o npm não entende `workspace:*`).

## Trocar placeholders por imagens reais

1. Salve o arquivo em `landing-pages/moto-usada/src/assets/` (PNG/JPG em boa resolução).
2. Em `src/data/images.ts`, importe e coloque no campo `src`:
   ```ts
   import heroMockup from '../assets/hero-mockup.png';
   hero: { src: heroMockup, alt: '...' },
   ```
O build gera AVIF/WebP em vários tamanhos automaticamente. A imagem do hero já carrega com prioridade máxima.

## Checkout

Edite `src/data/site.ts`. Os botões dos planos repassam automaticamente os parâmetros da URL (utm_source, fbclid etc.) para o link de checkout.

## Deploy na Vercel

Um projeto Vercel por LP:
- Import do repositório → **Root Directory**: `landing-pages/moto-usada`
- Framework: Astro (detectado). Build/Install: padrão.
- Depois, atualize `site.url` em `src/data/site.ts` com o domínio final.

## Nova landing page

1. Copie `landing-pages/moto-usada` para `landing-pages/<novo-slug>` e mude o `name` no `package.json`.
2. Reescreva `src/data/content.ts`, `images.ts` e `site.ts`.
3. Reordene/remova seções em `src/pages/index.astro`.
4. Para mudar a identidade visual só daquela LP, sobrescreva os tokens (`--c-cta`, `--c-accent` etc.) num `<style>` global da página.
5. Adicione um script `dev:<slug>` no `package.json` da raiz.
"# guia-blog-estudos" 
"# guia-blog-estudos" 
