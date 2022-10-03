import styled, { css } from 'styled-components';

import { Props } from './Button';

export const Container = styled.button<Partial<Props>>`
  ${({ bg, border, color, active, activeBg, activeBorder, activeColor, size }) => css`
    background: var(--colors-${bg}, black);
    border: 2px solid var(--colors-${border || bg}, black);
    border-radius: 0.4rem;
    color: var(--colors-${color}, white);
    cursor: pointer;
    font-size: 1rem;
    font-weight: normal;
    padding: 0.5rem 1rem;
    transition: none 200ms linear;
    transition-property: background-color, border-color, color;

    ${active &&
    css`
      background: var(--colors-${activeBg || color}, white);
      border-color: var(--colors-${activeBorder || activeBg || bg}, black);
      color: var(--colors-${activeColor || bg}, black);
      cursor: default;
      font-weight: bold;
    `}

    ${size === 'sm' &&
    css`
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
    `}
    ${size === 'lg' &&
    css`
      font-size: 1.2rem;
      padding: 0.8rem 1.4rem;
    `}
  `}

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:not(:disabled):active {
    opacity: 0.8;
  }
`;

export const GroupedButtons = styled.div`
  display: inline-block;

  button {
    border-radius: 0;
  }
  button:first-of-type {
    border-bottom-left-radius: 0.4rem;
    border-top-left-radius: 0.4rem;
  }
  button:last-of-type {
    border-bottom-right-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
`;
