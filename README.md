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

### Outstanding content TODOs

Search the codebase for `TODO`. Still needed from the owner / Instagram:

- Real street **address**, **city/ST/ZIP**, and **hours**.
- **Phone** and **email**.
- Specific **equipment** list / machine brands.
- Real **photos** (hero, gallery) and an **OG share image** (`public/og.jpg`, 1200×630).
- Confirm the **military sign-up fee** is waived.
- **Meta Pixel** snippet (in `src/layouts/Layout.astro`) for ad retargeting.

## Pricing (confirmed)

| Plan                       | Price        | Effective | Notes                                  |
| -------------------------- | ------------ | --------- | -------------------------------------- |
| Month-to-month             | $49.99/mo    | —         | + $49.99 one-time sign-up fee          |
| 1 year paid in full        | **$480/yr**  | $40/mo    | No sign-up fee · saves $169.87 yr one  |
| Military                   | $39.99/mo    | —         | Sign-up fee waived                     |
| Military paid in full      | **$360/yr**  | $30/mo    | No sign-up fee · saves $119.88         |
