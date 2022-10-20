import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import App from './App';

if (process.env.NODE_ENV === 'production') {
  if (typeof window !== 'undefined' && window.document && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__).forEach((k) => {
      let replacement: undefined | Map<unknown, unknown>;
      if (k === 'renderers') {
        replacement = new Map();
      }
      window.__REACT_DEVTOOLS_GLOBAL_HOOK__[k] = replacement || (() => undefined);
    });
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
