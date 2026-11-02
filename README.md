# Tanush Gupta Portfolio (Next.js)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Before you deploy
1. Create `.env.local` with `NEXT_PUBLIC_SITE_URL=https://your-domain.com` (canonical URL, sitemap, social cards).
2. Put your photo in `/public` and set `PHOTO_SRC` in `lib/data.ts` (for example `"/tanush.jpg"`). Empty shows the placeholder.
3. Replace the GitHub, LinkedIn and Behance links in `lib/data.ts`.
4. Add Google Search Console verification in `app/layout.tsx` under `metadata.verification` if you use it.

SEO included: metadata, Open Graph and Twitter cards, generated social image, canonical URL, JSON-LD (Person and WebSite), sitemap.xml, robots.txt, semantic landmarks, server-rendered content.
