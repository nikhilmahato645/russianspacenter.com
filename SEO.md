# SEO reference — russianspacenter.com

Audited against the production build (`npm run build` → `out/`), not the dev
server. Regenerate the raw numbers by serving `out/` and re-crawling it.

Canonical host: `https://russianspacenter.com/` (https, non-www, trailing slash —
`trailingSlash: true` in `next.config.js`, so every internal URL must end in `/`).

---

## 1. Keyword → page map

One primary intent per page. Nothing else in the site is allowed to target a
page's primary term as *its* primary, which is what keeps these 17 pages out of
each other's way.

| Route | Primary intent | Secondary intents | Search intent |
|---|---|---|---|
| `/` | Russian Spa Centre (brand/entity) | spa in Mahipalpur, luxury spa near IGI Airport | Navigational + brand discovery |
| `/spa-in-mahipalpur/` | **body massage in Mahipalpur** | best/full body massage Mahipalpur, massage service Mahipalpur, Russian massage Mahipalpur, spa near IGI Airport | Commercial — the money page |
| `/spa-in-aerocity/` | spa in Aerocity | body massage Aerocity, massage near Delhi Airport, hotel pickup | Commercial, traveller/hotel guest |
| `/spa-in-delhi/` | spa in Delhi | body massage Delhi, Russian spa Delhi, couples spa Delhi | Commercial, city-wide |
| `/spa-in-dwarka/` | spa for Dwarka | body massage Dwarka, massage service Dwarka | Commercial, catchment |
| `/spa-in-vasant-kunj/` | spa for Vasant Kunj | Ayurvedic massage, prenatal, membership | Commercial, repeat customer |
| `/spa-in-green-park/` | spa near Green Park | Ayurvedic Abhyanga, aromatherapy, reflexology | Commercial, catchment |
| `/spa-in-hauz-khas/` | spa near Hauz Khas | deep tissue, Thai, sports recovery | Commercial, therapeutic |
| `/spa-in-saket/` | spa near Saket | long-format rituals, couples | Commercial, catchment |
| `/spa-in-karol-bagh/` | spa near Karol Bagh | licensed spa, privacy, couples suite | Commercial, trust-led |
| `/spa-in-gurugram/` | spa near Gurugram / Gurgaon | late-night massage, recovery, Cyber City | Commercial, out-of-state catchment |
| `/services/` | spa & massage services | Swedish, deep tissue, Thai, aromatherapy, hot stone, reflexology, Banya | Informational → commercial |
| `/pricing/` | spa & massage price Mahipalpur | body massage price, packages, membership | Commercial investigation |
| `/locations/` | areas served (hub) | drive times from each catchment | Navigational hub |
| `/about/` | Russian Spa Centre (entity trust) | therapists, hygiene, experience | Trust / E-E-A-T |
| `/contact/` | contact & booking | phone, WhatsApp, address, directions | Transactional |
| `/gallery/` | spa photos Mahipalpur | Banya, treatment rooms, interiors | Pre-booking reassurance |

**Cannibalisation check.** No two pages share a primary intent. The former risk
was `/` and `/spa-in-mahipalpur/` both leading on "spa in Mahipalpur"; the home
page now leads on the brand entity and the Mahipalpur page owns the commercial
term. `/services/` (treatment types) and `/pricing/` (rates) are separated by
intent, not by keyword.

---

## 2. Per-route surface

All titles ≤ 60 characters, all descriptions 136–150 characters, all unique,
one `<h1>` each, self-referencing canonical, `index,follow`.

