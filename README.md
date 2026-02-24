# OFAG — Site institucional multilíngue

Site institucional da OFAG (Osvaldo, Fernandes S.A. Artes Gráficas) com suporte a **PT**, **EN** e **ES**, posicionado como *Technical Printing Solutions for Regulated Industries*.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (i18n)

## Estrutura

- Rotas por idioma: `/pt`, `/en`, `/es` (ex.: `/pt/about`, `/en/quote`)
- Conteúdo em `messages/pt.json`, `messages/en.json`, `messages/es.json`
- Páginas: Home, About, Services, Certifications, Clients, Contact, Quote
- SEO: metadata por idioma, `alternates` (hreflang), sitemap e `robots.txt`

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000); o middleware redireciona para `/pt`.

## Build e produção

```bash
npm run build
npm start
```

Defina `NEXT_PUBLIC_SITE_URL` (ex.: `https://ofag.com`) para URLs corretas no sitemap e em canonical/hreflang.

## Imagens

As imagens do site antigo ([ofag.com.br](http://www.ofag.com.br)) podem ser salvas em `public/images/` (ex.: `logo-ofag.svg`, `hero-facility.jpg`) e referenciadas nos componentes.

## Licença

Projeto privado — OFAG.
