import react from '@vitejs/plugin-react';
import { defineConfig } from 'cypress';
import { splitVendorChunkPlugin } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        define: {
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        },
        plugins: [
          react({
            babel: {
              plugins: [
                [
                  'styled-components',
                  {
                    ssr: false,
                    displayName: true,
                    fileName: true,
                    meaninglessFileNames: ['index', 'styles'],
                    minify: false,
                    transpileTemplateLiterals: false,
                    pure: true,
                  },
                ],
              ],
            },
          }),
          tsconfigPaths(),
          splitVendorChunkPlugin(),
        ],
      },
    },
  },

  e2e: {
    // setupNodeEvents(on, config): void {
    // implement node event listeners here
    // },
  },
} as Cypress.ConfigOptions);