| Route | Title | H1 | Words | H2 | Schema (+ LocalBusiness sitewide) |
|---|---|---|---|---|---|
| `/` | Russian Spa Centre \| Best Body Massage & Spa in Mahipalpur | Russian Spa Centre — Premium Spa & Body Massage in Mahipalpur | 1532 | 10 | WebSite, Organization |
| `/spa-in-mahipalpur/` | Best Body Massage & Spa in Mahipalpur \| Russian Spa Centre | Best Body Massage & Spa in Mahipalpur | **2753** | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-delhi/` | Best Spa & Body Massage in Delhi \| Russian Spa Centre | Best Spa & Body Massage in Delhi | 2466 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-hauz-khas/` | Spa & Body Massage near Hauz Khas \| Russian Spa Centre | Best Spa & Body Massage near Hauz Khas | 2434 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-karol-bagh/` | Spa & Body Massage near Karol Bagh \| Russian Spa Centre | Best Spa & Body Massage near Karol Bagh | 2393 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-dwarka/` | Best Spa & Body Massage for Dwarka \| Russian Spa Centre | Best Spa & Body Massage for Dwarka | 2370 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-saket/` | Spa & Body Massage near Saket \| Russian Spa Centre | Best Spa & Body Massage near Saket | 2361 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-gurugram/` | Spa & Body Massage near Gurugram \| Russian Spa Centre | Best Spa & Body Massage near Gurugram | 2316 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-green-park/` | Spa & Body Massage near Green Park \| Russian Spa Centre | Best Spa & Body Massage near Green Park | 2272 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-vasant-kunj/` | Spa & Body Massage for Vasant Kunj \| Russian Spa Centre | Best Spa & Body Massage for Vasant Kunj | 2177 | 10 | Service, FAQPage, BreadcrumbList |
| `/spa-in-aerocity/` | Best Spa & Body Massage in Aerocity \| Russian Spa Centre | Best Spa & Body Massage in Aerocity | 2164 | 10 | Service, FAQPage, BreadcrumbList |
| `/about/` | About Russian Spa Centre \| Mahipalpur, New Delhi | About Russian Spa Centre, Mahipalpur | 1596 | 9 | AboutPage, BreadcrumbList |
| `/services/` | Spa & Massage Services in Mahipalpur \| Russian Spa Centre | Spa & Massage Services in Mahipalpur | 1582 | 8 | Service, FAQPage, BreadcrumbList |
| `/locations/` | Spa & Body Massage Across Delhi NCR \| Russian Spa Centre | Where to Find Us Across Delhi NCR | 1453 | 7 | ItemList, FAQPage, BreadcrumbList |
| `/pricing/` | Spa & Body Massage Prices in Mahipalpur \| Russian Spa Centre | Spa & Massage Price List, Mahipalpur | 1309 | 6 | OfferCatalog, FAQPage, BreadcrumbList |
| `/contact/` | Contact & Booking \| Russian Spa Centre, Mahipalpur | Contact Russian Spa Centre, Mahipalpur | 903 | 6 | ContactPage, FAQPage, BreadcrumbList |
| `/gallery/` | Photo Gallery \| Russian Spa Centre, Mahipalpur | Photo Gallery — Our Spa in Mahipalpur | 602 | 3 | ImageGallery, FAQPage, BreadcrumbList |

Mahipalpur is deliberately the deepest page on the site.

---

## 3. Structured data

One business entity, referenced rather than repeated:

- `LocalBusiness` (`HealthAndBeautyBusiness`) at `@id = /#business` — emitted once
  from `app/layout.tsx`, so every page resolves to the same business.
- `WebSite` (`/#website`) and `Organization` (`/#organization`) on the home page.
- Area pages emit `Service` + `areaServed` + `hasOfferCatalog`, **never** a second
  `LocalBusiness` with the area's address. There is one premises; publishing
  branches that do not exist is a doorway-page signal and risks the Google
  Business Profile.
- `FAQPage` only where the FAQ is genuinely on the page.
- `BreadcrumbList` on all 16 inner pages.

**No `aggregateRating` anywhere.** Google treats ratings a business publishes
about itself as self-serving; they are ineligible for LocalBusiness rich results
and can attract a manual action. Ratings belong on the Google Business Profile,
where Google sources them itself. (See the note in `app/lib/site.ts`.)

---

## 4. Technical state

| Check | Result |
|---|---|
| Routes built | 17 indexable + `sitemap.xml` + 404 |
| Broken internal links | 0 (full crawl from `/`) |
| Orphan pages | 0 — every page has 44–84 inbound internal links |
| Sitemap parity | 17/17 sitemap URLs reachable; no extras, no query URLs |
| Canonicals | 17/17 self-referencing, trailing slash, absolute |
| `og:url` vs canonical | match on all 17 |
| Duplicate titles / descriptions | 0 |
| `<h1>` count | exactly 1 per page |
| Images missing `alt` | 0 |
| Invalid JSON-LD | 0 |
| `keywords` meta | removed sitewide (Google ignores it; stuffing is a Bing negative) |
| robots.txt | allows all public routes + `/_next/static/`; `Crawl-delay` removed |
| Core Web Vitals (desktop, prod) | LCP ~0.9 s, TBT 0–70 ms, CLS 0 |

