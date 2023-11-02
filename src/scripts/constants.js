export const CSP_KEYS = [
  'script-src', 'style-src', 'img-src',
  'font-src', 'manifest-src', 'connect-src',
  'object-src', 'media-src', 'worker-src',
  'form-action', 'base-uri', 'frame-src',
  'child-src', 'frame-ancestors', 'prefetch-src',
  'upgrade-insecure-requests', 'block-all-mixed-content'
];

export const SETTINGS_MAP = {
  gtm: { // ToDo: add unsafe-inline note: https://developers.google.com/tag-platform/tag-manager/web/csp#enable_the_container_tag_to_use_csp
    'script-src': ["'unsafe-inline'", 'https://www.googletagmanager.com'],
    'img-src': ['www.googletagmanager.com'],
  },
  gtmCustomVars: { // https://developers.google.com/tag-platform/tag-manager/web/csp#custom_javascript_variables
    'script-src': ["'unsafe-inline'"],
  },
  gtmPreviewMode: { // https://developers.google.com/tag-platform/tag-manager/web/csp#preview_mode
    'script-src': ['https://tagmanager.google.com'],
    'style-src': ['https://tagmanager.google.com', 'https://fonts.googleapis.com'],
    'img-src': ['https://ssl.gstatic.com', 'https://www.gstatic.com'],
    'font-src': ['https://fonts.gstatic.com', 'data:'],
  },
  ga4: { // https://developers.google.com/tag-platform/tag-manager/web/csp#google_analytics_4_google_analytics
    'script-src': ['https://*.googletagmanager.com'],
    'img-src': ['https://*.google-analytics.com', 'https://*.googletagmanager.com'],
    'connect-src': ['https://*.google-analytics.com', 'https://*.analytics.google.com', 'https://*.googletagmanager.com'],
  },
  ga4signal: { // For Google Analytics 4 (Google Analytics) deployments using Google Signals, the CSP must include the following directives:
    'script-src': ['https://*.googletagmanager.com'],
    'img-src': ['https://*.google-analytics.com', 'https://*.analytics.google.com', 'https://*.googletagmanager.com', 'https://*.g.doubleclick.net', 'https://*.google.com'], // incl 'https://*.google.<TLD>'
    'connect-src': ['https://*.google-analytics.com', 'https://*.analytics.google.com', 'https://*.googletagmanager.com', 'https://*.g.doubleclick.net', 'https://*.google.com'], // 'https://*.google.<TLD>'
  },
  gTLD: {
    'img-src': [
      'https://*.google.ad', 'https://*.google.ae', 'https://*.google.com.af', 'https://*.google.com.ag',
      'https://*.google.al', 'https://*.google.am', 'https://*.google.co.ao', 'https://*.google.com.ar', 'https://*.google.as',
      'https://*.google.at', 'https://*.google.com.au', 'https://*.google.az', 'https://*.google.ba', 'https://*.google.com.bd',
      'https://*.google.be', 'https://*.google.bf', 'https://*.google.bg', 'https://*.google.com.bh', 'https://*.google.bi',
      'https://*.google.bj', 'https://*.google.com.bn', 'https://*.google.com.bo', 'https://*.google.com.br', 'https://*.google.bs',
      'https://*.google.bt', 'https://*.google.co.bw', 'https://*.google.by', 'https://*.google.com.bz', 'https://*.google.ca',
      'https://*.google.cd', 'https://*.google.cf', 'https://*.google.cg', 'https://*.google.ch', 'https://*.google.ci',
      'https://*.google.co.ck', 'https://*.google.cl', 'https://*.google.cm', 'https://*.google.cn', 'https://*.google.com.co',
      'https://*.google.co.cr', 'https://*.google.com.cu', 'https://*.google.cv', 'https://*.google.com.cy', 'https://*.google.cz',
      'https://*.google.de', 'https://*.google.dj', 'https://*.google.dk', 'https://*.google.dm', 'https://*.google.com.do',
      'https://*.google.dz', 'https://*.google.com.ec', 'https://*.google.ee', 'https://*.google.com.eg', 'https://*.google.es',
      'https://*.google.com.et', 'https://*.google.fi', 'https://*.google.com.fj', 'https://*.google.fm', 'https://*.google.fr',
      'https://*.google.ga', 'https://*.google.ge', 'https://*.google.gg', 'https://*.google.com.gh', 'https://*.google.com.gi',
      'https://*.google.gl', 'https://*.google.gm', 'https://*.google.gr', 'https://*.google.com.gt', 'https://*.google.gy',
      'https://*.google.com.hk', 'https://*.google.hn', 'https://*.google.hr', 'https://*.google.ht', 'https://*.google.hu',
      'https://*.google.co.id', 'https://*.google.ie', 'https://*.google.co.il', 'https://*.google.im', 'https://*.google.co.in',
      'https://*.google.iq', 'https://*.google.is', 'https://*.google.it', 'https://*.google.je', 'https://*.google.com.jm',
      'https://*.google.jo', 'https://*.google.co.jp', 'https://*.google.co.ke', 'https://*.google.com.kh', 'https://*.google.ki',
      'https://*.google.kg', 'https://*.google.co.kr', 'https://*.google.com.kw', 'https://*.google.kz', 'https://*.google.la',
      'https://*.google.com.lb', 'https://*.google.li', 'https://*.google.lk', 'https://*.google.co.ls', 'https://*.google.lt',
      'https://*.google.lu', 'https://*.google.lv', 'https://*.google.com.ly', 'https://*.google.co.ma', 'https://*.google.md',
      'https://*.google.me', 'https://*.google.mg', 'https://*.google.mk', 'https://*.google.ml', 'https://*.google.com.mm',
      'https://*.google.mn', 'https://*.google.com.mt', 'https://*.google.mu', 'https://*.google.mv', 'https://*.google.mw',
      'https://*.google.com.mx', 'https://*.google.com.my', 'https://*.google.co.mz', 'https://*.google.com.na',
      'https://*.google.com.ng', 'https://*.google.com.ni', 'https://*.google.ne', 'https://*.google.nl', 'https://*.google.no',
      'https://*.google.com.np', 'https://*.google.nr', 'https://*.google.nu', 'https://*.google.co.nz', 'https://*.google.com.om',
      'https://*.google.com.pa', 'https://*.google.com.pe', 'https://*.google.com.pg', 'https://*.google.com.ph', 'https://*.google.com.pk',
      'https://*.google.pl', 'https://*.google.pn', 'https://*.google.com.pr', 'https://*.google.ps', 'https://*.google.pt',
      'https://*.google.com.py', 'https://*.google.com.qa', 'https://*.google.ro', 'https://*.google.ru', 'https://*.google.rw',
      'https://*.google.com.sa', 'https://*.google.com.sb', 'https://*.google.sc', 'https://*.google.se', 'https://*.google.com.sg',
      'https://*.google.sh', 'https://*.google.si', 'https://*.google.sk', 'https://*.google.com.sl', 'https://*.google.sn',
      'https://*.google.so', 'https://*.google.sm', 'https://*.google.sr', 'https://*.google.st', 'https://*.google.com.sv',
      'https://*.google.td', 'https://*.google.tg', 'https://*.google.co.th', 'https://*.google.com.tj', 'https://*.google.tl',
      'https://*.google.tm', 'https://*.google.tn', 'https://*.google.to', 'https://*.google.com.tr', 'https://*.google.tt',
      'https://*.google.com.tw', 'https://*.google.co.tz', 'https://*.google.com.ua', 'https://*.google.co.ug', 'https://*.google.co.uk',
      'https://*.google.com.uy', 'https://*.google.co.uz', 'https://*.google.com.vc', 'https://*.google.co.ve', 'https://*.google.co.vi',
      'https://*.google.com.vn', 'https://*.google.vu', 'https://*.google.ws', 'https://*.google.rs', 'https://*.google.co.za',
      'https://*.google.co.zm', 'https://*.google.co.zw', 'https://*.google.cat'
    ],
    'connect-src': [
      'https://*.google.ad', 'https://*.google.ae', 'https://*.google.com.af', 'https://*.google.com.ag',
      'https://*.google.al', 'https://*.google.am', 'https://*.google.co.ao', 'https://*.google.com.ar', 'https://*.google.as',
      'https://*.google.at', 'https://*.google.com.au', 'https://*.google.az', 'https://*.google.ba', 'https://*.google.com.bd',
      'https://*.google.be', 'https://*.google.bf', 'https://*.google.bg', 'https://*.google.com.bh', 'https://*.google.bi',
      'https://*.google.bj', 'https://*.google.com.bn', 'https://*.google.com.bo', 'https://*.google.com.br', 'https://*.google.bs',
      'https://*.google.bt', 'https://*.google.co.bw', 'https://*.google.by', 'https://*.google.com.bz', 'https://*.google.ca',
      'https://*.google.cd', 'https://*.google.cf', 'https://*.google.cg', 'https://*.google.ch', 'https://*.google.ci',
      'https://*.google.co.ck', 'https://*.google.cl', 'https://*.google.cm', 'https://*.google.cn', 'https://*.google.com.co',
      'https://*.google.co.cr', 'https://*.google.com.cu', 'https://*.google.cv', 'https://*.google.com.cy', 'https://*.google.cz',
      'https://*.google.de', 'https://*.google.dj', 'https://*.google.dk', 'https://*.google.dm', 'https://*.google.com.do',
      'https://*.google.dz', 'https://*.google.com.ec', 'https://*.google.ee', 'https://*.google.com.eg', 'https://*.google.es',
      'https://*.google.com.et', 'https://*.google.fi', 'https://*.google.com.fj', 'https://*.google.fm', 'https://*.google.fr',
      'https://*.google.ga', 'https://*.google.ge', 'https://*.google.gg', 'https://*.google.com.gh', 'https://*.google.com.gi',
      'https://*.google.gl', 'https://*.google.gm', 'https://*.google.gr', 'https://*.google.com.gt', 'https://*.google.gy',
      'https://*.google.com.hk', 'https://*.google.hn', 'https://*.google.hr', 'https://*.google.ht', 'https://*.google.hu',
      'https://*.google.co.id', 'https://*.google.ie', 'https://*.google.co.il', 'https://*.google.im', 'https://*.google.co.in',
      'https://*.google.iq', 'https://*.google.is', 'https://*.google.it', 'https://*.google.je', 'https://*.google.com.jm',
      'https://*.google.jo', 'https://*.google.co.jp', 'https://*.google.co.ke', 'https://*.google.com.kh', 'https://*.google.ki',
      'https://*.google.kg', 'https://*.google.co.kr', 'https://*.google.com.kw', 'https://*.google.kz', 'https://*.google.la',
      'https://*.google.com.lb', 'https://*.google.li', 'https://*.google.lk', 'https://*.google.co.ls', 'https://*.google.lt',
      'https://*.google.lu', 'https://*.google.lv', 'https://*.google.com.ly', 'https://*.google.co.ma', 'https://*.google.md',
      'https://*.google.me', 'https://*.google.mg', 'https://*.google.mk', 'https://*.google.ml', 'https://*.google.com.mm',
      'https://*.google.mn', 'https://*.google.com.mt', 'https://*.google.mu', 'https://*.google.mv', 'https://*.google.mw',
      'https://*.google.com.mx', 'https://*.google.com.my', 'https://*.google.co.mz', 'https://*.google.com.na',
      'https://*.google.com.ng', 'https://*.google.com.ni', 'https://*.google.ne', 'https://*.google.nl', 'https://*.google.no',
      'https://*.google.com.np', 'https://*.google.nr', 'https://*.google.nu', 'https://*.google.co.nz', 'https://*.google.com.om',
      'https://*.google.com.pa', 'https://*.google.com.pe', 'https://*.google.com.pg', 'https://*.google.com.ph', 'https://*.google.com.pk',
      'https://*.google.pl', 'https://*.google.pn', 'https://*.google.com.pr', 'https://*.google.ps', 'https://*.google.pt',
      'https://*.google.com.py', 'https://*.google.com.qa', 'https://*.google.ro', 'https://*.google.ru', 'https://*.google.rw',
      'https://*.google.com.sa', 'https://*.google.com.sb', 'https://*.google.sc', 'https://*.google.se', 'https://*.google.com.sg',
      'https://*.google.sh', 'https://*.google.si', 'https://*.google.sk', 'https://*.google.com.sl', 'https://*.google.sn',
      'https://*.google.so', 'https://*.google.sm', 'https://*.google.sr', 'https://*.google.st', 'https://*.google.com.sv',
      'https://*.google.td', 'https://*.google.tg', 'https://*.google.co.th', 'https://*.google.com.tj', 'https://*.google.tl',
      'https://*.google.tm', 'https://*.google.tn', 'https://*.google.to', 'https://*.google.com.tr', 'https://*.google.tt',
      'https://*.google.com.tw', 'https://*.google.co.tz', 'https://*.google.com.ua', 'https://*.google.co.ug', 'https://*.google.co.uk',
      'https://*.google.com.uy', 'https://*.google.co.uz', 'https://*.google.com.vc', 'https://*.google.co.ve', 'https://*.google.co.vi',
      'https://*.google.com.vn', 'https://*.google.vu', 'https://*.google.ws', 'https://*.google.rs', 'https://*.google.co.za',
      'https://*.google.co.zm', 'https://*.google.co.zw', 'https://*.google.cat'
    ],
  },
  gaUniv: { // https://developers.google.com/tag-platform/tag-manager/web/csp#universal_analytics_google_analytics
    'script-src': ['https://www.google-analytics.com', 'https://ssl.google-analytics.com'],
    'img-src': ['https://www.google-analytics.com'],
    'connect-src': ['https://www.google-analytics.com'],
  },
  gOpt: { // https://developers.google.com/tag-platform/tag-manager/web/csp#google_optimize
    'script-src': ['https://www.google-analytics.com'],
  },
  gAds: {
    'script-src': ['https://www.googleadservices.com', 'https://www.google.com'],
    'img-src': ['https://googleads.g.doubleclick.net', 'https://www.google.com'],
  },
  gAdsRemarketing: {
    'script-src': ['https://www.googleadservices.com', 'https://googleads.g.doubleclick.net', 'https://www.google.com'],
    'img-src': ['https://www.google.com'],
    'frame-src': ['https://bid.g.doubleclick.net'],
  },
  floodl: { // https://developers.google.com/tag-platform/tag-manager/web/csp#floodlight
    'img-src': [{var: 'floodID', getVal: (v) => `https://${v}.fls.doubleclick.net`}],
  },
  floodCS: {
    'frame-src': [{var: 'floodID', getVal: (v) => `https://${v}.fls.doubleclick.net`}],
  },
  floodImg: {
    'img-src': ['https://ad.doubleclick.net'],
  },
  floodCM: { // https://developers.google.com/tag-platform/devguides/consent
    'img-src': ['https://ade.googlesyndication.com'],
  },
  fbPixel: {
    'script-src': ['https://connect.facebook.net'],
    'img-src': ['https://facebook.com', 'https://www.facebook.com'],
    'connect-src': ['https://www.facebook.com/tr'],
    'form-action': ['https://connect.facebook.net'],
    'child-src': ['https://www.facebook.com', 'https://staticxx.facebook.com'],
  },
  mixpanel: {
    'connect-src': ['https://api.mixpanel.com', 'https://api-js.mixpanel.com'],
    'img-src': ['https://cdn.mxpnl.com'],
  },
  lo: { // https://help.luckyorange.com/article/228-using-lucky-orange-with-a-csp
    'script-src': ['https://d10lpsik1i8c69.cloudfront.net'],
    'img-src': ['https://d10lpsik1i8c69.cloudfront.net'],
    'worker-src': ['blob:'],
    'connect-src': ['https://settings.luckyorange.net', 'wss://*.visitors.live', 'https://pubsub.googleapis.com', 'https://api.luckyorange.com'],
  },
  hotjar: { // https://help.hotjar.com/hc/en-us/articles/115011640307-Content-Security-Policies
    'script-src': ["'unsafe-inline'", 'https://static.hotjar.com', 'https://script.hotjar.com'],
    'img-src': ['https://static.hotjar.com', 'https://script.hotjar.com'],
    'connect-src': ['https://*.hotjar.com', 'https://*.hotjar.io', 'wss://*.hotjar.com'],
    'font-src': ['https://script.hotjar.com'],
    'style-src': ["'unsafe-inline'", 'https://static.hotjar.com', 'https://script.hotjar.com']
  },

  intercom: { // https://www.intercom.com/help/en/articles/3894-using-intercom-with-content-security-policy
    'script-src': ['https://js.intercomcdn.com', 'https://app.intercom.io', 'https://widget.intercom.io'],
    'style-src': ["'unsafe-inline'"],
    'img-src': [
      'blob:', 'data:', 'https://js.intercomcdn.com', 'https://static.intercomassets.com', 'https://downloads.intercomcdn.com',
      'https://downloads.intercomcdn.eu', 'https://downloads.au.intercomcdn.com', 'https://uploads.intercomusercontent.com',
      'https://gifs.intercomcdn.com', 'https://video-messages.intercomcdn.com', 'https://messenger-apps.intercom.io',
      'https://messenger-apps.eu.intercom.io', 'https://messenger-apps.au.intercom.io', 'https://*.intercom-attachments-1.com',
      'https://*.intercom-attachments.eu', 'https://*.au.intercom-attachments.com', 'https://*.intercom-attachments-2.com',
      'https://*.intercom-attachments-3.com', 'https://*.intercom-attachments-4.com', 'https://*.intercom-attachments-5.com',
      'https://*.intercom-attachments-6.com', 'https://*.intercom-attachments-7.com', 'https://*.intercom-attachments-8.com',
      'https://*.intercom-attachments-9.com', 'https://static.intercomassets.eu', 'https://static.au.intercomassets.com'
    ],
    'font-src': ['https://js.intercomcdn.com', 'https://fonts.intercomcdn.com'],
    'child-src': ['https://intercom-sheets.com', 'https://www.intercom-reporting.com', 'https://www.youtube.com', 'https://player.vimeo.com', 'https://fast.wistia.net'],
    'connect-src': [
      'https://via.intercom.io', 'https://api.intercom.io', 'https://api.au.intercom.io', 'https://api.eu.intercom.io',
      'https://api-iam.intercom.io', 'https://api-iam.eu.intercom.io', 'https://api-iam.au.intercom.io', 'https://api-ping.intercom.io',
      'https://nexus-websocket-a.intercom.io', 'wss://nexus-websocket-a.intercom.io', 'https://nexus-websocket-b.intercom.io',
      'wss://nexus-websocket-b.intercom.io', 'https://nexus-europe-websocket.intercom.io', 'wss://nexus-europe-websocket.intercom.io',
      'https://nexus-australia-websocket.intercom.io', 'wss://nexus-australia-websocket.intercom.io', 'https://uploads.intercomcdn.com',
      'https://uploads.intercomcdn.eu', 'https://uploads.au.intercomcdn.com', 'https://uploads.intercomusercontent.com'
    ],
    'form-action': ['https://intercom.help', 'https://api-iam.intercom.io', 'https://api-iam.eu.intercom.io', 'https://api-iam.au.intercom.io'],
    'media-src': ['https://js.intercomcdn.com'],
  },
  chatlio: { // https://chatlio.com/docs/content-security-policy-csp/
    'script-src': ['https://w.chatlio.com'],
    'connect-src': ['https://api.chatlio.com', 'https://api-cdn.chatlio.com', 'wss://push.chatlio.com', 'wss://ws.pusherapp.com'],
    'img-src': ['data:', 'https://w.chatlio.com', 'https://avatars.slack-edge.com', 'https://files.slack.com', 'https://files-origin.slack.com', 'https://secure.gravatar.com', 'https://uploads-cdn.chatlio.com'],
    'style-src': ["'unsafe-inline'"],
  },
  zendesk: { // https://developer.zendesk.com/documentation/classic-web-widget-sdks/web-widget/integrating-with-google/csp/
    'script-src': ['https://static.zdassets.com', 'https://ekr.zdassets.com', 'https://ekr.zendesk.com', {var: 'zendeskSubdomain', getVal: (v) => `https://${v}.zendesk.com`}, 'https://*.zopim.com', 'https://zendesk-eu.my.sentry.io', {var: 'zendeskSubdomain', getVal: (v) => `wss://${v}.zendesk.com`}, 'wss://*.zopim.com'],
    'connect-src': ['https://static.zdassets.com', 'https://ekr.zdassets.com', 'https://ekr.zendesk.com', {var: 'zendeskSubdomain', getVal: (v) => `https://${v}.zendesk.com`}, 'https://*.zopim.com', 'https://zendesk-eu.my.sentry.io', {var: 'zendeskSubdomain', getVal: (v) => `wss://${v}.zendesk.com`}, 'wss://*.zopim.com'],
    'style-src': ["'unsafe-inline'"],
    'img-src': ['https://v2assets.zopim.io', 'https://static.zdassets.com', 'data:'],
  },
  // livechat: { // ToDo: https://www.livechat.com/help/use-livechat-with-content-security-policy/
  //
  // },
  ctm: {
    'script-src': [{var: 'ctmID', getVal: (v) => `https://${v}.tctm.co`}],
    'connect-src': [{var: 'ctmID', getVal: (v) => `https://${v}.tctm.co`}],
  },

  bugsnag: { // https://docs.bugsnag.com/platforms/javascript/faq/#can-i-use-bugsnag-with-csp
    'connect-src': ['*.bugsnag.com'],
    'script-src': ['https://d2wy8f7a9ursnm.cloudfront.net'],
  },
  newrelic: { // https://docs.newrelic.com/docs/browser/new-relic-browser/getting-started/compatibility-requirements-browser-monitoring/
    'script-src': ["'unsafe-inline'", 'https://js-agent.newrelic.com', 'https://*.nr-data.net'],
    'connect-src': ['https://*.nr-data.net'],
  },
  sentry: {
    'script-src': ['https://cdn.ravenjs.com'],
    'connect-src': ['https://sentry.io'],
  },
  gatsby: {
    'script-src': ["'unsafe-inline'"],
  },

  stripe: { // https://stripe.com/docs/security/guide#content-security-policy
    'script-src': ['https://js.stripe.com'],
    'connect-src': ['https://api.stripe.com'],
    'frame-src': ['https://js.stripe.com'],
  },
  stripeRedirect: {
    'frame-src': ['https://hooks.stripe.com'],
  },
  stripeAddress: { // https://developers.google.com/maps/documentation/javascript/content-security-policy
    'script-src': ["'unsafe-inline'", "'unsafe-eval'", 'https://*.googleapis.com', 'https://*.gstatic.com', '*.google.com', 'https://*.ggpht.com', '*.googleusercontent.com', 'blob:'],
    'img-src': ['https://*.googleapis.com', 'https://*.gstatic.com', '*.google.com', '*.googleusercontent.com', 'data:'],
    'frame-src': ['*.google.com'],
    'connect-src': ['https://*.googleapis.com', '*.google.com', 'https://*.gstatic.com', 'data:', 'blob:'],
    'font-src': ['https://fonts.gstatic.com'],
    'style-src': ["'unsafe-inline'", 'https://fonts.googleapis.com'],
    'worker-src': ['blob:'],
  },
  // ToDo: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
  stripeCheckout: { // https://stripe.com/docs/security/guide#content-security-policy
    'script-src': ['https://checkout.stripe.com'],
    'connect-src': ['https://checkout.stripe.com'],
    'frame-src': ['https://checkout.stripe.com'],
    'img-src': ['https://*.stripe.com'],
  },
  stripeConnect: {
    'script-src': ['https://connect-js.stripe.com', 'https://js.stripe.com'],
    'style-src': ["'unsafe-inline'"],
    'frame-src': ['https://connect-js.stripe.com', 'https://b.stripecdn.com'],
  },
  gFonts: {
    'style-src': ['https://fonts.googleapis.com'],
    'font-src': ['https://fonts.gstatic.com'],
  },
  gMaps: { // https://developers.google.com/maps/documentation/javascript/content-security-policy
    'script-src': ["'unsafe-inline'", "'unsafe-eval'", 'https://*.googleapis.com', 'https://*.gstatic.com', '*.google.com', 'https://*.ggpht.com', '*.googleusercontent.com', 'blob:'],
    'img-src': ['https://*.googleapis.com', 'https://*.gstatic.com', '*.google.com', '*.googleusercontent.com', 'data:'],
    'frame-src': ['*.google.com'],
    'connect-src': ['https://*.googleapis.com', '*.google.com', 'https://*.gstatic.com', 'data:', 'blob:'],
    'font-src': ['https://fonts.gstatic.com'],
    'style-src': ["'unsafe-inline'", 'https://fonts.googleapis.com'],
    'worker-src': ['blob:'],
  },
  slack: { // ToDo

  },
  legitScript: {
    'script-src': ['https://static.legitscript.com'],
    'img-src': ['https://static.legitscript.com'],
  },
};