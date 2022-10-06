module.exports = {
  stories: ['./Docs.stories.mdx', '../**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      tsconfigPath: '../tsconfig.json',
    },
  },
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    previewMdx2: true,
    postcss: false,
  },
  async viteFinal(config) {
    return config;
  },
};