---

## 5. NAP — the single source of truth

All of it lives in `app/lib/site.ts`. Nothing is hardcoded in a component any
more, so changing it in one place updates every `tel:` link, WhatsApp deep link,
`mailto:`, visible line of copy and JSON-LD node at once.

| Field | Value |
|---|---|
| Phone / WhatsApp | `+91 8929979542` |
| Email | `info@mahipalpurspaservicecentre.com` |
| Address | Office No. 118, Defence Enclave, Adjoining Aerocity, Mahipalpur, New Delhi 110037 |
| Hours | 24/7, 365 days |

Served areas and 18 service pincodes are published as `areaServed` on the
`LocalBusiness` node (14 `Place` + 18 `PostalCodeSpecification` entries) and are
visible to users at `/contact/#service-area`.

Keep these identical to the Google Business Profile — inconsistent NAP is one of
the few local-SEO mistakes that actively suppresses ranking.

---

## 6. Still outstanding

1. **Pincode `11048`** was supplied with five digits. Recorded as **110048**
   (Defence Colony), which matches the supplied served-areas list. Confirm.
2. **Geo coordinates look like placeholders** — `28.5432, 77.1234` in
   `app/lib/site.ts`. Wrong coordinates hurt local-pack relevance.
3. **The Google Maps embed points at the wrong place** (it resolves near
   Vasant Kunj and shows "No reviews"). Replace `MAP_EMBED_URL` with the embed
   from the real Google Business Profile listing.
4. **Testimonials are unattributed.** Named quotes appear on the home page and
   every area page. If they are not real they must come down — fake reviews are
   a Google spam violation.
5. **Unverified claims** in copy: "10+ years", "350+ reviews", "90%+ retention",
   "eleven private rooms", "two couples suites", "25 certified therapists",
   "50+ years combined expertise". Each is fine if true, a liability if not.
6. **Therapist profiles** use stock-looking photographs with invented-sounding
   names and biographies. This is the site's biggest E-E-A-T risk: it is the one
   section a reviewer would check first.
7. **The email domain is the old site's** (`mahipalpurspaservicecentre.com`).
   That is what was supplied and it works, but an `@russianspacenter.com`
   address would tie the entity together more tightly.

---

## 7. On the category keyword list

The supplied list — "Russian Body | Massage Centres | Beauty Spas For Men |
24 Hours Beauty Spas-A | Massage Centres For Men-Z | …" — is a directory
category listing (the `-A` / `-Z` suffixes are JustDial sort keys, not phrases
anyone searches).

It is **deliberately not rendered on the site**. A block of comma-separated
category strings is keyword stuffing under Google's spam policies, it was
already removed from the footer of all 17 pages, and the `-A`/`-Z` fragments
would read as broken to a human. The same ground is covered semantically by the
page copy, headings and `areaServed` schema.

Where the list *does* belong: the category fields of the Google Business Profile
and directory listings (JustDial, Sulekha, Bing Places).

---

## 8. The two-domain problem

The same client runs `mahipalpurspaservicecentre.com` (live ~7 months, ranking)
and `russianspacenter.com` (this site). Same premises, same NAP, same services,
same target keywords.

**Cross-linking them is not a backlink.** Links between sites under common
ownership are discounted — a backlink is a third-party endorsement, and a site
you own is not a third party. Worse, running both is actively harmful:

- The two sites compete for identical queries. Google generally filters one
  business's second site out of the same local result set.
- One business gets one Google Business Profile, which has one website field.
  Two domains split citations and local signals.
- Google's doorway-page policy explicitly covers "multiple domain names …
  targeted at specific regions or cities" funnelling to one business.
- Heavy exact-match cross-linking between owned domains is a link-scheme signal.

**Consolidate onto one domain and 301 the other.** Do not run both.

### Cross-links to the old site (client decision)

The client asked for the old site to be linked from this one so visitors can
reach it. That was raised as an SEO no-op — owned-site links are discounted and
pass no meaningful authority — and reaffirmed, so it is implemented.

