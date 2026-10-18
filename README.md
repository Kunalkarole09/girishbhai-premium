# Girishbhai Gandevikar Jewellers

A responsive editorial website concept for Girishbhai Gandevikar Jewellers in Vadodara. The static site presents the jewellery house's heritage, collections, showroom information, and Suvarna Vruddhi Yojana in a refined, image-led experience.

## Pages

- `index.html` — homepage, heritage introduction, moments, collections, savings scheme, and showroom CTA
- `services.html` — Polki, Gold, Silver, Diamond, and scheme details
- `timeline.html` — brand story and heritage timeline

## Tech stack

- Semantic HTML
- CSS with responsive layout and design tokens
- Vanilla JavaScript for the mobile navigation and savings calculator
- Google Fonts (`DM Sans` and `Playfair Display`)

## Run locally

This is a static website and does not require a package manager, build step, environment variables, or backend service.

Open `index.html` directly in a browser, or serve the folder with any static server. For example, if Python is available:

```bash
python -m http.server 8080
```

Then visit `http://localhost:8080`.

## External services and assets

The pages reference publicly hosted brand imagery, video, fonts, Google Maps, Instagram, YouTube, WhatsApp, and telephone links. An internet connection is required for those remote assets and destinations to load.

No API keys, credentials, payment integrations, or environment variables are required by the current implementation.

## Limitations

- The language selector is a visual control only; it does not currently switch translations.
- The savings calculator is an informational frontend calculation and does not submit enrolment data.
- Collection and showroom links point to the existing static pages or external destinations.
- No catalogue, ecommerce checkout, enquiry database, or CMS is included.
- Remote media URLs should be replaced with owned/static assets if the site must be self-contained or resilient to third-party changes.
