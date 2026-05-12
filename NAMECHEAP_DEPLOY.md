# Deploying EMFTECH

This is a static Vite + React SPA. **You must build it first** — never upload
the source `index.html` or the `src/` folder to a host. The dev `index.html`
loads `/src/main.tsx`, which a static server hands back with the wrong MIME
type, so the browser refuses it and the page is blank
("Failed to load module script: Expected a JavaScript-or-Wasm module script...").

```bash
npm install
npm run build      # writes the deployable site to ./dist
```

`dist/` contains `index.html` plus an `assets/` folder with hashed JS/CSS.
Deploy the **whole `dist/` folder**, contents and all — not just `index.html`.

> Note: the build is a normal multi-file bundle (CSS code-splitting + vendor
> chunks). There is no single-file build despite `vite-plugin-singlefile` being
> in `devDependencies` — it is not wired into `vite.config.ts`.

Before building, set the Supabase env vars (`.env`, or your host's build-env UI):

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

---

## Option 1 — Cloudflare Pages (recommended)

Fast in the Middle East, free, Git-based auto-deploy.

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Build settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - (If the repo nests the project in a subfolder, set **Root directory** to that subfolder.)
4. Environment variables: `NODE_VERSION = 20`, plus `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
5. Add the custom domain `emftech.online` and point DNS.

For SPA routing (deep links), enable the **Single Page Application** option in the
Pages build settings — or add a `public/_redirects` file containing
`/* /index.html 200` (Cloudflare Pages and Netlify accept that pattern; Cloudflare
Workers does not — see Option 2).

## Option 2 — Cloudflare Workers (Wrangler CLI / Workers Builds)

Uses `wrangler.jsonc` in this repo (static assets, no Worker script).

```bash
npm install           # includes wrangler
npm run deploy         # = vite build && wrangler deploy
```

Or connect the repo to Cloudflare Workers Builds with build command `npm run build`.

`wrangler.jsonc` points at `./dist` and sets `not_found_handling: "single-page-application"`,
so client-side routes fall back to `index.html`. Set the `VITE_SUPABASE_*` vars in
your shell (or the Cloudflare dashboard) before building so they're baked in.

> Do **not** add `public/_redirects` for this path: Workers' static-asset validator
> rejects a `/* /index.html 200` rule as an infinite loop (`/index.html` matches
> `/*`). `not_found_handling` already does the SPA fallback.

## Option 3 — Namecheap shared hosting (cPanel)

1. `npm run build` locally.
2. cPanel → **File Manager** → `public_html`.
3. Upload the **entire contents of `dist/`** into `public_html/` (so `public_html/index.html`
   and `public_html/assets/...` exist). The `dist/` build already includes the `.htaccess`
   from `public/` — it does the SPA fallback (`!-f`/`!-d` → `/index.html`) plus gzip,
   caching, and security headers.
4. Enable **AutoSSL / Namecheap SSL** (HTTPS is required for the QR generator features).

### Namecheap domain / DNS

- Nameservers pointed to Namecheap BasicDNS or Web Hosting DNS.
- **Advanced DNS** → the `A` record points to your hosting IP.

## Option 4 — Namecheap VPS (Node)

```bash
ssh root@your_vps_ip
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2 serve
# upload the ./dist folder, then:
pm2 start "serve -s dist -l 80" --name emftech-site
pm2 save
```

`serve -s` already does SPA fallback to `index.html`.

---

### Need help?

EMFTECH engineering — irobiul159@gmail.com
