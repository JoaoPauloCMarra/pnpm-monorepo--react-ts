import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    color-scheme: normal;
    --main-bg-color: #fff;
    --main-text-color: #121212;

    --colors-black: #000000;
    --colors-white: #FFFFFF;
    --colors-whiteAlpha-50: rgba(255, 255, 255, 0.04);
    --colors-whiteAlpha-100: rgba(255, 255, 255, 0.06);
    --colors-whiteAlpha-200: rgba(255, 255, 255, 0.08);
    --colors-whiteAlpha-300: rgba(255, 255, 255, 0.16);
    --colors-whiteAlpha-400: rgba(255, 255, 255, 0.24);
    --colors-whiteAlpha-500: rgba(255, 255, 255, 0.36);
    --colors-whiteAlpha-600: rgba(255, 255, 255, 0.48);
    --colors-whiteAlpha-700: rgba(255, 255, 255, 0.64);
    --colors-whiteAlpha-800: rgba(255, 255, 255, 0.80);
    --colors-whiteAlpha-900: rgba(255, 255, 255, 0.92);
    --colors-blackAlpha-50: rgba(0, 0, 0, 0.04);
    --colors-blackAlpha-100: rgba(0, 0, 0, 0.06);
    --colors-blackAlpha-200: rgba(0, 0, 0, 0.08);
    --colors-blackAlpha-300: rgba(0, 0, 0, 0.16);
    --colors-blackAlpha-400: rgba(0, 0, 0, 0.24);
    --colors-blackAlpha-500: rgba(0, 0, 0, 0.36);
    --colors-blackAlpha-600: rgba(0, 0, 0, 0.48);
    --colors-blackAlpha-700: rgba(0, 0, 0, 0.64);
    --colors-blackAlpha-800: rgba(0, 0, 0, 0.80);
    --colors-blackAlpha-900: rgba(0, 0, 0, 0.92);
    --colors-gray-50: #F7FAFC;
    --colors-gray-100: #EDF2F7;
    --colors-gray-200: #E2E8F0;
    --colors-gray-300: #CBD5E0;
    --colors-gray-400: #A0AEC0;
    --colors-gray-500: #718096;
    --colors-gray-600: #4A5568;
    --colors-gray-700: #2D3748;
    --colors-gray-800: #1A202C;
    --colors-gray-900: #171923;
    --colors-red-50: #FFF5F5;
    --colors-red-100: #FED7D7;
    --colors-red-200: #FEB2B2;
    --colors-red-300: #FC8181;
    --colors-red-400: #F56565;
    --colors-red-500: #E53E3E;
    --colors-red-600: #C53030;
    --colors-red-700: #9B2C2C;
    --colors-red-800: #822727;
    --colors-red-900: #63171B;
    --colors-orange-50: #FFFAF0;
    --colors-orange-100: #FEEBC8;
    --colors-orange-200: #FBD38D;
    --colors-orange-300: #F6AD55;
    --colors-orange-400: #ED8936;
    --colors-orange-500: #DD6B20;
    --colors-orange-600: #C05621;
    --colors-orange-700: #9C4221;
    --colors-orange-800: #7B341E;
    --colors-orange-900: #652B19;
    --colors-yellow-50: #FFFFF0;
    --colors-yellow-100: #FEFCBF;
    --colors-yellow-200: #FAF089;
    --colors-yellow-300: #F6E05E;
    --colors-yellow-400: #ECC94B;
    --colors-yellow-500: #D69E2E;
    --colors-yellow-600: #B7791F;
    --colors-yellow-700: #975A16;
    --colors-yellow-800: #744210;
    --colors-yellow-900: #5F370E;
    --colors-green-50: #F0FFF4;
    --colors-green-100: #C6F6D5;
    --colors-green-200: #9AE6B4;
    --colors-green-300: #68D391;
    --colors-green-400: #48BB78;
    --colors-green-500: #38A169;
    --colors-green-600: #2F855A;
    --colors-green-700: #276749;
    --colors-green-800: #22543D;
    --colors-green-900: #1C4532;
    --colors-teal-50: #E6FFFA;
    --colors-teal-100: #B2F5EA;
    --colors-teal-200: #81E6D9;
    --colors-teal-300: #4FD1C5;
    --colors-teal-400: #38B2AC;
    --colors-teal-500: #319795;
    --colors-teal-600: #2C7A7B;
    --colors-teal-700: #285E61;
    --colors-teal-800: #234E52;
    --colors-teal-900: #1D4044;
    --colors-blue-50: #ebf8ff;
    --colors-blue-100: #bee3f8;
    --colors-blue-200: #90cdf4;
    --colors-blue-300: #63b3ed;
    --colors-blue-400: #4299e1;
    --colors-blue-500: #3182ce;
    --colors-blue-600: #2b6cb0;
    --colors-blue-700: #2c5282;
    --colors-blue-800: #2a4365;
    --colors-blue-900: #1A365D;
    --colors-cyan-50: #EDFDFD;
    --colors-cyan-100: #C4F1F9;
    --colors-cyan-200: #9DECF9;
    --colors-cyan-300: #76E4F7;
    --colors-cyan-400: #0BC5EA;
    --colors-cyan-500: #00B5D8;
    --colors-cyan-600: #00A3C4;
    --colors-cyan-700: #0987A0;
    --colors-cyan-800: #086F83;
    --colors-cyan-900: #065666;
    --colors-purple-50: #FAF5FF;
    --colors-purple-100: #E9D8FD;
    --colors-purple-200: #D6BCFA;
    --colors-purple-300: #B794F4;
    --colors-purple-400: #9F7AEA;
    --colors-purple-500: #805AD5;
    --colors-purple-600: #6B46C1;
    --colors-purple-700: #553C9A;
    --colors-purple-800: #44337A;
    --colors-purple-900: #322659;
    --colors-pink-50: #FFF5F7;
    --colors-pink-100: #FED7E2;
    --colors-pink-200: #FBB6CE;
    --colors-pink-300: #F687B3;
    --colors-pink-400: #ED64A6;
    --colors-pink-500: #D53F8C;
    --colors-pink-600: #B83280;
    --colors-pink-700: #97266D;
    --colors-pink-800: #702459;
    --colors-pink-900: #521B41;
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
    color: var(--colors-blackAlpha-700);
    font-size: 0.875rem;
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
