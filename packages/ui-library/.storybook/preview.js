import { addDecorator } from '@storybook/react';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const StorybookStyle = styled.div`
  background: #fff;
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;
`;

addDecorator((story) => (
  <StorybookStyle>
    <GlobalStyle />
    {story()}
  </StorybookStyle>
));
