# Iraady Ltd — v3 International Expansion Spec

Apply the same upgrades to BOTH `site-a-dark/` and `site-b-editorial/`.

## 1. Dual-office addresses (International appeal)

**REPLACE** the existing Contact section's right-hand card with TWO office cards side-by-side + global-reach strip. Use this exact data:

**🇬🇧 United Kingdom Office** (headquarters)
- 5 Brayford Square
- London E1 0SG
- United Kingdom
- Phone: +44 7848 502889
- Hours: Mon–Fri 9:00 AM – 6:00 PM GMT
- Google Maps link (use this exact URL): https://maps.google.com/?q=5+Brayford+Square+London+E1+0SG

**🇷🇼 Kigali Office**
- Norrsken House Kigali
- 1 KN 78 St, Kigali
- Rwanda
- Phone: +250 787 171 273
- Hours: Mon–Fri 8:00 AM – 5:00 PM CAT
- Google Maps link: https://maps.google.com/?q=Norrsken+House+Kigali

Layout: 2-column on desktop, 1-column on mobile. Include a "View on Google Maps" link in each card.

Add a "Trusted by businesses in" flag strip after the offices (under the contact grid):
🇬🇧 UK · 🇷🇼 Rwanda · 🇺🇬 Uganda · 🇰🇪 Kenya · 🇳🇬 Nigeria · 🇨🇩 DRC · 🇫🇷 France · 🇹🇿 Tanzania · 🇬🇭 Ghana · 🇿🇦 South Africa · and 5+ more

## 2. Hero sub-headline update
Add "London · Kigali" next to the existing Kigali pill/eyebrow. Site A eyebrow becomes: `London · Kigali · Product Operators`. Site B eyebrow stays plain but in hero sub, mention "Headquartered in London, with offices in Kigali".

## 3. About section update
Replace about text with:
"Iraady Ltd (UK Company No. **16951380**) is a British-Rwandan software and AI studio headquartered in London with an operating office at Norrsken House, Kigali. Since 2021 we've shipped 30+ products across SaaS, mobile, and AI — including our flagship products BizPro and NgoPlus, serving businesses and NGOs across 15+ countries. We partner with ambitious teams worldwide on projects from $1K to enterprise."

