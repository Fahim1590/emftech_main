# EMFTECH

> The digital backbone of Saudi Arabia's smartest businesses.

Marketing site and admin dashboard for EMFTECH — AI automation, ERP, CRM, and SaaS solutions in Riyadh.

## Stack

- **React 19** + **TypeScript** + **Vite 7**
- **Tailwind CSS v4** with a custom beige & brown theme
- **react-router-dom v7** with lazy-loaded routes
- **react-helmet-async** for per-page SEO metadata
- **react-i18next** with English + Arabic (RTL)
- **framer-motion** for animations
- **Supabase** for auth and data

## Local development

```bash
# Install dependencies
npm install

# Copy env template and fill in your Supabase keys
cp .env.example .env

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

This project is a static SPA — **build it first**, then deploy the `dist/`
folder (`index.html` + `assets/`). Never upload the source `index.html` /
`src/` to a host: the dev entry loads `/src/main.tsx`, which a static server
returns with the wrong MIME type, so the browser refuses it and the page is
blank. Full guide and other hosts: [NAMECHEAP_DEPLOY.md](./NAMECHEAP_DEPLOY.md).

**Recommended: Cloudflare Workers** (fast in the Middle East, free) — `wrangler.jsonc`
is committed: it serves `dist/` as static assets with `not_found_handling:
"single-page-application"` for client-side routing.

- **From your machine:** set `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY` in your
  shell, then `npm run deploy` (= `vite build && wrangler deploy`).
- **Git-triggered (Workers Builds):** Cloudflare → Workers & Pages → connect this
  repo → build command `npm run build` → add the `VITE_SUPABASE_*` env vars.
- Add the custom domain `emftech.online` and point DNS.

> Don't add a `public/_redirects` `/* /index.html 200` rule for SPA fallback —
> Cloudflare Workers' static-asset validator rejects it as an infinite loop
> (`/index.html` matches `/*`). `not_found_handling` already covers it.

**Cloudflare Pages** also works (it doesn't read `wrangler.jsonc` — use the Pages
build settings: framework **Vite**, output `dist`; enable the project's
"Single Page Application" routing option for client-side routes).

SPA routing per host: `wrangler.jsonc`'s `not_found_handling` (Cloudflare Workers),
the Pages "Single Page Application" setting (Cloudflare Pages), `public/.htaccess`
(Apache / cPanel).

## Project structure

```
src/
├── App.tsx              # Router, theme, lazy routes, ProtectedRoute
├── main.tsx             # Entry point
├── index.css            # Tailwind v4 theme tokens (beige/brown palette)
├── i18n/                # English + Arabic translations
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── common/          # Logo, SEO, WhatsAppButton
│   └── home/            # Hero, Services, Pricing, etc.
├── pages/               # Routed pages, all lazy-loaded
├── context/             # AuthContext (Supabase)
└── utils/               # supabase client, classname helpers
```

## Security note

Never commit `.env`. Supabase row-level security (RLS) must be configured on every table — the anon key is embedded in the client bundle and is meant to be public, but it's only safe if RLS is enforcing access rules on the database side.
