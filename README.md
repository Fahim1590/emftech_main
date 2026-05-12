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

This project is a static SPA. Deploy the `dist/` folder to any static host.

**Recommended: Cloudflare Pages** (fast in the Middle East, free, Git-based auto-deploy).

1. Push this repo to GitHub
2. In Cloudflare Pages → "Create project" → "Connect to Git"
3. Settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Add env var: `NODE_VERSION = 20`
4. Add env vars from `.env` (Supabase URL + anon key) in Cloudflare Pages settings
5. Add custom domain `emftech.online` and point DNS

SPA routing is handled by `public/_redirects` (Cloudflare / Netlify) and `public/.htaccess` (Apache / cPanel).

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
