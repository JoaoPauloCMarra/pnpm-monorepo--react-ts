import styled, { css } from 'styled-components';

export const Container = styled.button<{ active?: boolean }>`
  background: black;
  border: 2px solid black;
  border-radius: 0.4rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: none 150ms linear;
  transition-property: background-color, border-color, color;

  ${({ active }) =>
    active &&
    css`
      background: white;
      border-color: black;
      color: black;
      cursor: default;
    `}
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
