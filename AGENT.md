# AGENT.md

Shared guidance for AI coding agents working with this repository.

## Commands

```bash
npm install   # Install dependencies
npm start     # Start dev server at http://localhost:8000
```

No build, test, or lint scripts are configured.

## Architecture

This is a single-page **Content Security Policy (CSP) builder** — a vanilla JS web app with no framework. Users check boxes for third-party integrations they use, and the app generates a ready-to-use CSP header string.

**Stack**: Webpack 5 + Babel + CSS via style-loader. No test framework. No TypeScript.

**Key files:**

- `src/scripts/constants.js` — The core data file. `FEATURES` maps ~40 third-party services (GTM, Stripe, Intercom, Sentry, etc.) to their required CSP directives. `CSP_KEYS` lists all supported directive names. Adding a new integration means adding an entry here.
- `src/scripts/index.js` — All application logic. Reads checkbox state, calls `generateCSPObj()` → `generateCSPString()`, updates the UI result. Also handles Copy and Reset buttons.
- `src/index.html` — Static HTML with all checkboxes hardcoded by category (Analytics, Payments, Error tracking, etc.). Each checkbox `id` must match a key in `FEATURES`.

**Data flow:** checkbox toggle → read all checked IDs + custom text inputs → build CSP object by merging `FEATURES[id]` entries → stringify into header format → display in result box.

**Node requirement**: v18.11.0+
