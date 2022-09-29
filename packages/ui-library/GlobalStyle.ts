import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    color-scheme: normal;
    --main-bg-color: #fff;
    --main-text-color: #121212;
  }
  
  html {
    background: var(--main-bg-color, #000);
    color: var(--main-text-color, #fff);
    font-size: 16px;
    font-weight: normal;
    scroll-behavior: smooth;
    font-family: Verdana, sans-serif;
    font-weight: 400;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
  }

  svg, img {
    max-width: 100%;
    object-fit: cover;
  }

  code {
    font-family: monospace;
  }

  pre:has(code) {
    background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: .4rem;
    box-decoration-break: clone;
    padding: 1rem 0.5rem;
    word-wrap: break-word;
  }
`;

export default GlobalStyle;
