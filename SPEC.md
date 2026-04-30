# Iraady Websites — Build Spec (2 sites)

Build TWO complete, production-ready static websites for **Iraady Ltd**, a Rwanda-based software & AI studio that operates its own flagship SaaS products (BizPro, NgoPlus, Kimuse, etc.) and also sells project source code.

Goal: help Iraady win $1K–$80K client contracts by looking like a high-end software agency, AND sell the 14 project templates via Flutterwave checkout (same flow as adolphe.iraady.com).

## Reference mockups (DO NOT just copy — expand into full multi-section sites)
- `mockup-01-dark.html` — **Site A: Dark Operator** (Linear/Vercel/Raycast vibe, dark #0A0A0F, violet #C778DD + emerald #10B981)
- `mockup-02-editorial.html` — **Site B: Editorial Premium** (Stripe/luxury magazine vibe, warm off-white #F7F5F0, deep charcoal, emerald #0F766E)

Both sites share content & data but have distinct visual identities.

## Output structure
```
site-a-dark/
  index.html          (single-page with all sections)
  styles.css
  app.js              (project filtering + Flutterwave checkout)
  projects.json       (copy from ../projects.json)
site-b-editorial/
  index.html
  styles.css
  app.js
  projects.json
```

## Required sections (both sites, same order)

1. **Nav** — Logo "Iraady", links: Products, Services, Work, About, Contact. Site A uses primary violet button, Site B uses black pill button.
2. **Hero** — Tagline matching the mockup direction. Two CTAs.
3. **Live metrics strip** — 4 metrics (use data below).
4. **Flagship Products** — 3 featured cards: NgoPlus, BizPro, Kimuse. Big, premium.
5. **Services** — 4 services (SaaS Engineering, AI Integration, Mobile Apps, Product Design). Include one-liner each.
6. **Full Portfolio** — **Render ALL 33 projects from `projects.json`**. Group filter tabs: "All / Personal / Mobile Apps / Client". Each card:
   - Image (from `image` field; lazy load; `hasImage` is always true)
   - Name, description, niche badge (if present)
   - Tech chips (if `techs` present — empty for now, still render container)
   - Buttons: "View Project" (opens `url`) and — **if `price` exists AND `group` in ["Personal","Mobile Apps"]** — a "Buy Now — $X" button that triggers Flutterwave checkout (see below).
7. **Process** — 4 steps: Discover → Design → Build → Operate (each w/ 1-line descriptor).
8. **Proof / Case studies** — Short blurb referencing BizPro + NgoPlus as real operating products. One testimonial quote from "Adolphe Irankunda, Founder, Iraady".
9. **About** — Short paragraph: Rwanda-based, product-led, 5+ years, serves Africa.
10. **Contact** — Form (name, email, message — mailto fallback), email info@iraady.com, location "Kigali, Rwanda".
11. **Footer** — Logo, email, socials, copyright.

## Content data

**Tagline A (Dark Operator):** "We build the software Africa actually uses."
Sub: "Iraady is a product-led software & AI studio from Kigali. We operate BizPro, NgoPlus, and a portfolio of live SaaS serving thousands — and we partner on projects from $1K to enterprise."

**Tagline B (Editorial Premium):** "From Kigali, we ship software the world relies on."
Sub: "Iraady is a Rwanda-based software studio that designs, builds, and operates its own flagship products — BizPro and NgoPlus — while partnering with ambitious teams on projects from $1K to enterprise."

**Metrics:** 2,400+ Businesses on BizPro · 180+ NGOs on NgoPlus · 99.9% Uptime · 12 Countries served

**Services:**
- ⚡ SaaS Engineering — Production-grade web platforms. Next.js, Node, Postgres, cloud-native.
- 🧠 AI Integration — LLM-powered features, agents, RAG systems, automation pipelines.
- 📱 Mobile Apps — iOS + Android with React Native / Expo. Shipped to App Store & Play.
- 🎨 Product Design — UX, UI, design systems. Interfaces users actually love.

**Process:** Discover (we map the problem) → Design (prototype + validate) → Build (ship production code) → Operate (monitor, iterate, grow)

**Testimonial (self-quote from founder):** "We run our own SaaS — so when we build yours, we already know where it breaks. That's the difference between an agency and an operator." — Adolphe Irankunda, Founder

**Contact:** info@iraady.com · Kigali, Rwanda

## Flutterwave checkout (CRITICAL — exact same as adolphe.iraady.com)

Add this script tag to both sites: `<script src="https://checkout.flutterwave.com/v3.js"></script>`

On "Buy Now" click, show a modal (styled to match each site) that collects name, email, phone, then calls:

```js
FlutterwaveCheckout({
  public_key: "FLWPUBK-1be4df0b721ba2090406cacf32555e93-X",
  tx_ref: "TX-" + projectId + "-" + Date.now(),
  amount: price,
  currency: "USD",
  payment_options: "card, mobilemoney, ussd",
  customer: { email, name, phone_number },
  meta: { project_id, project_name, seller_email: "info@iraady.com" },
  customizations: {
    title: "Buy " + projectName,
    description: "Full Source Code • Commercial License",
    logo: "https://iraady.com/logo.svg"
  },
  callback: function(response) {
    if (response.status === "successful") {
      // Notify backend webhook
      fetch('https://zcw4cgscs0kk8ckgokcsgk0k.app.kimuse.rw/api/webhook/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event: 'charge.completed',
          data: {
            customer: { name, email, phone_number: phone },
            amount, currency: 'USD', tx_ref: response.transaction_id,
            meta: { project_name: projectName, seller_email: 'info@iraady.com' }
          }
        })
      }).catch(() => {});
      alert("Payment successful! Transaction ID: " + response.transaction_id + "\\n\\nWe'll email the source code to " + email + " within 24 hours.");
    }
  },
  onclose: function() {}
});
```

The modal styling must match each site (Site A: dark violet accent; Site B: clean off-white with charcoal borders).

## Visual system

**Site A (Dark Operator):**
- Fonts: Inter (sans) + JetBrains Mono (mono labels)
- Bg: #0A0A0F. Cards: #13131A. Border: #27272A. Text: #E4E4E7. Muted: #A1A1AA.
- Accents: violet #C778DD, emerald #10B981. Subtle radial glows on hero.
- Aesthetic: sharp, technical, confident. Grid backdrop. Large bold headlines with accent-color gradient on key words.

**Site B (Editorial Premium):**
- Fonts: Fraunces (serif display) + Inter (sans body)
- Bg: #F7F5F0. Cards: #FFFFFF. Border: #E5E1D8. Text: #0F0F0F. Muted: #6B6B6B.
- Accent: emerald #0F766E. Hairline dividers.
- Aesthetic: refined, generous whitespace, large serif headlines with italic emphasis. Rounded corners, pill buttons.

## Quality bar
- Fully responsive (mobile/tablet/desktop). Breakpoints at 768px and 1024px.
- Smooth scroll. Hover states. Accessible (alt text, aria where useful, good contrast).
- Lazy-load project images. Graceful fallback if microlink screenshot fails.
- No external CSS frameworks. Pure CSS, no Tailwind, no bundler. Must deploy as-is.
- Clean semantic HTML.
- Works with file:// and served from any static host.

## Deploy
After building, commit everything to the current git repo (already initialized in the workdir). Push via the completion script (separate — don't worry about deploy, focus on the code).
