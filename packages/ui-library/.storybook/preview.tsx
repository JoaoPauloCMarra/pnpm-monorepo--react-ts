import React from 'react';
import styled from 'styled-components';
import { DecoratorFn } from '@storybook/react';
import GlobalStyle from '../GlobalStyle';

const StorybookWrapper = styled.div`
  background: #fff;
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  margin: 0;
  padding: 1rem;
`;

const Wrapper: DecoratorFn = (StoryFn) => (
  <StorybookWrapper>
    <GlobalStyle />
    <StoryFn />
  </StorybookWrapper>
);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [Wrapper];
