### Content Security Policy builder

Content Security Policy (CSP) is a security layer that helps prevent XSS and data injection attacks by restricting which resources can be loaded on your website.

This project simplifies generating CSP rules for `Content-Security-Policy` response headers and `<meta>` tags.

> **WARNING**: This software is provided without warranty. Understand what each directive does and test thoroughly before deploying to production.

### Prerequisites
* [Node.js](https://nodejs.org/) v18.11.0 or higher

### Installation
```bash
npm install
```

### Run
```bash
npm start
```
Open [http://localhost:8000](http://localhost:8000)

### Build
```bash
npm run build   # Production build to dist/
npm run typecheck  # TypeScript type check
```

### Supported integrations

**Analytics**: Google Tag Manager, GA4, Google Ads, Google reCaptcha v3, Floodlight, Facebook Pixel, Mixpanel, Lucky Orange, Hotjar

**Communication & Support**: Intercom, Chatlio, Zendesk, Live Chat, CallTrackingMetrics

**Error & Performance**: BugSnag, New Relic, Sentry

**Payments**: Stripe (JS, Checkout, Connect, Address Element, Redirect)

**Misc**: Google Fonts, Google Maps, LegitScript, Gatsby

### General Resources
* [Content-Security-Policy](https://content-security-policy.com/)
* [OWASP Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [Mozilla Developer Network: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
* [CSP Level 3 W3C](https://www.w3.org/TR/CSP3/)
* [CSP with Google](https://csp.withgoogle.com/docs/index.html)
* [The unsafe-hashes Source List Keyword](https://content-security-policy.com/unsafe-hashes/)

### Testing
* [Google CSP Evaluator](https://csp-evaluator.withgoogle.com/)

### Usage
* [Using Google Tag Manager with a Content Security Policy](https://developers.google.com/tag-platform/tag-manager/web/csp)
* [Strict CSP](https://csp.withgoogle.com/docs/strict-csp.html)
