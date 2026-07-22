# document-shock-filter-web

Premium public UI for the [Document Shock Filter](https://github.com/rightpossible/document-shock-filter) API (LCR-weighted shock filter).

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

## Deploy (manual — Vercel)

Repo is already on GitHub: https://github.com/rightpossible/document-shock-filter-web

1. Vercel → **Add New Project** → import `rightpossible/document-shock-filter-web`.
2. Framework: **Next.js**. Install: `pnpm install`. Build: `pnpm build`. Output: default.
3. Environment variable:
   - `NEXT_PUBLIC_API_URL` = `https://document-shock-filter-23modl2eja-ew.a.run.app`
4. Deploy, then **paste the production URL back in chat** so Cloud Run `CORS_ORIGINS` can include it (localhost is already allowed).

Until CORS is updated, the live Vercel site will fail restore calls from the browser; local `pnpm dev` works.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing |
| `/try` | Upload + live restore |
| `/method` | Pipeline stages |
| `/results` | Thesis highlight numbers |
| `/about` | Citation + links |
