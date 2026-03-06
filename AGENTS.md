# AGENTS.md

Shared guidance for AI coding agents working with this repository.

## Commands

```bash
npm install       # Install dependencies
npm start         # Start dev server at http://localhost:8000
npm run build     # Production build to dist/
npm run typecheck # TypeScript type check (tsc --noEmit)
```

## Architecture

This is a single-page **Content Security Policy (CSP) builder** — a vanilla TypeScript web app with no framework. Users check boxes for third-party integrations they use, and the app generates a ready-to-use CSP header string.

**Stack**: Webpack 5 + ts-loader (TypeScript, no Babel) + CSS via style-loader (dev) / mini-css-extract-plugin (prod).

**Key files:**

- `src/scripts/constants.ts` — The core data file. `FEATURES` maps ~38 third-party services (GTM, Stripe, Intercom, Sentry, etc.) to their required CSP directives. `CSP_KEYS` lists all supported directive names in output order. Adding a new integration means adding an entry here and a matching checkbox in `index.html`.
- `src/scripts/index.ts` — All application logic. Reads checkbox state, calls `generateCSPObj()` → `generateCSPString()`, updates the UI result. Also handles Copy and Reset buttons.
- `src/index.html` — Static HTML with all checkboxes hardcoded by category (Analytics, Payments, Error tracking, etc.). Each checkbox `id` must match a key in `FEATURES`.
- `src/declarations.d.ts` — Ambient module declaration for CSS imports.

**Data flow:** checkbox toggle → read all checked IDs + custom text inputs → build CSP object by merging `FEATURES[id]` entries → stringify into header format → display in result box.

**Node requirement**: v18.11.0+
