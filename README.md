# Grail Gym — website

Marketing site for **Grail Gym** ([@grailgym](https://www.instagram.com/grailgym)),
built to drive **Founding Member** signups before the gym expands and prices rise.

## Stack

| Layer    | Choice                                            |
| -------- | ------------------------------------------------- |
| Framework| [Astro 5](https://astro.build) (static output)    |
| Styling  | [Tailwind CSS 4](https://tailwindcss.com) (Vite plugin) |
| Hosting  | [Cloudflare Pages](https://pages.cloudflare.com)  |
| Signups  | GymMaster member portal (external)                |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Deploy to Cloudflare Pages

1. Push this repo to GitHub (already wired to `brojonbeast/grail-gym`).
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Add the custom domain `www.grailgymtx.com` (and apex `grailgymtx.com`) under
   the Pages project → **Custom domains**. Cloudflare handles SSL automatically.

## Where to edit content

- **Pricing & business info:** `src/data/site.ts` (single source of truth).
- **Page sections / copy:** `src/pages/index.astro`.
- **Theme colors / fonts:** `src/styles/global.css` (`@theme` block).

### Done (from grailgymtx.com + Instagram, June 2026)

- Business name, San Antonio address, 24/7 hours, phone, email — in `site.ts`.
- "WHY WE EXIST" positioning copy, equipment partners (Arsenal Strength, Intek,
  Mega Mass, Booty Builder), personal-training CTA, map, social links.

### Outstanding content TODOs

Search the codebase for `TODO`. Still needed from the owner:

- Real interior **photos** — owner to send source files (IG CDN URLs are
  signed/expiring and can't be hotlinked). Wanted: hero/interior shots,
  per-brand equipment images, and a photo of Hunter → drop into `public/`.
  (Official logos were pulled from grailgymtx.com: `public/logo-gold.jpg`,
  `public/logo-full.png` — OG image uses the gold logo for now.)
- **Meta Pixel** snippet (in `src/layouts/Layout.astro`) for ad retargeting.
- GymMaster portal still shows a **$49.99 signup fee** on membership plans —
  owner confirmed (2026-07-16) pricing is flat with no signup fee and is
  having it removed from GymMaster. The site shows flat prices only.

### Fonts

Inter (400 / 700 / 900, latin subset) is self-hosted in `public/fonts/` and
used for all type. Inter is open-source (SIL OFL) — no licensing constraints.

## Pricing (confirmed)

Flat pricing, no signup fees. Sales tax applies at checkout but is
deliberately not mentioned on the site.

| Plan                  | Price       | Effective | Notes             |
| --------------------- | ----------- | --------- | ----------------- |
| Month-to-month        | $49.99/mo   | —         | No contract       |
| 6 months paid in full | **$275**    | $45.83/mo |                   |
| 1 year paid in full   | **$480/yr** | $40/mo    | Saves $119.88/yr  |
| Military              | $39.99/mo   | —         | Active duty + vets|
| Military paid in full | **$360/yr** | $30/mo    | Saves $119.88/yr  |
| Day pass              | $20         | —         | Day of purchase   |
| Week pass             | $34.95      | —         | Seven days        |
