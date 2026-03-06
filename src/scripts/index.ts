import '../styles/index.css';
import { CSP_KEYS, FEATURES, type CspDirective, type CspValue, type CustomIdKey, type FeatureConfig } from './constants';

type CspObject = Record<CspDirective, string[]>;

const customIDs: Record<CustomIdKey, string> = {
  floodID: '*',
  ctmID: '*',
  zendeskSubdomain: '*',
};

const boxValues: Record<string, boolean> = Object.fromEntries(
  Object.keys(FEATURES).map(k => [k, false])
);

let cspObj: CspObject = {} as CspObject;
let cspStr = '';

const mergeUniq = (a: string[], b: string[]): string[] => [...new Set([...a, ...b])];

const resolveValue = (v: CspValue): string =>
  typeof v === 'object' ? v.getVal(customIDs[v.var]) : v;

const generateCSPObj = (): CspObject => {
  const obj: CspObject = {
    'script-src': ["'self'"],
    'script-src-elem': ["'self'"],
    'script-src-attr': ["'self'"],
    'style-src': ["'self'"],
    'style-src-elem': ["'self'"],
    'style-src-attr': ["'self'"],
    'img-src': ["'self'"],
    'font-src': ["'self'"],
    'manifest-src': ["'self'"],
    'connect-src': ["'self'"],
    'object-src': ["'self'"],
    'media-src': ["'self'"],
    'worker-src': ["'self'"],
    'form-action': ["'self'"],
    'base-uri': ["'self'"],
    'frame-src': ["'self'"],
    'child-src': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': [],
  };

  for (const key of Object.keys(FEATURES) as (keyof typeof FEATURES)[]) {
    if (!boxValues[key]) continue;
    const feature: FeatureConfig = FEATURES[key];
    for (const directive of Object.keys(feature) as CspDirective[]) {
      const resolved = (feature[directive] ?? []).map(resolveValue);
      obj[directive] = mergeUniq(obj[directive], resolved);
    }
  }

  return obj;
};

const generateCSPString = (): string => {
  let res = "default-src 'none';";
  for (const key of CSP_KEYS) {
    const values = cspObj[key];
    res += ` ${key}${values.length ? ' ' + values.join(' ') : ''};`;
  }
  return res;
};

const generateCSP = () => {
  cspObj = generateCSPObj();
  cspStr = generateCSPString();
  document.getElementById('result')!.textContent = cspStr;
};

// Checkbox change events
document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', ({ target }) => {
    const { id, checked } = target as HTMLInputElement;
    if (id in boxValues) {
      boxValues[id] = checked;
      generateCSP();
    }
  });
});

// Only allow characters valid in hostnames/subdomains
const sanitizeCustomID = (value: string): string =>
  value.replace(/[^a-zA-Z0-9-]/g, '') || '*';

// Text input events for custom IDs
(Object.keys(customIDs) as CustomIdKey[]).forEach(id => {
  document.getElementById(id)!.addEventListener('input', e => {
    customIDs[id] = sanitizeCustomID((e.target as HTMLInputElement).value);
    generateCSP();
  });
});

// Copy to clipboard
document.getElementById('btnCopy')!.onclick = () => {
  navigator.clipboard.writeText(cspStr).catch(() => {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', cspStr);
  });
};

// Reset
document.getElementById('btnReset')!.onclick = () => {
  document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
  document.querySelectorAll<HTMLInputElement>('input[type="text"]').forEach(ti => { ti.value = ''; });
  for (const key of Object.keys(customIDs) as CustomIdKey[]) {
    customIDs[key] = '*';
  }
  for (const key of Object.keys(boxValues)) {
    boxValues[key] = false;
  }
  generateCSP();
};

window.addEventListener('load', generateCSP);