## 4. Floating WhatsApp button (ALL pages)
Add a fixed-position floating button at bottom-right that:
- Has the WhatsApp green (#25D366) circle with white WhatsApp icon SVG (provided below)
- On click → opens `https://wa.me/250787171273?text=Hi%20Iraady%20Ltd%2C%20I%27m%20interested%20in%20your%20services.` in new tab
- Gentle pulse animation
- 56px circle, z-index high, bottom:24px right:24px, with shadow
- Include an accessible `aria-label="Chat on WhatsApp"`

WhatsApp SVG:
```svg
<svg viewBox="0 0 32 32" fill="white" width="28" height="28"><path d="M16 .396C7.164.396 0 7.56 0 16.396c0 2.887.788 5.587 2.154 7.918L.02 31.604l7.43-2.118A15.93 15.93 0 0 0 16 32.396c8.836 0 16-7.164 16-16s-7.164-16-16-16zm0 29.334a13.33 13.33 0 0 1-6.77-1.84l-.486-.286-4.42 1.26 1.17-4.316-.318-.498A13.33 13.33 0 1 1 16 29.73zm7.33-9.9c-.4-.2-2.37-1.17-2.74-1.3-.37-.14-.64-.2-.9.2-.27.4-1.03 1.3-1.27 1.56-.23.27-.47.3-.87.1-.4-.2-1.7-.63-3.24-2.01-1.2-1.07-2.01-2.4-2.25-2.8-.23-.4-.03-.62.18-.82.18-.18.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.9-2.17-1.23-2.97-.32-.78-.65-.67-.9-.68l-.77-.02c-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.34 0 1.97 1.43 3.87 1.63 4.14.2.27 2.83 4.33 6.87 6.07.96.42 1.7.67 2.28.86.96.3 1.83.26 2.52.16.77-.12 2.37-.97 2.7-1.9.33-.94.33-1.74.23-1.9-.1-.17-.37-.27-.77-.47z"/></svg>
```

Style the button differently per site (Site A: subtle violet ring on hover; Site B: neutral drop shadow). Use an anchor tag, not a button, so it opens cleanly.

## 5. Contact form — instant email delivery
Replace the existing mailto form action with **Formsubmit.co** for immediate email delivery (no backend needed).

Form `action="https://formsubmit.co/info@iraady.com"` `method="POST"`.

Inside the form, include these hidden fields:
```html
<input type="hidden" name="_subject" value="New inquiry from Iraady Ltd website">
<input type="hidden" name="_template" value="table">
<input type="hidden" name="_next" value="https://iraady.com/thank-you.html">
<input type="hidden" name="_captcha" value="true">
<input type="hidden" name="_autoresponse" value="Thanks for reaching out to Iraady Ltd! We've received your message and will reply within 24 hours on weekdays. — Adolphe & team">
```

After submit, FormSubmit sends an immediate email to info@iraady.com AND auto-replies to the sender.

Create `thank-you.html` in both sites (matching visual style): big heading "Message received 🙌", short confirmation paragraph, a link "← Back to home".

## 6. Privacy Policy + Terms pages (separate HTML files)
Create `privacy.html` and `terms.html` in each site directory. Each should:
- Include site's CSS link
- Include the site's nav + footer (same as index.html, minus filter tabs / product data)
- Use a focused reading-width container (max 720px)
- H1 title + last-updated date: "Last updated: April 30, 2026"
- Standard sections

### privacy.html content sections:
1. Introduction — Iraady Ltd (UK Company No. 16951380), registered at 5 Brayford Square, London E1 0SG, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information.
2. Information we collect — Contact info (name, email, phone), payment info (processed by Flutterwave; we never store card details), usage data (IP, browser, pages visited via Cloudflare Web Analytics).
3. How we use your information — To respond to inquiries, deliver purchased source code, improve our products, and comply with legal obligations.
4. Sharing — We never sell your data. Limited sharing with payment processors (Flutterwave), email delivery (FormSubmit), and legal authorities when required.
5. Cookies & Analytics — We use Cloudflare Web Analytics which is cookie-less and privacy-respecting.
6. Data retention — We keep contact records for up to 3 years. Payment records are retained as required by UK tax law (typically 6 years).
7. Your rights (GDPR) — Access, rectification, erasure, portability, objection, withdrawal of consent. Contact: privacy@iraady.com.
8. International transfers — Data may be processed in the UK and Rwanda.
9. Changes — We may update this policy; we'll post changes with a new "Last updated" date.
10. Contact — privacy@iraady.com · Iraady Ltd, 5 Brayford Square, London E1 0SG, UK.

### terms.html content sections:
1. Acceptance — By accessing iraady.com you agree to these Terms.
2. Company — Iraady Ltd, UK Company No. 16951380, 5 Brayford Square, London E1 0SG, United Kingdom.
3. Services — Custom software development, AI integration, source code licensing.
4. Source code purchases — One-time payment grants commercial license for unlimited use by purchaser, no redistribution as source code, no resale. Refunds: 7-day guarantee if source code is materially defective; otherwise non-refundable given digital nature.
5. Payment — Processed by Flutterwave in USD. You're responsible for applicable taxes in your jurisdiction.
6. Intellectual property — Our trademarks, logos, site content are property of Iraady Ltd.
7. Client work — Scope/cost defined in individual SOW/contract. These Terms govern website use only.
8. Warranty — Services provided "as is" to the extent permitted by UK law. We don't guarantee uninterrupted operation.
9. Limitation of liability — To the maximum extent permitted by law, Iraady Ltd's aggregate liability is limited to the amount you paid us in the preceding 12 months.
10. Governing law — These Terms are governed by the laws of England and Wales. Disputes resolved in English courts, or by mutual arbitration.
11. Changes — We may update these Terms; continued use after changes constitutes acceptance.
12. Contact — legal@iraady.com.

## 7. Footer — add Privacy + Terms links (both sites)
Update footer "Company" or add new "Legal" column with: Privacy Policy → privacy.html, Terms → terms.html, Cookie Policy → privacy.html#cookies.

Add UK Company No. to the bottom bar: "© 2026 Iraady Ltd · UK Company No. 16951380. All rights reserved."

## 8. Cloudflare Web Analytics (visitor tracking)
Add this script (with placeholder token — we'll replace with real token in deploy) to every HTML file (index.html, privacy.html, terms.html, thank-you.html) right before `</body>`:

```html
<!-- Cloudflare Web Analytics -->
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "CF_ANALYTICS_TOKEN_PLACEHOLDER"}'></script>
```

Also add a Google Analytics fallback GA4 stub so we can enable it later without editing HTML again. Use a commented-out placeholder:
```html
<!-- Google Analytics 4 (disabled until GA_ID is set) -->
```

## 9. Cookie consent banner (GDPR)
Add a small bottom-banner that appears on first visit:
- Text: "We use privacy-respecting analytics (Cloudflare Web Analytics — no cookies). Learn more in our Privacy Policy."
- One button: "Got it" (dismisses, sets `localStorage` `iraady_cookie_ack=1`)
- Link to /privacy.html
- Match each site's style

Don't re-show once dismissed.

## 10. Products/Services hero line
Add "Headquartered in London with offices in Kigali" as a small secondary line in the hero area of Site B, and in Site A, add a tiny "London HQ · Kigali Studio" badge line next to the live-dot eyebrow.

---

## Deliverables (commit message):
`v3: international (UK+RW), WhatsApp, policies, formsubmit, CF analytics`

Edit every file as needed. Do NOT break existing Flutterwave checkout. Do NOT break existing projects/shop rendering. Keep everything responsive.
