import '../styles/index.css';
import {CSP_KEYS, FEATURES} from './constants';

const initFalseMap = arr => Object.assign({}, ...Array.from(arr, k => ({[k]: false})));
const boxKeys = Object.keys(FEATURES);
const boxValues = initFalseMap(boxKeys);

let cspObj = {};
let cspStr = '';
const customIDs = {
  floodID: '*',
  ctmID: '*',
  zendeskSubdomain: '*',
}

const mergeArraysUniq = (a, b) => a.concat(b.filter(item => a.indexOf(item) === -1));

const generateTargetValues = (arr) => {
  return arr.map(v => {
    if (typeof v === 'object' && v.var && v.getVal) {
      return v.getVal(customIDs[v.var]);
    }
    return v;
  })
}

const generateCSPObj = () => {
  const cspObj = {
    'script-src': ["'self'"],
    'style-src': ["'self'"],
    'img-src': ["'self'"],
    'font-src': ["'self'"],
    'connect-src': ["'self'"],
    'object-src': ["'self'"],
    'worker-src': ["'self'"],
    'form-action': ["'self'"],
    'base-uri': ["'self'"],
    'frame-src': ["'self'"],
    'child-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'prefetch-src': ["'self'"],
    'manifest-src': ["'self'"],
    'media-src': ["'self'"], // <audio> & <video> element sources
    // 'report-uri': [], // deprecated: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-uri
    // 'report-to': [], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to
    // 'require-trusted-types-for': ["'script'"], // ToDo: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-trusted-types-for
    // 'trusted-types': [], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/trusted-types
    // 'sandbox': [''],
    'script-src-attr': ["'self'"], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr
    'script-src-elem': ["'self'"], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem
    'style-src-attr': ["'self'"], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr
    'style-src-elem': ["'self'"], // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem
    'upgrade-insecure-requests': [],
    'block-all-mixed-content': [] // will be deprecated soon
  };

  boxKeys.forEach((k) => {
    const bVal = boxValues[k];
    if (!bVal) return;

    const targetSettings = FEATURES[k];
    const targetKeys = Object.keys(targetSettings);

    targetKeys.forEach((tKey) => {
      const targetValues = generateTargetValues(targetSettings[tKey]);
      cspObj[tKey] = mergeArraysUniq(cspObj[tKey], targetValues);
    });
  });

  return cspObj;
}

const generateCSPString = () => {
  let res = "default-src 'none';";

  CSP_KEYS.forEach(sk => {
    const cspValues = cspObj[sk];
    let chunk = sk;

    cspValues.forEach(cspVal => {
      chunk += ` ${cspVal}`;
    });
    res += ` ${chunk};`;
  });

  return res;
}

const generateCSP = () => {
  cspObj = generateCSPObj();
  cspStr = generateCSPString();
  document.getElementById("result").textContent = cspStr;
}

// Change events for feature toggling
document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.addEventListener('change', function({target:{id, checked}}) {
  if (boxValues.hasOwnProperty(id)) {
    switch(id) {
      case 'gtm':
      // ToDo: implement disabling related checkboxes & excluding from results
      default:
        boxValues[id] = checked;
        generateCSP();
    }
  }
}));

// Change events for text inputs of custom IDs
Object.keys(customIDs).forEach(id => document.getElementById(id).addEventListener('input', (e) => {
  customIDs[id] = e.target.value || '*';
  generateCSP();
}));

// Copy to clipboard
document.getElementById("btnCopy").onclick = () => {
  navigator.clipboard.writeText(cspStr).catch(() => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', cspStr);
  });
}

// Reset
document.getElementById("btnReset").onclick = () => {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[type="text"]').forEach(ti => ti.value = '');
  for (const [key] of Object.entries(customIDs)) {
    customIDs[key] = '*';
  }
  for (const [key] of Object.entries(boxValues)) {
    boxValues[key] = false;
  }
  generateCSP();
}

window.addEventListener("load", () => {
  generateCSP();
});
