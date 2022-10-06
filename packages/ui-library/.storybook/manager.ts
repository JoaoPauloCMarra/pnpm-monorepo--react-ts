import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',

  brandTitle: 'Monorepo Storybook',
  brandUrl: 'https://github.com/JoaoPauloCMarra/pnpm-monorepo--react-ts',
  brandImage: 'https://place-hold.it/350x150&text=Monorepo',

  appContentBg: '#333',
  appBorderRadius: 8,

  textColor: '#fff',
  textInverseColor: '#fff',
  textMutedColor: '#fff',
  inputTextColor: '#fff',

  fontBase: 'Verdana, sans-serif',
  fontCode: 'monospace',
});

addons.setConfig({
  theme,
});
