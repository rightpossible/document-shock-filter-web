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

## Deploy (manual)

1. Push this repo to GitHub.
2. Import on **Vercel** (Framework: Next.js, Install: `pnpm install`, Build: `pnpm build`).
3. Set `NEXT_PUBLIC_API_URL` to the Cloud Run URL above.
4. After you have the production URL, send it so Cloud Run `CORS_ORIGINS` can be updated.

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing |
| `/try` | Upload + live restore |
| `/method` | Pipeline stages |
| `/results` | Thesis highlight numbers |
| `/about` | Citation + links |
