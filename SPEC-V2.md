# Iraady Ltd — v2 Expansion Spec

Extend BOTH existing sites (`site-a-dark/` and `site-b-editorial/`) to be complete multi-section sites. Keep the single-page scroll layout for each — just ADD more sections and update branding.

## Brand name
Replace EVERY occurrence of "Iraady" (when used as company name) with **"Iraady Ltd"** in titles, hero, about, footer, meta tags. The bare "Iraady" wordmark in the nav/logo can stay short ("Iraady") for visual weight, but the full legal name "Iraady Ltd" appears in hero, about, contact, footer, and meta.

Update both `<title>` tags to: **"Iraady Ltd — Software, AI, and Products from Kigali"**
Update meta description to: **"Iraady Ltd is a Rwanda-based software & AI studio building and operating flagship products like BizPro and NgoPlus. We partner with ambitious teams on projects from $1K to enterprise."**

## Sections to add (both sites, in this order after existing sections)

Insert these new sections BETWEEN the existing "Full Portfolio" and "Process" sections, unless noted otherwise.

### 1. Clients
Heading: "Trusted by teams across Africa."
Intro: "From NGOs to SMBs, from Kigali to Lagos — Iraady Ltd builds for operators who need software that actually ships."
Render a responsive grid of client logos/names (use text cards — no real logos). Pull client names from the `group === "Client"` entries in `projects.json`. Each card shows the client name + niche badge. Clicking opens their project URL in a new tab.

### 2. Team
Heading: "A small team that ships."
Intro: "We're a lean, product-obsessed team based in Kigali — engineers, designers, and operators who've shipped live SaaS to thousands of users."

Render 4 team member cards (invent realistic names with African flavor but mark them clearly as placeholder roles):
- **Adolphe Irankunda** — Founder & CEO — "Started Iraady in 2021. Built BizPro and NgoPlus from zero."
- **[Placeholder]** — Head of Engineering — "15 years shipping production systems across Africa."
- **[Placeholder]** — Head of Design — "Design systems that feel obvious."
- **[Placeholder]** — Head of AI — "LLM agents, RAG systems, automation pipelines."

Use initials avatars (gradient backgrounds matching each site's palette). Add a short "+ join our team" card with a mailto:careers@iraady.com link.

### 3. Pricing — "Work with us"
Heading: "Transparent pricing. No surprises."
Intro: "Every project is unique, but here's where most of our work lands."
3 pricing tiers as cards (NOT for purchase — just engagement tiers):

| Tier | Price | Best for | What's included |
|------|-------|----------|-----------------|
| **Starter** | From **$1,000** | Landing pages, small MVPs, quick integrations | 1-2 week engagement · 1 designer + 1 engineer · Source code delivered · 30-day support |
| **Growth** | From **$10,000** | Full product builds, mobile apps, AI features | 4-8 week engagement · Full team · Figma designs + code + deployment · 90-day support · Analytics setup |
| **Enterprise** | From **$30,000** | Multi-product platforms, complex AI systems, high-scale SaaS | 3+ month engagement · Dedicated squad · Architecture + DevOps + SRE · 12-month SLA · Ongoing operations |

Each card has a "Book a discovery call" CTA (mailto:hello@iraady.com?subject=...).

Mark the "Growth" tier as "Most popular" with a badge.

### 4. Shop — "Ready-made source code"
Heading: "Buy what we've already built."
Intro: "14 production-tested products, ready to white-label or extend. Full source code, commercial license, one-time payment."
Pull projects from `projects.json` where `price` is set (14 items). Render in a dense grid — name, 1-line description, price, Buy Now button (wires to existing Flutterwave checkout). This is distinct from the Portfolio section (which shows ALL projects including clients and non-saleable).

### 5. Blog
Heading: "Writing from the workshop."
Intro: "Field notes on building software for Africa, shipping AI products, and running SaaS."
Render 4 placeholder article cards (title, date, 2-line excerpt, "Read more →" — link to `#`):
1. **"Why we built BizPro in Kigali, not San Francisco"** — March 2026
2. **"Running a SaaS in Rwanda: latency, payments, and real users"** — February 2026
3. **"The AI stack we use to ship features 3x faster"** — January 2026
4. **"From agency to product: how owning NgoPlus changed our client work"** — December 2025

Below the grid: "See all articles →" link.

### 6. Contact Us (replace existing Contact)
Upgrade the existing Contact section to a richer block:
- Heading: "Let's build something."
- Two-column layout:
  - LEFT: Contact form (name, email, company, project type dropdown [Website/Mobile App/SaaS/AI Integration/Other], budget dropdown [$1K–$5K / $5K–$15K / $15K–$30K / $30K–$80K / $80K+], message). Submit via mailto.
  - RIGHT: Contact info card showing:
    - 📧 Email: `hello@iraady.com` (general) / `info@iraady.com` (support)
    - 📍 Location: Kigali, Rwanda
    - 🕒 Response time: within 24 hours on weekdays
    - Social links: LinkedIn, Twitter/X, GitHub, Telegram (use `#` for placeholder URLs)
- Below the grid: "Prefer a call? Book a 30-min discovery call →" mailto link.

### 7. Nav update
Update the nav links on both sites to include new anchors. Final nav order:
**Products · Work · Services · Shop · Pricing · Team · Blog · Contact**

All anchor links (#products, #work, #services, etc.) to matching section IDs.

## Footer update (both sites)
Replace footer content:
- Column 1: Iraady Ltd wordmark + tagline + "Kigali, Rwanda"
- Column 2: "Company" — Products, Work, Team, Blog, Pricing
- Column 3: "Connect" — hello@iraady.com, LinkedIn, Twitter, GitHub
- Bottom bar: "© 2026 Iraady Ltd. All rights reserved." + "Crafted in 🇷🇼 Kigali"

## Hero update
In Site A (Dark Operator) hero sub-headline, change "Iraady is a product-led..." to "Iraady Ltd is a product-led..."
Same for Site B.

## About update
Add company details: "Iraady Ltd is a registered Rwandan company based in Kigali, founded in 2021. We've shipped 30+ products across SaaS, mobile, and AI — including our flagship products BizPro and NgoPlus, which serve thousands of businesses and NGOs across the continent."

## Visual consistency
- Maintain each site's existing visual system (Site A dark/violet, Site B editorial/emerald).
- New sections must use the same card styles, button styles, typography hierarchy as existing sections.
- Keep everything responsive. Blog + Shop grids should be 3-col desktop, 2-col tablet, 1-col mobile.

## Output
Edit `site-a-dark/index.html`, `site-a-dark/styles.css`, `site-a-dark/app.js` (if needed) and the same three files for `site-b-editorial/`. Do NOT break existing Flutterwave checkout. Do NOT break existing project rendering. Projects data file stays the same.

When done, commit with message "v2: Iraady Ltd — clients, team, pricing, shop, blog, contact".
