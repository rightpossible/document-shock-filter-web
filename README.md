# document-shock-filter-web

Premium public UI for the [Document Shock Filter](https://github.com/rightpossible/document-shock-filter) API (LCR-weighted shock filter).

**Live demo:** https://document-shock-filter-web.vercel.app

## Stack

- Next.js (App Router) · TypeScript · Tailwind · Framer Motion
- Package manager: **pnpm**

## Setup

```powershell
pnpm install
copy .env.example .env.local
pnpm dev
```

Open http://localhost:3000

### Environment

```env
NEXT_PUBLIC_API_URL=https://document-shock-filter-23modl2eja-ew.a.run.app
```

## Restore recipe on `/try`

The demo always calls Cloud Run with **`shock_v2_lcr`** (LCR-weighted shock + stain removal). There is no profile picker in the UI.

## Deploy (Vercel)

1. Import `rightpossible/document-shock-filter-web` on Vercel.
2. Framework: **Next.js**. Install: `pnpm install`. Build: `pnpm build`.
3. Set `NEXT_PUBLIC_API_URL` to the Cloud Run URL above.
4. If you add a custom domain, update Cloud Run `CORS_ORIGINS` via [`document-shock-filter/deploy/cors-env.yaml`](https://github.com/rightpossible/document-shock-filter/blob/main/deploy/cors-env.yaml).

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing |
| `/try` | Upload + live restore (+ profile picker) |
| `/method` | Pipeline stages |
| `/results` | Thesis highlight numbers |
| `/about` | Citation + links |