It is built the least-harmful way, per the brief:

- `app/lib/legacy-site.ts` maps each page to **only** its topically relevant
  counterpart on the old site. No page carries the full list.
- All 21 old URLs are used exactly once across the site: one link on most pages,
  three on the Mahipalpur, Aerocity and Delhi pages where the old site has
  several matching articles.
- `/spa-in-saket/`, `/spa-in-hauz-khas/` and `/spa-in-green-park/` get **no
  link** — the old site has no page for those areas, and linking them somewhere
  unrelated would be a link for its own sake.
- Rendered by `app/components/AlsoVisit.tsx` below the page content and above
  the booking CTA, so it never competes with the conversion path.
- `target="_blank" rel="noopener"` — `noreferrer` is deliberately omitted so the
  old site's analytics can attribute this traffic. That referral number is the
  measurement that shows whether the links are earning their place.

This does not replace consolidation. It is a convenience link, not a ranking
tactic, and it should be removed if and when the two domains are merged.

`SITE_URL` in `app/lib/site.ts` is the only place the domain is declared, so
pointing this codebase at either domain is a one-line change plus the two
`Sitemap:`/host lines in `public/robots.txt`.

### URL map (old → new)

14 of the 21 old URLs are identical paths, so most of this is a straight
host swap.

| Old URL | Redirect to | Note |
|---|---|---|
| `/` `/about/` `/services/` `/pricing/` `/contact/` `/gallery/` `/locations/` | same path | identical |
| `/spa-in-mahipalpur/` `/spa-in-aerocity/` `/spa-in-vasant-kunj/` `/spa-in-dwarka/` `/spa-in-gurugram/` `/spa-in-karol-bagh/` `/spa-in-delhi/` | same path | identical |
| `/russian-spa-mahipalpur/` | `/spa-in-mahipalpur/` | same intent, one page |
| `/body-massage-mahipalpur/` | `/spa-in-mahipalpur/` | page is now targeted at this term |
| `/russian-spa-aerocity/` | `/spa-in-aerocity/` | |
| `/body-massage-aerocity/` | `/spa-in-aerocity/` | |
| `/body-massage-vasant-kunj/` | `/spa-in-vasant-kunj/` | |
| `/russian-banya-delhi/` | `/spa-in-delhi/` | that page's article is the Banya explainer |
| `/couple-spa-delhi/` | `/services/` | the couples suite lives there with its price |

The new site additionally has `/spa-in-saket/`, `/spa-in-hauz-khas/` and
`/spa-in-green-park/`, which the old site never had — net gain, no action.

**Before deciding, pull Search Console data on the old domain** (last 6 months,
clicks + impressions per page). Two things to look for:

1. Which domain actually earns the traffic — that is the argument for which one
   survives.
2. Whether `/body-massage-mahipalpur/` or `/russian-spa-mahipalpur/` are top
   performers. If they are, recreate them as dedicated URLs on the new site
   rather than folding them into `/spa-in-mahipalpur/`; redirecting a strongly
   ranking page into a broader one loses the specificity that earned it.

### After the migration

- Keep the retired domain registered and redirecting **permanently**. Do not let
  it lapse — the redirects are what carry the equity.
- Redirect at the host with 301s. A static export cannot do this itself.
- Update the Google Business Profile website field, then every citation:
  JustDial, Sulekha, Bing Places, Facebook, Instagram bio.
- Keep both properties in Search Console and use **Change of Address** on the
  retired one.
- Expect 4–12 weeks of volatility. Do not reverse course inside that window.

---

## 9. Post-deploy checklist

1. Verify the property in Google Search Console (domain property preferred).
2. Submit `https://russianspacenter.com/sitemap.xml`.
3. Confirm the host serves **one** canonical origin — https, non-www — and 301s
   http→https, www→non-www, and no-slash→slash. The static export cannot do this;
   it is a hosting/CDN rule.
4. Enable gzip/brotli and long `Cache-Control` on `/_next/static/` (worth ~20
   Lighthouse points on its own).
5. Claim and complete the Google Business Profile at the Mahipalpur address, and
   keep NAP identical to `app/lib/site.ts`.
6. Re-run Rich Results Test on `/` and `/spa-in-mahipalpur/`.
